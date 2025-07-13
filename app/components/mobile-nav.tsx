"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          <Link
            href="#about"
            className="block px-2 py-1 text-lg transition-colors hover:text-foreground/80"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="#projects"
            className="block px-2 py-1 text-lg transition-colors hover:text-foreground/80"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="block px-2 py-1 text-lg transition-colors hover:text-foreground/80"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <Button variant="outline" className="mt-4 bg-transparent">
            Resume
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
