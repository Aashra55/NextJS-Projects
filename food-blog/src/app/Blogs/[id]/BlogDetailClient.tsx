'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CommentSection from "@/app/components/commentSection";
import { 
  Clock, 
  ChefHat, 
  Star, 
  Flame, 
  Printer, 
  Share2, 
  Bookmark, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Lightbulb, 
  Utensils, 
  ArrowLeft,
  Sparkles,
  Heart,
  Scale
} from "lucide-react";

export default function BlogDetailClient({ blog }: { blog: any }) {
  const [servingsMultiplier, setServingsMultiplier] = useState<number>(1);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [shareToast, setShareToast] = useState<string | null>(null);

  const toggleIngredient = (index: number) => {
    setCheckedIngredients(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleStep = (index: number) => {
    setCompletedSteps(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShareToast("Recipe link copied to clipboard!");
      setTimeout(() => setShareToast(null), 3000);
    }
  };

  const fullStars = Math.floor(blog.rating);
  const hasHalfStar = blog.rating % 1 !== 0;

  // Scale numbers in ingredient string if multiplied
  const scaleIngredient = (item: string, multiplier: number) => {
    if (multiplier === 1) return item;
    // Replace leading numbers or fractions
    return item.replace(/^(\d+(\.\d+)?|\d+\/\d+)/, (match) => {
      const num = parseFloat(match);
      if (!isNaN(num)) {
        return (num * multiplier).toString();
      }
      return match;
    });
  };

  return (
    <article className="min-h-screen bg-[#FAF9F6] py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Back Link & Breadcrumb */}
      <nav className="mb-6 flex items-center justify-between text-xs sm:text-sm text-slate-500 no-print">
        <Link 
          href="/Blogs" 
          className="inline-flex items-center gap-1.5 font-semibold text-rose-600 hover:text-rose-700 hover:-translate-x-0.5 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Recipes</span>
        </Link>

        <div className="hidden sm:flex items-center gap-2 text-stone-400">
          <Link href="/" className="hover:text-slate-700">Home</Link>
          <span>/</span>
          <Link href="/Blogs" className="hover:text-slate-700">Blogs</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium truncate max-w-[200px]">{blog.title}</span>
        </div>
      </nav>

      {/* Main Recipe Header */}
      <header className="mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-rose-500" />
          <span>{blog.tagline}</span>
        </div>

        <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {blog.title}
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
          {blog.description}
        </p>

        {/* Byline & Review Meta Bar */}
        <div className="mt-6 pt-6 border-t border-stone-200/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex text-amber-400">
              {[...Array(fullStars)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              {hasHalfStar && <Star className="w-4 h-4 fill-amber-400/50 text-amber-400" />}
            </div>
            <span className="text-sm font-bold text-slate-800">{blog.rating} out of 5</span>
            <span className="text-xs text-slate-400">({blog.comments} reviews • {blog.views} cooks viewed)</span>
          </div>

          {/* Action Bar */}
          <div className="flex items-center gap-2 no-print">
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                isBookmarked
                  ? "bg-rose-50 border-rose-300 text-rose-600 shadow-sm"
                  : "bg-white border-stone-200 text-slate-600 hover:bg-stone-50"
              }`}
              title="Bookmark Recipe"
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-rose-500 text-rose-500" : ""}`} />
              <span className="hidden sm:inline">{isBookmarked ? "Saved" : "Save"}</span>
            </button>

            <button
              onClick={handleShare}
              className="p-2.5 rounded-xl bg-white border border-stone-200 text-slate-600 hover:bg-stone-50 text-xs font-semibold flex items-center gap-1.5 transition-all"
              title="Share Recipe"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">Share</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-rose-600 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all"
              title="Print Recipe"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print Card</span>
            </button>
          </div>
        </div>

        {shareToast && (
          <div className="mt-3 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium inline-flex items-center gap-2 animate-in fade-in">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>{shareToast}</span>
          </div>
        )}
      </header>

      {/* Hero Image & Quick Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* Main Photo */}
        <div className="lg:col-span-7">
          <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-lg border border-stone-200/80 bg-stone-100">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Recipe Snapshot Card */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-6">
          <h3 className="font-serif-title text-xl font-bold text-slate-900 border-b border-stone-100 pb-3 flex items-center justify-between">
            <span>Recipe Details</span>
            <span className="text-xs font-sans font-semibold text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
              {blog.difficulty} Prep
            </span>
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Prep Time</p>
                <p className="font-bold text-slate-800 text-sm">{blog.preparationTime}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center flex-shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Calories</p>
                <p className="font-bold text-slate-800 text-sm">{blog.nutrition.calories}</p>
              </div>
            </div>
          </div>

          {/* Nutrition Facts Label */}
          <div className="pt-4 border-t border-stone-100">
            <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2.5 flex items-center justify-between">
              <span>Nutritional Breakdown</span>
              <span className="text-[10px] text-slate-400 lowercase font-normal">(per serving)</span>
            </p>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-stone-50 border border-stone-200/60 p-2.5 rounded-xl">
                <span className="block text-[10px] text-slate-500 uppercase">Protein</span>
                <span className="font-bold text-rose-600 text-xs sm:text-sm">{blog.nutrition.protein}</span>
              </div>
              <div className="bg-stone-50 border border-stone-200/60 p-2.5 rounded-xl">
                <span className="block text-[10px] text-slate-500 uppercase">Carbs</span>
                <span className="font-bold text-slate-800 text-xs sm:text-sm">{blog.nutrition.carbs}</span>
              </div>
              <div className="bg-stone-50 border border-stone-200/60 p-2.5 rounded-xl">
                <span className="block text-[10px] text-slate-500 uppercase">Fats</span>
                <span className="font-bold text-slate-800 text-xs sm:text-sm">{blog.nutrition.fats}</span>
              </div>
              <div className="bg-stone-50 border border-stone-200/60 p-2.5 rounded-xl">
                <span className="block text-[10px] text-slate-500 uppercase">Rating</span>
                <span className="font-bold text-amber-600 text-xs sm:text-sm">{blog.rating}★</span>
              </div>
            </div>
          </div>

          {/* Backstory Accordion/Callout */}
          <div className="pt-4 border-t border-stone-100">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              The Chef&apos;s Inspiration
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 italic bg-amber-50/70 border border-amber-200/60 p-3.5 rounded-2xl leading-relaxed">
              &ldquo;{blog.backstory}&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Recipe Core Section (Ingredients + Steps) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        
        {/* Ingredients Checklist */}
        <section className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
            <div>
              <h2 className="font-serif-title text-2xl font-bold text-slate-900">
                Ingredients
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">Click to check off as you prep</p>
            </div>

            {/* Servings Multiplier Scale */}
            <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl">
              <span className="text-[10px] font-bold text-slate-500 px-1 flex items-center gap-0.5">
                <Scale className="w-3 h-3" />
              </span>
              {[1, 2, 3].map((mult) => (
                <button
                  key={mult}
                  onClick={() => setServingsMultiplier(mult)}
                  className={`px-2 py-1 rounded-lg text-xs font-bold transition-all ${
                    servingsMultiplier === mult
                      ? "bg-rose-600 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {mult}x
                </button>
              ))}
            </div>
          </div>

          <ul className="space-y-3">
            {blog.recipe.ingredients.map((item: string, index: number) => {
              const isChecked = !!checkedIngredients[index];
              return (
                <li
                  key={index}
                  onClick={() => toggleIngredient(index)}
                  className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer select-none ${
                    isChecked
                      ? "bg-emerald-50/60 border-emerald-200 text-slate-400 line-through"
                      : "bg-stone-50/60 hover:bg-stone-100/70 border-stone-200/80 text-slate-800"
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                    isChecked
                      ? "bg-emerald-500 border-emerald-500 text-white"
                      : "border-stone-300 bg-white"
                  }`}>
                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <span className="text-sm font-medium leading-relaxed">
                    {scaleIngredient(item, servingsMultiplier)}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Step-by-Step Instructions */}
        <section className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-stone-100">
            <div>
              <h2 className="font-serif-title text-2xl font-bold text-slate-900">
                Instructions
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">Follow step by step for best results</p>
            </div>

            <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
              {Object.keys(completedSteps).filter(k => completedSteps[Number(k)]).length} / {blog.recipe.steps.length} Done
            </span>
          </div>

          <div className="space-y-6">
            {blog.recipe.steps.map((step: string, index: number) => {
              const isDone = !!completedSteps[index];
              return (
                <div
                  key={index}
                  className={`p-4 rounded-2xl border transition-all ${
                    isDone
                      ? "bg-stone-50 border-stone-200/80 opacity-70"
                      : "bg-white border-stone-200/80 shadow-sm"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                      isDone
                        ? "bg-emerald-500 text-white"
                        : "bg-rose-600 text-white shadow-sm shadow-rose-500/20"
                    }`}>
                      {isDone ? <Check className="w-4 h-4 stroke-[3]" /> : index + 1}
                    </span>

                    <div className="flex-1">
                      <p className={`text-sm sm:text-base leading-relaxed ${
                        isDone ? "text-slate-500 line-through" : "text-slate-800"
                      }`}>
                        {step}
                      </p>

                      <div className="mt-3 flex items-center justify-end">
                        <button
                          onClick={() => toggleStep(index)}
                          className={`text-xs font-semibold px-3 py-1 rounded-lg border transition-all ${
                            isDone
                              ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                              : "bg-stone-100 hover:bg-rose-50 border-stone-200 hover:border-rose-200 text-slate-600 hover:text-rose-600"
                          }`}
                        >
                          {isDone ? "Completed ✓" : "Mark as Done"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Pro Tips & Serving Suggestions Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Tips */}
        <div className="bg-amber-50/80 rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-sm">
              <Lightbulb className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-serif-title text-xl font-bold text-amber-950">
                Chef&apos;s Pro Tips
              </h3>
              <p className="text-xs text-amber-800">Secrets for restaurant-level texture</p>
            </div>
          </div>

          <ul className="space-y-2.5">
            {blog.tips.map((tip: string, index: number) => (
              <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-amber-900 leading-relaxed">
                <span className="text-amber-500 font-bold">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Serving Suggestions */}
        <div className="bg-rose-50/80 rounded-3xl p-6 sm:p-8 border border-rose-200/80 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center shadow-sm">
              <Utensils className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-serif-title text-xl font-bold text-rose-950">
                Serving Suggestions
              </h3>
              <p className="text-xs text-rose-800">Wine pairings, sides &amp; garnishes</p>
            </div>
          </div>

          <ul className="space-y-2.5">
            {blog.servingSuggestions.map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-rose-900 leading-relaxed">
                <span className="text-rose-500 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Interactive FAQ Accordion */}
      {blog.faq && blog.faq.length > 0 && (
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-rose-600" />
            </span>
            <div>
              <h3 className="font-serif-title text-2xl font-bold text-slate-900">
                Frequently Asked Kitchen Questions
              </h3>
              <p className="text-xs text-slate-500">Substitutions, storage &amp; advance prep</p>
            </div>
          </div>

          <div className="space-y-3">
            {blog.faq.map((item: any, index: number) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-stone-200/80 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left p-4 sm:p-5 bg-stone-50 hover:bg-stone-100/70 flex items-center justify-between gap-4 font-semibold text-slate-900 text-sm sm:text-base transition-colors"
                  >
                    <span>{item.question}</span>
                    <span className="text-slate-400">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="p-4 sm:p-5 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-stone-200/60 animate-in fade-in">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Community Comments Section */}
      <CommentSection />
    </article>
  );
}
