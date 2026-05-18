import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import ceramicImg from "@/assets/ceramic.jpg";
import correctionImg from "@/assets/correction.jpg";
import interiorImg from "@/assets/interior.jpg";
import washImg from "@/assets/wash.jpg";
import { Check, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — DB Auto Ceramic Detailing" },
      { name: "description", content: "Ceramic coatings, paint correction, interior detailing, and maintenance washes in Bel Air, MD." },
    ],
  }),
  component: Services,
});

const packages = [
  {
    tag: "01",
    name: "Ceramic Coating",
    price: "From $1,200",
    img: ceramicImg,
    desc: "Long-term hydrophobic protection with up to 7-year durability. Includes full paint preparation, IPA wipedown, and certified application.",
    includes: ["Multi-stage decontamination", "Single-stage polish", "9H ceramic application", "7-year warranty", "Aftercare kit included"],
  },
  {
    tag: "02",
    name: "Paint Correction",
    price: "From $850",
    img: correctionImg,
    desc: "Restore depth and gloss by removing swirls, holograms, and oxidation. Available in 1, 2, and 3-stage processes.",
    includes: ["Paint depth measurement", "Test spots & inspection", "Compound & polish stages", "Refined finish", "Optional sealant"],
  },
  {
    tag: "03",
    name: "Interior Detail",
    price: "From $325",
    img: interiorImg,
    desc: "Concours-level interior reset. Hot water extraction, leather conditioning, and complete sanitization.",
    includes: ["Vacuum & blow-out", "Steam sanitization", "Leather clean & condition", "Trim & dash dressing", "Glass interior polish"],
  },
  {
    tag: "04",
    name: "Maintenance Wash",
    price: "From $125",
    img: washImg,
    desc: "Two-bucket safe wash with iron decontamination — designed to preserve coatings and original paint.",
    includes: ["Pre-rinse & foam soak", "pH-neutral hand wash", "Iron & fallout removal", "Wheel & tire detail", "Spray sealant top-up"],
  },
];

function Services() {
  return (
    <Layout>
      <section className="container-x pt-20 pb-20">
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6">— Services & Pricing</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] max-w-4xl">
          Tailored detailing,<br />
          <span className="italic font-light text-gold">measured by hours, not minutes.</span>
        </h1>
        <p className="mt-8 text-muted-foreground max-w-2xl">
          Every vehicle is treated as a one-of-one. Pricing varies by size, condition, and chosen process. Estimates are provided after in-person inspection.
        </p>
      </section>

      <section className="container-x pb-28 space-y-6">
        {packages.map((p, i) => (
          <article
            key={p.name}
            className="group grid lg:grid-cols-12 gap-0 border border-border hover:border-gold/50 transition overflow-hidden"
          >
            <div className={`lg:col-span-5 relative aspect-[4/3] lg:aspect-auto overflow-hidden ${i % 2 ? "lg:order-2" : ""}`}>
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                width={1280}
                height={1280}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute top-6 left-6 text-xs tracking-[0.3em] text-gold">{p.tag}</div>
            </div>
            <div className="lg:col-span-7 p-8 md:p-12 bg-card flex flex-col justify-center">
              <div className="flex items-start justify-between gap-6 mb-4">
                <h2 className="font-display text-3xl md:text-4xl font-bold">{p.name}</h2>
                <span className="text-xs tracking-[0.25em] uppercase text-gold whitespace-nowrap pt-2">{p.price}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                {p.includes.map((inc) => (
                  <li key={inc} className="flex gap-3 text-sm">
                    <Check size={16} className="text-gold mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{inc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-foreground hover:text-gold transition"
                >
                  Request Quote <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </Layout>
  );
}
