import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle,
  Plane,
  Droplets,
  Sparkles,
  Shield,
  Building,
  Home,
  Sofa,
  Hammer,
  Warehouse,
  Calendar,
  MapPin,
} from "lucide-react"
import Link from "next/link"
import PageHeader from "@/components/page-header"
import WhatsAppButton from "@/components/whatsapp-button"

export default function ServiciosPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <PageHeader
        title="Nuestros Servicios"
        description="Servicios profesionales de limpieza especializados para la industria aeronáutica y otros sectores, con los más altos estándares de calidad."
        backgroundImage="/servicios_aircraft.png"
      />

      {/* Servicios Principales */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Servicios Profesionales de Limpieza</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios especializados con los más altos estándares de calidad.
            </p>
          </div>

          <Tabs defaultValue="aeronauticos" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="aeronauticos">Servicios Aeronáuticos</TabsTrigger>
              <TabsTrigger value="comerciales">Comerciales</TabsTrigger>
              <TabsTrigger value="residenciales">Residenciales</TabsTrigger>
              <TabsTrigger value="especializados">Especializados</TabsTrigger>
            </TabsList>

            <TabsContent value="aeronauticos" className="mt-8">
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Limpieza Aeronáutica Profesional</h3>
                  <p className="text-gray-600 mb-8">
                    Servicios especializados para flotas comerciales, ejecutivas y militares con productos certificados.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Plane className="h-8 w-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">Limpieza Interior</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Aspirado completo
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Desinfección de superficies
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Limpieza de cockpit
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Sparkles className="h-8 w-8 text-green-600" />
                      </div>
                      <CardTitle className="text-lg">Limpieza Exterior</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Lavado especializado
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Tratamiento de manchas
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Pulido profesional
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Droplets className="h-8 w-8 text-purple-600" />
                      </div>
                      <CardTitle className="text-lg">Sanitización</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Vapor de alta temperatura
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Productos certificados
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Desinfección completa
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="h-8 w-8 text-orange-600" />
                      </div>
                      <CardTitle className="text-lg">Servicios Especiales</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Limpieza de bodega
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Fumigación interior
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Dry wash completo
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="comerciales" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Building className="h-6 w-6 text-blue-600" />
                      <CardTitle>Limpieza Empresarial</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Mantenimiento y limpieza para oficinas y espacios corporativos con horarios flexibles.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Warehouse className="h-6 w-6 text-green-600" />
                      <CardTitle>Almacenes & Naves Industriales</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Limpieza especializada para espacios industriales y de almacenamiento de gran escala.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Shield className="h-6 w-6 text-purple-600" />
                      <CardTitle>Conserjería & Edificios</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Mantenimiento integral de edificios y servicios de conserjería profesional.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="residenciales" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Home className="h-6 w-6 text-green-600" />
                      <CardTitle>Limpieza Doméstica</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Servicios de limpieza residencial con atención personalizada y productos seguros para el hogar.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-6 w-6 text-blue-600" />
                      <CardTitle>Limpieza de Departamentos</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Servicios residenciales especializados para departamentos y condominios.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="especializados" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Hammer className="h-6 w-6 text-orange-600" />
                      <CardTitle>Limpieza Post Construcción</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Limpieza profunda después de obras y construcciones, eliminando residuos y polvo.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Sofa className="h-6 w-6 text-purple-600" />
                      <CardTitle>Lavado de Muebles</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Limpieza profesional de muebles y tapicería con técnicas especializadas.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-6 w-6 text-pink-600" />
                      <CardTitle>Limpieza Pre/Post Eventos</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Servicios especializados para eventos, montaje y desmontaje con equipos profesionales.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Droplets className="h-6 w-6 text-teal-600" />
                      <CardTitle>Sanitizado con Vapor</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Desinfección profunda con vapor para máxima higiene y eliminación de patógenos.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Necesita un servicio personalizado?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contáctenos para una cotización personalizada adaptada a sus necesidades específicas.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/cotizacion">Solicitar Cotización</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
