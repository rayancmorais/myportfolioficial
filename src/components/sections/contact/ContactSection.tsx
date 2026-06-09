import { GitBranch, Mail, ExternalLink } from "lucide-react";

const LINKS = [
  {
    icon: GitBranch,
    label: "GitHub",
    href: "https://github.com/rayancmorais",
    display: "github.com/rayancmorais",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:rayan_cm2021@icloud.com",
    display: "rayan_cm2021@icloud.com",
  },
];

// RSC — no client JS needed.
export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto w-full max-w-6xl px-4 py-24"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="contact-heading"
          className="mb-4 text-4xl font-bold tracking-tight text-white"
        >
          Let&apos;s work{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            together
          </span>
        </h2>
        <p className="mb-12 text-lg leading-relaxed text-zinc-400">
          I&apos;m open to full-time roles, freelance projects, and interesting
          collaborations. Reach out anytime.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {LINKS.map(({ icon: Icon, label, href, display }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.04] px-6 py-4 text-sm text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.08] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              <Icon className="h-5 w-5 shrink-0 text-indigo-400" />
              <span>{display}</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-60" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
