'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../images/logo.jpg";
import { Utensils, Search, Menu, X, BookOpen, Compass, Mail, Sparkles, ChefHat } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Recipes", href: "/recipe" },
    { name: "Blogs", href: "/Blogs" },
    { name: "Explore", href: "/explore" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 glass-nav border-b border-rose-100/80 shadow-sm transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 text-white text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 animate-pulse" />
        <span>Fresh Weekend Picks: Discover 10+ No-Bake Desserts & Quick Summer Dips!</span>
        <Link href="/Blogs" className="underline font-semibold hover:text-amber-100 ml-1">
          Explore Now →
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-rose-200 shadow-sm group-hover:scale-105 transition-transform duration-300">
              <Image 
                src={logo} 
                alt="Gourmet Diaries Logo" 
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-title text-2xl font-bold tracking-tight text-slate-900 group-hover:text-rose-600 transition-colors">
                Gourmet <span className="text-rose-600 font-handwriting text-3xl font-normal">Diaries</span>
              </span>
              <span className="text-[11px] text-slate-500 font-medium tracking-widest uppercase -mt-1">
                Artisan Recipes & Stories
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all duration-200 relative ${
                    active
                      ? "text-rose-600 bg-rose-50 shadow-sm"
                      : "text-slate-600 hover:text-rose-600 hover:bg-stone-100/70"
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-rose-600" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/explore"
              className="p-2.5 rounded-full text-slate-600 hover:text-rose-600 hover:bg-rose-50 transition-colors border border-transparent hover:border-rose-200"
              title="Search Recipes"
            >
              <Search className="w-4 h-4" />
            </Link>

            <Link
              href="/recipe"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-600 text-white text-sm font-semibold shadow-md shadow-rose-500/20 hover:bg-rose-700 hover:shadow-lg hover:shadow-rose-600/30 transition-all duration-200"
            >
              <ChefHat className="w-4 h-4" />
              <span>Featured Recipe</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/explore"
              className="p-2 text-slate-600 hover:text-rose-600"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-rose-600 hover:bg-rose-50 focus:outline-none transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass-card border-b border-rose-100 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1.5 pb-3">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    active
                      ? "bg-rose-50 text-rose-600 font-semibold"
                      : "text-slate-700 hover:bg-stone-100 hover:text-rose-600"
                  }`}
                >
                  <span>{link.name}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-rose-600" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-stone-200/60 flex flex-col gap-2.5">
            <Link
              href="/recipe"
              onClick={() => setIsMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-rose-600 text-white font-semibold shadow-md shadow-rose-500/20"
            >
              <ChefHat className="w-5 h-5" />
              <span>Explore Featured Recipe</span>
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl border border-stone-300 text-slate-700 font-medium hover:bg-stone-50"
            >
              Contact & Collaborations
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
