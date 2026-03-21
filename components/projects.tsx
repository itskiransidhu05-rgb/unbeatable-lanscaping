"use client"

import { useState, useEffect } from "react" // useEffect add kiya
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { MapPin, Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Poolside Landscaping",
    category: "Landscaping",
    thumbnail: "images/images1/poolside landscaping.jpeg",
    images: [
      "images/images1/poolside landscaping.jpeg",
      "images/poolside1.jpeg",
      "images/poolside2.jpeg",
      "images/poolside3.jpeg",
    ],
    description: "Successfully transformed a standard pool area into a high-end, resort-style retreat. This project involved a seamless blend of hardscaping and softscaping, featuring non-slip porcelain pavers and custom timber decking for a clean, modern finish. We installed a curated selection of salt-tolerant plants and ornamental grasses to provide a lush, tropical feel while maintaining low maintenance. The project was completed with integrated drainage solutions and strategic ambient lighting, ensuring the space is both functional and visually stunning, day or night.",
  },
  {
    id: 2,
    title: "Residential Landscaping",
    category: "Landscaping",
    thumbnail: "images/residential1.jpeg",
    images: [
      "images/residential1.jpeg",
      "images/residential2.jpeg",
    ],
    description: "Successfully transformed a private residential outdoor space into a functional and aesthetically pleasing sanctuary. This project involved a complete overhaul of the property’s frontage and backyard, merging modern architectural lines with lush, organic greenery. We executed a comprehensive plan that included precision turf installation, curated ornamental planting, and structural hardscaping to create distinct zones for relaxation and aesthetic appeal. The result is a low-maintenance, high-impact landscape that significantly enhances the property’s curb appeal and provides a serene environment for the homeowners.",
  },
  {
    id: 3,
    title: "Decking", // Fixed: Removed extra space before 'Decking'
    category: "Decking",
    thumbnail: "images/images1/front yard landscaping.jpeg",
    images: [
      "images/deck2.jpeg",
      "images/images1/front yard landscaping.jpeg",
      "images/decking1.jpeg",
      "images/deck1.jpeg",
    ],
    description: " Engineered a premium outdoor living platform using high-grade, weather-resistant materials to extend the home’s footprint. From the initial structural framing to the final oiling, our focus remained on precision and durability. This custom deck serves as a versatile entertainment zone, featuring a hidden-fastening system for a clean, professional finish that complements the surrounding landscape.",
  },
  {
    id: 4,
    title: "Modern Garden Design",
    category: "Landscaping",
    thumbnail: "images/images1/modern garden design.jpeg",
    images: [
      "images/images1/modern garden design.jpeg",
      "images/garden1.jpeg",
      "images/garden2.jpeg",
      "images/garden3.jpeg",
    ],
    description: "Executed a minimalist garden vision centered on architectural symmetry and a sophisticated material palette. Moving away from traditional clutter, we utilized large-format pavers and sculptural specimen trees to create a sense of openness and luxury. Automated irrigation and strategic ambient lighting were integrated to ensure the space remains effortless and visually stunning year-round.",
  },
  {
    id: 5,
    title: "Backyard Landscaping",
    category: "Landscaping",
    thumbnail: "images/images1/backyard landscaping.jpeg",
    images: [
      "images/images1/backyard landscaping.jpeg",
      "images/backyard1.jpeg",
      "images/backyard2.jpeg",
      "images/backyard3.jpeg",
    ],
    description: "Reimagined an underutilized backyard into a multi-functional private sanctuary. We established distinct zones for entertainment and relaxation, incorporating high-quality sod and timber-bordered garden beds. By focusing on privacy screening and efficient drainage, we turned the space into a secluded retreat that balances modern functionality with natural beauty.",
  },
  {
    id: 6,
    title: "FrontYard Landscaping",
    category: "Landscaping",
    thumbnail: "images/frontyard2.jpeg",
    images: [
      "images/frontyard1.jpeg",
      "images/frontyard2.jpeg",
      "images/frontyard3.jpeg",
    ],
    description: " Elevated the property’s curb appeal by designing a sophisticated and welcoming front entrance. This project focused on architectural symmetry, combining sharp hardscape lines with a lush, green foreground. We installed premium turf and structured planter beds, framed by modern timber edging to create a clean separation from the driveway. The layout was finalized with strategic uplighting on specimen trees and a minimalist pedestrian path, ensuring the home makes a bold, premium statement from the very first glance.",
  },
  {
    id: 7,
    title: "Fencing",
    category: "Construction",
    thumbnail: "images/images1/modern fencing.jpeg",
    images: [
      "images/fencing2.jpeg",
      "images/images1/modern fencing.jpeg",
      "images/fencing1.jpeg",
      "images/fencing3.jpeg",
    ],
    description: "Redefined the property’s boundary by installing a high-quality, modern fencing system that balances security with architectural style. This project utilized a combination of durable materials—such as horizontal timber slats and powder-coated metal frames—to create a sleek, linear aesthetic that complements the home’s exterior. We focused on precision alignment and structural stability, ensuring a seamless finish that provides complete privacy without compromising on airflow.",
  },
  {
    id: 8,
    title: "Outdoor",
    category: "Construction",
    thumbnail: "images/outdoor2.jpeg",
    images: ["images/outdoor1.jpeg", "images/outdoor2.jpeg"],
    description: "Designed and developed a versatile outdoor living environment that acts as a natural extension of the home’s interior. This project centered on creating a high-impact, multi-functional space by integrating premium hardscaping with lush, organic softscaping.",
  },
  {
    id: 9,
    title: "Modern Tiered Gardens",
    category: "Construction",
    thumbnail: "images/images1/modern tiered gardens.jpeg",
    images: ["images/images1/modern tiered gardens.jpeg"],
    description: "Sculpted a dynamic and multi-dimensional landscape by transforming a sloped terrain into a sophisticated tiered garden system. This project utilized a series of clean, linear retaining walls—constructed from a mix of smooth-finish concrete and natural stone.",
  },
  {
    id: 10,
    title: "Boundary Landscaping",
    category: "Landscaping",
    thumbnail: "images/images1/modern boundary landscaping.jpeg",
    images: [
      "images/boundary1.jpeg",
      "images/boundary2.jpeg",
      "images/images1/modern boundary landscaping.jpeg",
      "images/boundary3.jpeg",
    ],
    description: "Defined the property's perimeter by blending high-security structural elements with a soft, natural aesthetic.",
  },
  {
    id: 11,
    title: "Modern Frontage",
    category: "Construction",
    thumbnail: "images/images1/modern frontage.jpeg",
    images: ["images/modern1.jpeg", "images/images1/modern frontage.jpeg", "images/modern2.jpeg"],
    description: " Reimagined the face of the property by delivering a high-impact, modern frontage that serves as a bold architectural statement.",
  },
  {
    id: 12,
    title: "Turf",
    category: "Landscaping",
    thumbnail: "images/images1/elevated lawn installation.jpeg",
    images: ["images/turf1.jpeg", "images/turf2.jpeg", "images/images1/elevated lawn installation.jpeg", "images/turf3.jpeg"],
    description: "Executed a comprehensive instant-green lawn conversion by replacing uneven soil with premium, farm-grown sod.",
  },
  {
    id: 13,
    title: "Modern Boundary Walls",
    category: "Construction",
    thumbnail: "images/images1/modern boundary walls.jpeg",
    images: ["images/bh1.jpeg", "images/bh2.jpeg", "images/images1/modern boundary walls.jpeg"],
    description: "Constructed a series of sleek, architectural boundary walls that serve as a bold structural frame for the entire property.",
  },
  {
    id: 14,
    title: "Contemporary Timber Edging",
    category: "Construction",
    thumbnail: "images/images1/contemporary garden framing.jpeg",
    images: ["images/timber1.jpeg", "images/images1/contemporary garden framing.jpeg", "images/timber2.jpeg"],
    description: "Sculpted clean, architectural lines throughout the landscape by installing premium, pressure-treated timber edging.",
  },
]

