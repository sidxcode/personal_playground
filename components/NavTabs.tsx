import Link from "next/link";

const tabs = [
  { label: "work", href: "/" },
  { label: "lately", href: "/lately" },
  { label: "playground", href: "/playground" },
  { label: "about me", href: "/about-me" },
];

export default function NavTabs() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-fit max-w-5xl flex-col gap-2 pt-5 pb-0 text-[#1a1a1a] md:flex-row md:items-center md:justify-between md:gap-0">
        <div className="w-full text-center md:w-auto md:text-left">
          <Link
            href="/"
            className="font-[var(--font-geist-sans)] text-base font-medium tracking-tight hover:opacity-70"
          >
            SIDDHARTH
          </Link>
        </div>
        <div className="w-full md:w-auto">
          <ul className="flex flex-row items-center justify-between gap-2 px-5 text-sm font-medium md:justify-end">
            {tabs.map((tab) => (
              <li key={tab.href}>
                <Link
                  href={tab.href}
                  className="inline-flex bg-black px-[6px] text-white hover:opacity-80"
                >
                  {tab.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
