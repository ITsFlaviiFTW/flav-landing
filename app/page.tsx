import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import ComingSoonCard from "./components/coming-soon-card"
import TechStack from "./components/tech-stack"
import { ThemeToggle } from "@/components/theme-toggle"
import FloatingElements from "./components/floating-elements"
import StatsSection from "./components/stats-section"
import MobileNav from "./components/mobile-nav"
import { ExternalLink } from "lucide-react";


export default function Page() {
  const featuredProject = {
    title: "Jovira - Job Tracker Platform",
    description: "A comprehensive job application tracking system built with Django.",
    longDescription:
      "A full-featured job application tracking platform that helps users manage their job search process. Built with Django, featuring real-time updates and analytics.",
    image: "/projects/job-tracker/main.png?height=400&width=600",
    screenshots: [
      "/projects/job-tracker/dashboard.png?height=300&width=500",
      "/projects/job-tracker/remote-jobs.png?height=300&width=500"
    ],
    githubUrl: "https://github.com/itsflaviiftw/job-tracker",
    demoUrl: "https://demo-jobtracker.flavstudios.dev",
    websiteUrl: "https://jobtracker.flavstudios.dev",
    tags: ["Django", "MySQL", "TailwindCSS"],
    challenges: [
      "Implementing real-time notifications with WebSockets",
      "Designing a scalable database schema for complex job data",
      "Creating responsive charts and analytics dashboard",
    ],
    learnings: [
      "Advanced Django REST framework patterns",
      "Real-time data synchronization techniques",
      "User experience design for productivity apps",
    ],
  }

  const comingSoonProjects = [
    {
      title: "Prava - English Language Learning App",
      description: "An interactive language learning platform with gamified lessons and progress tracking.",
      longDescription:
        "A comprehensive language learning application featuring interactive lessons, vocabulary building, pronunciation practice, and progress tracking. Built with Django backend and modern JavaScript frontend with gamification elements.",
      image: "/placeholder.svg?height=400&width=600",
      screenshots: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      githubUrl: "https://github.com/itsflaviiftw/english-web",
      tags: ["React", "JavaScript", "TailwindCSS", "MySQL"],
      challenges: [
        "Implementing spaced repetition algorithms for vocabulary retention",
        "Creating interactive pronunciation assessment features",
        "Designing gamification systems to maintain user engagement",
      ],
      learnings: [
        "Educational technology design patterns",
        "Audio processing and speech recognition integration",
        "User engagement and retention strategies",
      ],
      isComingSoon: true,
      expectedDate: "Q3 2025",
    },
    {
      title: "Real-Time Collaboration Platform",
      description: "A multi-tenant collaboration platform with real-time document editing and team management.",
      longDescription:
        "An advanced collaboration platform featuring real-time document editing, video conferencing, project management, and team analytics. Built with Django Channels for WebSocket support, Redis for caching, and React for the frontend.",
      image: "/placeholder.svg?height=400&width=600",
      screenshots: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      githubUrl: "https://github.com/itsflaviiftw/collaboration-platform",
      tags: ["Django", "Django Channels", "Redis", "React", "WebRTC"],
      challenges: [
        "Implementing operational transformation for real-time editing",
        "Managing WebSocket connections at scale with Django Channels",
        "Building secure multi-tenant architecture with row-level security",
      ],
      learnings: [
        "Real-time collaboration algorithms and conflict resolution",
        "WebSocket scaling and connection management",
        "Multi-tenant SaaS architecture patterns",
      ],
      isComingSoon: true,
      expectedDate: "Q4 2025",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-x-hidden">
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/30">
        <div className="container mx-auto flex h-14 items-center px-4">
          <div className="mr-4 flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                flavstudios.dev
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="text-white/80 hover:text-white hover:scale-105 transform duration-200">
                About
              </Link>
              <Link href="#projects" className="text-white/80 hover:text-white hover:scale-105 transform duration-200">
                Projects
              </Link>
              <Link href="#contact" className="text-white/80 hover:text-white hover:scale-105 transform duration-200">
                Contact
              </Link>
            </nav>
            <div className="ml-auto flex items-center space-x-2">
              <ThemeToggle />
            <Button
              asChild
              variant="outline"
              className="inline-flex hover:scale-105 transform transition-all duration-200 bg-white/5 border-white/10 text-white hover:bg-white/10"
            >
              <a
                href="/resume/FlaviusPorumbiel_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
            <MobileNav />
          </div>
        </div>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 relative">
        <FloatingElements />
        <section id="about" className="relative py-12 md:py-24 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-4xl mx-auto">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                  Full Stack Developer
                </h1>
                <p className="mx-auto max-w-[700px] text-white/70 md:text-xl animate-fade-in">
                  Building digital experiences with modern technologies. Focused on creating elegant solutions to
                  complex problems.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up">
                <Link href="https://github.com/ITsFlaviiFTW" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:scale-110 hover:rotate-12 transform transition-all duration-300 bg-white/5 border-white/10 text-white hover:bg-white/10"
                  >
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/flavius-porumbiel/" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:scale-110 hover:rotate-12 transform transition-all duration-300 bg-white/5 border-white/10 text-white hover:bg-white/10"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:flaviusporumbiel@gmail.com">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:scale-110 hover:rotate-12 transform transition-all duration-300 bg-white/5 border-white/10 text-white hover:bg-white/10"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              <ProjectCard {...featuredProject} />
              {comingSoonProjects.map((project) => (
                <ComingSoonCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Tech Stack
            </h2>
            <div className="max-w-6xl mx-auto">
              <TechStack />
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto">
          <StatsSection />
        </div>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-black/20">
        <div className="container mx-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-white/60">© 2025 flavstudios.dev. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4 text-white/60 hover:text-white/80" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 text-white/60 hover:text-white/80" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
