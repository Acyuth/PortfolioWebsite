"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, profile } from "@/content/profile";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Scroll-spy for the home page sections only.
  useEffect(() => {
    if (!isHome) {
      setActiveId(null);
      return;
    }

    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => node !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  // Lock scroll and wire Escape while the mobile overlay is open.
  useEffect(() => {
    if (!menuOpen) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/92 backdrop-blur-sm">
      <div className="shell flex h-16 items-center justify-between gap-6 sm:h-[4.5rem]">
        <Link
          href="/"
          className="label text-bone transition-colors hover:text-gold"
          aria-label={`${profile.name} — home`}
        >
          {profile.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {navigation.map((item) => {
            const current = isHome && activeId === item.id;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "true" : undefined}
                className={`label relative py-1 transition-colors hover:text-bone ${
                  current ? "text-bone" : "text-muted"
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-0.5 left-0 h-px w-full bg-gold transition-transform duration-300 ${
                    current ? "scale-x-100" : "scale-x-0"
                  } origin-left`}
                />
              </Link>
            );
          })}
          <a
            href={profile.resumePath}
            className="label rounded-full border border-gold/50 px-4 py-2 text-gold transition-colors hover:border-gold hover:bg-gold/10"
          >
            Résumé
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="label text-muted transition-colors hover:text-bone md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </div>

      {menuOpen ? (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 flex flex-col bg-ink md:hidden"
        >
          <div className="shell flex h-16 items-center justify-between border-b border-line">
            <span className="label text-muted">Menu</span>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setMenuOpen(false)}
              className="label text-bone"
            >
              Close
            </button>
          </div>
          <nav aria-label="Mobile" className="shell flex flex-1 flex-col justify-center gap-2 pb-24">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-line py-5 font-serif text-3xl text-bone"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={profile.resumePath}
              onClick={() => setMenuOpen(false)}
              className="border-b border-line py-5 font-serif text-3xl text-gold"
            >
              Résumé
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
