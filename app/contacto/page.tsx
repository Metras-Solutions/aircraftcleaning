"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react"
import PageHeader from "@/components/page-header"
import WhatsAppButton from "@/components/whatsapp-button"

export default function ContactoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "contacto",
          formData,
          userEmail: formData.email,
        }),
      })

      const result = await response.json()

      if (result.success) {
        alert(
          "¡Mensaje enviado exitosamente! Hemos enviado una confirmación a tu email y nos pondremos en contacto contigo pronto.",
        )
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          servicio: "",
          mensaje: "",
        })
      } else {
        alert("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <PageHeader
        title="Contáctanos"
        description="Estamos disponibles 24/7 para atender sus necesidades de limpieza aeronáutica. Contáctenos para una respuesta inmediata."
        backgroundImage="/images/cabin-cleaning-staff.jpeg"
      />

      {/* Sección de Contacto */}
      <section className="py-8 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ponte en Contacto</h2>
            <p className="text-base sm:text-lg text-gray-600">
              Estamos aquí para ayudarte con todas tus necesidades de limpieza profesional
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Formulario de Contacto */}
            <Card>
              <CardHeader className="text-center p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl">Envíanos un Mensaje</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nombre" className="text-sm sm:text-base">
                        Nombre *
                      </Label>
                      <Input
                        id="nombre"
                        placeholder="Tu nombre"
                        value={formData.nombre}
                        onChange={(e) => handleInputChange("nombre", e.target.value)}
                        required
                        className="text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm sm:text-base">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="telefono" className="text-sm sm:text-base">
                      Teléfono
                    </Label>
                    <Input
                      id="telefono"
                      placeholder="+56 9 1234 5678"
                      value={formData.telefono}
                      onChange={(e) => handleInputChange("telefono", e.target.value)}
                      className="text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <Label htmlFor="servicio" className="text-sm sm:text-base">
                      Servicio de Interés
                    </Label>
                    <select
                      id="servicio"
                      value={formData.servicio}
                      onChange={(e) => handleInputChange("servicio", e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="limpieza-aeronaves">Limpieza General Aeronaves</option>
                      <option value="post-construccion">Limpieza Post Construcción</option>
                      <option value="almacenes">Almacenes & Naves Industriales</option>
                      <option value="otros">Otros servicios</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="mensaje" className="text-sm sm:text-base">
                      Mensaje *
                    </Label>
                    <Textarea
                      id="mensaje"
                      placeholder="Describe tus necesidades..."
                      rows={4}
                      value={formData.mensaje}
                      onChange={(e) => handleInputChange("mensaje", e.target.value)}
                      required
                      className="text-sm sm:text-base resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Información de Contacto */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                  Información de Contacto
                </h3>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900">Teléfono</h4>
                      <p className="text-sm sm:text-base text-gray-600">+56 9 2370 2189</p>
                      <p className="text-xs sm:text-sm text-gray-500">Disponible 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900">Email</h4>
                      <p className="text-sm sm:text-base text-gray-600">info@hynaircraft.com</p>
                      <p className="text-xs sm:text-sm text-gray-500">Respuesta en 2 horas</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900">Ubicación</h4>
                      <p className="text-sm sm:text-base text-gray-600">Aeropuerto Internacional</p>
                      <p className="text-sm sm:text-base text-gray-600">Santiago, Chile</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                      <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900">Horarios</h4>
                      <p className="text-sm sm:text-base text-gray-600">24 horas, 7 días</p>
                      <p className="text-xs sm:text-sm text-gray-500">Adaptamos horarios a su flota</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Información adicional */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4 sm:p-6">
                  <h4 className="font-semibold text-blue-900 mb-3 text-center text-sm sm:text-base">
                    ¿Necesita Servicio Urgente?
                  </h4>
                  <p className="text-blue-700 text-xs sm:text-sm mb-4 text-center">
                    Para servicios de emergencia, contáctenos directamente por WhatsApp o teléfono.
                  </p>
                  <div className="text-center">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-sm sm:text-base">
                      <Phone className="h-4 w-4 mr-2" />
                      Llamar Ahora
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
