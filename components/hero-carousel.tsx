"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250725_1328_Glass%20Airplane%20Majesty_simple_compose_01k11a1v12eweaxxehgqczb2sz-JkOcijYeXyvWh9Qdsbq5ZOFcv3FX3g.mp4",
    title: "H&N Aircraft Cleaning Spa",
    description:
      "Servicios profesionales de limpieza aeronáutica con tecnología de vanguardia y personal altamente capacitado para mantener su flota en perfectas condiciones.",
  },
  {
    type: "image",
    image: "/slide2_aircraft.png",
    title: "Limpieza Interior de Cabina",
    description:
      "Limpieza profunda y sanitización de interiores, incluyendo asientos, alfombras y superficies de alto contacto.",
  },
  {
    type: "image",
    image: "/Hero_Avion.png",
    title: "Limpieza de Aeronaves",
    description: "Calidad y precisión en cada detalle",
  },
  {
    type: "image",
    image: "/images/aircraft-bathroom.jpeg",
    title: "Sanitización Completa",
    description:
      "Limpieza y desinfección especializada de baños y áreas sanitarias con vapor y productos bactericidas.",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000) // Tiempo aumentado para el video
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  return (
    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.type === "video" ? (
            <div className="relative w-full h-full">
              <video
                ref={videoRef}
                src={slide.src}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-black bg-opacity-30" />

              {/* Control de video - Solo visible en el slide actual */}
              {index === currentSlide && (
                <button
                  onClick={toggleVideo}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  {isVideoPlaying ? (
                    <Pause className="h-4 w-4 sm:h-5 sm:w-5" />
                  ) : (
                    <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                  )}
                </button>
              )}
            </div>
          ) : (
            <>
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
            </>
          )}

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4 sm:px-6">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto drop-shadow-md">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 sm:gap-0 justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-sm sm:text-base">
                  <Link href="/cotizacion">Solicitar Cotización</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white hover:text-black bg-transparent text-sm sm:text-base"
                >
                  <Link href="/servicios">Ver Servicios</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 sm:p-3 rounded-full transition-all"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 sm:p-3 rounded-full transition-all"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all ${
              slide.type === "video"
                ? `w-4 h-4 rounded-full ${index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"}`
                : `w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"}`
            }`}
          />
        ))}
      </div>

      {/* Video indicator */}
      {slides[currentSlide].type === "video" && (
        <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">VIDEO</div>
      )}
    </div>
  )
}
