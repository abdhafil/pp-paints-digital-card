import business from "../../data/business.js";
import logo from "../../assets/images/logo.jpg";
import { ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-[#FAFAF7]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-5 sm:py-4 lg:px-10">
        <a
          className="flex shrink-0 items-center"
          href="#home"
          aria-label={`${business.name} home`}
        >
          <img
            src={logo}
            alt={business.name}
            className="h-14 w-14 rounded-xl bg-white object-contain"
          />
        </a>
        <nav
          className="hidden items-center gap-9 text-sm font-medium text-[#465365] md:flex"
          aria-label="Main navigation"
        >
          <a className="transition hover:text-[#F97316]" href="#home">
            Home
          </a>
          <a className="transition hover:text-[#F97316]" href="#about">
            About
          </a>
          <a className="transition hover:text-[#F97316]" href="#products">
            Products
          </a>
          <a className="transition hover:text-[#F97316]" href="#contact">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-[#F97316] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-orange-700 md:inline-flex"
        >
          Contact us
        </a>
        <details className="group relative md:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-full border border-slate-300 px-4 text-sm font-semibold text-[#17283F]">
            <span>Menu</span>
            <ChevronDown
              size={16}
              className="transition group-open:rotate-180"
            />
          </summary>
          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-full mt-3 grid min-w-48 gap-1 rounded-xl border border-slate-200 bg-white p-2 shadow-xl"
          >
            <a
              className="rounded-lg px-4 py-3 text-sm hover:bg-slate-50"
              href="#home"
            >
              Home
            </a>
            <a
              className="rounded-lg px-4 py-3 text-sm hover:bg-slate-50"
              href="#about"
            >
              About
            </a>
            <a
              className="rounded-lg px-4 py-3 text-sm hover:bg-slate-50"
              href="#products"
            >
              Products
            </a>
            <a
              className="rounded-lg px-4 py-3 text-sm hover:bg-slate-50"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
