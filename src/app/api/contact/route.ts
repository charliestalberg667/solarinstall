import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.BUSINESS_EMAIL,
        pass: process.env.BUSINESS_EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.BUSINESS_EMAIL,
      to: process.env.BUSINESS_EMAIL,
      replyTo: email,
      subject: `SolarInstall Contact (${name}, ${email})`,
      text: `SolarInstall Contact (${name}, ${email})\nMESSAGE UNDERNEATH THIS LINE\n-------------------------------------\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 },
    );
  }
}
