import 'dotenv/config';
                import { type NextRequest, NextResponse } from 'next/server';
                import { Resend } from 'resend';

                export async function POST(req: NextRequest) {
                  try {
                    const { name, email, phone, address, message, appointmentType } = await req.json();

                    if (!name || !email || !phone || !address || !message || !appointmentType) {
                      return NextResponse.json(
                        { message: 'All fields are required' },
                        { status: 400 }
                      );
                    }

                    const resend = new Resend("re_GaCag4pC_FshoGwwsnWbro7eXNFMY3Gun");

                    const mailOptions = {
                      from: 'SolarInstall Contact <onboarding@resend.dev>',
                      to: 'spl@solarstock.be',
                      reply_to: email,
                      subject: `SolarInstall Appointment Request (${name})`,
                      text: `
                SolarInstall Appointment Request
                
                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                Address: ${address}
                Appointment Type: ${appointmentType}
                
                Message:
                ${message}
                      `,
                      html: `
                <h2>SolarInstall Appointment Request</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Address:</strong> ${address}</p>
                <p><strong>Appointment Type:</strong> ${appointmentType}</p>
                <h3>Message:</h3>
                <p>${message.replace(/\n/g, '<br>')}</p>
                      `,
                    };

                    interface EmailResponse {
                      error?: { message: string } | null;
                    }

                    const response: EmailResponse = await resend.emails.send(mailOptions);
                    if (response.error) {
                      throw new Error(response.error.message);
                    }

                    return NextResponse.json(
                      { message: 'Appointment request sent successfully!' },
                      { status: 200 }
                    );
                  } catch (error) {
                    console.error('Email sending error:', error);
                    return NextResponse.json(
                      { message: 'Failed to send appointment request' },
                      { status: 500 }
                    );
                  }
                }