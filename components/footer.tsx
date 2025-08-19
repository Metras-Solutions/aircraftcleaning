import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 sm:col-span-2">
            <Image
              src="/logo_aircraft.png"
              alt="H&N Aircraft Cleaning Spa"
              width={150}
              height={150}
              className="h-12 sm:h-16 w-auto mb-4"
            />
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              Servicios profesionales de limpieza aeronáutica para flotas comerciales, ejecutivas y militares. Adaptados
              a sus horarios y requerimientos, con cobertura nacional e internacional.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-xs sm:text-sm text-gray-300">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                24/7 Disponible
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="flex space-x-4 mt-4 sm:mt-6">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/cotizacion"
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
                >
                  Cotización
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-sm sm:text-base text-gray-300">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                +56 9 2370 2189
              </li>
              <li className="flex items-center text-sm sm:text-base text-gray-300">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                info@hynaircraft.com
              </li>
              <li className="flex items-start text-sm sm:text-base text-gray-300">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 mt-1 flex-shrink-0" />
                <div>
                  Aeropuerto Internacional
                  <br />
                  Santiago, Chile
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            © 2025 H&N Aircraft Cleaning Spa. Todos los derechos reservados. | Revisión: 001
          </p>
        </div>
      </div>
    </footer>
  )
}
