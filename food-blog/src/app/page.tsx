'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CommentSection from "./components/commentSection";
import Cards from "./HeroSection/page";
import heroImage from "./images/gettyimages-1316145932-612x612.jpg";
import featuredDessert from "./images/one.webp";
import { 
  Search, 
  Sparkles, 
  Clock, 
  Star, 
  Flame, 
  ChefHat, 
  ArrowRight, 
  Utensils, 
  Award, 
  Heart,
  BookOpen
} from "lucide-react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/explore?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/explore");
    }
  };

  const categories = [
    { name: "Artisan Desserts", count: "14 recipes", icon: "🍰", href: "/Blogs" },
    { name: "Savory Roasts", count: "9 recipes", icon: "🍗", href: "/Blogs" },
    { name: "Dips & Tapas", count: "8 recipes", icon: "🥑", href: "/Blogs" },
    { name: "Brunch Classics", count: "12 recipes", icon: "🥞", href: "/recipe" },
    { name: "Weeknight Quick", count: "15 recipes", icon: "⏱️", href: "/explore" },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Editorial Hero Section */}
      <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Search */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-semibold tracking-wide shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
              <span>Welcome to Gourmet Diaries</span>
            </div>

            <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Flavors That Inspire, <br />
              <span className="text-rose-600 font-handwriting text-5xl sm:text-6xl lg:text-7xl font-normal block mt-1">
                Stories That Warm The Soul
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              From no-bake summer delights to golden oven roasts, explore chef-crafted recipes with clear step-by-step guides, nutrition facts, and home kitchen wisdom.
            </p>

            {/* Recipe Search Box */}
            <form onSubmit={handleSearch} className="max-w-xl">
              <div className="relative flex items-center bg-white rounded-2xl border-2 border-stone-200 hover:border-rose-400 focus-within:border-rose-500 shadow-md p-1.5 transition-all">
                <Search className="w-5 h-5 text-slate-400 ml-3 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search recipes, ingredients (e.g. Strawberry, Salsa)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent px-3 py-2 text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-rose-600 hover:bg-rose-700 text-white font-medium text-sm sm:text-base px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all flex items-center gap-2 flex-shrink-0"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* Popular Search Tags */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 pt-1">
              <span className="font-medium text-slate-700">Trending Now:</span>
              <Link href="/Blogs" className="px-3 py-1 rounded-full bg-stone-100 hover:bg-rose-50 hover:text-rose-600 transition-colors">
                Strawberry Shortcake
              </Link>
              <Link href="/Blogs" className="px-3 py-1 rounded-full bg-stone-100 hover:bg-rose-50 hover:text-rose-600 transition-colors">
                Cherry Chicken
              </Link>
              <Link href="/recipe" className="px-3 py-1 rounded-full bg-stone-100 hover:bg-rose-50 hover:text-rose-600 transition-colors">
                Fluffy Pancakes
              </Link>
              <Link href="/Blogs" className="px-3 py-1 rounded-full bg-stone-100 hover:bg-rose-50 hover:text-rose-600 transition-colors">
                Restaurant Salsa
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-200/80 max-w-lg">
              <div>
                <p className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900">150+</p>
                <p className="text-xs text-slate-500">Tested Recipes</p>
              </div>
              <div>
                <p className="font-serif-title text-2xl sm:text-3xl font-bold text-rose-600">4.9★</p>
                <p className="text-xs text-slate-500">Community Score</p>
              </div>
              <div>
                <p className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900">45k+</p>
                <p className="text-xs text-slate-500">Monthly Foodies</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            {/* Background Warm Blob */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-rose-200/50 via-amber-200/40 to-rose-100/60 rounded-3xl blur-2xl -z-10" />

            {/* Featured Recipe Card */}
            <div className="bg-white rounded-3xl p-4 sm:p-5 border border-stone-200/90 shadow-2xl relative">
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden mb-4">
                <Image
                  src={heroImage}
                  alt="Gourmet Artisanal Spread"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-rose-600 flex items-center gap-1 shadow-sm">
                  <Flame className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  <span>Chef&apos;s Weekly Special</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>4.9 (148 reviews)</span>
                </div>
              </div>

              {/* Recipe Highlights Under Image */}
              <div className="space-y-3 px-2">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-rose-500" />
                    35 Mins Total
                  </span>
                  <span className="flex items-center gap-1">
                    <ChefHat className="w-3.5 h-3.5 text-amber-500" />
                    Beginner Friendly
                  </span>
                  <span className="font-semibold text-rose-600">350 kcal / serving</span>
                </div>

                <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-slate-900">
                  Classic Herb-Infused Gourmet Feast
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm line-clamp-2">
                  A harmonious celebration of farm-fresh herbs, caramelized citrus, and tender golden roasted textures for memorable dinner tables.
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <Link
                    href="/Blogs"
                    className="w-full text-center py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-rose-600 text-white text-sm font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <span>Read Full Recipe & Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Category Quick Pills */}
      <section className="py-8 bg-stone-100/60 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif-title text-lg font-bold text-slate-800">
              Browse By Cuisine & Mood
            </h2>
            <Link href="/explore" className="text-xs font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1">
              <span>View All Categories</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {categories.map((cat, index) => (
              <Link
                key={index}
                href={cat.href}
                className="group bg-white p-3.5 rounded-2xl border border-stone-200/80 hover:border-rose-300 hover:shadow-md transition-all flex items-center gap-3"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  {cat.icon}
                </span>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                    {cat.name}
                  </h4>
                  <p className="text-[11px] text-slate-500">{cat.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipe Showcase */}
      <Cards />

      {/* Culinary Quality Standards Banner */}
      <section className="py-16 bg-gradient-to-br from-rose-50 via-stone-50 to-amber-50/40 border-y border-rose-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif-title text-3xl font-bold text-slate-900">
              The Gourmet Diaries Kitchen Standard
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Every recipe published here undergoes meticulous trial and tasting before it reaches your plate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-5">
                <ChefHat className="w-6 h-6" />
              </div>
              <h3 className="font-serif-title text-xl font-bold text-slate-900 mb-2">
                Home Kitchen Tested
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                No esoteric commercial equipment. Tested with standard pans, grocery ingredients, and accurate oven temperatures.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-5">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif-title text-xl font-bold text-slate-900 mb-2">
                Exact Measurements
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Clear tablespoon, cup, and gram benchmarks so your cake rises high and your sauces reach silken consistency every time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif-title text-xl font-bold text-slate-900 mb-2">
                Dietary & Flavor Swaps
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Vegetarian, dairy-free, and kid-friendly variations provided in every single post for hassle-free dinner adjustments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Comments & Reviews */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <CommentSection />
      </div>
    </div>
  );
}
