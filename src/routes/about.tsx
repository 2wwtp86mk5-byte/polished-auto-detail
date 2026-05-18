import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import ceramicImg from "@/assets/ceramic.jpg";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — DB Auto Ceramic Detailing" },
      { name: "description", content: "A Bel Air, Maryland studio dedicated to ceramic coating and concours-level detailing." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <section className="container-x pt-20 pb-24 grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-7">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6">— About the studio</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95]">
            Built on a love for <span className="italic font-light text-gold">automobiles.</span>
          </h1>
        </div>
        <div className="lg:col-span-5 text-muted-foreground leading-relaxed">
          <p>
            DB Auto Ceramic Detailing was founded in Bel Air, Maryland with one belief: every vehicle—daily driver, weekend toy, or showpiece—deserves uncompromising care. We work on one car at a time so nothing is rushed and nothing is missed.
          </p>
        </div>
      </section>

      <section className="relative h-[60vh] overflow-hidden">
        <img src={ceramicImg} alt="Detailing in progress" loading="lazy" width={1280} height={1280} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </section>

      <section className="container-x py-28 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.05]">
            Our <span className="italic font-light text-gold">process.</span>
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-12">
          {[
            { n: "01", t: "Consultation", d: "We discuss your vehicle, expectations, and the right level of protection. A walk-around inspection follows." },
            { n: "02", t: "Preparation", d: "Safe wash, iron decontamination, and clay treatment. Paint is measured and inspected under high-output lighting." },
            { n: "03", t: "Correction", d: "Defects are removed through carefully selected compounding and polishing stages — never more aggressive than necessary." },
            { n: "04", t: "Protection", d: "Ceramic coating is applied panel-by-panel, leveled, and inspected. The vehicle cures in a controlled environment." },
            { n: "05", t: "Delivery", d: "Final inspection, aftercare walkthrough, and your maintenance kit. We're here for the life of the coating." },
          ].map((s) => (
            <div key={s.n} className="grid grid-cols-[auto_1fr] gap-8 border-t border-border pt-8">
              <div className="text-gold text-sm tracking-[0.3em]">{s.n}</div>
              <div>
                <h3 className="font-display text-2xl font-semibold">{s.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 border-t border-border bg-card/30">
        <div className="container-x text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Ready to see the <span className="italic font-light text-gold">difference?</span>
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-7 h-12 bg-gold text-primary-foreground text-xs tracking-[0.25em] uppercase font-medium hover:opacity-90 transition"
          >
            Get In Touch <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
