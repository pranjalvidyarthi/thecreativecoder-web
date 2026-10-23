"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { Mail, Send, CheckCircle2, ArrowLeft, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/* lucide-react v1 removed brand icons, so these are inline SVGs */
type IconProps = React.SVGProps<SVGSVGElement>;

function GithubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    </svg>
  );
}

const EMAIL = "pvidyarthi8@gmail.com";

const services = [
  "Website (Static or Dynamic)",
  "Python Automation & Scripts",
  "UI/UX Design & Animations",
  "Bug Fixes & Code Review",
  "Collaboration / Content Idea",
  "Something else",
];

const channels = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: Mail,
    color: "#f97316",
  },
  {
    label: "YouTube",
    value: "@the_creative_coder",
    href: "https://www.youtube.com/@the_creative_coder",
    icon: YoutubeIcon,
    color: "#ef4444",
  },
  {
    label: "GitHub",
    value: "pranjalvidyarthi",
    href: "https://github.com/pranjalvidyarthi",
    icon: GithubIcon,
    color: "#8b5cf6",
  },
];

/* Typing effect, same idea as the Home hero */
function useTyping(text: string, typingSpeed = 90, deletingSpeed = 45, pause = 1400) {
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && display.length < text.length) {
      t = setTimeout(() => setDisplay(text.slice(0, display.length + 1)), typingSpeed);
    } else if (!deleting && display.length === text.length) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && display.length > 0) {
      t = setTimeout(() => setDisplay(text.slice(0, display.length - 1)), deletingSpeed);
    } else {
      setDeleting(false);
    }
    return () => clearTimeout(t);
  }, [display, deleting, text, typingSpeed, deletingSpeed, pause]);

  return display;
}

export default function ContactPage() {
  const heading = useTyping("Let's build something cool.");
  const [service, setService] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const from = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Freelance Inquiry: ${service || "General"}`;
    const body = `Hi Pranjal,\n\n${message}\n\n— ${name}\n${from}`;

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Background: grid + two blobs, like the Home hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 text-foreground opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at top, black 30%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-orange-500/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-40 h-96 w-96 rounded-full bg-violet-500/20 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
        >
          <ArrowLeft className="size-4" /> Back to home
        </Link>

        {/* Header */}
        <header className="mt-10 max-w-3xl">
          <Badge className="rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1 text-orange-600 hover:bg-orange-500/10 dark:text-orange-300">
            Available for hire
          </Badge>
          <h1 className="mt-5 min-h-[2.4em] text-4xl font-extrabold tracking-tight sm:min-h-[1.2em] sm:text-6xl">
            <span className="bg-gradient-to-r from-orange-500 to-violet-500 bg-clip-text text-transparent">
              {heading}
            </span>
            <span className="ml-0.5 animate-pulse text-orange-400">|</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Need a website, an automation script or a custom UI? Tell me what you have in mind and
            I&apos;ll get back to you with next steps.
          </p>
        </header>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <Card className="border-border bg-card/70 text-card-foreground backdrop-blur lg:col-span-3">
            <CardHeader>
              <CardTitle className="text-2xl">Send a message</CardTitle>
              <CardDescription className="text-muted-foreground">
                Submitting opens your email app with everything filled in.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your name</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      className="border-border bg-background/60 placeholder:text-muted-foreground focus-visible:ring-orange-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Your email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="border-border bg-background/60 placeholder:text-muted-foreground focus-visible:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">What do you need?</Label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger
                      id="service"
                      className="w-full border-border bg-background/60 focus:ring-orange-500"
                    >
                      <SelectValue placeholder="Pick a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="What are you building, and when do you need it?"
                    className="border-border bg-background/60 placeholder:text-muted-foreground focus-visible:ring-orange-500"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full bg-gradient-to-r from-orange-500 to-orange-600 font-semibold text-white shadow-lg shadow-orange-500/20 hover:from-orange-400 hover:to-orange-500 sm:w-auto"
                >
                  <Send className="size-4" /> Send message
                </Button>

                {sent && (
                  <p
                    role="status"
                    className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400"
                  >
                    <CheckCircle2 className="size-4" />
                    Email draft opened. If nothing happened, wri te to {EMAIL} directly.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Side column */}
          <div className="space-y-4 lg:col-span-2">
            {channels.map(({ label, value, href, icon: Icon, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card/70 p-4 backdrop-blur transition-colors hover:border-foreground/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                <span
                  className="grid size-12 shrink-0 place-items-center rounded-xl"
                  style={{ backgroundColor: `${color}22`, color }}
                >
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-muted-foreground">{label}</span>
                  <span className="block truncate font-medium">{value}</span>
                </span>
                <span className="ml-auto text-muted-foreground transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            ))}

            <div className="rounded-2xl border border-border bg-card/70 p-5 backdrop-blur">
              <h2 className="flex items-center gap-2 font-semibold">
                <Clock className="size-4 text-violet-500" /> What I take on
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {services.slice(0, 4).map((s) => (
                  <Badge
                    key={s}
                    variant="outline"
                    className="rounded-full border-border px-3 py-1 font-normal text-foreground/80"
                  >
                    {s}
                  </Badge>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Based in India 🇮🇳. I usually reply within a day or two.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}