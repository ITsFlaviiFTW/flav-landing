import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import ApiPreview from "./api-preview"
import DemoModal from "./demo-modal"
import ProjectDetailModal from "./project-detail-modal"
import TechIcon from "./tech-icon"

interface ProjectCardProps {
  title: string
  description: string
  longDescription: string
  image: string
  screenshots: string[]
  githubUrl: string
  demoUrl?: string
  apiPreviewUrl?: string
  tags: string[]
  challenges: string[]
  learnings: string[]
}

export default function ProjectCard({
  title,
  description,
  longDescription,
  image,
  screenshots,
  githubUrl,
  demoUrl,
  apiPreviewUrl,
  tags,
  challenges,
  learnings,
}: ProjectCardProps) {
  const projectData = {
    title,
    description,
    longDescription,
    image,
    screenshots,
    technologies: tags,
    challenges,
    learnings,
    githubUrl,
    demoUrl,
  }

  return (
    <Card className="overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <ProjectDetailModal project={projectData}>
        <div className="relative aspect-video overflow-hidden cursor-pointer">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <span className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium">
              Click for details
            </span>
          </div>
        </div>
      </ProjectDetailModal>

      <CardContent className="p-6">
        <ProjectDetailModal project={projectData}>
          <h3 className="font-semibold text-xl mb-2 group-hover:text-blue-600 transition-colors duration-300 cursor-pointer">
            {title}
          </h3>
        </ProjectDetailModal>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-3 py-1 text-xs font-medium text-blue-800 dark:text-blue-200 ring-1 ring-inset ring-blue-500/20 hover:scale-105 transition-transform duration-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TechIcon name={tag} className="h-3 w-3" />
              {tag}
            </span>
          ))}
        </div>

        {apiPreviewUrl && <ApiPreview apiUrl={apiPreviewUrl} title="Recent Jobs" />}
      </CardContent>

      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            Code
          </a>
        </Button>

        {demoUrl && (
          <DemoModal title={title} demoUrl={demoUrl}>
            <Button size="sm" className="flex-1">
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </Button>
          </DemoModal>
        )}
      </CardFooter>
    </Card>
  )
}
