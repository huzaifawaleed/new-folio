import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  business: z.string().optional(),
  message: z.string().min(10),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, business, message } = schema.parse(body)

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY,
        subject: `New inquiry from ${name}${business ? ` — ${business}` : ''}`,
        from_name: 'Portfolio Contact Form',
        name,
        email,
        business: business ?? '',
        message,
        replyto: email,
      }),
    })

    const result = await res.json()
    if (!result.success) throw new Error(result.message)

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
    }
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
