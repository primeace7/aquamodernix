import { NavLink } from "react-router-dom";
import { cn } from "@/shared/lib/utils";

const navItems = [
  { to: "/about", label: "About" },
  { to: "/consulting", label: "Consulting" },
  { to: "/aquaculture", label: "Aquaculture" },
  { to: "/poultry", label: "Poultry" },
  { to: "/blog", label: "Blog" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <NavLink to="/" className="font-display text-lg font-semibold tracking-tight text-primary">
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
                  isActive && "text-primary"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/contact"
          className="hidden rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 md:inline-flex"
        >
          Book a Consultation
        </NavLink>
      </div>
    </header>
  );
}
