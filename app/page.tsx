type Project = {
  title: string;
  subtitle: string;
  tags: string[];
  href: string;
};

type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

const projects: Project[] = [
  {
    title: "PROJECT ONE",
    subtitle: "Short description of the project",
    tags: ["Brand", "Web", "Product"],
    href: "#",
  },
  {
    title: "PROJECT TWO",
    subtitle: "Short description of the project",
    tags: ["Brand", "Web"],
    href: "#",
  },
  {
    title: "PROJECT THREE",
    subtitle: "Short description of the project",
    tags: ["Web", "Product"],
    href: "#",
  },
];

const testimonials: Testimonial[] = [
  {
    quote: "The attention to detail was unlike anything I've seen.",
    name: "Person One",
    context: "Company · Context",
  },
  {
    quote: "Shipped fast, looked incredible. Exactly what we needed.",
    name: "Person Two",
    context: "Company · Context",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="mx-auto flex w-full max-w-[800px] flex-col gap-y-6 px-8 py-12 md:flex-row md:justify-between md:py-16">
        {/* Left: bio */}
        <div className="w-full md:w-[380px]">
          <div className="mb-6 text-[#2a2a2a]">
            <p className="text-[24px] font-mono font-bold">DESIGNER</p>
            <p className="text-[24px] font-mono font-bold">TINKERER</p>
            <p className="text-[24px] font-mono font-bold">ARTIST</p>
            <p className="text-[18px]">currently product design @studiocanine</p>
          </div>
          <div className="mb-4 text-[#2a2a2a]">
            <p className="text-[18px]">
              this is a showcase of my expertise in product and digital design,
              with a meticulous eye for detail and a proven track record, i
              present to you a curation of my best work.
            </p>
          </div>
          <div className="mb-4 text-[#2a2a2a]">
            <p className="text-[18px]">
              i also write about life, design and everything in between on my
              weird blog named{" "}
              <a href="#" className="underline">timecapsule</a>
            </p>
          </div>
          <div className="text-[#2a2a2a]">
            <p className="text-[18px]">reach out to me at,</p>
            <p className="text-[18px]">
              <a className="text-[#e8380d]" href="mailto:me@siddharthborman.xyz">mail</a>,{" "}
              <a className="text-[#e8380d]" href="https://x.com/siddharthborman">x</a>,{" "}
              <a className="text-[#e8380d]" href="#">instagram</a>
            </p>
          </div>
        </div>

        {/* Right: placeholder for hero image/video */}
        <div className="h-[300px] w-full bg-[#1a1a1a] md:h-auto md:w-[340px]" />
      </section>

      {/* ── Divider ── */}
      <div className="h-px bg-[#e0e0e0]" />

      {/* ── Featured Work ── */}
      <section className="mx-auto w-full max-w-[800px] px-8 py-12">
      <div className="mb-8 flex items-center justify-between">
          <p className="font-mono text-[13px] font-medium uppercase tracking-widest text-[#2a2a2a]">
            Featured Work
          </p>
            <a href="/work"
            className="font-mono text-[13px] text-[#e8380d] hover:underline"> view all → </a>
        </div>
        <div className="flex flex-col gap-0">
          {projects.map((project, i) => (
             <a
              key={i}
              href={project.href}
              className="group flex flex-col gap-3 border-t border-[#e0e0e0] py-6 last:border-b hover:opacity-80"
            >
              {/* Thumbnail */}
              <div className="h-[200px] w-full bg-[#1a1a1a]" />

              {/* Meta */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-[15px] font-semibold text-[#1a1a1a]">
                    {project.title}
                  </p>
                  <p className="text-[14px] text-[#666]">{project.subtitle}</p>
                </div>
                <div className="flex flex-wrap justify-end gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] font-medium uppercase tracking-wide bg-black text-white px-2 py-[2px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      {/* ── Divider ── */}
      <div className="h-px bg-[#e0e0e0]" />

      {/* ── About / Stats ── */}
      <section className="mx-auto w-full max-w-[800px] px-8 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:gap-16">
          <div className="md:w-1/2">
            <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-[#999]">
              What I Do
            </p>
            <p className="text-[18px] text-[#2a2a2a]">
              brands, websites, videos, and product for AI startups. from sprint to launch.
            </p>
          </div>
          <div className="md:w-1/2">
            <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-[#999]">
              Experience
            </p>
            <p className="text-[18px] text-[#2a2a2a]">
              2 years+ of product and digital design. previously at studiocanine.
            </p>
          </div>
        </div>
      </section>
      {/* ── Divider ── */}
      <div className="h-px bg-[#e0e0e0]" />

      {/* ── Testimonials ── */}
      <section className="mx-auto w-full max-w-[800px] px-8 py-12">
        <p className="mb-8 font-mono text-[13px] font-medium uppercase tracking-widest text-[#2a2a2a]">
          What Clients Say
        </p>
        <div className="flex flex-col gap-0">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 border-t border-[#e0e0e0] py-6 last:border-b"
            >
              <p className="text-[18px] text-[#1a1a1a]">"{t.quote}"</p>
              <div>
                <p className="font-mono text-[13px] font-semibold text-[#1a1a1a]">
                  {t.name}
                </p>
                <p className="font-mono text-[12px] text-[#999]">{t.context}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom padding so footer reveal has breathing room */}
      <div className="h-24" />
    </div>
  );
}
