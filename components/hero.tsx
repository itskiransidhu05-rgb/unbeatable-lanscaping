"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('images/images1/service1.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-sm font-medium">Trusted by 500+ Happy Customers</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6 text-balance">
            Transform Your Outdoor Space Into a{" "}
            <span className="text-secondary">Masterpiece</span>
          </h1>
          
          <p className="text-lg md:text-xl text-background/80 mb-8 max-w-2xl leading-relaxed">
            From stunning landscapes to solid construction, we bring your vision to life. 
            Experience excellence with our professional team of experts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
            >
              Get Free Estimate
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#projects")}
              className="bg-transparent border-2 border-background text-background hover:bg-background hover:text-foreground text-lg px-8 py-6"
            >
              <Play className="mr-2 h-5 w-5" />
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-background/20">
            
            <div>
              <p className="text-3xl md:text-4xl font-bold text-secondary">500+</p>
              <p className="text-background/70 text-sm md:text-base">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-secondary">100%</p>
              <p className="text-background/70 text-sm md:text-base">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-background/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
