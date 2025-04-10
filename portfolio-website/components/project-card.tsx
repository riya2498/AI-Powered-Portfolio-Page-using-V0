"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"

interface Technology {
  name: string
}

interface ProjectCardProps {
  title: string
  description: string
  detailedDescription: string
  icon: LucideIcon
  technologies: Technology[]
}

export function ProjectCard({ title, description, detailedDescription, icon: Icon, technologies }: ProjectCardProps) {
  return (
    <div className="group">
      <Card className="overflow-hidden rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl h-full">
        <CardHeader className="pb-0 p-6">
          <div className="h-48 w-full rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center mb-6 transition-all duration-300 group-hover:shadow-md">
            <Icon className="h-16 w-16 text-primary transition-transform duration-300 group-hover:scale-110" />
          </div>
          <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-2 h-10">{description}</CardDescription>
        </CardHeader>
        <CardFooter className="pt-4 p-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/5"
              >
                View Details
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <p>{detailedDescription}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {technologies.map((tech, index) => (
                    <Badge key={index} variant="outline">
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  )
}
