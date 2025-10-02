import Link from "next/link";
import type { Route } from "next";

type Props = {
  title: string;
  summary: string;
  tech: string[];
  href?: Route;     // internal route like "/projects/foo"
  repo?: string;    // external URL like "https://github.com/..."
};

export default function ProjectCard({ title, summary, tech, href, repo }: Props) {
  return (
    <article className="rounded-2xl bg-[color:var(--card)] p-5 shadow-lg shadow-black/20 border border-white/5">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-[color:var(--muted)]">{summary}</p>
      <ul className="mt-3 flex flex-wrap gap-2 text-xs text-[color:var(--muted)]">
        {tech.map((t) => (
          <li key={t} className="rounded-full bg-white/5 px-2 py-1">{t}</li>
        ))}
      </ul>
      <div className="mt-4 flex gap-4 text-sm">
        {href && <Link href={href}>Live</Link>}
        {repo && (
          <a href={repo} target="_blank" rel="noopener noreferrer">
            Code
          </a>
        )}
      </div>
    </article>
  );
}