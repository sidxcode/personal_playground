import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#f7f7fb]">
      {/* dotted grid background */}
      <div className="relative mx-auto flex min-h-screen max-w-5xl items-center justify-center px-4 py-10 sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,#d4d4d8_1px,transparent_0)] bg-[length:24px_24px]" />

        <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,260px),minmax(0,1fr)] lg:items-start">
          {/* left info card */}
          <section className="flex justify-center lg:justify-start">
            <div className="h-fit w-full max-w-[400px] rounded-none bg-white/95 p-5 font-general-sans shadow-none">
              <div className="mb-3 flex items-center gap-2 text-base leading-4 font-medium text-[rgba(33,33,33,1)]">
                <span>Siddharth Borman</span>
              </div>

              <p className="mb-2 text-base text-[rgba(105,105,105,1)]">12:53:03 PM</p>

              <p className="mb-3 text-base leading-5 text-[rgba(105,105,105,1)]">
                Product designer from <span className="font-semibold">Assam</span>, building web and
                mobile experiences for startups and global brands for{" "}
                <span className="font-semibold">2+ years</span> now.
              </p>

              <p className="mb-3 text-base leading-5 text-[rgba(105,105,105,1)]">
                Currently helping out at{" "}
                <span className="font-semibold text-zinc-900">studiocanine</span>.
              </p>

              <p className="mb-3 text-base leading-5 text-[rgba(105,105,105,1)]">
                I love making things for the internet.
                <br />
                find out more about me{" "}
                <span className="underline underline-offset-2">here</span>.
              </p>

              <p className="text-base leading-5 text-[rgba(105,105,105,1)]">
                Reach me at{" "}
                <a
                  href="mailto:siddharth002b@gmail.com"
                  className="font-medium underline underline-offset-2"
                >
                  siddharth002b@gmail.com
                </a>
              </p>
            </div>
          </section>

          {/* right main content */}
          <section className="space-y-6">
          </section>
        </div>
      </div>
    </div>
  );
}
