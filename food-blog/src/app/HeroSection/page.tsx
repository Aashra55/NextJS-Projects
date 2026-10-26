import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { posts } from './detail';
import { Clock, ArrowRight, Star, ChefHat, Sparkles } from 'lucide-react';

export default function Cards() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-rose-500" />
          <span>Handpicked Selection</span>
        </div>
        <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
          Trending Chef Creations
        </h2>
        <p className="mt-3 text-slate-600 text-base sm:text-lg">
          Explore our most celebrated seasonal recipes, tested for home kitchen perfection.
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <article
            key={index}
            className="group bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
          >
            {/* Card Image Wrapper */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
              <Image
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                src={post.image}
                alt={post.title}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-slate-800 shadow-sm border border-stone-200/60">
                  {post.category}
                </span>
              </div>

              {/* Rating Pill */}
              <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 text-xs font-semibold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>4.9</span>
              </div>

              {/* Cook Time Overlay */}
              <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-white text-xs font-medium bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                <Clock className="w-3.5 h-3.5 text-rose-300" />
                <span>30 Mins Prep</span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-xs text-slate-500 font-medium mb-1">
                  By {post.author} • {post.date}
                </p>
                <h3 className="font-serif-title text-xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-2.5 text-slate-600 text-sm line-clamp-3 leading-relaxed">
                  {post.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-rose-600 uppercase tracking-wider flex items-center gap-1">
                  <ChefHat className="w-3.5 h-3.5" />
                  Kitchen Tested
                </span>

                <Link
                  href={`/HeroSection/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 group-hover:text-rose-600 transition-colors"
                >
                  <span>View Post</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
