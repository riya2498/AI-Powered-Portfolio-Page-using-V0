"use client"

import { Button } from "@/components/ui/button"
import { Database, BarChart3, LineChart, PieChart, Server, Layers, GitBranch } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="about"
      className="container py-24 md:py-32 space-y-8 px-4"
      style={{ paddingTop: "20px", paddingBottom: "20px" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">Hi, I'm Riya Chaddha</h1>
          <p className="text-xl text-muted-foreground">
            Data Engineer & Analyst transforming complex data into actionable insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Contact Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              View Projects
            </Button>
          </div>
        </div>
        <div className="relative h-[350px] w-full rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-primary/5 to-primary/20 flex items-center justify-center p-4">
          {/* Data Engineering Visualization */}
          <div className="w-full h-full relative">
            {/* Database Servers */}
            <div className="absolute bottom-4 left-4 flex space-x-2">
              <div className="bg-background rounded-md p-2 shadow-md">
                <Server className="h-8 w-8 text-primary" />
              </div>
              <div className="bg-background rounded-md p-2 shadow-md">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <div className="bg-background rounded-md p-2 shadow-md">
                <Layers className="h-8 w-8 text-primary" />
              </div>
            </div>

            {/* Data Flow Lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 400 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Data Flow Paths */}
              <path
                d="M50 150 L200 150 L350 80"
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary/40"
                strokeDasharray="5,5"
              />
              <path
                d="M50 170 L200 170 L350 240"
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary/40"
                strokeDasharray="5,5"
              />
              <path d="M200 150 L200 170" stroke="currentColor" strokeWidth="2" className="text-primary/40" />

              {/* Data Nodes */}
              <circle cx="50" cy="150" r="8" className="fill-primary/20 stroke-primary" strokeWidth="2" />
              <circle cx="50" cy="170" r="8" className="fill-primary/20 stroke-primary" strokeWidth="2" />
              <circle cx="200" cy="150" r="8" className="fill-primary/20 stroke-primary" strokeWidth="2" />
              <circle cx="200" cy="170" r="8" className="fill-primary/20 stroke-primary" strokeWidth="2" />
              <circle cx="350" cy="80" r="8" className="fill-primary/20 stroke-primary" strokeWidth="2" />
              <circle cx="350" cy="240" r="8" className="fill-primary/20 stroke-primary" strokeWidth="2" />
            </svg>

            {/* Charts and Visualizations */}
            <div className="absolute top-4 right-4 bg-background rounded-lg p-3 shadow-md">
              <BarChart3 className="h-10 w-10 text-primary" />
            </div>

            <div className="absolute top-24 right-4 bg-background rounded-lg p-3 shadow-md">
              <LineChart className="h-10 w-10 text-primary" />
            </div>

            <div className="absolute top-44 right-4 bg-background rounded-lg p-3 shadow-md">
              <PieChart className="h-10 w-10 text-primary" />
            </div>

            {/* Data Pipeline */}
            <div className="absolute top-4 left-4 bg-background rounded-lg p-3 shadow-md">
              <GitBranch className="h-10 w-10 text-primary" />
            </div>

            {/* Code Block */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background/90 rounded-lg p-4 shadow-lg w-48">
              <div className="space-y-2">
                <div className="h-2 bg-primary/20 rounded w-full"></div>
                <div className="h-2 bg-primary/30 rounded w-3/4"></div>
                <div className="h-2 bg-primary/20 rounded w-5/6"></div>
                <div className="h-2 bg-primary/30 rounded w-2/3"></div>
                <div className="h-2 bg-primary/20 rounded w-3/4"></div>
              </div>
            </div>

            {/* Caption */}
            <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
              <p className="text-sm font-medium">Data Engineering & Analytics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
