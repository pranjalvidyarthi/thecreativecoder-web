"use client";


import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Check, Globe, Rocket, Wrench } from "lucide-react";

const display = Bricolage_Grotesque({ subsets: ["latin"], display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], display: "swap" });

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const PROFILE = {
  name: "Pranjal Vidyarthi",
  brand: "The Creative Coder",
  tagline: "Cybersecurity, Python and React projects.",
  photo: "https://pranjalvidyarthi.github.io/assets/pranjalvidyarthi-B6_IITSx.jpg",
  github: "https://github.com/pranjalvidyarthi", 
  email: "pranjalvidyarthiwork@gmail.com", 
  linkedin: "https://www.linkedin.com/in/pranjalvidyarthi", 
  instagram: "https://www.instagram.com/vansh.x._x.vidyarthi/",
};



const PROJECTS = [
  {
    title: "ViChat", // TODO: replace with a real project
    description: "A realtime Chat App build by using NextJS.",
    tags: ["NextJS", "Project"],
    href: "#",
  },


];

const SKILLS = {
  frontend: {
    label: "Frontend",
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
  programming: {
    label: "Programming",
    tags: ["Python", "JavaScript", "TypeScript"],
  },
  security: {
    label: "Cybersecurity",
    tags: ["Web Security", "Linux", "Networking"],
  },
};

const RESOURCES = [
  { title: "Python for beginners", kind: "Tutorial", href: "#"   }, // TODO

];

const FREELANCE_PERKS = [
  "100% commented code",
  "Hosting included",
  "Post-delivery support",
  "Creator-friendly pricing",
];

const PLANS = [
  {
    name: "Custom Web Development",
    badge: "Custom",
    icon: Wrench,
    tagline: "Tell me which type of Website.",
    description:
      "Price Issue ? Share your requirements and I'll send you a clear, fixed price before any work begins.",
    priceLabel: "Starting from",
    price: "₹1,500",
    oldPrice: "₹3,500" ,
    priceNote: "Final price shared after I review your requirements",
    features: [
      "Design, frontend and backend if needed",
      "Clean, commented code you own",
      "10 days of post-delivery support.",
      "Advance Payment is Complusory for Security reasons."
    ],
    tags: ["React", "Node.js", "Html", "CSS", "JavaScript"],
    cta: "Share my requirements",
    subject: "Custom web development enquiry",
    text: "text-sky-700 dark:text-sky-400",
    border: "border-sky-500/40",
    priceBox: "border-sky-500/30 bg-sky-500/10",
    badgeCls: "bg-sky-600 text-white dark:bg-sky-500",
    button: "bg-sky-600 text-white hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-400",
    featured: false,
  },
  {
    name: "Creator Starter Website",
    badge: "Best value",
    icon: Rocket,
    tagline: "Get online without a big project.",
    description:
      "A simple, polished site for freelancers and creators. Share your details, and get a clean and Modern Site.",
    priceLabel: "One-time price",
    price: "₹4,999",
    oldPrice: "₹7,999",
    priceNote: "Ready in days, not weeks",
    features: [
      "Up to 5 pages: home, about, work, services, contact",
      "Mobile-friendly design",
      "Hosting not included",
      "2 rounds of revisions",
      "30 days of post-delivery support",
    ],
    tags: ["React", "Next.js", "Tailwind"],
    cta: "Start my site",
    subject: "Creator Starter Website",
    text: "text-emerald-700 dark:text-emerald-400",
    border: "border-emerald-500/40",
    priceBox: "border-emerald-500/30 bg-emerald-500/10",
    badgeCls: "bg-emerald-600 text-white dark:bg-emerald-500",
    button:
      "bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400",
    featured: true,
  },
  {
    name: "Build Your Own Website",
    badge: "Full build",
    icon: Globe,
    tagline: "Your idea. Online in days.",
    description:
      "A fully custom website built for you from scratch, with the design and features that match your idea.",
    priceLabel: "One-time price",
    price: "₹10,999",
    oldPrice: "₹19,999",
    priceNote: "Limited spots each month",
    features: [
      "Fully custom website built for you",
      "Static and dynamic pages available",
      "Up to 15 custom pages",
      "40 days of post-delivery support",
      "Deployed and ready to share",
      "Hosting (not included)",
    ],
    tags: ["React", "Node.js", "Next.js" , "HTML","CSS" , "JS"],
    cta: "Get my website built",
    subject: "Build Your Own Website",
    text: "text-orange-700 dark:text-orange-400",
    border: "border-orange-500/40",
    priceBox: "border-orange-500/30 bg-orange-500/10",
    badgeCls: "bg-orange-600 text-white dark:bg-orange-500",
    button:
      "bg-orange-600 text-white hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-400",
    featured: false,
  },
];

/* ------------------------------------------------------------------ */
/* Terminal                                                            */
/* ------------------------------------------------------------------ */

type Line = { kind: "in" | "out"; text: string };

const BOOT: Line[] = [
  { kind: "out", text: "Welcome to The Creative Coder." },
  { kind: "out", text: "Type help to see what you can ask." },
];

function run(cmd: string): string[] | "clear" {
  switch (cmd.trim().toLowerCase()) {
    case "":
      return [];
    case "help":
      return ["whoami    who I am", "skills    what I work with", "projects  things I've built", "contact   how to reach me", "clear     empty the terminal"];
    case "whoami":
      return [`${PROFILE.name}`, PROFILE.tagline];
    case "skills":
      return Object.values(SKILLS).map((s) => `${s.label}: ${s.tags.slice(0, 3).join(", ")}`);
    case "projects":
      return PROJECTS.map((p) => `${p.title} (${p.tags.join(", ")})`);
    case "contact":
      return [`Email:    ${PROFILE.email}`, `GitHub:   ${PROFILE.github}`, `LinkedIn: ${PROFILE.linkedin}`];
    case "clear":
      return "clear";
    case "--help":
      return ["whoami    who I am", "skills    what I work with", "projects  things I've built", "contact   how to reach me", "clear     empty the terminal"];
    default:
      return [`Command not found: ${cmd}. Type help for the list of commands.`];
  }
}

/**
 * The terminal stays dark in both themes on purpose: a dark terminal reads as
 * a terminal, and it keeps the same contrast in light and dark mode.
 */
function TerminalWindow() {
  const [lines, setLines] = useState<Line[]>([]);
  const [value, setValue] = useState("");
  const [ready, setReady] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);

  // The one animated moment on the page: the terminal boots line by line.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setLines(BOOT);
      setReady(true);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      setLines(BOOT.slice(0, i + 1));
      i += 1;
      if (i >= BOOT.length) {
        clearInterval(id);
        setReady(true);
      }
    }, 450);
    return () => clearInterval(id);
  }, []);

  // Scroll only the terminal, never the page.
  useEffect(() => {
    const el = scroller.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  function submit(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Enter") return;
    const result = run(value);
    if (result === "clear") {
      setLines([]);
    } else {
      setLines((prev) => [
        ...prev,
        { kind: "in", text: value },
        ...result.map((text): Line => ({ kind: "out", text })),
      ]);
    }
    setValue("");
  }

  return (
    <div
      className="overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-xl dark:border-slate-600 dark:shadow-black/40"
      onClick={() => input.current?.focus()}
    >
      <div className="flex items-center gap-2 border-b border-slate-700 px-4 py-2.5">
        <span className="size-3 rounded-full bg-red-400" aria-hidden />
        <span className="size-3 rounded-full bg-amber-400" aria-hidden />
        <span className="size-3 rounded-full bg-green-400" aria-hidden />
        <span className={`${mono.className} ml-3 text-xs text-slate-400`}>
          pranjal@creative-coder
        </span>
      </div>

      <div
        ref={scroller}
        className={`${mono.className} h-72 overflow-y-auto px-4 py-4 text-sm leading-relaxed`}
        role="log"
        aria-live="polite"
      >
        {lines.map((l, i) =>
          l.kind === "in" ? (
            <p key={i} className="text-amber-300">
              <span className="text-blue-400">$ </span>
              {l.text}
            </p>
          ) : (
            <p key={i} className="whitespace-pre-wrap break-words text-slate-200">
              {l.text}
            </p>
          ),
        )}

        {ready && (
          <div className="mt-1 flex items-center gap-2">
            <span className="text-blue-400">$</span>
            <Input
              ref={input}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={submit}
              aria-label="Terminal command"
              placeholder="try: whoami"
              autoComplete="off"
              spellCheck={false}
              className={`${mono.className} h-7 border-0 bg-transparent p-0 text-sm text-amber-300 shadow-none placeholder:text-slate-500 focus-visible:ring-0 dark:bg-transparent`}
            />
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div className={`${display.className} bg-background text-foreground`}>
      <main id="top" className="mx-auto max-w-6xl px-5">
        {/* Hero */}
        <section className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <div className="mb-6 flex items-center gap-4">
        
             </div>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              I break things to learn how to build them safely.
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">{PROFILE.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                <a href="#projects">See my projects</a>
              </Button>
              
              <Button asChild variant="outline">
                <a href={PROFILE.github} target="_blank" rel="noreferrer">
                  View GitHub
                </a>
              </Button>
            </div>
          </div>

          <TerminalWindow />
        </section>

        <Separator />

  

        <Separator />

        {/* Projects */}
        <section id="projects" className="scroll-mt-20 py-16">
          <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {PROJECTS.map((p) => (
              <li
                key={p.title}
                className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="max-w-xl">
                  <h3 className="text-xl font-medium">{p.title}</h3>
                  <p className="mt-1 text-muted-foreground">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="outline">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button asChild variant="outline" size="sm" className="self-start sm:self-center">
                  <a href={p.href} target="_blank" rel="noreferrer">
                    View project
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </section>

        {/* Tutorials and tools */}
        <section id="learn" className="scroll-mt-20 pb-16">
          <h2 className="text-3xl font-semibold tracking-tight">Tutorials and tools</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {RESOURCES.map((r) => (
              <Card key={r.title}>
                <CardHeader>
                  <CardDescription className="text-blue-700 dark:text-blue-400">
                    {r.kind}
                  </CardDescription>
                  <CardTitle className="text-lg leading-snug">{r.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="link" className="h-auto p-0">
                    <a href={r.href}>Open {r.kind.toLowerCase()}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Freelance */}
        <section id="freelance" className="scroll-mt-20 pb-20">
          <div className="rounded-2xl border bg-muted/40 px-5 py-12 sm:px-10 sm:py-16">
            <div className="mx-auto max-w-2xl text-center">
              <Badge className="bg-amber-400 text-slate-900 hover:bg-amber-400">
                Available for freelance work
              </Badge>
              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                Simple prices. Pay once.
              </h2>
              <p className="mt-4 text-muted-foreground">
                I build websites for creators and small businesses. Three clear options, final prices will be decide after reviewing your requirements, no subscriptions and no hidden extras. Start small and upgrade whenever
                you&apos;re ready.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {FREELANCE_PERKS.map((perk) => (
                  <Badge key={perk} variant="outline" className="bg-background">
                    {perk}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {PLANS.map((p) => {
                const Icon = p.icon;
                return (
                  <Card
                    key={p.name}
                    className={`flex flex-col border ${p.border} ${
                      p.featured ? "ring-1 ring-emerald-500/40 md:-mt-3 md:mb-3" : ""
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Icon className={`size-6 ${p.text}`} aria-hidden />
                        <Badge className={p.badgeCls}>{p.badge}</Badge>
                      </div>
                      <CardTitle className="mt-3 text-xl">{p.name}</CardTitle>
                      <p className={`text-sm font-medium ${p.text}`}>{p.tagline}</p>
                      <CardDescription className="mt-1">{p.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="flex flex-1 flex-col gap-5">
                      <div className={`rounded-lg border p-4 ${p.priceBox}`}>
                        <p className="text-xs text-muted-foreground">{p.priceLabel}</p>
                        <div className="mt-1 flex items-baseline gap-2">
                          <span className="text-4xl font-bold">{p.price}</span>
                          {p.oldPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              {p.oldPrice}
                            </span>
                          )}
                        </div>
                        <p className={`mt-2 text-xs ${p.text}`}>{p.priceNote}</p>
                      </div>

                      <ul className="space-y-2 text-sm">
                        {p.features.map((f) => (
                          <li key={f} className="flex gap-2">
                            <Check className={`mt-0.5 size-4 shrink-0 ${p.text}`} aria-hidden />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <Badge key={t} variant="outline">
                            {t}
                          </Badge>
                        ))}
                      </div>

                      <div className="mt-auto">
                        <Button asChild className={`w-full ${p.button}`}>
                          <a
                            href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(p.subject)}`}
                          >
                            {p.cta}
                          </a>
                        </Button>
                        <p className="mt-2 text-center text-xs text-muted-foreground">
                          Secure payment · Instant access
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <p className="mt-10 text-center text-sm text-muted-foreground">
              Not sure which one is right for you?{" "}
              <a
                href={`mailto:${PROFILE.email}?subject=${encodeURIComponent("Help me pick a plan")}`}
                className="font-medium text-foreground underline underline-offset-4"
              >
                Message me and I&apos;ll help you pick
              </a>
            </p>
          </div>
        </section>

        {/* Contact: inverts with the theme (dark panel in light mode, light panel in dark mode) */}
        <section id="contact" className="scroll-mt-20 pb-20">
          <div className="rounded-2xl bg-foreground p-8 text-background sm:p-12">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Have a project or a question?
            </h2>
            <p className="mt-3 max-w-md text-background/70">
              Send me a message about a security idea, a React build or a collaboration.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="bg-amber-400 text-slate-900 hover:bg-amber-300">
                <a href={`mailto:${PROFILE.email}`}>Email me</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-background/40 bg-transparent text-background hover:bg-background/10 hover:text-background"
              >
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © Pranjal Vidyarthi <br /> Built with Next.js and shadcn/ui.
      </footer>
    </div>
  );
}