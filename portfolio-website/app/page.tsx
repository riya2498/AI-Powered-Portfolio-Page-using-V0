"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ScrollToSection } from "@/components/scroll-to-section"
import { HeroSection } from "@/components/hero-section"
import { Projects } from "@/components/projects"
import { ContactForm } from "@/components/contact-form"
import { Terminal, Database, GitBranch, BarChart3, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToSection />
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-xl">RC</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#skills" className="transition-colors hover:text-foreground/80">
                Skills
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center">
              <Link href="#contact">
                <Button variant="ghost" size="sm">
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
        <section id="skills" className="bg-muted py-16 scroll-mt-20">
          <div className="container space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter text-center">Skills & Expertise</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Programming */}
              <Card className="flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">Programming</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      Python
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      Java
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      C++
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      R
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      Bash Scripting
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      JavaScript
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Databases */}
              <Card className="flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">Databases</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      MySQL
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      Oracle SQL
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      SQL Server
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      NoSQL
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      Snowflake
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Tools */}
              <Card className="flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <GitBranch className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">Tools</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      Azure Data Factory
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      Apache Airflow
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      Talend
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      Alteryx
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Visualization */}
              <Card className="flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">Visualization</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      Power BI
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      Tableau
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      Azure Synapse
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      Azure Data Lake
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card className="flex flex-col md:col-span-2 lg:col-span-1">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">Certifications</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-sm py-1 px-3 border-primary/30">
                      Machine Learning & Business Intelligence
                    </Badge>
                    <Badge variant="outline" className="text-sm py-1 px-3 border-primary/30">
                      Microsoft Azure Fundamentals
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <ContactForm />
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            © {new Date().getFullYear()} Riya Chaddha. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/riya-chaddha-73321a145"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/riya2498"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
