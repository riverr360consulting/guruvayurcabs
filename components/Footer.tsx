"use client";

import Link from "next/link";
import { useState } from "react";
import { Car, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { footerServices, quickLinks, siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New Newsletter Signup - Guruvayur Cabs",
          email,
        }),
      });
      const result = await response.json();
      setStatus(result.success ? "success" : "error");
      if (result.success) setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer className="bg-brand-950 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:px-8">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
              <Car className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-base font-extrabold">
                GURUVAYUR CABS
              </span>
              <span className="block text-[10px] text-white/50">
                Safe. Reliable. Comfortable.
              </span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Your trusted travel partner in Guruvayur. We provide safe,
            comfortable and affordable taxi services.
          </p>
          <div className="mt-5 flex gap-3">
            <SocialIcon href={siteConfig.socials.facebook} icon={<Facebook className="h-4 w-4" />} />
            <SocialIcon href={siteConfig.socials.instagram} icon={<Instagram className="h-4 w-4" />} />
            <SocialIcon href={siteConfig.socials.whatsapp} icon={<MessageCircle className="h-4 w-4" />} />
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-sm font-bold">Quick Links</h3>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-bold">Our Services</h3>
          <ul className="mt-4 space-y-2.5">
            {footerServices.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-bold">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              {siteConfig.address}
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0" />
              <a href={siteConfig.phoneHref} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-bold">Newsletter</h3>
          <p className="mt-4 text-sm text-white/60">
            Subscribe to get updates and offers.
          </p>
          <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
            <Input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:border-brand-400"
            />
          </form>
          <Button
            type="button"
            onClick={handleSubscribe}
            disabled={status === "loading"}
            className="mt-2 w-full"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </Button>
          {status === "success" && (
            <p className="mt-2 text-xs text-brand-300">Subscribed! Thank you.</p>
          )}
          {status === "error" && (
            <p className="mt-2 text-xs text-red-300">
              Something went wrong. Try again later.
            </p>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Guruvayur Cabs. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-600"
    >
      {icon}
    </a>
  );
}
