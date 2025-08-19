"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ChevronLeft,
  ChevronRight,
  Plane,
  Building,
  Home,
  Sofa,
  User,
  CheckSquare,
  Settings,
  FileText,
  CheckCircle,
  Loader2,
} from "lucide-react"
import { servicios } from "../data/servicios"
import type { FormularioCotizacionType } from "../types/cotizacion"
import { Textarea } from "@/components/ui/textarea"

export default function FormularioCotizacion() {
  const [paso, setPaso] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formulario, setFormulario] = useState<FormularioCotizacionType>({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    serviciosSeleccionados: [],
    flotaSeleccionada: [],
  })

  const servicioAeronaves = servicios.find((s) => s.id === "limpieza-aeronaves")
  const tieneServicioAeronaves = formulario.serviciosSeleccionados.includes("limpieza-aeronaves")

  const pasos = [
    { numero: 1, titulo: "Información Personal", icono: User, color: "bg-blue-600" },
    { numero: 2, titulo: "Seleccionar Servicios", icono: CheckSquare, color: "bg-green-600" },
    { numero: 3, titulo: "Servicio de Aeronave", icono: Plane, color: "bg-yellow-600" },
    { numero: 4, titulo: "Detalles", icono: FileText, color: "bg-purple-600" },
    { numero: 5, titulo: "Confirmación", icono: CheckCircle, color: "bg-emerald-600" },
  ]

  const handleServicioChange = (servicioId: string, checked: boolean) => {
    if (checked) {
      setFormulario((prev) => ({
        ...prev,
        serviciosSeleccionados: [...prev.serviciosSeleccionados, servicioId],
      }))
    } else {
      setFormulario((prev) => ({
        ...prev,
        serviciosSeleccionados: prev.serviciosSeleccionados.filter((id) => id !== servicioId),
        flotaSeleccionada: prev.flotaSeleccionada?.filter((f) => f.servicioId !== servicioId) || [],
      }))
    }
  }

  const getIconoServicio = (servicioId: string) => {
    const iconos = {
      "limpieza-aeronaves": { icon: Plane, color: "bg-blue-500 text-white" },
      "post-construccion": { icon: Building, color: "bg-orange-500 text-white" },
      "almacenes-industriales": { icon: Building, color: "bg-gray-500 text-white" },
      "lavado-muebles": { icon: Sofa, color: "bg-purple-500 text-white" },
      "limpieza-domestica": { icon: Home, color: "bg-green-500 text-white" },
      "limpieza-empresarial": { icon: Building, color: "bg-indigo-500 text-white" },
      "sanitizado-vapor": { icon: Settings, color: "bg-teal-500 text-white" },
      "limpieza-eventos": { icon: CheckSquare, color: "bg-pink-500 text-white" },
      "conserjeria-edificios": { icon: Building, color: "bg-red-500 text-white" },
      "limpieza-departamentos": { icon: Home, color: "bg-yellow-500 text-white" },
    }
    return iconos[servicioId as keyof typeof iconos] || { icon: Sofa, color: "bg-gray-500 text-white" }
  }

  const puedeAvanzar = () => {
    switch (paso) {
      case 1:
        return formulario.nombre && formulario.email && formulario.telefono
      case 2:
        return formulario.serviciosSeleccionados.length > 0
      case 3:
        if (!tieneServicioAeronaves) return true
        return true
      default:
        return true
    }
  }

  const siguientePaso = () => {
    if (paso === 2 && !tieneServicioAeronaves) {
      setPaso(4) // Saltar paso 3 si no hay servicios de aeronaves
    } else if (paso === 4) {
      setPaso(5) // Ir a confirmación
    } else {
      setPaso(paso + 1)
    }
  }

  const pasoAnterior = () => {
    if (paso === 4 && !tieneServicioAeronaves) {
      setPaso(2) // Volver al paso 2 si no hay servicios de aeronaves
    } else if (paso === 5) {
      setPaso(4) // Volver a detalles
    } else {
      setPaso(paso - 1)
    }
  }

  const enviarCotizacion = async () => {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "cotizacion",
          formData: formulario,
          userEmail: formulario.email,
        }),
      })

      const result = await response.json()

      if (result.success) {
        alert(
          "¡Cotización enviada exitosamente! Hemos enviado una confirmación a tu email y nos pondremos en contacto contigo pronto.",
        )
      } else {
        alert("Hubo un error al enviar la cotización. Por favor, inténtalo de nuevo.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Hubo un error al enviar la cotización. Por favor, inténtalo de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const pasoActual = pasos.find((p) => p.numero === paso) || pasos[0]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-100 p-2 sm:p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">H&N AIRCRAFT CLEANING Spa</h1>
          <p className="text-sm sm:text-base text-gray-600">Solicitud de Cotización</p>
        </div>

        {/* Indicador de progreso - Responsive */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-center space-x-1 sm:space-x-2 md:space-x-4 overflow-x-auto pb-4">
            {pasos.map((pasoInfo, index) => {
              const esActivo = paso === pasoInfo.numero
              const esCompletado = paso > pasoInfo.numero
              const esPaso3 = pasoInfo.numero === 3
              const mostrarPaso3 = tieneServicioAeronaves || paso === 3

              if (esPaso3 && !mostrarPaso3) return null

              const IconComponent = pasoInfo.icono

              return (
                <div key={pasoInfo.numero} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-medium transition-all ${
                        esCompletado ? "bg-green-500" : esActivo ? pasoInfo.color : "bg-gray-300"
                      }`}
                    >
                      <IconComponent className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6" />
                    </div>
                    <span
                      className={`text-xs mt-1 sm:mt-2 text-center max-w-16 sm:max-w-20 leading-tight ${
                        esActivo ? "font-medium text-blue-600" : "text-gray-500"
                      }`}
                    >
                      {pasoInfo.titulo}
                    </span>
                  </div>
                  {index < pasos.length - 1 && (esPaso3 ? mostrarPaso3 : true) && (
                    <div
                      className={`w-4 sm:w-8 md:w-16 h-1 mx-1 sm:mx-2 ${
                        paso > pasoInfo.numero ? "bg-green-500" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <Card className="shadow-lg border-t-4" style={{ borderTopColor: pasoActual.color.replace("bg-", "#") }}>
          <CardHeader className="text-center p-4 sm:p-6">
            <CardTitle className="flex items-center justify-center space-x-2 text-lg sm:text-xl">
              <pasoActual.icono className="h-5 w-5 sm:h-6 sm:w-6" />
              <span>{pasoActual.titulo}</span>
            </CardTitle>
            <CardDescription className="text-sm sm:text-base">
              {paso === 1 && "Ingresa tus datos de contacto"}
              {paso === 2 && "Selecciona uno o más servicios que necesitas"}
              {paso === 3 && "Información específica para servicios aeronáuticos"}
              {paso === 4 && "Detalles adicionales de tu solicitud"}
              {paso === 5 && "Revisa tu solicitud antes de enviar"}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
            {/* Paso 1: Información Personal */}
            {paso === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nombre" className="text-sm sm:text-base">
                    Nombre completo *
                  </Label>
                  <Input
                    id="nombre"
                    value={formulario.nombre}
                    onChange={(e) => setFormulario((prev) => ({ ...prev, nombre: e.target.value }))}
                    placeholder="Tu nombre completo"
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
                    value={formulario.email}
                    onChange={(e) => setFormulario((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="tu@email.com"
                    className="text-sm sm:text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="telefono" className="text-sm sm:text-base">
                    Teléfono *
                  </Label>
                  <Input
                    id="telefono"
                    value={formulario.telefono}
                    onChange={(e) => setFormulario((prev) => ({ ...prev, telefono: e.target.value }))}
                    placeholder="+56 9 1234 5678"
                    className="text-sm sm:text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="empresa" className="text-sm sm:text-base">
                    Empresa
                  </Label>
                  <Input
                    id="empresa"
                    value={formulario.empresa}
                    onChange={(e) => setFormulario((prev) => ({ ...prev, empresa: e.target.value }))}
                    placeholder="Nombre de tu empresa"
                    className="text-sm sm:text-base"
                  />
                </div>
              </div>
            )}

            {/* Paso 2: Selección de servicios */}
            {paso === 2 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                {servicios.map((servicio) => {
                  const iconoInfo = getIconoServicio(servicio.id)
                  const IconComponent = iconoInfo.icon
                  const isSelected = formulario.serviciosSeleccionados.includes(servicio.id)

                  return (
                    <div
                      key={servicio.id}
                      className={`flex items-start space-x-3 p-3 sm:p-4 border-2 rounded-lg hover:shadow-md transition-all cursor-pointer ${
                        isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => handleServicioChange(servicio.id, !isSelected)}
                    >
                      <Checkbox
                        id={servicio.id}
                        checked={isSelected}
                        onCheckedChange={(checked) => handleServicioChange(servicio.id, checked as boolean)}
                        className="mt-1"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                          <div className={`p-1.5 sm:p-2 rounded-lg ${iconoInfo.color} flex-shrink-0`}>
                            <IconComponent className="h-3 w-3 sm:h-4 sm:w-4" />
                          </div>
                          <Label
                            htmlFor={servicio.id}
                            className="text-xs sm:text-sm font-medium cursor-pointer leading-tight"
                          >
                            {servicio.nombre}
                          </Label>
                        </div>
                        {servicio.tieneFlota && (
                          <p className="text-xs text-blue-600 ml-8 sm:ml-11">
                            Incluye configuración de flota específica
                          </p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Paso 3: Servicio de Aeronave */}
            {paso === 3 && tieneServicioAeronaves && (
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-yellow-50 p-3 sm:p-4 rounded-lg border border-blue-200">
                  <h3 className="font-medium text-blue-900 mb-2 flex items-center text-sm sm:text-base">
                    <Plane className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Configuración de Servicios Aeronáuticos
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-700">Complete la información específica para su flota</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="tipoFlota" className="text-sm sm:text-base">
                      Tipo de Flota *
                    </Label>
                    <Select>
                      <SelectTrigger className="text-sm sm:text-base">
                        <SelectValue placeholder="Seleccione tipo de aeronave" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="a319-321">Airbus A319-320-321</SelectItem>
                        <SelectItem value="boeing-737">Boeing 737 MAX</SelectItem>
                        <SelectItem value="boeing-777">Boeing 777-200ER</SelectItem>
                        <SelectItem value="boeing-787">Boeing 787-9</SelectItem>
                        <SelectItem value="embraer">Embraer E175/170</SelectItem>
                        <SelectItem value="jet-privado">Jet Privado</SelectItem>
                        <SelectItem value="helicoptero">Helicóptero</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="numeroAeronaves" className="text-sm sm:text-base">
                      Número de Aeronaves
                    </Label>
                    <Input
                      id="numeroAeronaves"
                      type="number"
                      placeholder="1"
                      min="1"
                      className="text-sm sm:text-base"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Paso 4: Detalles */}
            {paso === 4 && (
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-3 sm:p-4 rounded-lg border border-purple-200">
                  <h3 className="font-medium text-purple-900 mb-2 flex items-center text-sm sm:text-base">
                    <FileText className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Detalles Adicionales
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-700">
                    Información adicional para personalizar su cotización
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="frecuencia" className="text-sm sm:text-base">
                      Frecuencia del Servicio
                    </Label>
                    <Select>
                      <SelectTrigger className="text-sm sm:text-base">
                        <SelectValue placeholder="Seleccione frecuencia" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="unica">Servicio único</SelectItem>
                        <SelectItem value="semanal">Semanal</SelectItem>
                        <SelectItem value="quincenal">Quincenal</SelectItem>
                        <SelectItem value="mensual">Mensual</SelectItem>
                        <SelectItem value="personalizada">Personalizada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="urgencia" className="text-sm sm:text-base">
                      Urgencia
                    </Label>
                    <Select>
                      <SelectTrigger className="text-sm sm:text-base">
                        <SelectValue placeholder="Nivel de urgencia" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="normal">Normal (48-72h)</SelectItem>
                        <SelectItem value="urgente">Urgente (24h)</SelectItem>
                        <SelectItem value="inmediato">Inmediato (mismo día)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="comentarios" className="text-sm sm:text-base">
                    Comentarios Adicionales
                  </Label>
                  <Textarea
                    id="comentarios"
                    placeholder="Especifique detalles adicionales, ubicación, horarios preferidos, etc."
                    rows={4}
                    className="text-sm sm:text-base resize-none"
                  />
                </div>
              </div>
            )}

            {/* Paso 5: Confirmación */}
            {paso === 5 && (
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-3 sm:p-4 rounded-lg border border-emerald-200">
                  <h3 className="font-medium text-emerald-900 mb-2 flex items-center text-sm sm:text-base">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Resumen de su Solicitud
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-700">Revise la información antes de enviar</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-medium mb-3 text-center text-sm sm:text-base">Información de Contacto</h3>
                    <div className="text-xs sm:text-sm text-gray-600 space-y-2">
                      <p>
                        <strong>Nombre:</strong> {formulario.nombre}
                      </p>
                      <p>
                        <strong>Email:</strong> {formulario.email}
                      </p>
                      <p>
                        <strong>Teléfono:</strong> {formulario.telefono}
                      </p>
                      {formulario.empresa && (
                        <p>
                          <strong>Empresa:</strong> {formulario.empresa}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-medium mb-3 text-center text-blue-900 text-sm sm:text-base">
                      Servicios Seleccionados
                    </h3>
                    <div className="space-y-2">
                      {formulario.serviciosSeleccionados.map((servicioId) => {
                        const servicio = servicios.find((s) => s.id === servicioId)
                        const iconoInfo = getIconoServicio(servicioId)
                        const IconComponent = iconoInfo.icon
                        return (
                          <div key={servicioId} className="flex items-center space-x-2 text-xs sm:text-sm">
                            <div className={`p-1 rounded ${iconoInfo.color}`}>
                              <IconComponent className="h-2 w-2 sm:h-3 sm:w-3" />
                            </div>
                            <span>{servicio?.nombre}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Botones de navegación */}
            <div className="flex justify-between pt-4 sm:pt-6 gap-4">
              <Button
                variant="outline"
                onClick={pasoAnterior}
                disabled={paso === 1}
                className="flex items-center space-x-2 bg-transparent text-sm sm:text-base px-3 sm:px-4"
              >
                <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Anterior</span>
              </Button>

              {paso < 5 ? (
                <Button
                  onClick={siguientePaso}
                  disabled={!puedeAvanzar()}
                  className="flex items-center space-x-2 text-sm sm:text-base px-3 sm:px-4"
                  style={{ backgroundColor: pasoActual.color.replace("bg-", "") }}
                >
                  <span>Siguiente</span>
                  <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              ) : (
                <Button
                  onClick={enviarCotizacion}
                  disabled={isSubmitting}
                  className="bg-emerald-600 hover:bg-emerald-700 text-sm sm:text-base px-3 sm:px-4"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-3 w-3 sm:h-4 sm:w-4 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      Enviar Cotización
                    </>
                  )}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
