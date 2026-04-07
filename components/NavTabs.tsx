import Link from "next/link";

const tabs = [
  { label: "work", href: "/" },
  { label: "lately", href: "/lately" },
  { label: "playground", href: "/playground" },
  { label: "about", href: "/about-me" },
];

export default function NavTabs() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 lg:inset-x-auto lg:inset-y-0 lg:left-0">
      <div className="mx-auto flex h-fit max-w-5xl flex-col gap-2 pt-5 pb-0 text-[#1a1a1a] lg:h-full lg:justify-start lg:gap-6 lg:px-5 lg:pt-8">
        <div className="w-full text-center lg:w-auto lg:text-left">
          <Link
            href="/"
            className="font-[var(--font-geist-sans)] text-[18px] font-medium tracking-tight hover:opacity-70"
          >
            SIDDHARTH
          </Link>
        </div>
        <div className="w-full lg:w-auto">
          <ul className="flex flex-row items-center justify-between gap-2 px-5 text-[18px] font-medium lg:flex-col lg:items-start lg:justify-start lg:px-0">
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
