"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"
import TechIcon from "./tech-icon"

const technologies = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "TypeScript", level: 78 },
      { name: "TailwindCSS", level: 82 },
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Python", level: 78 },
      { name: "C#", level: 75 },
      { name: "C++", level: 70 },
      { name: "Django", level: 70 },
      { name: "PostgreSQL", level: 72 },
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 75 },
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "DevOps",
    skills: [
      { name: "Docker", level: 75 },
      { name: "AWS", level: 50 },
      { name: "Git", level: 85 },
      { name: "Linux", level: 75 },
      { name: "Nginx", level: 65 },
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Tools",
    skills: [
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 40 },
      { name: "GitHub", level: 90 },
    ],
    color: "from-orange-500 to-red-500",
  },
]

interface SkillBarProps {
  skill: { name: string; level: number }
  color: string
  index: number
}

function SkillBar({ skill, color, index }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="mb-4 group" onMouseEnter={() => setIsVisible(true)} style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium group-hover:text-blue-600 transition-colors duration-200 flex items-center gap-2">
          <TechIcon name={skill.name} className="h-4 w-4" />
          {skill.name}
        </span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <div
          className={`h-2 bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
          style={{
            width: isVisible ? `${skill.level}%` : "0%",
            transform: isVisible ? "scaleX(1)" : "scaleX(0)",
          }}
        />
      </div>
    </div>
  )
}

export default function TechStack() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {technologies.map((tech, techIndex) => (
        <Card
          key={tech.category}
          className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
        >
          <div className="flex items-center mb-6">
            <h3 className={`text-lg font-semibold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
              {tech.category}
            </h3>
            <div className={`ml-auto w-3 h-3 rounded-full bg-gradient-to-r ${tech.color} animate-pulse`}></div>
          </div>
          <div>
            {tech.skills.map((skill, skillIndex) => (
              <SkillBar key={skill.name} skill={skill} color={tech.color} index={skillIndex} />
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
