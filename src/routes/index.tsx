import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import heroCar from "@/assets/hero-car.jpg";
import ceramicImg from "@/assets/ceramic.jpg";
import correctionImg from "@/assets/correction.jpg";
import interiorImg from "@/assets/interior.jpg";
import washImg from "@/assets/wash.jpg";
import { ArrowUpRight, Shield, Sparkles, Award, Clock } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DB Auto Ceramic Detailing — Premium Detailing in Bel Air, MD" },
      { name: "description", content: "Precision ceramic coating, paint correction, and luxury detailing in Bel Air, Maryland. By appointment only." },
      { property: "og:title", content: "DB Auto Ceramic Detailing" },
      { property: "og:description", content: "Premium ceramic coating & detailing in Bel Air, MD." },
    ],
  }),
  component: Home,
});

const services = [
  { title: "Ceramic Coating", img: ceramicImg, desc: "9H professional-grade coatings with up to 7-year durability.", tag: "01" },
  { title: "Paint Correction", img: correctionImg, desc: "Multi-stage compounding and polishing to remove swirls and defects.", tag: "02" },
  { title: "Interior Detail", img: interiorImg, desc: "Steam extraction, leather conditioning, and full sanitization.", tag: "03" },
  { title: "Hand Wash & Decon", img: washImg, desc: "Two-bucket wash, iron decon, and clay treatment.", tag: "04" },
];

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        <img
          src={heroCar}
          alt="Black luxury car with ceramic coating"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

        <div className="relative container-x pb-24 pt-32 w-full">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6 flex items-center gap-3">
              <span className="w-10 h-px bg-gold" /> Bel Air, Maryland
            </p>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
              Detailing as <br />
              <span className="gradient-gold-text italic font-light">an obsession.</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Ceramic coatings, paint correction, and concours-level interior care for owners who refuse to compromise.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-7 h-12 bg-gold text-primary-foreground text-xs tracking-[0.25em] uppercase font-medium hover:opacity-90 transition"
              >
                Book a Consultation
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 h-12 border border-border text-xs tracking-[0.25em] uppercase hover:border-gold hover:text-gold transition"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE STATS */}
      <section className="border-y border-border bg-card">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            { k: "500+", v: "Vehicles Protected" },
            { k: "7yr", v: "Coating Warranty" },
            { k: "9H", v: "Hardness Rating" },
            { k: "5.0★", v: "Client Rating" },
          ].map((s) => (
            <div key={s.v} className="py-10 px-6 text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-gold">{s.k}</div>
              <div className="mt-2 text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-28">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">— Services</p>
              <h2 className="font-display text-4xl md:text-6xl font-bold max-w-2xl leading-[1]">
                A complete suite of <span className="italic font-light text-gold">protection.</span>
              </h2>
            </div>
            <Link to="/services" className="text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-gold inline-flex items-center gap-2">
              All Services <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <Link
                key={s.title}
                to="/services"
                className={`group relative overflow-hidden border border-border hover:border-gold transition-all ${i === 0 ? "md:row-span-2 md:h-auto" : ""}`}
              >
                <div className={`relative ${i === 0 ? "aspect-[4/5]" : "aspect-[16/10]"} overflow-hidden`}>
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={1280}
                    height={1280}
                    className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute top-6 left-6 text-xs tracking-[0.3em] text-gold">{s.tag}</div>
                  <div className="absolute top-6 right-6 w-10 h-10 grid place-items-center border border-gold/40 text-gold opacity-0 group-hover:opacity-100 transition">
                    <ArrowUpRight size={16} />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-display text-2xl md:text-3xl font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground max-w-md">{s.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-28 border-t border-border bg-card/30">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">— Philosophy</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.05]">
              Patience.<br />Precision.<br />
              <span className="italic font-light text-gold">Perfection.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
            {[
              { icon: Shield, t: "Certified Installer", d: "Trained and certified in industry-leading ceramic systems." },
              { icon: Sparkles, t: "Studio Environment", d: "Climate-controlled bay with proper lighting for paint inspection." },
              { icon: Award, t: "Concours Standard", d: "Multi-stage processes refined over hundreds of vehicles." },
              { icon: Clock, t: "By Appointment", d: "One vehicle at a time. No rushed work, ever." },
            ].map((f) => (
              <div key={f.t} className="border-t border-border pt-6">
                <f.icon className="text-gold mb-4" size={22} />
                <h3 className="font-display text-lg font-semibold">{f.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="container-x text-center max-w-3xl">
          <div className="gold-divider mb-12" />
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
            Your vehicle deserves <span className="italic font-light text-gold">more than a wash.</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Limited slots each week. Reserve yours today.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 px-8 h-12 bg-gold text-primary-foreground text-xs tracking-[0.25em] uppercase font-medium hover:opacity-90 transition"
          >
            Schedule Your Detail <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
