import Link from "next/link";

export const metadata = {
  title: "CAN Expansion Module Simulator — Jonathan Licurse",
  description:
    "Python-based CANopen simulator with OD, NMT/Heartbeat, PDO, and SDO for virtual I/O testing.",
};

export default function Page() {
  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold">CAN Expansion Module Simulator</h1>
      <p className="mt-2 text-[color:var(--muted)] max-w-prose">
        Overview of the simulator and key components (OD, SDO, PDO, NMT/Heartbeat).
      </p>

      <div className="mt-6 flex gap-2">
        <Link href="/projects" className="no-underline rounded-xl border border-white/20 px-4 py-2">← Back</Link>
        <a href="https://github.com/yourrepo/canopen-sim" target="_blank" rel="noopener"
           className="no-underline rounded-xl bg-white/10 px-4 py-2">View on GitHub</a>
      </div>
    </section>
  );
}
