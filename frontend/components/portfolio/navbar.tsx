"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles } from "lucide-react"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  /* --------------------------------
     Scroll state
  --------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  /* --------------------------------
     Active section detection
  --------------------------------- */
  useEffect(() => {
  const sections = navItems
    .map((item) => document.querySelector(item.href))
    .filter((section): section is HTMLElement => section !== null)

  if (sections.length === 0) return

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort(
          (a, b) =>
            b.intersectionRatio - a.intersectionRatio
        )

      if (visibleSections.length > 0) {
        const section = visibleSections[0].target as HTMLElement

        setActiveSection(section.id)
      }
    },
    {
      rootMargin: "-20% 0px -65% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    }
  )

  sections.forEach((section) => {
    observer.observe(section)
  })

  return () => {
    observer.disconnect()
  }
}, [])

  /* --------------------------------
     Close menu on resize / Escape
  --------------------------------- */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  /* --------------------------------
     Prevent background scroll
  --------------------------------- */
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* ================================
          Navbar
      ================================= */}

      <nav
        className={`
          fixed
          inset-x-0
          top-0
          z-50
          border-b
          transition-all
          duration-300
          ${
            isScrolled
              ? "border-border bg-background/80 py-3 backdrop-blur-xl"
              : "border-transparent bg-background/70 py-4 backdrop-blur-md md:py-5"
          }
        `}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* ================================
                Logo
            ================================= */}

            <a
              href="#"
              aria-label="Sufiyan Ali - Home"
              className="group flex items-center gap-2"
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary/10
                  transition-colors
                  duration-200
                  group-hover:bg-primary/15
                "
              >
                <Sparkles className="h-5 w-5 text-primary" />
              </div>

              <span
                className="
                  text-xl
                  font-bold
                  tracking-tight
                  text-foreground
                "
              >
                Sufiyan
                <span className="gradient-text">
                  Ali
                </span>
              </span>
            </a>

            {/* ================================
                Desktop Navigation
            ================================= */}

            <div
              className="
                hidden
                items-center
                gap-7
                md:flex
                lg:gap-8
              "
            >
              {navItems.map((item) => {
                const sectionId = item.href.replace("#", "")
                const isActive = activeSection === sectionId

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-current={
                      isActive ? "page" : undefined
                    }
                    className={`
                      group
                      relative
                      py-2
                      text-sm
                      font-medium
                      transition-colors
                      duration-200
                      ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }
                    `}
                  >
                    {item.label}

                    {/* Active / Hover underline */}
                    <span
                      className={`
                        absolute
                        bottom-0
                        left-0
                        h-0.5
                        rounded-full
                        bg-primary
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }
                      `}
                    />
                  </a>
                )
              })}
            </div>

            {/* ================================
                CTA + Mobile Toggle
            ================================= */}

            <div className="flex items-center gap-2 sm:gap-3">
              {/* Desktop CTA */}

              <Button
                asChild
                className="
                  hidden
                  rounded-lg
                  bg-primary
                  px-4
                  font-medium
                  shadow-sm
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-primary/90
                  hover:shadow-md
                  sm:flex
                "
              >
                <a href="#chat">
                  Chat with AI
                </a>
              </Button>

              {/* Mobile Menu Button */}

              <button
                type="button"
                onClick={() =>
                  setIsMobileMenuOpen(
                    (open) => !open
                  )
                }
                aria-label={
                  isMobileMenuOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  text-foreground
                  transition-colors
                  duration-200
                  hover:bg-secondary
                  md:hidden
                "
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ================================
          Mobile Navigation
      ================================= */}

      <div
        id="mobile-navigation"
        className={`
          fixed
          inset-0
          z-40
          md:hidden
          transition-all
          duration-300
          ${
            isMobileMenuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Backdrop */}

        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMobileMenu}
          className="
            absolute
            inset-0
            cursor-default
            bg-background/50
            backdrop-blur-md
          "
        />

        {/* Menu Panel */}

        <div
          className={`
            absolute
            left-4
            right-4
            top-[72px]
            rounded-2xl
            border
            border-border
            bg-background/95
            p-5
            shadow-xl
            backdrop-blur-xl
            transition-all
            duration-300
            ${
              isMobileMenuOpen
                ? "translate-y-0 scale-100"
                : "-translate-y-3 scale-[0.98]"
            }
          `}
        >
          <nav
            className="space-y-1"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => {
              const sectionId =
                item.href.replace("#", "")

              const isActive =
                activeSection === sectionId

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  aria-current={
                    isActive ? "page" : undefined
                  }
                  className={`
                    flex
                    items-center
                    rounded-xl
                    px-4
                    py-3.5
                    text-base
                    font-medium
                    transition-colors
                    duration-200
                    ${
                      isActive
                        ? "bg-primary/5 text-primary"
                        : "text-foreground hover:bg-primary/5 hover:text-primary"
                    }
                  `}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          {/* Mobile CTA */}

          <div className="mt-4 border-t border-border pt-4">
            <Button
              asChild
              className="
                w-full
                rounded-xl
                bg-primary
                font-medium
                transition-all
                duration-200
                hover:bg-primary/90
              "
            >
              <a
                href="#chat"
                onClick={closeMobileMenu}
              >
                Chat with AI
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}