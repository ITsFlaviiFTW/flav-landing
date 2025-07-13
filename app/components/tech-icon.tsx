import {
  Code2,
  Database,
  Globe,
  Server,
  Smartphone,
  Terminal,
  Wrench,
  Zap,
  FileCode,
  GitBranch,
  Layers,
  Package,
  Palette,
  Cloud,
} from "lucide-react"

const iconMap = {
  React: Code2,
  "Next.js": Globe,
  Django: Server,
  "Node.js": Terminal,
  TypeScript: FileCode,
  TailwindCSS: Palette,
  Prisma: Database,
  Stripe: Zap,
  "Socket.io": Smartphone,
  OpenAI: Code2,
  Python: Terminal,
  PostgreSQL: Database,
  MongoDB: Database,
  Docker: Package,
  AWS: Cloud,
  Git: GitBranch,
  Linux: Terminal,
  Nginx: Server,
  "VS Code": FileCode,
  Postman: Globe,
  Figma: Palette,
  Jest: Wrench,
  GitHub: GitBranch,
  Vercel: Globe,
  Express: Server,
  Redux: Layers,
  GraphQL: Database,
}

interface TechIconProps {
  name: string
  className?: string
}

export default function TechIcon({ name, className = "h-4 w-4" }: TechIconProps) {
  const IconComponent = iconMap[name as keyof typeof iconMap]

  if (!IconComponent) {
    return (
      <div
        className={`${className} bg-gradient-to-r from-blue-500 to-purple-500 rounded-sm flex items-center justify-center text-white text-xs font-bold`}
      >
        {name.charAt(0)}
      </div>
    )
  }

  return <IconComponent className={className} />
}
