import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('EMAIL_PASS length:', process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0);
  
  const { firstname, lastname, email, phone, service, message } = await request.json();

  // Configura el transporter de nodemailer
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true para 465, false para otros puertos
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Envía el correo
    await transporter.sendMail({
      from: '"PortafolioVercel" <tu-email@gmail.com>', // dirección del remitente
      to: "felipevega.dev@gmail.com", // lista de receptores
      subject: "Nuevo cliente quiere comunicarse contigo!", // Línea de asunto
      text: `
        Nombre: ${firstname} ${lastname}
        Email: ${email}
        Teléfono: ${phone}
        Servicio: ${service}
        Mensaje: ${message}
      `, // cuerpo de texto plano
      html: `
        <p><strong>Nombre:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Servicio:</strong> ${service}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `, // cuerpo html
    });

    return NextResponse.json({ message: 'Correo enviado con éxito!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error al enviar el email' }, { status: 500 });
  }
}