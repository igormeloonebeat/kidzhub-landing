import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Recursos", href: "#recursos" },
  { label: "Preços", href: "#precos" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream-50/80 backdrop-blur-lg border-b border-teal-100/50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <img src="/favicon.png" alt="KidzHub" className="w-8 h-8 rounded-lg" />
          <span className="font-bold text-xl text-teal-900">
            Kidz<span className="text-coral-400">Hub</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-teal-600 hover:text-teal-900 transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://care.kidzhub.com.br" className="text-sm font-medium px-4 py-2 rounded-full border border-teal-300 text-teal-700 hover:bg-teal-50 transition-colors">
            KidzCare
          </a>
          <a href="https://edu.kidzhub.com.br" className="text-sm font-medium px-4 py-2 rounded-full bg-coral-400 text-white hover:bg-coral-500 transition-colors">
            KidzEdu
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-teal-700">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-teal-100/50 bg-cream-50/95 backdrop-blur-lg px-4 pb-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-teal-600">
              {l.label}
            </a>
          ))}
          <div className="flex gap-3 mt-3">
            <a href="https://care.kidzhub.com.br" className="flex-1 text-center text-sm font-medium px-4 py-2 rounded-full border border-teal-300 text-teal-700">
              KidzCare
            </a>
            <a href="https://edu.kidzhub.com.br" className="flex-1 text-center text-sm font-medium px-4 py-2 rounded-full bg-coral-400 text-white">
              KidzEdu
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
