import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('EMAIL_PASS length:', process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0);
  
  const { firstname, lastname, email, phone, service, message } = await request.json();

  // Configura el transporter de nodemailer
  let transporter = nodemailer.createTransport({
    service: 'gmail',  // Especifica que estamos usando Gmail
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    console.log('Intentando enviar email...');
    // Envía el correo
    let info = await transporter.sendMail({
      from: `"Tu Nombre" <${process.env.EMAIL_USER}>`,
      to: "felipevega.dev@gmail.com",
      subject: "Nuevo mensaje de contacto",
      text: `
        Nombre: ${firstname} ${lastname}
        Email: ${email}
        Teléfono: ${phone}
        Servicio: ${service}
        Mensaje: ${message}
      `,
      html: `
        <h1>Nuevo mensaje de contacto</h1>
        <p><strong>Nombre:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Servicio:</strong> ${service}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    });
    console.log('Email enviado con éxito:', info.messageId);
    return NextResponse.json({ message: 'Email enviado con éxito' }, { status: 200 });
  } catch (error) {
    console.error('Error al enviar email:', error);
    return NextResponse.json({ message: 'Error al enviar el email', error: error.message }, { status: 500 });
  }
}