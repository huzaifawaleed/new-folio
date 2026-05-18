'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  business: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setError(null)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '1c13ff02-a2a4-4705-a68b-c6c26b360609',
          subject: `New inquiry from ${data.name}${data.business ? ` — ${data.business}` : ''}`,
          from_name: 'Portfolio Contact Form',
          replyto: data.email,
          ...data,
        }),
      })
      const result = await res.json()
      if (!result.success) throw new Error(result.message)
      setSubmitted(true)
      reset()
    } catch {
      setError('Something went wrong. Please try WhatsApp or email directly.')
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-[#27272a] bg-[#12121a] p-12 text-center">
        <CheckCircle size={40} className="text-emerald-400" />
        <h3 className="mt-4 text-lg font-bold text-[#fafafa]">Message Sent!</h3>
        <p className="mt-2 text-sm text-[#a1a1aa]">
          I&apos;ll get back to you within 24 hours. You can also reach me on WhatsApp for a faster
          response.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-[#a1a1aa]">
            Your Name <span className="text-[#7c3aed]">*</span>
          </label>
          <input
            id="name"
            {...register('name')}
            placeholder="Ahmad bin Khalid"
            className="w-full rounded-xl border border-[#27272a] bg-[#12121a] px-4 py-3 text-sm text-[#fafafa] placeholder-[#3f3f46] outline-none transition-all focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400" role="alert">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-[#a1a1aa]">
            Email Address <span className="text-[#7c3aed]">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            placeholder="ahmad@yourbusiness.com"
            className="w-full rounded-xl border border-[#27272a] bg-[#12121a] px-4 py-3 text-sm text-[#fafafa] placeholder-[#3f3f46] outline-none transition-all focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400" role="alert">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="business" className="mb-1.5 block text-xs font-medium text-[#a1a1aa]">
          Business Name (optional)
        </label>
        <input
          id="business"
          {...register('business')}
          placeholder="Your restaurant, salon, or company name"
          className="w-full rounded-xl border border-[#27272a] bg-[#12121a] px-4 py-3 text-sm text-[#fafafa] placeholder-[#3f3f46] outline-none transition-all focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-[#a1a1aa]">
          Message <span className="text-[#7c3aed]">*</span>
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={5}
          placeholder="Tell me about your business and what you need. What type of website? What results are you looking for?"
          className="w-full resize-none rounded-xl border border-[#27272a] bg-[#12121a] px-4 py-3 text-sm text-[#fafafa] placeholder-[#3f3f46] outline-none transition-all focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400" role="alert">{errors.message.message}</p>
        )}
      </div>

      {error && (
        <p className="rounded-xl border border-red-900/50 bg-red-950/30 px-4 py-3 text-xs text-red-400" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#a855f7] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-200 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed]"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
        {!isSubmitting && <Send size={14} />}
      </button>
    </form>
  )
}
