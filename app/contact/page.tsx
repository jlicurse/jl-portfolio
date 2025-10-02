export const metadata = { title: "Contact — Jonathan Licurse" };
export default function ContactPage(){
  return(<section className="py-12">
    <h1 className="text-3xl font-bold">Contact</h1>
    <p className="mt-2 text-[color:var(--muted)]">This form uses Formspree (or similar). Replace the action with your endpoint.</p>
    <form action="https://formspree.io/f/your-form-id" method="POST" className="mt-6 space-y-4 max-w-lg">
      <label className="block"><span className="block text-sm mb-1">Your email</span>
        <input name="email" type="email" required className="w-full rounded-lg bg-white/5 p-3 outline-none" />
      </label>
      <label className="block"><span className="block text-sm mb-1">Message</span>
        <textarea name="message" rows={6} required className="w-full rounded-lg bg-white/5 p-3 outline-none" />
      </label>
      <button type="submit" className="rounded-xl bg-white/10 px-5 py-3">Send</button>
    </form>
  </section>);
}
