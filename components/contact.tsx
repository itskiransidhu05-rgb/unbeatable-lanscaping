
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, CheckCircle2, Send } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "0426 291 113",
    href: "tel:0426291113",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@unbeatablelandscapingandconstruction.com",
    href: "mailto:info@unbeatablelandscapingandconstruction.com",
  },
]

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Form data nikalne ka asaan tarika
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm">
            Contact Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Contact us today for a free consultation and estimate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-foreground text-lg mb-1">{info.title}</p>
                        <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors block break-all leading-snug">
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-card border-border shadow-lg">
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">Your message has been received.</p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                      <Input id="firstName" name="firstName" required placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                      <Input id="lastName" name="lastName" required placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                    <Input id="phone" name="phone" type="tel" placeholder="0426 291 113" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" name="email" type="email" required placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea id="message" name="message" required placeholder="Project details..." rows={5} />
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : <span className="flex items-center gap-2">Send Message <Send className="h-4 w-4" /></span>}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}