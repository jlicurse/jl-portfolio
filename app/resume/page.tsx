import Link from "next/link";
export const metadata = { title: "Resume — Jonathan Licurse" };
export default function ResumePage(){
  return(<section className="py-12">
    <h1 className="text-3xl font-bold">Resume</h1>
    <p className="mt-2 text-[color:var(--muted)]">Keep both a PDF and HTML version for SEO and quick skim.</p>
    <div className="mt-6 flex items-center gap-4">
      <a href="/resume.pdf" className="no-underline rounded-xl bg-white/10 px-5 py-3">Download PDF</a>
      <Link href="#html" className="no-underline rounded-xl border border-white/20 px-5 py-3">View HTML</Link>
    </div>
    <article id="html" className="prose prose-invert mt-10 max-w-none">
      <h2>Jonathan C. Licurse</h2>
      <p><strong>CS @ SUNY New Paltz</strong> — Embedded Systems &amp; AI</p>
      <h3>Experience</h3>
      <ul>
        <li><strong>TMHNA</strong> — Real-Time Embedded Diagnostics (NDA)</li>
        <li><strong>Curtis Instruments</strong> — CAN expansion module simulator (Python, CANopen)</li>
      </ul>
      <h3>Skills</h3>
      <p>C, Java, Python, gRPC, Protobuf, Tailwind, Next.js, Signal Processing</p>
    </article>
  </section>);
}
