import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import { ThemeToggle } from "@/components/theme-toggle"
import FloatingElements from "./components/floating-elements"
import StatsSection from "./components/stats-section"
import MobileNav from "./components/mobile-nav"

export default function Page() {
  const projects = [
    {
      title: "Job Tracker Platform",
      description: "A comprehensive job application tracking system built with Django and React.",
      longDescription:
        "A full-featured job application tracking platform that helps users manage their job search process. Built with Django REST API backend and React frontend, featuring real-time updates, analytics, and team collaboration.",
      image: "/placeholder.svg?height=400&width=600",
      screenshots: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      githubUrl: "https://github.com/flavstudios/job-tracker",
      demoUrl: "https://demo-jobtracker.flavstudios.dev",
      apiPreviewUrl: "https://demo-jobtracker.flavstudios.dev/api/jobs",
      tags: ["Django", "React", "PostgreSQL", "TailwindCSS"],
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
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration.",
      longDescription:
        "A modern e-commerce solution featuring product management, shopping cart, secure payments, and admin dashboard. Built with Next.js 14, Prisma ORM, and integrated with Stripe for payment processing.",
      image: "/placeholder.svg?height=400&width=600",
      screenshots: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      githubUrl: "https://github.com/flavstudios/ecommerce",
      demoUrl: "https://demo-ecommerce.flavstudios.dev",
      tags: ["Next.js", "Prisma", "Stripe", "TypeScript"],
      challenges: [
        "Implementing secure payment processing",
        "Managing complex product variants and inventory",
        "Optimizing performance for large product catalogs",
      ],
      learnings: [
        "Payment gateway integration best practices",
        "Database optimization for e-commerce",
        "SEO optimization for product pages",
      ],
    },
    {
      title: "AI Chat Interface",
      description: "An AI-powered chat interface with natural language processing capabilities.",
      longDescription:
        "A sophisticated chat application powered by OpenAI's GPT models, featuring conversation memory, custom prompts, and integration with various AI services. Built with modern React patterns and real-time messaging.",
      image: "/placeholder.svg?height=400&width=600",
      screenshots: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      githubUrl: "https://github.com/flavstudios/ai-chat",
      demoUrl: "https://demo-aichat.flavstudios.dev",
      tags: ["OpenAI", "Next.js", "TailwindCSS", "Socket.io"],
      challenges: [
        "Managing conversation context and memory",
        "Implementing streaming responses for better UX",
        "Handling rate limits and API costs effectively",
      ],
      learnings: [
        "AI API integration and optimization",
        "Real-time streaming data handling",
        "Cost-effective AI application architecture",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center px-4">
          <div className="mr-4 flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                flavstudios.dev
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link
                href="#about"
                className="transition-colors hover:text-foreground/80 hover:scale-105 transform duration-200"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="transition-colors hover:text-foreground/80 hover:scale-105 transform duration-200"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="transition-colors hover:text-foreground/80 hover:scale-105 transform duration-200"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="outline"
              className="hidden sm:inline-flex hover:scale-105 transform transition-all duration-200 bg-transparent"
            >
              Resume
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 relative">
        <FloatingElements />
        <section id="about" className="relative py-12 md:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20"></div>
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-4xl mx-auto">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
                  Full Stack Developer
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 animate-fade-in">
                  Building digital experiences with modern technologies. Focused on creating elegant solutions to
                  complex problems.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up">
                <Link href="https://github.com" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:scale-110 hover:rotate-12 transform transition-all duration-300 bg-transparent"
                  >
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:scale-110 hover:rotate-12 transform transition-all duration-300 bg-transparent"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://twitter.com" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:scale-110 hover:rotate-12 transform transition-all duration-300 bg-transparent"
                  >
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="mailto:hello@flavstudios.dev">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:scale-110 hover:rotate-12 transform transition-all duration-300 bg-transparent"
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 flavstudios.dev. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
