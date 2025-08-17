import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      degree: "Master of Science in Information Systems",
      school: "Northeastern University, USA",
      period: "May 2025",
      icon: GraduationCap,
      variant: "mixed" as const,
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      school: "University of Pune, India",
      period: "May 2020",
      icon: GraduationCap,
      variant: "light" as const,
    },
  ]

  const getCardClasses = (variant: string) => {
    switch (variant) {
      case "light":
        return "card-light"
      case "dark":
        return "card-dark"
      default:
        return "card-mixed"
    }
  }

  return (
    <section id="education" className="py-16 scroll-mt-20 relative section-light">
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-purple-50/50 to-blue-50/80"></div>

      <div className="container relative z-10 space-y-8">
        <h2 className="text-4xl font-bold tracking-tight text-center text-gradient-mixed">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {education.map((edu, index) => (
            <Card
              key={index}
              className={`overflow-hidden transition-all duration-500 hover:neon-glow-mixed ${getCardClasses(edu.variant)}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="glass-mixed p-3 rounded-lg">
                    <edu.icon className="h-6 w-6 text-gradient-mixed" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2 text-gradient-mixed">{edu.degree}</CardTitle>
                    <p className="text-muted-foreground font-medium mb-2">{edu.school}</p>
                    <Badge variant="outline" className="w-fit glass-mixed">
                      {edu.period}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
