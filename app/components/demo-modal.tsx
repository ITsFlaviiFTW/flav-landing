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
      <DialogContent className="max-w-[85vw] w-[85vw] h-[90vh] max-h-[90vh] p-0 gap-0 flex flex-col">
        <DialogHeader className="px-4 py-3 border-b border-white/10 flex-shrink-0">
          <DialogTitle className="flex items-center gap-2 text-white text-base">
            {title} - Live Demo
            <Button variant="ghost" size="sm" asChild className="text-white/70 hover:text-white h-6 w-6 p-0">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </DialogTitle>
        </DialogHeader>
        <div className="relative flex-1 min-h-0 overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900/90 z-10">
              <div className="flex flex-col items-center gap-3">
                <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
                <span className="text-white/70">Loading demo...</span>
              </div>
            </div>
          )}
          <iframe
            src={demoUrl}
            className="w-full h-full border-0"
            onLoad={() => setIsLoading(false)}
            title={`${title} Demo`}
            allow="fullscreen"
          />
          <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium backdrop-blur-sm">
            Read-only demo
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
