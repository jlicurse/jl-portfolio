'use client'; // Nav is a client component because it uses usePathname
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Route } from "next"; // ⬅️ add this

const links = [
  { href: "/",         label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resume",   label: "Resume" },
  { href: "/contact",  label: "Contact" },
] as const satisfies ReadonlyArray<{ href: Route; label: string }>; // ⬅️ make href a Route

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/20">
      <div className="container flex items-center gap-6 py-4">
        <Link href="/" className="font-semibold no-underline text-lg">J. Licurse</Link>
        <ul className="flex gap-4 text-sm text-[color:var(--muted)]">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`no-underline hover:text-[color:var(--ink)] ${pathname === l.href ? "text-[color:var(--ink)]" : ""}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
