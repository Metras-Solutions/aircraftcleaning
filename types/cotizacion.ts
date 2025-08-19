export interface ServicioFlota {
  id: string
  nombre: string
  flotas: string[]
}

export interface Servicio {
  id: string
  nombre: string
  tieneFlota: boolean
  subservicios?: ServicioFlota[]
}

export interface FormularioCotizacionType {
  // Paso 1: Información básica
  nombre: string
  email: string
  telefono: string
  empresa: string

  // Paso 2: Servicios seleccionados
  serviciosSeleccionados: string[]

  // Paso 3: Flota (solo para Limpieza General Aeronaves)
  flotaSeleccionada?: {
    servicioId: string
    flota: string
  }[]
}
