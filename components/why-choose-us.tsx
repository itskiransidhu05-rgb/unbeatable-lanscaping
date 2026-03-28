import { Shield, Clock, Award, Users, ThumbsUp } from "lucide-react"

const reasons = [
  
  {
    icon: Clock,
    title: "On-Time Completion",
    description: "We respect your time and always deliver projects on schedule without compromising quality.",
  },
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description: "Our skilled team uses premium materials and proven techniques for lasting results.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Over years of combined experience in landscaping and construction services.",
  },
  {
    icon: ThumbsUp,
    title: "100% Satisfaction",
    description: "We're not happy until you're happy. Our commitment to excellence shows in every project.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary font-semibold mb-3 uppercase tracking-wider text-sm">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
           Built to Last. Designed to Thrive.
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
  Discover why we are the preferred choice for integrated construction and landscape design.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6 group-hover:scale-110 transition-transform">
                <reason.icon className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-3">{reason.title}</h3>
              <p className="text-primary-foreground/70 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
