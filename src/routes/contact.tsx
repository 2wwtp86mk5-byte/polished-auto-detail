import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DB Auto Ceramic Detailing" },
      { name: "description", content: "Book your detail or ceramic coating consultation in Bel Air, MD." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="container-x pt-20 pb-20">
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6">— Get in touch</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] max-w-3xl">
          Let's discuss <span className="italic font-light text-gold">your vehicle.</span>
        </h1>
      </section>

      <section className="container-x pb-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-10">
          {[
            { icon: MapPin, t: "Studio", d: "Bel Air, Maryland 21014\nBy appointment only" },
            { icon: Phone, t: "Phone", d: "(410) 555-0142" },
            { icon: Mail, t: "Email", d: "hello@dbautodetailing.com" },
            { icon: Clock, t: "Hours", d: "Tue – Sat\n8:00 AM – 6:00 PM" },
          ].map((c) => (
            <div key={c.t} className="border-t border-border pt-6">
              <c.icon className="text-gold mb-4" size={20} />
              <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2">{c.t}</div>
              <div className="font-display text-lg whitespace-pre-line">{c.d}</div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="border border-border bg-card p-8 md:p-12 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Name" name="name" />
              <Field label="Phone" name="phone" />
            </div>
            <Field label="Email" name="email" type="email" />
            <Field label="Vehicle (Year, Make, Model)" name="vehicle" />
            <div>
              <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Service Interested In</label>
              <select className="mt-2 w-full bg-transparent border-b border-border text-foreground py-3 focus:border-gold outline-none">
                <option className="bg-card">Ceramic Coating</option>
                <option className="bg-card">Paint Correction</option>
                <option className="bg-card">Interior Detail</option>
                <option className="bg-card">Maintenance Wash</option>
                <option className="bg-card">Not sure yet</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Tell us about your project</label>
              <textarea rows={4} className="mt-2 w-full bg-transparent border-b border-border py-3 focus:border-gold outline-none resize-none" />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 px-7 h-12 bg-gold text-primary-foreground text-xs tracking-[0.25em] uppercase font-medium hover:opacity-90 transition"
            >
              {sent ? "Message Sent" : "Send Inquiry"}
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
            </button>
            {sent && <p className="text-sm text-gold">Thank you — we'll be in touch within 24 hours.</p>}
          </form>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-2 w-full bg-transparent border-b border-border py-3 focus:border-gold outline-none text-foreground"
      />
    </div>
  );
}
