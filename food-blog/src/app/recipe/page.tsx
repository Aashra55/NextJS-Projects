'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import recipeImage from "../images/pancake.jpg";
import recipeImage2 from "../images/pancake2.jpg";
import CommentSection from "../components/commentSection";
import { 
  Clock, 
  ChefHat, 
  Star, 
  Flame, 
  Check, 
  Scale, 
  Printer, 
  Share2, 
  Bookmark, 
  Lightbulb, 
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function RecipePage() {
  const [servingsMultiplier, setServingsMultiplier] = useState<number>(1);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const baseIngredients = [
    { qty: 1, unit: "cup", item: "all-purpose flour (sifted)" },
    { qty: 2, unit: "tbsp", item: "granulated sugar" },
    { qty: 2, unit: "tsp", item: "baking powder" },
    { qty: 0.5, unit: "tsp", item: "sea salt" },
    { qty: 0.75, unit: "cup", item: "whole milk (or buttermilk for extra fluff)" },
    { qty: 2, unit: "large", item: "eggs (room temperature)" },
    { qty: 2, unit: "tbsp", item: "unsalted butter (melted and cooled)" },
    { qty: 1, unit: "tsp", item: "pure vanilla extract" },
  ];

  const instructions = [
    {
      title: "Whisk Dry Ingredients",
      detail: "In a large mixing bowl, vigorously whisk together the sifted flour, granulated sugar, baking powder, and sea salt to ensure an even rise.",
    },
    {
      title: "Whisk Wet Ingredients",
      detail: "In a separate medium bowl, whisk together the milk, eggs, melted butter, and vanilla extract until completely combined and slightly frothy.",
    },
    {
      title: "Gently Fold (Do Not Overmix)",
      detail: "Pour the wet ingredients into the dry mixture. Use a silicone spatula to gently fold just until incorporated. Small flour lumps are totally normal and make for tender pancakes!",
    },
    {
      title: "Rest The Batter",
      detail: "Allow the batter to rest for 8–10 minutes while preheating your griddle. This activates the baking powder and lets the flour hydrate.",
    },
    {
      title: "Griddle To Golden Perfection",
      detail: "Heat a skillet or nonstick griddle over medium heat (approx 350°F / 175°C). Brush lightly with butter. Pour 1/4 cup of batter per pancake. Cook for 2–3 minutes until bubbles form on top, flip, and cook 1–2 minutes more until golden brown.",
    },
    {
      title: "Warm Serve & Garnish",
      detail: "Serve immediately with pure warm maple syrup, salted butter, and fresh seasonal berries.",
    },
  ];

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({
        title: "Fluffy Golden Cloud Pancakes — Gourmet Diaries",
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] pb-16">
      
      {/* Cinematic Hero Banner */}
      <section className="relative w-full h-[380px] sm:h-[450px] lg:h-[520px] bg-slate-900">
        <Image
          src={recipeImage2}
          alt="Fluffy Golden Pancakes"
          fill
          priority
          className="object-cover opacity-60 hidden sm:block"
        />
        <Image
          src={recipeImage}
          alt="Fluffy Golden Pancakes"
          fill
          priority
          className="object-cover opacity-60 sm:hidden block"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-black/40 to-black/60" />

        <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400 text-slate-900 text-xs font-bold uppercase tracking-wider mb-4 w-fit shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Masterclass Breakfast Series</span>
          </div>

          <h1 className="font-serif-title text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-3xl">
            Fluffy Golden Cloud Pancakes
          </h1>

          <p className="mt-3 text-stone-200 text-sm sm:text-base max-w-2xl font-sans">
            The quintessential Sunday morning stack: ultra-light, golden-crisp edges with an impossibly tender, melt-in-your-mouth crumb.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-white font-medium">
            <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
              <Clock className="w-4 h-4 text-rose-300" />
              <span>Prep: 10 mins • Cook: 15 mins</span>
            </span>
            <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full text-amber-300">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>4.9 (340 reader reviews)</span>
            </span>
            <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
              <Flame className="w-4 h-4 text-rose-400" />
              <span>290 kcal / 2 pancakes</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10 space-y-10">
        
        {/* Action Header Card */}
        <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-md flex flex-wrap items-center justify-between gap-4 no-print">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-lg">
              🥞
            </div>
            <div>
              <h3 className="font-serif-title font-bold text-slate-900 text-base sm:text-lg">
                Yields 8–10 Pancakes
              </h3>
              <p className="text-xs text-slate-500">
                Scale batch size or print handy kitchen sheet
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`px-3.5 py-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                isBookmarked
                  ? "bg-rose-50 border-rose-300 text-rose-600"
                  : "bg-stone-50 border-stone-200 text-slate-700 hover:bg-stone-100"
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-rose-500 text-rose-500" : ""}`} />
              <span>{isBookmarked ? "Saved" : "Save"}</span>
            </button>

            <button
              onClick={() => window.print()}
              className="px-3.5 py-2 rounded-xl bg-stone-50 border border-stone-200 text-slate-700 hover:bg-stone-100 text-xs font-semibold flex items-center gap-1.5 transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>

            <button
              onClick={handleShare}
              className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all"
            >
              <Share2 className="w-4 h-4" />
              <span>{copied ? "Link Copied!" : "Share"}</span>
            </button>
          </div>
        </div>

        {/* Recipe Grid: Ingredients & Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Ingredients Section */}
          <section className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-100">
              <div>
                <h2 className="font-serif-title text-2xl font-bold text-slate-900">
                  Ingredients
                </h2>
                <p className="text-xs text-slate-500">Tap to cross off</p>
              </div>

              {/* Servings Scale */}
              <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl">
                <span className="text-[10px] font-bold text-slate-500 px-1 flex items-center gap-0.5">
                  <Scale className="w-3 h-3" />
                </span>
                {[1, 2, 3].map((m) => (
                  <button
                    key={m}
                    onClick={() => setServingsMultiplier(m)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                      servingsMultiplier === m
                        ? "bg-rose-600 text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {m}x
                  </button>
                ))}
              </div>
            </div>

            <ul className="space-y-2.5">
              {baseIngredients.map((ing, idx) => {
                const isChecked = !!checkedIngredients[idx];
                const amount = (ing.qty * servingsMultiplier);
                return (
                  <li
                    key={idx}
                    onClick={() => toggleIngredient(idx)}
                    className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer select-none ${
                      isChecked
                        ? "bg-emerald-50/60 border-emerald-200 text-slate-400 line-through"
                        : "bg-stone-50/70 hover:bg-stone-100 border-stone-200/80 text-slate-800"
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
                      <strong className="text-slate-900 font-bold mr-1">
                        {amount % 1 === 0 ? amount : amount.toFixed(1)} {ing.unit}
                      </strong>
                      {ing.item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* Instructions Section */}
          <section className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm">
            <div className="pb-4 mb-6 border-b border-stone-100">
              <h2 className="font-serif-title text-2xl font-bold text-slate-900">
                Step-by-Step Method
              </h2>
              <p className="text-xs text-slate-500">Follow each step for maximum loft</p>
            </div>

            <div className="space-y-6">
              {instructions.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-stone-50/60 border border-stone-200/60">
                  <span className="w-8 h-8 rounded-full bg-rose-600 text-white font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-sm shadow-rose-500/20">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Pro Kitchen Tips */}
        <div className="bg-amber-50/80 rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-sm">
              <Lightbulb className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-serif-title text-xl font-bold text-amber-950">
                The Secret to Mile-High Fluffiness
              </h3>
              <p className="text-xs text-amber-800">3 rules professional brunch chefs swear by</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="bg-white/80 p-4 rounded-2xl border border-amber-200/60">
              <h5 className="font-bold text-xs uppercase tracking-wider text-amber-900 mb-1">
                1. Never Overmix
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                Overworking develops gluten which results in rubbery, tough pancakes. Stop stirring the second dry flour disappears!
              </p>
            </div>

            <div className="bg-white/80 p-4 rounded-2xl border border-amber-200/60">
              <h5 className="font-bold text-xs uppercase tracking-wider text-amber-900 mb-1">
                2. Mandatory Batter Rest
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                Resting for 10 minutes lets starch grains swell and air bubbles blossom into tender pockets of steam during cooking.
              </p>
            </div>

            <div className="bg-white/80 p-4 rounded-2xl border border-amber-200/60">
              <h5 className="font-bold text-xs uppercase tracking-wider text-amber-900 mb-1">
                3. Gentle Single Flip
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                Flip only once when bubbles surface and pop without instantly filling back in. Never press down with a spatula!
              </p>
            </div>
          </div>
        </div>

        {/* Explore CTA Bar */}
        <div className="bg-gradient-to-r from-rose-600 to-amber-500 rounded-3xl p-8 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-rose-600/10">
          <div>
            <h3 className="font-serif-title text-2xl font-bold">
              Looking for More Brunch Delights?
            </h3>
            <p className="text-rose-100 text-sm mt-1">
              Explore our full catalog of 50+ breakfast bakes, fruit shortcakes, and fresh dips.
            </p>
          </div>
          <Link
            href="/explore"
            className="px-6 py-3 rounded-xl bg-white text-rose-600 font-bold text-sm shadow-md hover:bg-rose-50 transition-all flex items-center gap-2 flex-shrink-0"
          >
            <span>Explore All Recipes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Recipe Community Reviews */}
        <CommentSection />
      </div>
    </main>
  );
}
