import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import FormularioCotizacion from "@/components/formulario-cotizacion"
import WhatsAppButton from "@/components/whatsapp-button"

export default function CotizacionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="py-8">
        <FormularioCotizacion />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
