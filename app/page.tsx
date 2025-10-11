import Link from "next/link";
export default function Page(){
  return(<section className="py-16">
    <h1 className="text-4xl md:text-5xl font-bold">Jonathan Licurse</h1>
    <p className="mt-4 text-lg text-[color:var(--muted)] max-w-prose">CS @ SUNY New Paltz. Embedded Systems & AI — building real-time control and compute tools.</p>
    <div className="mt-6 flex gap-4">
      <Link href="/projects" className="no-underline rounded-xl bg-white/10 px-5 py-3">View Projects</Link>
      <Link href="/contact" className="no-underline rounded-xl border border-white/20 px-5 py-3">Contact</Link>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl bg-[color:var(--card)] p-6">
        <h2 className="text-xl font-semibold">Flagship Projects</h2>
        <ul className="mt-3 list-disc pl-6 text-[color:var(--muted)]">
          <li>Java gRPC Compute Engine — ComputeServer/Client, Protobuf, coordinator orchestration.</li>
          <li>CANopen Expansion Module Simulator — Python OD, NMT/Heartbeat, PDO/SDO mock I/O.</li>
        </ul>
      </div>

      <div className="rounded-2xl bg-[color:var(--card)] p-6">
        <h2 className="text-xl font-semibold">Experience Highlights</h2>
        <ul className="mt-3 list-disc pl-6 text-[color:var(--muted)]">
          <li>Real-Time Embedded Diagnostics (NDA) — TI C2000, FFT/DSP, CAN/CANopen; improved stability under EMI.</li>
        </ul>
      </div>

   </div>
    
  </section>);
}
