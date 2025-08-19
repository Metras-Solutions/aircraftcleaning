import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Users, Award, Plane, Shield, Star, TrendingUp } from "lucide-react"
import PageHeader from "@/components/page-header"
import WhatsAppButton from "@/components/whatsapp-button"

export default function NosotrosPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <PageHeader
        title="Sobre H&N Aircraft Cleaning"
        description="Líderes en servicios de limpieza aeronáutica con más de una década de experiencia, sirviendo a las principales aerolíneas y operadores privados a nivel nacional e internacional."
        backgroundImage="/images/luxury-cabin-cleaning.jpeg"
      />

      {/* Historia y Presentación */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Historia</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              H&N Aircraft Cleaning Spa nació de la visión de ofrecer servicios de limpieza aeronáutica de clase
              mundial, adaptados a las exigentes necesidades de la industria de la aviación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-t-4 border-t-blue-600">
              <CardHeader>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Fundación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Fundada con el objetivo de establecer nuevos estándares en la limpieza aeronáutica, combinando
                  experiencia técnica con innovación.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-t-4 border-t-green-600">
              <CardHeader>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Crecimiento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Expansión constante de servicios y cobertura, atendiendo flotas comerciales, ejecutivas y militares a
                  nivel nacional e internacional.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-t-4 border-t-purple-600">
              <CardHeader>
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Reconocimiento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Reconocidos por la industria por nuestros altos estándares de calidad, certificaciones internacionales
                  y compromiso con la excelencia.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              Desde nuestros inicios, nos hemos especializado en brindar{" "}
              <strong>soluciones personalizadas de limpieza aeronáutica</strong>
              adaptadas al programa operativo de cada flota, operando con estándares de la industria, productos
              certificados y un riguroso control de calidad en cada etapa del proceso. Hoy servimos a flotas
              comerciales, ejecutivas y militares, manteniendo siempre nuestro compromiso con la excelencia y la
              innovación en cada servicio que prestamos.
            </p>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Misión y Visión</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Target className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-2xl">Nuestra Misión</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Proporcionar servicios de limpieza aeronáutica de la más alta calidad, utilizando productos
                  certificados y técnicas especializadas que garanticen la seguridad, higiene y presentación impecable
                  de cada aeronave, adaptándonos a los horarios y requerimientos específicos de nuestros clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Eye className="h-8 w-8 text-green-600" />
                  <CardTitle className="text-2xl">Nuestra Visión</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ser reconocidos como la empresa líder en servicios de limpieza aeronáutica a nivel nacional e
                  internacional, estableciendo nuevos estándares de calidad y excelencia en la industria, mientras
                  expandimos nuestros servicios a otros sectores especializados.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experiencia y Certificaciones */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Experiencia y Certificaciones</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nuestro equipo cuenta con las certificaciones más importantes de la industria aeronáutica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Plane className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Certificación Aeronáutica</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Personal certificado en limpieza de aeronaves comerciales y ejecutivas
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Boeing Approved</Badge>
                  <Badge variant="secondary">Airbus Certified</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Seguridad y Calidad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Cumplimiento estricto de protocolos de seguridad y calidad</p>
                <div className="space-y-2">
                  <Badge variant="secondary">ISO 9001</Badge>
                  <Badge variant="secondary">IATA Certified</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Equipo Especializado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Más de 50 profesionales especializados en limpieza aeronáutica</p>
                <div className="space-y-2">
                  <Badge variant="secondary">+10 años experiencia</Badge>
                  <Badge variant="secondary">Formación continua</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
            <p className="text-lg text-gray-600">Los principios que guían nuestro trabajo diario</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Excelencia</h3>
              <p className="text-gray-600">Buscamos la perfección en cada servicio que prestamos</p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Seguridad</h3>
              <p className="text-gray-600">Priorizamos la seguridad en todos nuestros procesos</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Compromiso</h3>
              <p className="text-gray-600">Dedicación total con nuestros clientes y su satisfacción</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovación</h3>
              <p className="text-gray-600">Adoptamos las últimas tecnologías y métodos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Números</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <p className="text-gray-600">Años de Experiencia</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <p className="text-gray-600">Aeronaves Atendidas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <p className="text-gray-600">Profesionales</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <p className="text-gray-600">Disponibilidad</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
