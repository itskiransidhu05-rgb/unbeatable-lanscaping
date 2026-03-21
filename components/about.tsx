"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"

const highlights = [
  "Integrated Design-Build Experts",
  "End-to-End Project Management",
  "Tailored Landscape Solutions",
  "Eco-friendly practices and materials",
  "Custom solutions for every budget",
]

export function About() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="images/images1/service3.jpeg"
                alt="Our team at work"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-xl border border-border hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground"></span>
                </div>
                <div>
                  <p className="font-bold text-foreground">Your Trusted Construction Partner </p>
                  <p className="text-muted-foreground"></p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm">About Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Building Dreams, Crafting Excellence
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Unbeatable Landscaping and Construction is a premier design-build firm specializing in the seamless integration of outdoor construction and professional landscaping. We bridge the gap between structural engineering and natural aesthetics, offering comprehensive solutions that range from custom decking and masonry to vibrant garden curation. Our team combines technical construction expertise with a passion for horticulture to create outdoor environments that are as durable as they are beautiful. Whether we are pouring a new foundation or planting a seasonal retreat, we are committed to elevating your property’s value through precision and quality.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team of skilled professionals brings creativity, expertise, and passion to every 
              project. Whether you're looking to redesign your backyard, build a new addition, or 
              maintain your Residential property, we have the experience and dedication to exceed 
              your expectations.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
