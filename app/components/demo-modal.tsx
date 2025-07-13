"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ExternalLink, Loader2 } from "lucide-react"
import { useState } from "react"

interface DemoModalProps {
  title: string
  demoUrl: string
  children: React.ReactNode
}

export default function DemoModal({ title, demoUrl, children }: DemoModalProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-6xl w-[95vw] h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {title} - Live Demo
            <Button variant="ghost" size="sm" asChild>
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </DialogTitle>
        </DialogHeader>
        <div className="relative flex-1 rounded-lg border overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <Loader2 className="h-8 w-8 animate-spin" />
              <span className="ml-2">Loading demo...</span>
            </div>
          )}
          <iframe
            src={demoUrl}
            className="w-full h-full rounded-lg"
            onLoad={() => setIsLoading(false)}
            title={`${title} Demo`}
          />
          <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">Read-only demo</div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
