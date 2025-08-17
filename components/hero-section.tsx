"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Brain, Code2, Database, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [typedText, setTypedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = "Data Engineer & Data Scientist"

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [currentIndex, fullText])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Elegant floating particles
    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
    }> = []

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: ["#c084fc", "#60a5fa", "#f472b6"][Math.floor(Math.random() * 3)],
        opacity: Math.random() * 0.6 + 0.2,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Elegant background */}
      <div className="absolute inset-0 neural-network-bg"></div>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" />
      <div className="absolute inset-0 scan-lines-subtle"></div>

      <div className="container relative z-10 py-24 md:py-32 space-y-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Elegant header */}
              <div className="glass-elegant p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full opacity-80"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full opacity-80"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full opacity-80"></div>
                  </div>
                  <span className="text-tech-purple text-sm font-medium">~/portfolio</span>
                </div>
                <div className="code-elegant p-4">
                  <div className="text-tech-blue text-sm mb-2">
                    <span className="text-tech-pink">const</span> developer = {"{"}
                  </div>
                  <div className="text-tech-purple text-sm pl-4 mb-2">
                    name: <span className="text-yellow-300">"Riya Chaddha"</span>,
                  </div>
                  <div className="text-tech-purple text-sm pl-4 mb-2">
                    role: <span className="text-yellow-300">"{typedText}"</span>
                    <span className="animate-blink-elegant text-tech-blue">|</span>
                  </div>
                  <div className="text-tech-blue text-sm">{"}"}</div>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="text-gradient-elegant">Riya Chaddha</span>
              </h1>

              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-muted-foreground">
                  Transforming raw data into actionable insights with{" "}
                  <span className="text-gradient-tech font-semibold">Data Engineering</span> and{" "}
                  <span className="text-gradient-purple font-semibold">Advanced Analytics</span>
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Data Pipelines", "Machine Learning", "Cloud Analytics"].map((skill, i) => (
                    <div key={skill} className="glass-elegant px-4 py-2 rounded-full">
                      <span className="text-sm text-tech-purple">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 elegant-glow"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Let's Connect
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass-elegant border-2 border-purple-400/50 hover:border-purple-400 transition-all duration-300 group"
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <Code2 className="mr-2 h-5 w-5" />
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="relative">
            {/* Elegant tech visualization */}
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden glass-card elegant-glow">
              {/* Subtle tech grid */}
              <div className="absolute inset-0 tech-grid-subtle opacity-30"></div>

              {/* Elegant circuit patterns */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500">
                <defs>
                  <linearGradient id="elegant-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c084fc" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#f472b6" stopOpacity="0.6" />
                  </linearGradient>
                </defs>

                <g className="circuit-elegant">
                  <path d="M100 150 Q250 100 400 150" stroke="url(#elegant-gradient)" />
                  <path d="M100 250 Q250 300 400 250" stroke="url(#elegant-gradient)" />
                  <path d="M100 350 Q250 300 400 350" stroke="url(#elegant-gradient)" />
                </g>

                {/* Floating data points */}
                <circle cx="100" cy="150" r="4" fill="#c084fc" className="animate-pulse-elegant" />
                <circle cx="400" cy="150" r="4" fill="#60a5fa" className="animate-pulse-elegant" />
                <circle cx="100" cy="250" r="4" fill="#f472b6" className="animate-pulse-elegant" />
                <circle cx="400" cy="250" r="4" fill="#c084fc" className="animate-pulse-elegant" />
              </svg>

              {/* Tech icons with elegant styling */}
              <div className="absolute top-8 left-8 animate-float-gentle">
                <div className="p-4 bg-neural-elegant rounded-2xl">
                  <Database className="h-8 w-8 text-tech-purple" />
                </div>
              </div>

              <div className="absolute top-8 right-8 animate-float-gentle" style={{ animationDelay: "1s" }}>
                <div className="p-4 bg-terminal-elegant rounded-2xl">
                  <Brain className="h-8 w-8 text-tech-blue" />
                </div>
              </div>

              <div className="absolute bottom-8 left-8 animate-float-gentle" style={{ animationDelay: "2s" }}>
                <div className="p-4 bg-neural-elegant rounded-2xl">
                  <Code2 className="h-8 w-8 text-tech-pink" />
                </div>
              </div>

              <div className="absolute bottom-8 right-8 animate-float-gentle" style={{ animationDelay: "3s" }}>
                <div className="p-4 bg-terminal-elegant rounded-2xl">
                  <Zap className="h-8 w-8 text-tech-purple" />
                </div>
              </div>

              {/* Central element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="p-8 glass-card rounded-full elegant-glow-pink animate-pulse-elegant">
                  <Database className="h-16 w-16 text-gradient-tech" />
                </div>
              </div>

              {/* Elegant status display */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="glass-elegant px-6 py-3 rounded-full">
                  <p className="text-sm font-medium text-center text-gradient-elegant">Data Engineering & Analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
