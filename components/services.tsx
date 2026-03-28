"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ArrowRight, CheckCircle2 } from "lucide-react"

// --- 1. FIXED SERVICES DATA ---
const services = [
  {
    id: 1,
    title: "Landscaping",
    shortDesc: "Enhancing your home’s curb appeal through a thoughtful blend of plants, hardscaping, and design.",
    image: "/images/images1/frontyard landscaping.jpeg",
    fullDesc: "Transforming your yard into a welcoming landscape balances aesthetic beauty with functional design to enhance your home’s curb appeal. By integrating a mix of vibrant perennial plants, structured hardscaping like stone pathways, and soft ambient lighting, you can create a space that feels both polished and inviting. A well-planned front yard not only serves as a beautiful first impression for guests but also adds significant value and character to your entire property.",
    features: ["Softscaping", "Hardscaping", "Lighting & Irrigation", "Acoustic & Visual Focal Points", "Ground Cover"],
  },
  {
    id: 2,
    title: "Decking",
    shortDesc: "A versatile outdoor platform that expands your living space while providing a seamless transition between your home and nature.",
    image: "/images/de2.jpeg", // Isse main thumbnail banaya hai
    gallery: [ // Isme aapki saari images hain
      "/images/de2.jpeg",
      "/images/de6.jpeg",
      "/images/de7.jpeg",
      "/images/de1.jpeg",
    ],
    fullDesc: "Quality decking serves as a versatile outdoor extension of your living space, providing a durable and level foundation for relaxation, dining, and social gatherings. By integrating premium materials like natural timber or low-maintenance composites, a well-crafted deck seamlessly bridges the gap between your home’s interior and the surrounding landscape.",
    features: ["Decking Surface", "Access & Stairs", "Railing", "Decking Lighting"],
  },
  {
    id: 3,
    title: "Hardscape Construction",
    shortDesc: "Patios, walkways, retaining walls, and outdoor living spaces.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    fullDesc: "Transform your outdoor area with beautiful and durable hardscape features. Our skilled craftsmen create stunning patios, elegant walkways, and functional retaining walls using premium materials.",
    features: ["Paver Patios", "Stone Walkways", "Retaining Walls", "Fire Pits", "Outdoor Kitchens"],
  },
  {
    id: 4,
    title: "Fencing",
    shortDesc: "Enhancing your home’s security and privacy with stylish, durable boundary solutions.",
    image: "/images/images1/modern fencing.jpeg",
    fullDesc: "Our premium fencing solutions provide the perfect balance of security, privacy, and curb appeal. Whether you prefer the classic look of natural wood, the modern durability of vinyl, or the sleek strength of ornamental metal, we design and install custom boundaries that complement your home's architecture.",
    features: ["Custom Design", "Premium Materials", "Robust Framework", "Finishing", "Cleanup"],
  },
  {
    id: 5,
    title: "Concrete & Steps",
    // FIXED: Removed brackets [] from shortDesc
    shortDesc: "We specialize in high-strength reinforced concrete and custom-engineered steps designed for maximum durability and modern curb appeal.",
    image: "/images/concrete4.jpeg",
    fullDesc: "Our Concrete and Custom Step solutions combine high-strength engineering with modern design to enhance your property's durability and curb appeal. From professional site excavation and compacted sub-base preparation to the final pour of reinforced concrete, we ensure every surface is built to prevent shifting and handle heavy traffic. Whether you prefer a slip-resistant broom finish, decorative exposed aggregate, or a sleek smooth trowel look, our custom-engineered steps are built to strict safety codes with precise leveling for optimal water drainage. We deliver a seamless, long-lasting finish that provides both structural integrity and a premium look for your driveways, pathways, and entrances.",
    features: ["Driveways and Pathways", "Custom Entrance Steps", "Decorative Finishes", "Retaining Walls", "Drainage Solutions", "Reinforcement & Curing"],
  },
  {
    id: 6,
    title: "Residential Construction",
    shortDesc: "Home additions, renovations, and new construction projects.",
    image: "/images/images1/residential landscaping.jpeg",
    fullDesc: "Build your dream home or expand your current one with our residential construction services. Our experienced team handles everything from foundation to finish with attention to detail and quality craftsmanship.",
    features: ["Home Additions", "Remodels", "Basement Finishing", "Deck & Porch", "Garage Building"],
  },
  {
    id: 7,
    title: "Garden & Lawn Design",
    shortDesc: "Creating a lush, harmonious outdoor environment that balances greenery with functional spaces.",
    image: "/images/images1/modern garden design.jpeg",
    fullDesc: "Transforming your outdoor space with a professional garden and lawn design blends lush greenery with functional open areas. We integrate premium turf, seasonal plantings, and efficient irrigation to create a vibrant, year-round landscape. Our designs focus on sustainable, low-maintenance beauty that perfectly complements your home’s architecture and boosts its overall value.",
    features: ["Premium Turf", "Artistic Bordering", "Seasonal Strategy", "Custom Planning"],
  },
]

export function Services() {
  const [selectedService, setSelectedService] = useState<any>(null)

  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm">Our Services</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Professional Services for Every Need
          </h2>
          <p className="text-muted-foreground text-lg">
            From landscape design to full-scale construction, we offer comprehensive services to transform your property.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl cursor-pointer bg-card"
              onClick={() => setSelectedService(service)}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-background">{service.title}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.shortDesc}</p>
                <Button variant="link" className="p-0 h-auto text-primary font-semibold">
                  Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* --- 2. UPDATED DIALOG WITH GALLERY SUPPORT --- */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{selectedService?.title}</DialogTitle>
            <DialogDescription>Service details and gallery</DialogDescription>
          </DialogHeader>
          
          {selectedService && (
            <div className="space-y-6">
              {/* Image / Gallery Section */}
              <div className={`grid gap-4 ${selectedService.gallery ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {selectedService.gallery ? (
                  selectedService.gallery.map((img: string, index: number) => (
                    <div key={index} className="relative h-48 rounded-lg overflow-hidden border">
                      <Image src={img} alt="Gallery image" fill className="object-cover hover:scale-105 transition-transform" />
                    </div>
                  ))
                ) : (
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                    <Image src={selectedService.image} alt={selectedService.title} fill className="object-cover" />
                  </div>
                )}
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">About This Service</h4>
                <p className="text-muted-foreground leading-relaxed">{selectedService.fullDesc}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">What's Included</h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  {selectedService.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button className="flex-1" onClick={() => {
                  setSelectedService(null)
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }}>
                  Get Free Quote
                </Button>
                <Button variant="outline" onClick={() => setSelectedService(null)}>Close</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}