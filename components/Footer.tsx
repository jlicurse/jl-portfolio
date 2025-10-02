export default function Footer(){
  return(<footer className="mt-16 border-t border-white/10">
    <div className="container py-8 text-sm text-[color:var(--muted)]">© {new Date().getFullYear()} Jonathan Licurse</div>
  </footer>);
}
