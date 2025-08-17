"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import { Projects } from "@/components/projects"
import { ContactForm } from "@/components/contact-form"
import { Sparkles, Brain, Code2, Database, Award, Zap, Cpu } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Suspense, useEffect, useState } from "react"
import { ClientScrollToSection } from "@/components/client-scroll-to-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={null}>
        <ClientScrollToSection />
      </Suspense>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled ? "glass-elegant border-b border-purple-400/20" : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <div className="w-8 h-8 glass-elegant rounded-lg flex items-center justify-center elegant-glow">
                <span className="font-bold text-gradient-elegant text-sm">RC</span>
              </div>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                href="#about"
                className="text-muted-foreground hover:text-tech-purple transition-colors relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="#skills"
                className="text-muted-foreground hover:text-tech-purple transition-colors relative group"
              >
                Skills
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="#experience"
                className="text-muted-foreground hover:text-tech-purple transition-colors relative group"
              >
                Experience
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="#projects"
                className="text-muted-foreground hover:text-tech-purple transition-colors relative group"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="#education"
                className="text-muted-foreground hover:text-tech-purple transition-colors relative group"
              >
                Education
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="#contact"
                className="text-muted-foreground hover:text-tech-purple transition-colors relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center">
              <Link href="#contact">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-tech-purple hover:bg-purple-500/10 transition-all duration-300"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Contact
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Skills Section */}
        <section id="skills" className="py-24 scroll-mt-20 relative">
          <div className="absolute inset-0 neural-network-bg"></div>

          <div className="container relative z-10 space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-6 py-3 glass-elegant rounded-full">
                <Zap className="h-4 w-4 text-tech-purple animate-pulse" />
                <span className="text-sm font-medium text-gradient-elegant">Technical Expertise</span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-gradient-tech">Skills & Technologies</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI/ML */}
              <Card className="glass-card border-elegant hover:elegant-glow transition-all duration-500">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-neural-elegant rounded-xl">
                      <Brain className="h-6 w-6 text-tech-purple" />
                    </div>
                    <CardTitle className="text-xl text-gradient-purple">AI/ML</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {["TensorFlow", "PyTorch", "Scikit-learn", "FLAN-T5", "DistilBERT", "Neural Networks"].map(
                      (skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="glass-elegant border-purple-400/30 hover:border-purple-400 transition-all duration-300"
                        >
                          {skill}
                        </Badge>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Programming */}
              <Card className="glass-card border-elegant hover:elegant-glow transition-all duration-500">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-terminal-elegant rounded-xl">
                      <Code2 className="h-6 w-6 text-tech-blue" />
                    </div>
                    <CardTitle className="text-xl text-gradient-tech">Programming</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Java", "C++", "R", "JavaScript", "SQL"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="glass-elegant border-blue-400/30 hover:border-blue-400 transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Data Engineering */}
              <Card className="glass-card border-elegant hover:elegant-glow transition-all duration-500">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-neural-elegant rounded-xl">
                      <Database className="h-6 w-6 text-tech-pink" />
                    </div>
                    <CardTitle className="text-xl text-gradient-elegant">Data Engineering</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {["Apache Airflow", "Azure Data Factory", "Snowflake", "ETL Pipelines", "Data Modeling"].map(
                      (skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="glass-elegant border-pink-400/30 hover:border-pink-400 transition-all duration-300"
                        >
                          {skill}
                        </Badge>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Cloud & DevOps */}
              <Card className="glass-card border-elegant hover:elegant-glow transition-all duration-500">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-terminal-elegant rounded-xl">
                      <Cpu className="h-6 w-6 text-tech-blue" />
                    </div>
                    <CardTitle className="text-xl text-gradient-tech">Cloud & DevOps</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {["Azure", "Docker", "Kubernetes", "CI/CD", "Linux", "Git"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="glass-elegant border-blue-400/30 hover:border-blue-400 transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Databases */}
              <Card className="glass-card border-elegant hover:elegant-glow transition-all duration-500">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-neural-elegant rounded-xl">
                      <Database className="h-6 w-6 text-tech-purple" />
                    </div>
                    <CardTitle className="text-xl text-gradient-purple">Databases</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {["MySQL", "PostgreSQL", "MongoDB", "Redis", "Vector DBs", "Azure SQL"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="glass-elegant border-purple-400/30 hover:border-purple-400 transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card className="glass-card border-elegant hover:elegant-glow transition-all duration-500">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-terminal-elegant rounded-xl">
                      <Award className="h-6 w-6 text-tech-pink" />
                    </div>
                    <CardTitle className="text-xl text-gradient-elegant">Certifications</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {["Azure Data Fundamentals", "Machine Learning Specialist"].map((cert) => (
                      <Badge
                        key={cert}
                        variant="outline"
                        className="glass-elegant border-pink-400/30 hover:border-pink-400 transition-all duration-300"
                      >
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <ExperienceSection />

        {/* Projects Section */}
        <Projects />

        {/* Education Section */}
        <EducationSection />

        {/* Contact Section */}
        <ContactForm />
      </main>

      <footer className="glass-elegant border-t border-purple-400/20 py-8">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            © {new Date().getFullYear()} Riya Chaddha. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/riya-chaddha-73321a145"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-tech-purple transition-colors duration-300 relative group"
            >
              LinkedIn
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="https://github.com/riya2498"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-tech-purple transition-colors duration-300 relative group"
            >
              GitHub
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
