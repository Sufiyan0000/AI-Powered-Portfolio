"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import {
  Send,
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Sufiyan0000",
    username: "@Sufiyan0000",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "#",
    username: "Muhammad Sufiyan Ali",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "#",
    username: "@sufiyan0000",
  },
];

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-animate",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Temporary submission simulation.
    // Replace this with your email/API endpoint later.
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);

    setFormState({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="
        relative
        overflow-hidden
        bg-secondary/30
        py-24
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-72
          w-96
          -translate-x-1/2
          rounded-full
          bg-primary/5
          blur-3xl
        "
      />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div
          className="
            contact-animate
            mx-auto
            mb-14
            max-w-2xl
            space-y-4
            text-center
          "
        >
          <p
            className="
              text-sm
              font-medium
              uppercase
              tracking-wider
              text-primary
            "
          >
            Get In Touch
          </p>

          <h2
            className="
              text-4xl
              font-bold
              tracking-tight
              text-foreground
              md:text-5xl
            "
          >
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Amazing</span>
          </h2>

          <p
            className="
              text-lg
              leading-relaxed
              text-muted-foreground
            "
          >
            Have a project in mind or just want to chat? I&apos;d love to hear
            from you.
          </p>
        </div>

        {/* Contact Content */}
        <div
          className="
            mx-auto
            grid
            max-w-5xl
            gap-6
            lg:grid-cols-[0.8fr_1.2fr]
          "
        >
          {/* Contact Information */}
          <div
            className="
              contact-animate
              rounded-2xl
              border
              border-border
              bg-background
              p-6
              shadow-sm
              sm:p-8
            "
          >
            <div className="space-y-7">
              {/* Intro */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Let&apos;s connect
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Whether you&apos;re looking to build something, collaborate,
                  or simply have a conversation about technology, feel free to
                  reach out.
                </p>
              </div>

              {/* Email */}
              <a
                href="mailto:alimdsufiyan89@gmail.com"
                className="
                  group
                  flex
                  items-start
                  gap-4
                  rounded-xl
                  border
                  border-transparent
                  p-3
                  transition-all
                  duration-200
                  hover:border-primary/10
                  hover:bg-primary/5
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-primary/10
                  "
                >
                  <Mail className="h-5 w-5 text-primary" />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground">Email</p>

                  <p className="mt-1 break-all text-sm text-muted-foreground transition-colors group-hover:text-primary">
                    alimdsufiyan89@gmail.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-primary/10
                  "
                >
                  <MapPin className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Ranchi, Jharkhand
                  </p>
                </div>
              </div>

              {/* Socials */}
              <div className="border-t border-border pt-6">
                <p className="mb-4 text-sm font-medium text-foreground">
                  Connect with me
                </p>

                <div className="flex gap-3">
                  {socials.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        border
        border-border
        bg-secondary/50
        text-muted-foreground
        transition-all
        duration-200
        hover:border-primary/20
        hover:bg-primary/5
        hover:text-primary
      "
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="
              contact-animate
              rounded-2xl
              border
              border-border
              bg-background
              p-6
              shadow-sm
              sm:p-8
            "
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Send a message
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Tell me a little about what you&apos;re working on.
                </p>
              </div>

              {/* Fields */}
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-foreground
                    "
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((state) => ({
                        ...state,
                        name: e.target.value,
                      }))
                    }
                    required
                    placeholder="John Doe"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-border
                      bg-secondary/60
                      px-4
                      py-3
                      text-sm
                      text-foreground
                      placeholder:text-muted-foreground
                      transition-all
                      focus:border-primary/30
                      focus:outline-none
                      focus:ring-2
                      focus:ring-primary/20
                    "
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-foreground
                    "
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((state) => ({
                        ...state,
                        email: e.target.value,
                      }))
                    }
                    required
                    placeholder="john@example.com"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-border
                      bg-secondary/60
                      px-4
                      py-3
                      text-sm
                      text-foreground
                      placeholder:text-muted-foreground
                      transition-all
                      focus:border-primary/30
                      focus:outline-none
                      focus:ring-2
                      focus:ring-primary/20
                    "
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-foreground
                    "
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((state) => ({
                        ...state,
                        message: e.target.value,
                      }))
                    }
                    required
                    placeholder="Tell me about your project..."
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-border
                      bg-secondary/60
                      px-4
                      py-3
                      text-sm
                      text-foreground
                      placeholder:text-muted-foreground
                      transition-all
                      focus:border-primary/30
                      focus:outline-none
                      focus:ring-2
                      focus:ring-primary/20
                    "
                  />
                </div>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                className="
                  w-full
                  rounded-xl
                  bg-primary
                  hover:bg-primary/90
                "
                disabled={isSubmitting || submitted}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span
                      className="
                        h-4
                        w-4
                        animate-spin
                        rounded-full
                        border-2
                        border-primary-foreground/30
                        border-t-primary-foreground
                      "
                    />
                    Sending...
                  </span>
                ) : submitted ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    Message Sent
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <Send className="h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
