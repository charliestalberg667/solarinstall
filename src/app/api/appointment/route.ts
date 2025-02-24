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

                    const resend = new Resend("re_gYvkYCWq_BV9qcqD8kkBBgADJ6tbnRjzj");

                    const mailOptions = {
                      from: 'SolarInstall Contact <onboarding@resend.dev>',
                      to: 'gst@solarstock.be',
                      reply_to: email,
                      subject: `SolarInstall Appointment Request (${name})`,
                      text: `www.solarstock.be`,
                    };

                    interface EmailResponse {
                      error?: { message: string } | null;
                    }

                    const response: EmailResponse = await resend.emails.send(mailOptions);
                    console.log('Email response:', response);

                    if (response.error) {
                      console.error('Email sending error:', response.error.message);
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