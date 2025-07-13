"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { submitContactForm } from "../actions"

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    setPending(true)
    try {
      const response = await submitContactForm(formData)
      setMessage(response.message)
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
    } finally {
      setPending(false)
    }
  }

  return (
    <Card className="p-6 hover:shadow-2xl transition-all duration-500 border-0 bg-white/5 backdrop-blur-sm">
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
            Name
          </label>
          <Input
            id="name"
            name="name"
            required
            className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            required
            className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
          />
        </div>
        <Button
          type="submit"
          className="w-full hover:scale-105 transform transition-all duration-200 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
          disabled={pending}
        >
          {pending ? "Sending..." : "Send Message"}
        </Button>
        {message && <p className="text-sm text-center mt-4 text-white/70">{message}</p>}
      </form>
    </Card>
  )
}
