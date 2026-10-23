
import Image from "next/image";

const journey = [
  {
    number: "01",
    title: "The Beginning",
    image: "/1.png",
    alt: "A beginner learning programming",
    text: "Every developer starts somewhere. My journey began with curiosity about technology, programming, and how websites and applications work. That curiosity slowly turned into a passion for learning, experimenting, and building things with code.",
  },
  {
    number: "02",
    title: "Learning by Building",
    image: "/2.jpg",
    alt: "Learning web development",
    text: "Instead of limiting myself to tutorials, I started exploring programming languages, web development, and modern developer tools. Building projects helped me turn concepts into practical skills and understand how real-world applications are created.",
  },
  {
    number: "03",
    title: "Exploring AI and Technology",
    image: "/3.png",
    alt: "Exploring AI and modern technology",
    text: "Technology never stands still. I explore AI tools, automation, cybersecurity, and new ways to build software. My goal is to understand how these technologies work and discover how they can solve real problems.",
  },
  {
    number: "04",
    title: "Sharing What I Learn",
    image: "/3.jpg",
    alt: "Sharing programming knowledge",
    text: "The Creative Coder is where I share useful tutorials, coding projects, technology insights, and experiments. I believe knowledge becomes more valuable when it is shared in a way that makes learning easier for everyone.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              About The Creative Coder
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Give me a keyboard, a little imagination, and enough electricity.I'll build the future 
              <span className="mt-2 block text-muted-foreground">
               
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              Hey, I&apos;m Pranjal, the creator behind The Creative Coder.
              I explore programming, web development, AI, and cybersecurity, and other technologies 
              and each day i am learning a new things. <br></br>On the side, I run a YouTube channel where I post ASMR-style coding videos — no voice, just clean visuals, keyboard sounds, and good music. Think of it as coding, but calming. I genuinely enjoy making those videos as much as I enjoy coding itself.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-muted-foreground">
              I'm still learning.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#my-journey"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-80"
              >
                Explore my journey <span className="ml-2">↓</span>
              </a>

              <a
                href="https://github.com/pranjalvidyarthi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-3xl border border-border" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-muted">
              <Image
                src="/pranjalvidyarthi-main.jpg"
                alt="Pranjal - The Creative Coder"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 450px"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -left-4 rounded-xl border border-border bg-background px-5 py-4 shadow-lg sm:-left-8">
              <p className="text-sm font-semibold">The Creative Coder</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Learn. Build. Create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="border-y border-border bg-muted/40 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <p className="text-sm font-medium text-muted-foreground">
              WHAT I EXPLORE
            </p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Technology, beyond the basics.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Web Development",
                description:
                  "Building websites and applications with modern tools. and adding a human touch",
                icon: "</>",
              },
              {
                title: "Artificial Intelligence",
                description:
                  "Exploring AI tools, workflows, and automation and how the AI works.",
                icon: "✳",
              },
              {
                title: "Cybersecurity",
                description:
                  "Finding the vulnerability in the systems with the help of AI",
                icon: "⌘",
              },
              {
                title: "Creative Coding",
                description:
                  "Turning ideas into experiments, projects, and tutorials.And yes this is my favourite part.",
                icon: "{ }",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-background p-6 transition-colors hover:bg-muted/50"
              >
                <span className="text-2xl font-semibold">{item.icon}</span>
                <h3 className="mt-5 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section
        id="my-journey"
        className="px-4 py-20 sm:px-6 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              My journey
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Learning never stops.
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              I&apos;m building my skills with  experiment at a time. Here are
              the ideas that shape my journey as a developer and content creator.
            </p>
          </div>

          <div className="space-y-16 sm:space-y-24">
            {journey.map((item, index) => (
              <article
                key={item.number}
                className={`grid items-center gap-8 md:grid-cols-2 md:gap-14 ${
                  index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-muted">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold tracking-widest text-muted-foreground">
                    JOURNEY / {item.number}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-5 leading-8 text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-y border-border bg-muted/40 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            My philosophy
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Don&apos;t just consume technology.
            <span className="block text-muted-foreground">
              Understand it. Build with it. Share it.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-muted-foreground">
            You don&apos;t need to know everything to start building.
            Stay curious, keep experimenting, learn from mistakes, and
            help others along the way. That&apos;s the mindset behind
            The Creative Coder.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border p-8 text-center sm:p-14">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Let&apos;s create something meaningful.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-muted-foreground">
            Explore my projects, discover new tutorials, or connect with me
            to exchange ideas about technology and development.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/pranjalvidyarthi"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-80"
            >
              Explore my projects ↗
            </a>
            <a
              href="https://www.youtube.com/@the_creative_coder"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
            >
              YouTube channel ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
