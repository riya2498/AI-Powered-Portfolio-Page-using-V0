"use client"
import { Briefcase, GraduationCap, Users, Microscope } from "lucide-react"
import { useEffect, useState } from "react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("experience")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const experiences = [
    {
      title: "Data Scientist Intern",
      company: "Mellicell",
      period: "Mar 2025 – Present",
      icon: Microscope,
      variant: "mixed" as const,
      achievements: [
        "Building a spatial analysis pipeline to detect cell alignment patterns in microscopy images by reconstructing hexagonal grid layouts from centroid-level measurement data",
        "Queried experimental metadata from BigQuery and automated image retrieval from Google Cloud Storage using gsutil for downstream processing and visualization",
        "Developing Python scripts to simulate, and validate grid detection logic, for fast iteration prior to full data integration",
      ],
      technologies: [
        "Python",
        "BigQuery",
        "Google Cloud Storage",
        "Computer Vision",
        "Spatial Analysis",
        "Data Pipeline",
      ],
    },
    {
      title: "Graduate Teaching Assistant",
      company: "Northeastern University, USA",
      period: "Sept 2024 – May 2025",
      icon: GraduationCap,
      variant: "dark" as const,
      achievements: [
        "Mentored 100+ students in SQL transaction management and data warehousing, providing guidance, structured assessments, and project feedback using Azure SQL, Docker, and Snowflake",
        "Spearheaded lab sessions and class discussions with the professor, implementing a monthly participation grading system that increased student engagement by 67% and fostering peer learning initiatives",
      ],
      technologies: ["Azure SQL", "Docker", "Snowflake", "SQL Server", "Database Design", "Data Warehousing"],
    },
    {
      title: "Graduate Research Assistant",
      company: "Northeastern University, USA",
      period: "May 2024 – Aug 2024",
      icon: Users,
      variant: "mixed" as const,
      achievements: [
        "Optimized ad content classification by developing a DistilBERT-based model, achieving 75% annotation agreement on 150+ video ads, enabling data-driven marketing decisions",
        "Built Tableau dashboard to visualize ad classification results, highlighting key content themes, and audience engagement patterns to optimize campaign strategies",
        "Analyzed 1,000+ survey responses using Tableau to explore potential links between high-stress and shift-based job roles on sleep disorders",
      ],
      technologies: [
        "DistilBERT",
        "Tableau",
        "Python",
        "Statistical Analysis",
        "Machine Learning",
        "Data Visualization",
      ],
    },
    {
      title: "Data Engineer",
      company: "LTIMindtree, India",
      period: "Jan 2021 - Jun 2023",
      icon: Briefcase,
      variant: "light" as const,
      achievements: [
        "Streamlined policy data processing by 40% through optimized ELT pipelines in Azure Data Factory, and Apache Airflow, enabling real-time access to 10M+ transactions",
        "Improved claims validation efficiency by 35% through optimized Snowflake & Azure Synapse transformations, reducing delays in insurance payouts",
        "Minimized policy reporting disruptions by 30% by automating end-to-end data workflows in Apache Airflow and Python",
        "Accelerated dashboard response times by 40%, streamlining policy assessments for policy underwriters through optimized SQL queries",
        "Optimized cloud storage efficiency by implementing data partitioning, compression, and indexing strategies in Snowflake, reducing computation costs by 20%",
      ],
      technologies: ["Azure Data Factory", "Apache Airflow", "Snowflake", "Azure Synapse", "Python", "SQL", "Power BI"],
    },
  ]

  const getCardClasses = (variant: string) => {
    switch (variant) {
      case "light":
        return "glass-card border-elegant"
      case "dark":
        return "glass-card border-elegant"
      default:
        return "glass-card border-elegant"
    }
  }

  return (
    <section id="experience" className="py-24 scroll-mt-20 relative">
      <div className="absolute inset-0 neural-network-bg"></div>

      <div className="container relative z-10 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-6 py-3 glass-elegant rounded-full">
            <Briefcase className="h-4 w-4 text-tech-purple animate-pulse" />
            <span className="text-sm font-medium text-gradient-elegant">Professional Journey</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gradient-tech">Work Experience</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 px-4">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`overflow-hidden transition-all duration-500 hover:elegant-glow ${getCardClasses(exp.variant)}`}
            >
              <CardHeader className="pb-6">
                <div className="flex items-start gap-4">
                  <div className="bg-neural-elegant p-3 rounded-xl">
                    <exp.icon className="h-6 w-6 text-gradient-tech" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <CardTitle className="text-xl text-gradient-elegant">{exp.title}</CardTitle>
                      <Badge variant="outline" className="w-fit glass-elegant border-purple-400/30">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground font-medium mb-4">{exp.company}</p>

                    <div className="space-y-2 mb-6">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-gradient-tech">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="glass-elegant border-purple-400/30 hover:border-purple-400 transition-all duration-300 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
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
