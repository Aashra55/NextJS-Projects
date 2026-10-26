'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../images/logo.jpg";
import { Mail, Phone, MapPin, Heart, Send, CheckCircle2, Instagram, Youtube, Facebook, ArrowUp } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 mt-20 relative border-t-4 border-rose-500">
      {/* Scroll to Top Floating Pill Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 right-8 bg-rose-600 hover:bg-rose-700 text-white p-2.5 rounded-full shadow-lg hover:shadow-rose-600/30 transition-all duration-300 hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-rose-400">
                <Image src={logo} alt="Gourmet Diaries Logo" fill className="object-cover" />
              </div>
              <span className="font-serif-title text-2xl font-bold text-white tracking-tight">
                Gourmet <span className="text-rose-400 font-handwriting text-3xl font-normal">Diaries</span>
              </span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              Celebrating the art of thoughtful, delicious home cooking. Every recipe is meticulously tested, photographed, and shared to bring culinary joy to your kitchen table.
            </p>
            <div className="pt-2 flex items-center space-x-3 text-stone-400">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-rose-600 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-rose-600 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-rose-600 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-white font-serif-title text-lg font-semibold tracking-wide mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              Explore Gourmet
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-rose-400 transition-colors">Home Kitchen</Link>
              </li>
              <li>
                <Link href="/recipe" className="hover:text-rose-400 transition-colors">Featured Recipes</Link>
              </li>
              <li>
                <Link href="/Blogs" className="hover:text-rose-400 transition-colors">Food Blogs & Stories</Link>
              </li>
              <li>
                <Link href="/explore" className="hover:text-rose-400 transition-colors">Recipe Explorer</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-rose-400 transition-colors">Contact Chef & Studio</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Categories */}
          <div>
            <h3 className="text-white font-serif-title text-lg font-semibold tracking-wide mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Popular Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/Blogs" className="hover:text-amber-400 transition-colors flex items-center justify-between">
                  <span>Artisan Desserts & Sweets</span>
                  <span className="text-xs text-stone-500 font-mono">12 recipes</span>
                </Link>
              </li>
              <li>
                <Link href="/Blogs" className="hover:text-amber-400 transition-colors flex items-center justify-between">
                  <span>Savory Roasts & Mains</span>
                  <span className="text-xs text-stone-500 font-mono">8 recipes</span>
                </Link>
              </li>
              <li>
                <Link href="/Blogs" className="hover:text-amber-400 transition-colors flex items-center justify-between">
                  <span>Fresh Dips & Appetizers</span>
                  <span className="text-xs text-stone-500 font-mono">6 recipes</span>
                </Link>
              </li>
              <li>
                <Link href="/recipe" className="hover:text-amber-400 transition-colors flex items-center justify-between">
                  <span>Weekend Brunch Classics</span>
                  <span className="text-xs text-stone-500 font-mono">15 recipes</span>
                </Link>
              </li>
              <li>
                <Link href="/explore" className="hover:text-amber-400 transition-colors flex items-center justify-between">
                  <span>30-Minute Weeknight Meals</span>
                  <span className="text-xs text-stone-500 font-mono">9 recipes</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter Box */}
          <div>
            <h3 className="text-white font-serif-title text-lg font-semibold tracking-wide mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              The Gourmet Gazette
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed mb-4">
              Join 25,000+ passionate foodies. Receive weekly seasonal recipe ideas, kitchen secrets, and dinner inspiration right in your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2.5">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your favorite email..."
                  required
                  className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-rose-600 hover:bg-rose-700 text-white font-medium text-sm py-2.5 px-4 rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Subscribe Free</span>
              </button>
            </form>

            {subscribed && (
              <div className="mt-3 p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Welcome! Check your inbox for our Top 10 Dessert Guide.</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="mt-14 pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Gourmet Diaries. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-stone-300 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-stone-300 transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-stone-300 transition-colors">Culinary Team</Link>
          </div>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> for passionate food lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}