const categories = ["All", "Landscaping", "Decking", "Construction"]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [activeFilter, setActiveFilter] = useState("All")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // --- NEW: FOOTER INTEGRATION LOGIC ---
  useEffect(() => {
    const handleOpenModal = (event: any) => {
      const serviceTitleFromFooter = event.detail;
      
      // Projects list mein match dhoondhna (Trim and lowercase for safety)
      const projectMatch = projects.find(
        (p) => p.title.trim().toLowerCase() === serviceTitleFromFooter.trim().toLowerCase()
      );

      if (projectMatch) {
        setSelectedProject(projectMatch);
        setCurrentImageIndex(0);
        setActiveFilter("All"); // Modal khulne par filter hatana taaki background sahi dikhe
      }
    };

    window.addEventListener("openProjectModal", handleOpenModal);
    return () => window.removeEventListener("openProjectModal", handleOpenModal);
  }, []);
  // -------------------------------------

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter)

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      )
    }
  }

  return (
    <section id="projects" className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm">Our Portfolio</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Explore our recent work and see how we've transformed properties.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={activeFilter === category 
                ? "bg-primary text-primary-foreground" 
                : "border-border hover:bg-primary hover:text-primary-foreground"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer bg-card shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => {
                setSelectedProject(project)
                setCurrentImageIndex(0)
              }}
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={`/${project.thumbnail}`} // Added leading slash for reliability
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-60" />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-background text-foreground px-6 py-3 rounded-full font-semibold flex items-center gap-2">
                    View Project <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground">{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          
          {selectedProject && (
            <div className="space-y-6">
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden bg-muted">
                <Image
                  src={`/${selectedProject.images[currentImageIndex]}`} // Added leading slash
                  alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                />
                
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => { e.stopPropagation(); prevImage() }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full transition-colors z-10"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); nextImage() }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full transition-colors z-10"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                    
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index) }}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? "bg-primary" : "bg-background/60"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              <div>
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {selectedProject.category}
                </div>
                <p className="text-muted-foreground leading-relaxed">{selectedProject.description}</p>
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button className="flex-1" onClick={() => {
                  setSelectedProject(null)
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }}>
                  Start Your Project
                </Button>
                <Button variant="outline" onClick={() => setSelectedProject(null)}>
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}