import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, service, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Configure the email transport using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // If email credentials are not set, just simulate success for the demo
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('--- MOCK EMAIL SUBMISSION ---');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Service:', service);
      console.log('Message:', message);
      console.log('-----------------------------');
      
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      return NextResponse.json(
        { message: 'Mock submission successful! Configure EMAIL_USER and EMAIL_PASS in .env to send real emails.' },
        { status: 200 }
      );
    }

    // Set up email data
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sending to yourself
      replyTo: email,
      subject: `New Portfolio Contact: ${service} from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Service: ${service}

Message:
${message}
      `,
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Your message has been sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
