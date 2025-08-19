import type { Servicio } from "../types/cotizacion"

export const servicios: Servicio[] = [
  {
    id: "limpieza-aeronaves",
    nombre: "Limpieza General Aeronaves",
    tieneFlota: true,
    subservicios: [
      {
        id: "profundo-cabina",
        nombre: "Profundo Cabina",
        flotas: ["A 319 - 320 - 321", "787-9, 170, E175, 737 MAX 10", "777-200ER"],
      },
      {
        id: "terminal",
        nombre: "Terminal",
        flotas: ["A 319 - 320 - 321", "787-9, 170, E175, 737 MAX 10"],
      },
      {
        id: "transito",
        nombre: "Tránsito",
        flotas: ["A 319 - 320 - 321", "777-200ER"],
      },
      {
        id: "alfombra",
        nombre: "Alfombra",
        flotas: ["A 319 - 320 - 321", "787-9, 170, E175, 737 MAX 10"],
      },
      {
        id: "dry-wash",
        nombre: "Dry Wash completo",
        flotas: ["A 319 - 320 - 321", "777-200ER"],
      },
      {
        id: "limpieza-tapiz",
        nombre: "Limpieza Tapiz",
        flotas: ["A 319 - 320 - 321", "787-9, 170, E175, 737 MAX 10"],
      },
      {
        id: "vapor-sanitizacion",
        nombre: "Vapor, Sanitización Interior",
        flotas: ["A 319 - 320 - 321", "777-200ER"],
      },
      {
        id: "parabrisas",
        nombre: "Parabrisas",
        flotas: ["A 319 - 320 - 321", "787-9, 170, E175, 737 MAX 10"],
      },
      {
        id: "vestimenta",
        nombre: "Vestimenta",
        flotas: ["A 319 - 320 - 321", "777-200ER"],
      },
      {
        id: "lavado-cubiertas",
        nombre: "Lavado de cubiertas (WC) Con vapor, sanitizado y desinfección",
        flotas: ["A 319 - 320 - 321", "787-9, 170, E175, 737 MAX 10"],
      },
      {
        id: "profundo-bano",
        nombre: "Profundo de baño, vapor y tratamiento de olor",
        flotas: ["A 319 - 320 - 321", "777-200ER"],
      },
      {
        id: "limpieza-bodega",
        nombre: "Limpieza profunda de bodega con fumigación",
        flotas: ["A 319 - 320 - 321", "787-9, 170, E175, 737 MAX 10"],
      },
      {
        id: "fumigacion-interior",
        nombre: "Fumigación interior",
        flotas: ["A 319 - 320 - 321", "777-200ER"],
      },
    ],
  },
  {
    id: "limpieza-post-construcciones",
    nombre: "Limpieza Post Construcciones",
    tieneFlota: false,
  },
  {
    id: "limpieza-almacenes",
    nombre: "Limpieza de Almacenes & Naves Industriales",
    tieneFlota: false,
  },
  {
    id: "lavado-muebles",
    nombre: "Lavado de Muebles y Electrodomésticos",
    tieneFlota: false,
  },
  {
    id: "limpieza-domestica",
    nombre: "Limpieza Doméstica",
    tieneFlota: false,
  },
  {
    id: "limpieza-empresarial",
    nombre: "Limpieza Empresarial",
    tieneFlota: false,
  },
  {
    id: "sanitizado-vapor",
    nombre: "Servicios de sanitizado y desinfección con vapor",
    tieneFlota: false,
  },
  {
    id: "limpieza-eventos",
    nombre: "Limpieza Pre/Post Eventos",
    tieneFlota: false,
  },
  {
    id: "limpieza-conserjeria",
    nombre: "Limpieza de Conserjería & Edificios",
    tieneFlota: false,
  },
  {
    id: "limpieza-departamento",
    nombre: "Limpieza de departamento",
    tieneFlota: false,
  },
]
