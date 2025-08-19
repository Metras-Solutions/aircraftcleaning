import Navigation from "@/components/navigation"
import HeroCarousel from "@/components/hero-carousel"
import ServicesGrid from "@/components/services-grid"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Award, Clock } from "lucide-react"
import Link from "next/link"
import WhatsAppButton from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroCarousel />

      {/* Sección de características - Responsive */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Certificación Profesional</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Equipo certificado con estándares de la industria aeronáutica
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Experiencia Comprobada</h3>
              <p className="text-sm sm:text-base text-gray-600">Más de 10 años sirviendo a la industria aeronáutica</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Productos Certificados</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Utilizamos únicamente productos aprobados por Boeing y Airbus
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Disponibilidad 24/7</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Adaptamos nuestros horarios a las necesidades de su flota
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid />

      {/* Sección de llamada a la acción - Responsive */}
      <section className="py-8 sm:py-12 lg:py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para mantener su flota impecable?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8">
            Solicite una cotización personalizada y descubra por qué somos la elección preferida de las principales
            aerolíneas y operadores privados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 sm:gap-0 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-sm sm:text-base">
              <Link href="/cotizacion">Solicitar Cotización</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent text-sm sm:text-base"
            >
              <Link href="/contacto">Contactar Ahora</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
