import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend";

// const resend = new Resend('re_S8A4kTi2_FCvGoyWh1vWvW34TUyd3SuTn');
const resend = new Resend(process.env.RESEND_API_KEY);
import { 
  contactEmailHTML,
  contactEmailText,
  quoteRequestEmailHTML,
  quoteRequestEmailText } from "@/lib/emailTemplates";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, formData, userEmail } = body

    // Destinatarios actualizados
    const destinatarios = ["info@hynaircraft.com", "noemidiaz@hynaircraft.com"]
    // const destinatarios = ["jose.roman@metrasolutions.com", "maria.gomez@metrasolutions.com"]
    // const destinatarios = ["jose.roman@metrasolutions.com"]
    const name = formData.nombre || "Sin Nombre"
    const email = formData.email || ""
    const message = formData.mensaje || ""
    const phone = formData.telefono || ""
    const service = formData.servicio || null
    const company = formData.empresa || ""
    const selectedServices = formData.serviciosSeleccionados || null
    const selectedFleet = formData.flotaSeleccionada || null
    const frequency = formData.frecuencia || ""
    const urgency = formData.urgency || ""
    const comments = formData.comentarios || ""
    if (type === "cotizacion") {      
      const html = quoteRequestEmailHTML({ name, email, phone, company, selectedServices, selectedFleet, frequency, urgency, comments });
      const text = quoteRequestEmailText({ name, email, phone, company, selectedServices, selectedFleet, frequency, urgency, comments });
      const { error } = await resend.emails.send({
        from: "WebSite <noemidiaz@hynaircraft.com>",
        to: destinatarios,
        subject: "Nueva Cotización",
        html,
        text,
        tags: [{ name: "app", value: "website" }, { name: "type", value: "contact-form" }],
      });
      if (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
      }
      return NextResponse.json({ success: true }, { status: 200 });
    }
    else{
      const html = contactEmailHTML({ name, email, message, phone, service });
      const text = contactEmailText({ name, email, message, phone, });
      
      const { error } = await resend.emails.send({
        from: "WebSite <noemidiaz@hynaircraft.com>",
        to: destinatarios,
        subject: "Nuevo contacto",
        html,
        // text,       // ← opcional, mejora entregabilidad
        tags: [{ name: "app", value: "website" }, { name: "type", value: "contact-form" }],
      });
      if (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
      }
      return NextResponse.json({ success: true }, { status: 200 });
    }
    // // Simular delay de envío
    // await new Promise((resolve) => setTimeout(resolve, 1000))

    // return NextResponse.json({
    //   success: true,
    //   message: "Emails enviados correctamente a ambos destinatarios",
    //   recipients: destinatarios,
    // })
  } catch (error) {
    console.error("Error enviando email:", error)
    return NextResponse.json({ success: false, message: "Error enviando email" }, { status: 500 })
  }
}
