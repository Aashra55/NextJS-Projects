'use client';

import React, { useState, useMemo, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { recipes } from "./data";
import { 
  Search, 
  Sparkles, 
  ChefHat, 
  Clock, 
  ArrowRight, 
  Filter, 
  Star,
  BookOpen
} from "lucide-react";

function ExploreContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Dessert", "Mexican", "Italian", "Breakfast"];

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesSearch =
        recipe.title.toLowerCase().includes(query.toLowerCase()) ||
        recipe.description.toLowerCase().includes(query.toLowerCase()) ||
        recipe.category.toLowerCase().includes(query.toLowerCase()) ||
        recipe.author.toLowerCase().includes(query.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        recipe.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [query, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-rose-500" />
          <span>Curated Recipe Library</span>
        </div>
        <h1 className="font-serif-title text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Explore Handcrafted <br />
          <span className="text-rose-600 font-handwriting text-5xl sm:text-6xl font-normal">
            Global Flavors
          </span>
        </h1>
        <p className="mt-3 text-slate-600 text-base sm:text-lg">
          Filter through chef favorites across Italian pastas, Mexican street bites, artisanal breakfasts, and sweet finishes.
        </p>
      </section>

      {/* Search & Category Tabs */}
      <section className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-sm mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by recipe, cuisine, or chef..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 rounded-2xl pl-12 pr-4 py-3 text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 bg-stone-200 hover:bg-stone-300 w-5 h-5 rounded-full flex items-center justify-center"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex-shrink-0 ${
                  selectedCategory === cat
                    ? "bg-rose-600 text-white shadow-sm shadow-rose-500/20"
                    : "bg-stone-50 text-slate-600 hover:bg-stone-100 hover:text-slate-900 border border-stone-200/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-slate-500">
          <span>Found <strong className="text-slate-800">{filteredRecipes.length}</strong> delicious culinary guides</span>
          {query && <span>Showing matches for &quot;{query}&quot;</span>}
        </div>
      </section>

      {/* Recipes Grid */}
      {filteredRecipes.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-stone-200/80 my-8">
          <p className="text-4xl mb-3">🍽️</p>
          <h3 className="font-serif-title text-2xl font-bold text-slate-800 mb-2">
            No recipes found
          </h3>
          <p className="text-slate-500 text-sm mb-6">
            We couldn&apos;t find anything matching your search. Try another keyword or browse all categories.
          </p>
          <button
            onClick={() => {
              setQuery("");
              setSelectedCategory("All");
            }}
            className="px-6 py-2.5 rounded-xl bg-rose-600 text-white font-medium text-sm hover:bg-rose-700 transition"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredRecipes.map((recipe) => (
            <Link
              key={recipe.id}
              href={`/explore/${recipe.item}`}
              className="group bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {/* Photo */}
              <div className="relative h-56 w-full overflow-hidden bg-stone-100">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-slate-900 shadow-sm">
                    {recipe.category}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 text-white text-xs font-medium bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                  <span>By {recipe.author}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-title text-xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors line-clamp-1">
                    {recipe.title}
                  </h3>
                  <p className="mt-2 text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {recipe.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    {recipe.date}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 group-hover:translate-x-1 transition-transform">
                    <span>View Recipe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Bottom Inspiration Box */}
      <section className="mt-16 bg-stone-100 rounded-3xl p-8 sm:p-10 text-center border border-stone-200/80">
        <h3 className="font-serif-title text-2xl font-bold text-slate-900 mb-2">
          Looking for custom culinary recommendations?
        </h3>
        <p className="text-slate-600 text-sm max-w-xl mx-auto mb-6">
          Reach out to our kitchen editors or suggest a recipe you would love our team to develop and photograph.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-rose-600 text-white font-semibold text-sm transition-colors shadow-sm"
        >
          <span>Send Kitchen Feedback</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}

export default function ExploreMore() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Suspense fallback={
        <div className="max-w-7xl mx-auto p-12 text-center text-slate-500">
          Loading recipes...
        </div>
      }>
        <ExploreContent />
      </Suspense>
    </main>
  );
}
