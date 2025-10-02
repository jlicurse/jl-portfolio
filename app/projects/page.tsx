import ProjectCard from "@/components/ProjectCard";
export const metadata = { title: "Projects — Jonathan Licurse" };
export default function ProjectsPage(){
  return(<section className="py-12">
    <h1 className="text-3xl font-bold">Projects</h1>
    <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard title="Java gRPC Compute Engine" summary="ComputeServer/Client with Protobuf; coordinator orchestrates distributed compute tasks with backpressure and retries." tech={["Java","gRPC","Protobuf","Concurrency"]} repo="https://github.com/yourrepo/grpc-compute-engine" />
      <ProjectCard title="CAN Expansion Module Simulator" summary="Python-based CANopen simulator: OD, NMT/Heartbeat, PDO mapping, SDO read/write for virtual I/O and testing." tech={["Python","CANopen","OD","PDO/SDO"]} repo="https://github.com/yourrepo/canopen-sim" />
      <ProjectCard title="Real-Time Embedded Diagnostics (NDA)" summary="Designed a real-time acquisition + FFT diagnostic pipeline on TI C2000; built CAN/CANopen tooling and watchdogs to improve robustness in EMI. (High-level summary only)" tech={["C","TI C2000","FFT/DSP","CAN/CANopen","Watchdogs"]} />
    </div>
  </section>);
}
