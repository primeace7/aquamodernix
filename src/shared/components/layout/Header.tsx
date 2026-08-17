import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/shared/lib/utils";

const navItems = [
  { to: "/about", label: "About" },
  { to: "/consulting", label: "Consulting" },
  { to: "/aquaculture", label: "Aquaculture" },
  { to: "/poultry", label: "Poultry" },
  { to: "/blog", label: "Blog" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <NavLink
          to="/"
          className="font-display text-lg font-semibold tracking-tight text-primary"
        >
          AquaModernix
        </NavLink>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium text-foreground/70 transition-colors hover:text-primary",
                  isActive && "text-primary",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <NavLink
            to="/contact"
            className="hidden rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 md:inline-flex"
          >
            Book a Consultation
          </NavLink>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-b border-border/60 bg-background/95 backdrop-blur transition-all duration-300 ease-in-out md:hidden",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 border-b-0 opacity-0",
        )}
      >
        <nav className="container flex flex-col gap-1 py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                cn(
                  "rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary",
                  isActive && "bg-muted text-primary",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="mt-2 rounded-md bg-accent px-3 py-2.5 text-center text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Book a Consultation
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
