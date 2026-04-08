"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";

const tabs = [
  { label: "WORK", href: "/" },
  { label: "LATELY", href: "/lately" },
  { label: "PLAYGROUND", href: "/playground" },
  { label: "ABOUT", href: "/about-me" },
];

export default function NavTabs() {
  const pathname = usePathname();
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white lg:inset-x-auto lg:inset-y-0 lg:left-0 lg:w-[160px] lg:border-r lg:border-gray-100">
      {/* Mobile : horizontal top bar */}
      <div className="flex flex-col items-center gap-2 lg:hidden">
        <Link
          href="/"
          className="text-[#e8380d] font-mono text-[16px] tracking-[-0.12em]"
        >
          SIDDHARTH
        </Link>
        <ul className="flex flex-row items-center gap-2 text-[13px] font-semibold">
          {tabs.map((tab) => (
            <li key={tab.href}>
              <Link
                href={tab.href}
                className={`inline-flex px-2 py-[2px] ${
                  pathname === tab.href
                    ? "bg-[#e8380d] text-white"
                    : "bg-black text-white"
                } hover:opacity-80`}
              >
                {tab.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop: vertical sidebar */}
      <div className="hidden lg:flex lg:h-full lg:flex-col lg:gap-6 px-4 py-6">
        <Link
          href="/"
          className="text-[#e8380d] text-[18px] font-mono hover:opacity-70 tracking-[-0.12em]"
        >
          SIDDHARTH
        </Link>
        <ul className="flex flex-col items-start gap-2 text-[15px] font-semibold">
          {tabs.map((tab) => (
            <li key={tab.href} className="flex items-center gap-2">
              <Link
                href={tab.href}
                className={`inline-flex px-[6px] py-[1px] ${
                  pathname === tab.href
                    ? "bg-[#e8380d] text-white tracking-[-0.12em]"
                    : "bg-black text-white tracking-[-0.12em]"
                } hover:opacity-80`}
              >
                {tab.label}
              </Link>
              {/* Active dot indicator */}
              {pathname === tab.href && (
                <span className="h-[6px] w-[6px] rounded-full bg-[#e8380d]" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
