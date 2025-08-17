"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"
import { useState } from "react"

interface Technology {
  name: string
}

interface ProjectCardProps {
  title: string
  description: string
  detailedDescription: string
  icon: LucideIcon
  technologies: Technology[]
  index?: number
}

export function ProjectCard({
  title,
  description,
  detailedDescription,
  icon: Icon,
  technologies,
  index = 0,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="group h-full" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Card className="h-full overflow-hidden glass-card border-elegant transition-all duration-500 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20">
        <CardHeader className="p-6">
          <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6 bg-tech-subtle border border-purple-400/20">
            {/* Elegant tech pattern */}
            <div className="absolute inset-0 tech-grid-subtle opacity-20"></div>

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="floating-particles"
                style={{
                  top: `${20 + (i % 3) * 30}%`,
                  left: `${20 + Math.floor(i / 3) * 40}%`,
                  animationDelay: `${i * 0.8}s`,
                }}
              ></div>
            ))}

            {/* Elegant circuit lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
              <defs>
                <linearGradient id={`project-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c084fc" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#f472b6" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              <g className={isHovered ? "circuit-elegant" : ""}>
                <path
                  d="M20 60 Q100 40 180 60"
                  stroke={`url(#project-gradient-${index})`}
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M20 100 Q100 120 180 100"
                  stroke={`url(#project-gradient-${index})`}
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M20 140 Q100 120 180 140"
                  stroke={`url(#project-gradient-${index})`}
                  strokeWidth="1.5"
                  fill="none"
                />
              </g>
            </svg>

            {/* Main Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`p-6 glass-elegant rounded-2xl transition-all duration-500 ${isHovered ? "elegant-glow" : ""}`}
              >
                <Icon className="h-12 w-12 text-gradient-tech" />
              </div>
            </div>

            {/* Elegant corner accents */}
            <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-purple-400/40 rounded-tl"></div>
            <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-blue-400/40 rounded-tr"></div>
            <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-pink-400/40 rounded-bl"></div>
            <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-purple-400/40 rounded-br"></div>
          </div>

          <CardTitle className="text-xl mb-3 text-gradient-elegant">{title}</CardTitle>
          <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
            {detailedDescription}
          </CardDescription>

          {/* Tech Stack */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gradient-tech">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className="glass-elegant border-purple-400/30 hover:border-purple-400 transition-all duration-300 text-xs"
                >
                  {tech.name}
                </Badge>
              ))}
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
  )
}
