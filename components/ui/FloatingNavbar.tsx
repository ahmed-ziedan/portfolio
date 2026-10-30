"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll while the mobile menu is open and restore its prior value.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!mobileOpen || !navRef.current) return;

    const menuButton = menuButtonRef.current;
    const menuLinks = navRef.current.querySelectorAll<HTMLElement>(
      '#mobile-nav a[href], #mobile-nav button:not([disabled])'
    );
    const firstElement = menuLinks[0];
    const lastElement = menuLinks[menuLinks.length - 1];

    if (!firstElement || !lastElement) return;

    // Move focus into the menu and return it to the toggle when the menu closes.
    firstElement.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      menuButton?.focus();
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
      <nav
        ref={navRef}
        aria-label="Main navigation"
        className={cn("site-nav", className)}
      >
        <Link href="#top" className="site-brand" onClick={() => setMobileOpen(false)}>
          <span className="brand-mark">AZ</span>
          <span className="hidden text-sm font-semibold tracking-tight text-foreground sm:block">Ahmed Ziedan</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((navItem, idx) => (
            <Link
              key={`desktop-link-${idx}`}
              href={navItem.link}
              className={cn(
                "nav-link",
                navItem.name === "Contact" && "nav-link-contact"
              )}
            >
              {navItem.icon && <span>{navItem.icon}</span>}
              {navItem.name === "Contact" ? <>{navItem.name}<ArrowUpRight size={14} /></> : navItem.name}
            </Link>
          ))}
        </div>

        <button
          ref={menuButtonRef}
          className="nav-menu-button md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {mobileOpen && (
          <div
            id="mobile-nav"
            role="menu"
            aria-label="Mobile navigation"
            className="mobile-nav md:hidden"
          >
              <div className="flex flex-col gap-1 p-2">
                {navItems.map((navItem, idx) => (
                  <Link
                    key={`mobile-link-${idx}`}
                    href={navItem.link}
                    role="menuitem"
                    onClick={closeMobile}
                    className={cn(
                      "mobile-nav-link"
                    )}
                  >
                    {navItem.icon && <span>{navItem.icon}</span>}
                    <span>{navItem.name}</span>
                  </Link>
                ))}
              </div>
          </div>
        )}
      </nav>
  );
};
