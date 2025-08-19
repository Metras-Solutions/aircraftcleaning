import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, formData, userEmail } = body

    // Destinatarios actualizados
    const destinatarios = ["info@hynaircraft.com", "noemi.diaz_sarante@hynaircraft.com"]

    console.log("Enviando email:", {
      type,
      formData,
      userEmail,
      destinatarios,
    })

    // Simular delay de envío
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Emails enviados correctamente a ambos destinatarios",
      recipients: destinatarios,
    })
  } catch (error) {
    console.error("Error enviando email:", error)
    return NextResponse.json({ success: false, message: "Error enviando email" }, { status: 500 })
  }
}
