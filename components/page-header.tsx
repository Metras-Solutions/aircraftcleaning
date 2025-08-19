import Image from "next/image"

interface PageHeaderProps {
  title: string
  description: string
  backgroundImage: string
}

export default function PageHeader({ title, description, backgroundImage }: PageHeaderProps) {
  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
      <Image src={backgroundImage || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60" />
      <div className="relative z-10 text-center text-white max-w-4xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">{description}</p>
      </div>
    </section>
  )
}
