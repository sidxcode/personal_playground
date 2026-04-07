"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "Home", href: "/" },
  { label: "Archive", href: "/archive" },
  { label: "About", href: "/about" },
];

export default function NavTabs() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-[#e7e7e7] px-4 pt-3 bg-white">
      <ul className="flex items-center gap-8 text-[#2a2a2a]">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;

          return (
            <li
              key={tab.href}
              className={`pb-3 text-[14px] font-medium ${
                isActive ? "border-b-2 border-black" : "border-b-2 border-transparent"
              }`}
            >
              <Link href={tab.href}>{tab.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
