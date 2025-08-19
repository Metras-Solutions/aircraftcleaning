import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plane, Building, Home, Sofa, Droplets, Calendar, Shield, MapPin, Hammer, Warehouse, Plus } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "limpieza-aeronaves",
    title: "Limpieza General Aeronaves",
    description: "Servicios especializados para flotas comerciales, ejecutivas y militares.",
    icon: Plane,
    featured: true,
  },
  {
    id: "post-construccion",
    title: "Limpieza Post Construcción",
    description: "Limpieza profunda después de obras y construcciones.",
    icon: Hammer,
  },
  {
    id: "almacenes-industriales",
    title: "Almacenes & Naves Industriales",
    description: "Limpieza especializada para espacios industriales.",
    icon: Warehouse,
  },
  {
    id: "lavado-muebles",
    title: "Lavado de Muebles",
    description: "Limpieza profesional de muebles y tapicería con técnicas especializadas.",
    icon: Sofa,
  },
  {
    id: "limpieza-domestica",
    title: "Limpieza Doméstica",
    description: "Servicios de limpieza residencial personalizados.",
    icon: Home,
  },
  {
    id: "limpieza-empresarial",
    title: "Limpieza Empresarial",
    description: "Mantenimiento para oficinas y espacios corporativos.",
    icon: Building,
  },
  {
    id: "sanitizado-vapor",
    title: "Sanitizado con Vapor",
    description: "Desinfección profunda con vapor para máxima higiene.",
    icon: Droplets,
  },
  {
    id: "limpieza-eventos",
    title: "Limpieza Pre/Post Eventos",
    description: "Servicios especializados para eventos y montajes.",
    icon: Calendar,
  },
  {
    id: "conserjeria-edificios",
    title: "Conserjería & Edificios",
    description: "Mantenimiento integral de edificios.",
    icon: Shield,
  },
  {
    id: "limpieza-departamentos",
    title: "Limpieza de Departamentos",
    description: "Servicios residenciales para departamentos.",
    icon: MapPin,
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios de limpieza profesional, especializándonos en limpieza aeronáutica
            con los más altos estándares de calidad.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card
                key={service.id}
                className={`hover:shadow-md transition-shadow text-center ${
                  service.featured ? "ring-1 ring-blue-300 bg-blue-50" : ""
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex flex-col items-center space-y-3">
                    <div
                      className={`p-2 rounded-lg ${
                        service.featured ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold mb-1">{service.title}</h3>
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">{service.description}</p>
                    </div>
                    <Button asChild variant="ghost" size="sm" className="h-6 px-2 text-xs">
                      <Link href="/servicios">
                        <Plus className="h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/cotizacion">Solicitar Cotización Personalizada</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
