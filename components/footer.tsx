"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram,  ArrowUp } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
]

const services = [
  "Poolside Landscaping",
  "Residential Landscaping",
  "Decking",
  "Modern Garden Design",
  "Backyard Landscaping",
  "Frontyard Landscaping",
  "Fencing",
  "Outdoor",
  "Modern Tiered Gardens",
  "Boundary Landscaping",
  "Modern Frontage",
  "Turf",
  "Modern Boundary Walls",
  "Contemporary Timber edging",
  "Concrete & Steps",
]

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/share/17F8vbmb9N/?mibextid=wwXIfr", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleServiceClick = (serviceTitle: string) => {
    // 1. Pehle Projects section tak scroll karein
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }

    // 2. Ek custom event bhejien taaki Projects section modal khol de
    setTimeout(() => {
      const event = new CustomEvent("openProjectModal", { detail: serviceTitle })
      window.dispatchEvent(event)
    }, 500) // Thoda delay taaki scroll complete ho jaye
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo.jpeg"
                alt="Logo"
                width={60}
                height={60}
                className="rounded-lg"
              />
              <div>
                <p className="font-bold text-background text-lg leading-tight">Unbeatable</p>
                <p className="text-xs text-background/70">Landscaping & Construction</p>
              </div>
            </Link>
            <p className="text-background/70 leading-relaxed mb-6">
              Transforming outdoor spaces and building dreams. 
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button onClick={() => scrollToSection(link.href)} className="text-background/70 hover:text-secondary transition-colors text-left">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - UPDATED CLICK HANDLER */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button 
                    onClick={() => handleServiceClick(service)} 
                    className="text-background/70 hover:text-secondary transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4 text-background/70">
              <li>
                <p className="font-medium text-background mb-1">Phone</p>
                <a href="tel:0426291113" className="hover:text-secondary">0426 291 113</a>
              </li>
              <li>
                <p className="font-medium text-background mb-1">Email</p>
                <a href="mailto:info@unbeatablelandscapingandconstruction.com" className="hover:text-secondary break-all">
                  info@unbeatablelandscapingandconstruction.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar & Scroll Top */}
      <div className="border-t border-background/10 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-background/60 text-sm">© {new Date().getFullYear()} Unbeatable Landscaping. All rights reserved.</p>
        </div>
      </div>
      <button onClick={scrollToTop} className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center z-40">
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  )
}