"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Car, Menu, Phone, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-800 text-white">
            <Car className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight text-brand-900">
              GURUVAYUR <span className="text-brand-600">CABS</span>
            </span>
            <span className="block text-[11px] font-medium tracking-wide text-brand-950/50">
              Safe. Reliable. Comfortable.
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname?.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium text-brand-950/80 transition-colors hover:text-brand-700",
                  isActive &&
                    "text-brand-700 after:absolute after:-bottom-6 after:left-0 after:h-0.5 after:w-full after:bg-brand-700"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Call CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-700">
            <Phone className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <p className="text-[11px] font-medium text-brand-950/50">
              Call / WhatsApp
            </p>
            <a
              href={siteConfig.phoneHref}
              className="text-sm font-bold text-brand-900 hover:text-brand-700"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-brand-900 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="border-t border-brand-100 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname?.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-brand-50 hover:text-brand-700",
                    isActive
                      ? "bg-brand-50 text-brand-700"
                      : "text-brand-950/80"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={siteConfig.phoneHref}
              className="mt-2 flex items-center gap-2 rounded-lg bg-brand-800 px-3 py-2.5 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" /> {siteConfig.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
