// lib/emailTemplates.ts

function escapeHTML(v: string) {
  return String(v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function contactEmailHTML({
  name,
  email,
  message,
  phone,
  service,
}: {
  name: string;
  email: string;
  message: string;
  phone?: string;
  service?: string | null;
}) {
  const esc = (v: string) =>
    String(v)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  const msgHTML = esc(message).replace(/\n/g, "<br/>");

  return `
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nuevo mensaje desde hynaircraft.com</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        background-color: #f5f6f8;
        font-family: "Segoe UI", Roboto, Arial, sans-serif;
        color: #1f2937;
      }
      .container {
        max-width: 640px;
        margin: 40px auto;
        background: #ffffff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      }
      .header {
        background: linear-gradient(90deg, #1e3a8a, #aacfe0ff);
        color: white;
        padding: 24px;
        text-align: center;
      }
      .header img {
        max-width: 250px;
        margin-bottom: 12px;
      }
      .header h1 {
        font-size: 22px;
        font-weight: 600;
        margin: 0;
      }
      .body {
        padding: 32px 24px;
      }
      .body h2 {
        color: #0a3c84;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 18px;
      }
      .info p {
        margin: 6px 0;
        font-size: 14px;
        line-height: 1.5;
      }
      .info strong {
        color: #0a3c84;
      }
      .message {
        margin-top: 20px;
        padding: 16px;
        background: #f9fafb;
        border-left: 4px solid #0a3c84;
        border-radius: 8px;
        font-size: 14px;
        line-height: 1.6;
      }
      .footer {
        background: #f9fafb;
        text-align: center;
        padding: 16px;
        font-size: 12px;
        color: #6b7280;
      }
      a {
        color: #0a3c84;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Nuevo mensaje recibido</h1>
      </div>

      <div class="body">
        <h2>Formulario de contacto</h2>
        <div class="info">
          <p><strong>Nombre:</strong> ${esc(name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
          ${phone ? `<p><strong>Teléfono:</strong> ${esc(phone)}</p>` : ""}
          ${service ? `<p><strong>Servicio:</strong> ${esc(service)}</p>` : ""}
        </div>

        <div class="message">
          ${msgHTML}
        </div>
      </div>
      <div class="footer">
        Enviado automáticamente desde <a href="https://www.hynaircraft.com/">hynaircraft.com</a>
      </div>
    </div>
  </body>
  </html>`;
}

export function contactEmailText(p: {
  name: string; email: string; message: string; phone?: string;
  propertyId?: string | null; serviceId?: string | null; pageUrl?: string | null; title?: string | null;
}) {
  return `Nombre: ${p.name}
Email: ${p.email}
${p.phone ? `Teléfono: ${p.phone}\n` : ""}${p.propertyId ? `Propiedad: ${p.propertyId}\n` : ""}${p.serviceId ? `Servicio: ${p.serviceId}\n` : ""}${p.pageUrl ? `Página: ${p.pageUrl}\n` : ""}
Mensaje:
${p.message}
`;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  selectedServices: string[];
  selectedFleet?: { servicioId: string; tipoFlota?: string; numeroAeronaves?: number }[];
  frequency?: string;
  urgency?: string;
  comments?: string;
}

const SERVICES_META: Record<string, { title: string; description: string }> = {
  "limpieza-aeronaves": {
    title: "Limpieza General Aeronaves",
    description: "Servicios especializados para flotas comerciales, ejecutivas y militares.",
  },
  "post-construccion": {
    title: "Limpieza Post Construcción",
    description: "Limpieza profunda después de obras y construcciones.",
  },
  "almacenes-industriales": {
    title: "Almacenes & Naves Industriales",
    description: "Limpieza especializada para espacios industriales.",
  },
  "lavado-muebles": {
    title: "Lavado de Muebles",
    description: "Limpieza profesional de muebles y tapicería con técnicas especializadas.",
  },
  "limpieza-domestica": {
    title: "Limpieza Doméstica",
    description: "Servicios de limpieza residencial personalizados.",
  },
  "limpieza-empresarial": {
    title: "Limpieza Empresarial",
    description: "Mantenimiento para oficinas y espacios corporativos.",
  },
  "sanitizado-vapor": {
    title: "Sanitizado con Vapor",
    description: "Desinfección profunda con vapor para máxima higiene.",
  },
  "limpieza-eventos": {
    title: "Limpieza Pre/Post Eventos",
    description: "Servicios especializados para eventos y montajes.",
  },
  "conserjeria-edificios": {
    title: "Conserjería & Edificios",
    description: "Mantenimiento integral de edificios.",
  },
  "limpieza-departamentos": {
    title: "Limpieza de Departamentos",
    description: "Servicios residenciales para departamentos.",
  },
};

const FLEET_TYPE_LABELS: Record<string, string> = {
  "a319-321": "Airbus A319-320-321",
  "boeing-737": "Boeing 737 MAX",
  "boeing-777": "Boeing 777-200ER",
  "boeing-787": "Boeing 787-9",
  embraer: "Embraer E175/170",
  "jet-privado": "Jet Privado",
  helicoptero: "Helicóptero",
};

function serviceLabel(id: string) {
  const meta = SERVICES_META[id];
  if (meta) return meta;
  const pretty = id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return { title: pretty, description: "" };
}

declare function escapeHTML(v: string): string;

export function quoteRequestEmailHTML({
  name,
  email,
  phone,
  company,
  selectedServices = [],
  selectedFleet = [],
  frequency,
  urgency,
  comments,
}: QuoteFormData) {
  const esc = escapeHTML;

  const serviciosHTML =
    selectedServices.length
      ? `<ul>${selectedServices
          .map((id) => {
            const { title, description } = serviceLabel(id);
            return `<li style="margin:8px 0">
              <div><strong>${esc(title)}</strong></div>
              ${description ? `<div style="font-size:13px;color:#4b5563">${esc(description)}</div>` : ""}
            </li>`;
          })
          .join("")}</ul>`
      : `<p style="margin:0;color:#6b7280;">(Sin servicios seleccionados)</p>`;

  const flotaHTML =
    selectedFleet && selectedFleet.length
      ? `<ul>${selectedFleet
          .map((f) => {
            const labelServicio = serviceLabel(f.servicioId).title;
            const labelTipo = f.tipoFlota ? (FLEET_TYPE_LABELS[f.tipoFlota] || f.tipoFlota) : undefined;
            const cant = f.numeroAeronaves && Number(f.numeroAeronaves) > 0 ? ` (${Number(f.numeroAeronaves)})` : "";
            const detalle = [labelTipo].filter(Boolean).join(" · ");
            return `<li style="margin:8px 0">
              <div><strong>${esc(labelServicio)}</strong>${esc(cant)}</div>
              ${detalle ? `<div style="font-size:13px;color:#4b5563">${esc(detalle)}</div>` : ""}
            </li>`;
          })
          .join("")}</ul>`
      : `<p style="margin:0;color:#6b7280;">(Sin flota seleccionada)</p>`;

  const frecuenciaLabel =
    frequency && frequency.trim() !== "" ? frequency : "No especificada";
  const urgenciaLabel =
    urgency && urgency.trim() !== "" ? urgency : "No especificada";
  const comentariosHTML =
    comments && comments.trim() !== ""
      ? esc(comments).replace(/\n/g, "<br/>")
      : "(Sin comentarios adicionales)";

  return `
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nueva solicitud de cotización</title>
    <style>
      body { margin:0; padding:0; background:#f5f6f8; font-family:"Segoe UI", Roboto, Arial, sans-serif; color:#1f2937; }
      .container { max-width:640px; margin:40px auto; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,.08); }
      .header { background: linear-gradient(90deg, #1e3a8a, #aacfe0ff); color:#fff; padding:24px; text-align:center; }
      .header h1 { font-size:22px; margin:0; font-weight:600; }
      .body { padding:32px 24px; }
      .body h2 { color:#0a3c84; font-size:18px; font-weight:700; margin:0 0 16px; }
      .grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:20px; }
      .card { background:#f9fafb; border-radius:10px; padding:16px; }
      .card h3 { margin:0 0 10px; font-size:15px; color:#0a3c84; }
      .info p { margin:6px 0; font-size:14px; line-height:1.5; }
      .footer { background:#f9fafb; text-align:center; padding:16px; font-size:12px; color:#6b7280; }
      a { color:#0a3c84; text-decoration:none; }
      a:hover { text-decoration:underline; }
      ul { padding-left:18px; margin:8px 0 0; }
      li { margin:4px 0; }
      .message { margin-top:12px; padding:12px; background:#f9fafb; border-left:4px solid #0a3c84; border-radius:8px; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header"><h1>Nueva solicitud de cotización</h1></div>
      <div class="body">
        <h2>Datos del contacto</h2>
        <div class="grid">
          <div class="card info">
            <h3>Contacto</h3>
            <p><strong>Nombre:</strong> ${esc(name)}</p>
            <p><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
            ${phone ? `<p><strong>Teléfono:</strong> ${esc(phone)}</p>` : ""}
            ${company ? `<p><strong>Empresa:</strong> ${esc(company)}</p>` : ""}
          </div>
          <div class="card">
            <h3>Servicios solicitados</h3>
            ${serviciosHTML}
          </div>
        </div>

        <div class="card">
          <h3>Flota seleccionada</h3>
          ${flotaHTML}
        </div>

        <div class="card">
          <h3>Detalles adicionales</h3>
          <p><strong>Frecuencia:</strong> ${esc(frecuenciaLabel)}</p>
          <p><strong>Urgencia:</strong> ${esc(urgenciaLabel)}</p>
          <div class="message">
            <div style="font-weight:600;margin-bottom:6px;">Comentarios</div>
            <div>${comentariosHTML}</div>
          </div>
        </div>
      </div>
      <div class="footer">
        Enviado automáticamente desde <a href="https://www.hynaircraft.com/">hynaircraft.com</a>
      </div>
    </div>
  </body>
  </html>`;
}

export function quoteRequestEmailText(p: QuoteFormData) {
  const servicios =
    p.selectedServices?.length
      ? p.selectedServices
          .map((id) => {
            const { title, description } = serviceLabel(id);
            return `- ${title}${description ? `: ${description}` : ""}`;
          })
          .join("\n")
      : "(Sin servicios seleccionados)";

  const flota =
    p.selectedFleet?.length
      ? p.selectedFleet
          .map((f) => {
            const servicio = serviceLabel(f.servicioId).title;
            const tipo = f.tipoFlota ? (FLEET_TYPE_LABELS[f.tipoFlota] || f.tipoFlota) : "";
            const cant = f.numeroAeronaves && Number(f.numeroAeronaves) > 0 ? ` (${Number(f.numeroAeronaves)})` : "";
            return `- ${servicio}${cant}${tipo ? ` — ${tipo}` : ""}`;
          })
          .join("\n")
      : "(Sin flota seleccionada)";

  const freq = p.frequency || "No especificada";
  const urg = p.urgency || "No especificada";
  const comments = p.comments?.trim() ? p.comments : "(Sin comentarios)";

  return `Nueva solicitud de cotización

Nombre: ${p.name}
Email: ${p.email}
${p.phone ? `Teléfono: ${p.phone}\n` : ""}${p.company ? `Empresa: ${p.company}\n` : ""}
Servicios solicitados:
${servicios}

Flota seleccionada:
${flota}

Detalles:
- Frecuencia: ${freq}
- Urgencia: ${urg}
- Comentarios: ${comments}
`;
}
