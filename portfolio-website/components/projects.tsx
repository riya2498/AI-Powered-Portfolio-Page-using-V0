import { Code, BookOpen, Car } from "lucide-react"
import { ProjectCard } from "./project-card"

export function Projects() {
  const projects = [
    {
      title: "AI-Powered Resume Analysis Tool",
      description: "AI-powered tool for resume screening and analysis.",
      detailedDescription:
        "Built with LangChain, Pinecone, and Streamlit. Helped automate resume screening using semantic search with OpenAI embeddings.",
      icon: Code,
      technologies: [
        { name: "LangChain" },
        { name: "Pinecone" },
        { name: "Streamlit" },
        { name: "OpenAI" },
        { name: "NLP" },
      ],
    },
    {
      title: "Book Narrative Impact Analysis",
      description: "Research on narrative structure and book popularity.",
      detailedDescription:
        "Analyzed 25,000 books using KLD and regression models to study narrative structure's impact on popularity. Identified predictors using OLS and LASSO.",
      icon: BookOpen,
      technologies: [
        { name: "Data Analysis" },
        { name: "Regression Models" },
        { name: "KLD" },
        { name: "OLS" },
        { name: "LASSO" },
      ],
    },
    {
      title: "Crash Data Integration & Analysis",
      description: "Large-scale crash data integration project.",
      detailedDescription:
        "Integrated 3M+ crash records using Talend and Azure SQL Server, automated ETL, and implemented SCD2 for trend analysis and decision support.",
      icon: Car,
      technologies: [
        { name: "Talend" },
        { name: "Azure SQL" },
        { name: "ETL" },
        { name: "SCD2" },
        { name: "Data Integration" },
      ],
    },
  ]

  return (
    <section id="projects" className="container py-24 space-y-8 scroll-mt-20">
      <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            detailedDescription={project.detailedDescription}
            icon={project.icon}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  )
}
