import { Resend } from 'resend';
import { NextResponse } from 'next/server'; // Ise import karna zaroori hai

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, message } = body;

    // Email bhejte waqt await lagana zaroori hai
    const { data, error } = await resend.emails.send({
      from:  'Landscaping Inquiry <info@unbeatablelandscapingandconstruction.com.au>',
      to: ['Unbeatable Landscaping and construction info@unbeatablelandscapingandconstruction.com'],
      subject: `New Inquiry from: ${firstName} ${lastName}`,
      html: `
        <h3>New Inquiry Details:</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// OPTIONS method 405 error ko bypass karne mein madad karta hai
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}