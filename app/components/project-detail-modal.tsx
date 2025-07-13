"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

interface ProjectDetailModalProps {
  project: {
    title: string
    description: string
    longDescription: string
    image: string
    screenshots: string[]
    technologies: string[]
    challenges: string[]
    learnings: string[]
    githubUrl: string
    demoUrl?: string
  }
  children: React.ReactNode
}

export default function ProjectDetailModal({ project, children }: ProjectDetailModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Main Image */}
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About This Project</h3>
            <p className="text-muted-foreground">{project.longDescription}</p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Screenshots */}
          {project.screenshots.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Screenshots</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={screenshot || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Challenges Faced</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>

          {/* Learnings */}
          <div>
            <h3 className="text-lg font-semibold mb-3">What I Learned</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {project.learnings.map((learning, index) => (
                <li key={index}>{learning}</li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <Button asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View Code
              </a>
            </Button>
            {project.demoUrl && (
              <Button variant="outline" asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
