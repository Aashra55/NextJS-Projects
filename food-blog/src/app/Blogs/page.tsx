'use client';

import React, { useState, useMemo } from "react";
import { blogs } from "./cards";
import Image from "next/image";
import Link from "next/link";
import { 
  Search, 
  Clock, 
  Star, 
  Eye, 
  MessageSquare, 
  Flame, 
  ChefHat, 
  ArrowRight, 
  Sparkles,
  SlidersHorizontal,
  CheckCircle2
} from "lucide-react";

export default function BlogListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"featured" | "rating" | "views" | "time">("featured");

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch = 
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.tagline.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDifficulty = 
        selectedDifficulty === "All" || 
        blog.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();

      return matchesSearch && matchesDifficulty;
    }).sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "views") return b.views - a.views;
      if (sortBy === "time") {
        const timeA = parseInt(a.preparationTime) || 30;
        const timeB = parseInt(b.preparationTime) || 30;
        return timeA - timeB;
      }
      return 0; // featured default
    });
  }, [searchQuery, selectedDifficulty, sortBy]);

  return (
    <main className="min-h-screen bg-[#FAF9F6] py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-semibold tracking-wide shadow-sm mb-4">
          <Sparkles className="w-3.5 h-3.5 text-rose-500" />
          <span>The Gourmet Collection</span>
        </div>
        <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
          Food Stories & <br className="hidden sm:inline" />
          <span className="text-rose-600 font-handwriting text-5xl sm:text-6xl lg:text-7xl font-normal">
            Handcrafted Recipes
          </span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          Deep-dive into recipes with comprehensive culinary backstories, exact measurements, full nutritional breakdowns, and chef wisdom.
        </p>
      </section>

      {/* Filter & Search Bar */}
      <section className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-sm mb-12">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by recipe name, flavor or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 rounded-2xl pl-12 pr-4 py-3 text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 bg-stone-200 hover:bg-stone-300 w-5 h-5 rounded-full flex items-center justify-center"
              >
                ✕
              </button>
            )}
          </div>

          {/* Difficulty Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {["All", "Easy", "Medium"].map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex-shrink-0 ${
                  selectedDifficulty === diff
                    ? "bg-rose-600 text-white shadow-sm shadow-rose-500/20"
                    : "bg-stone-50 text-slate-600 hover:bg-stone-100 hover:text-slate-900 border border-stone-200/60"
                }`}
              >
                {diff === "All" ? "All Levels" : `${diff} Prep`}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <SlidersHorizontal className="w-4 h-4 text-slate-400 hidden sm:block" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-700 focus:bg-white focus:outline-none focus:border-rose-500 transition"
            >
              <option value="featured">Featured Order</option>
              <option value="rating">Highest Rated ★</option>
              <option value="views">Most Popular 👁</option>
              <option value="time">Fastest Prep ⏱</option>
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-slate-500">
          <span>Showing <strong className="text-slate-800">{filteredBlogs.length}</strong> of {blogs.length} gourmet recipes</span>
          {searchQuery && (
            <span>Filtered by: &quot;{searchQuery}&quot;</span>
          )}
        </div>
      </section>

      {/* Recipe Cards List */}
      {filteredBlogs.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-stone-200/80 my-8">
          <p className="text-4xl mb-3">🔍</p>
          <h3 className="font-serif-title text-2xl font-bold text-slate-800 mb-2">
            No recipes matched your search
          </h3>
          <p className="text-slate-500 text-sm mb-6">
            Try adjusting your search terms or clearing the difficulty filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedDifficulty("All");
            }}
            className="px-6 py-2.5 rounded-xl bg-rose-600 text-white font-medium text-sm hover:bg-rose-700 transition"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {filteredBlogs.map((blog, idx) => (
            <article
              key={blog.id}
              className="group bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col lg:flex-row"
            >
              {/* Image Section */}
              <div className="relative lg:w-2/5 h-64 sm:h-80 lg:h-auto overflow-hidden bg-stone-100 flex-shrink-0">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority={idx < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                {/* Difficulty Pill */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm ${
                    blog.difficulty.toLowerCase() === "easy"
                      ? "bg-emerald-500/90 text-white"
                      : "bg-amber-500/90 text-white"
                  }`}>
                    {blog.difficulty}
                  </span>
                </div>

                {/* Prep Time */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white text-xs font-semibold bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-xl">
                  <Clock className="w-3.5 h-3.5 text-rose-300" />
                  <span>{blog.preparationTime}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Top Stats & Tagline */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-rose-600 uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full">
                      {blog.tagline}
                    </span>

                    <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                      <span className="flex items-center gap-1 text-amber-500 font-bold">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        {blog.rating}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5 text-slate-400" />
                        {blog.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                        {blog.comments}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors mt-2 mb-3">
                    {blog.title}
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                    {blog.description}
                  </p>

                  {/* Nutrition Highlights Strip */}
                  <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5 bg-stone-50 border border-stone-200/70 p-3 rounded-2xl">
                    <div className="text-center">
                      <span className="block text-[11px] text-slate-500 uppercase tracking-wider font-medium">Calories</span>
                      <span className="font-bold text-slate-900 text-xs sm:text-sm">{blog.nutrition.calories}</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-[11px] text-slate-500 uppercase tracking-wider font-medium">Protein</span>
                      <span className="font-bold text-rose-600 text-xs sm:text-sm">{blog.nutrition.protein}</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-[11px] text-slate-500 uppercase tracking-wider font-medium">Carbs</span>
                      <span className="font-bold text-slate-900 text-xs sm:text-sm">{blog.nutrition.carbs}</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-[11px] text-slate-500 uppercase tracking-wider font-medium">Fats</span>
                      <span className="font-bold text-slate-900 text-xs sm:text-sm">{blog.nutrition.fats}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="mt-6 pt-5 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 flex items-center gap-1.5">
                    <ChefHat className="w-4 h-4 text-rose-500" />
                    <span>Includes Steps &amp; Ingredients</span>
                  </span>

                  <Link
                    href={`/Blogs/${blog.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-sm group-hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-500/20 transition-all duration-200"
                  >
                    <span>View Recipe & Story</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
