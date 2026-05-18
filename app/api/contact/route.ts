import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  business: z.string().optional(),
  message: z.string().min(10),
})

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await req.json()
    const { name, email, business, message } = schema.parse(body)

    await resend.emails.send({
      from: 'Portfolio Contact <noreply@huzaifawaleed.dev>',
      to: 'huzaifainaam225@gmail.com',
      subject: `New inquiry from ${name}${business ? ` — ${business}` : ''}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 24px; background: #0a0a0f; color: #fafafa;">
          <h2 style="color: #a855f7; margin-bottom: 24px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #71717a; width: 120px;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #71717a;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #a855f7;">${email}</a></td></tr>
            ${business ? `<tr><td style="padding: 8px 0; color: #71717a;">Business</td><td style="padding: 8px 0;">${business}</td></tr>` : ''}
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #12121a; border-radius: 8px; border-left: 3px solid #7c3aed;">
            <p style="color: #71717a; margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;">Message</p>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
      replyTo: email,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
    }
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
