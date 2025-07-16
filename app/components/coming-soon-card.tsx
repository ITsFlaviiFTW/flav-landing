import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Clock, Code2 } from "lucide-react"
import TechIcon from "./tech-icon"

interface ComingSoonCardProps {
  title: string
  description: string
  tags: string[]
  expectedDate?: string
}

export default function ComingSoonCard({ title, description, tags, expectedDate }: ComingSoonCardProps) {
  return (
    <Card className="overflow-hidden group transition-all duration-500 border-0 bg-white/5 backdrop-blur-sm relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>

      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <Clock className="h-12 w-12 text-white/30 mx-auto mb-3" />
          <span className="text-white/50 text-sm font-medium">Coming Soon</span>
        </div>
      </div>

      <CardContent className="p-6 relative">
        <h3 className="font-semibold text-xl mb-2 text-white">{title}</h3>
        <p className="text-sm text-white/70 mb-4 line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TechIcon name={tag} className="h-3 w-3" />
              {tag}
            </span>
          ))}
        </div>

        {expectedDate && (
          <div className="text-xs text-white/50 flex items-center gap-1">
            <Clock className="h-3 w-3" />
            Expected: {expectedDate}
          </div>
        )}
      </CardContent>

      <CardFooter className="p-6 pt-0 flex gap-2">
        <div className="flex-1 flex items-center justify-center py-2 px-4 rounded-md bg-white/5 border border-white/10 text-white/50 text-sm">
          <Code2 className="h-4 w-4 mr-2" />
          In Development
        </div>
      </CardFooter>
    </Card>
  )
}
