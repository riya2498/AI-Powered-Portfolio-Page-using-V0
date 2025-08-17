"use client"

import { Brain, Database, Car, BarChart3, FileText } from "lucide-react"
import { ProjectCard } from "./project-card"

export function Projects() {
  const projects = [
    {
      title: "Statistical Analysis of Narrative Impact on Book Popularity",
      description: "OLS regression and KLD computation to analyze narrative structure's effect on book popularity",
      detailedDescription:
        "Analyzed narrative structure's effect on book popularity across 25,000 books, using Kullback-Leibler Divergence (KLD) and book-level measures like skewness, kurtosis, and sentiment volatility to assess reader engagement. Identified key predictors of book downloads by implementing OLS and LASSO regression models, providing data-driven insights for authors and publishers on factors influencing reader preferences.",
      icon: BarChart3,
      technologies: [
        { name: "Python" },
        { name: "OLS Regression" },
        { name: "LASSO Regression" },
        { name: "KLD Computation" },
        { name: "Statistical Analysis" },
        { name: "Data Science" },
      ],
    },
    {
      title: "Financial Named Entity Recognition (NER) using BERT",
      description: "Fine-tuned BERT model for financial text processing with 98.6% accuracy",
      detailedDescription:
        "Fine-tuned bert-base-cased on FiNER-ORD financial dataset using Hugging Face Transformers, achieving F1 score of 0.877 and accuracy of 98.6% through subword-aware token-label alignment and hyperparameter tuning. Deployed inference pipeline using Hugging Face's pipeline() API for real-time financial text processing and integration into downstream NLP workflows.",
      icon: FileText,
      technologies: [
        { name: "BERT" },
        { name: "Hugging Face" },
        { name: "Transformers" },
        { name: "NER" },
        { name: "Fine-tuning" },
        { name: "NLP" },
      ],
    },
    {
      title: "MedPal – AI Healthcare Assistant",
      description: "Fine-tuned FLAN-T5 model with vector retrieval for medical Q&A",
      detailedDescription:
        "Developed an AI-powered healthcare assistant using fine-tuned FLAN-T5 on curated medical QA pairs. Implemented dense vector retrieval by embedding MedQuAD dataset with MiniLM and indexing via Weaviate for contextual matching. Achieved 75% annotation agreement on medical response generation with advanced prompt engineering techniques.",
      icon: Brain,
      technologies: [
        { name: "FLAN-T5" },
        { name: "Weaviate" },
        { name: "Python" },
        { name: "Transformers" },
        { name: "Vector Embeddings" },
        { name: "NLP" },
      ],
    },
    {
      title: "AI-Powered Resume Analysis Tool",
      description: "LangChain + Pinecone vector database for intelligent candidate screening",
      detailedDescription:
        "Built an automated resume analysis system using LangChain framework and Pinecone vector database for intelligent candidate screening. Developed interactive Streamlit dashboard enabling recruiters to query candidates based on job descriptions using semantic search. Implemented OpenAI embeddings for document similarity matching, potentially reducing hiring turnaround time by 60%.",
      icon: Database,
      technologies: [
        { name: "LangChain" },
        { name: "OpenAI API" },
        { name: "Pinecone" },
        { name: "Streamlit" },
        { name: "Vector Search" },
        { name: "NLP" },
      ],
    },
    {
      title: "Motor Vehicle Crash Data Integration",
      description: "Large-scale ETL pipeline processing 3M+ crash records with SCD2 modeling",
      detailedDescription:
        "Engineered automated ETL pipelines using Talend for integrating 3M+ motor vehicle crash records into Azure SQL Server. Implemented SCD2 dimensional modeling for historical trend analysis and crash pattern identification. Built comprehensive data warehouse enabling yearly accident comparisons and high-risk zone identification for traffic safety analysis.",
      icon: Car,
      technologies: [
        { name: "Talend" },
        { name: "Azure SQL Server" },
        { name: "ETL Pipelines" },
        { name: "SCD2 Modeling" },
        { name: "Data Warehousing" },
        { name: "SQL" },
      ],
    },
  ]

  return (
    <section id="projects" className="py-24 space-y-8 scroll-mt-20 relative">
      <div className="absolute inset-0 neural-network-bg"></div>

      <div className="container relative z-10">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 glass-elegant rounded-full">
            <span className="text-sm font-medium text-gradient-elegant">Featured Work</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gradient-tech">Projects Portfolio</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              detailedDescription={project.detailedDescription}
              icon={project.icon}
              technologies={project.technologies}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
