'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Share2, Printer, Bookmark, Check, ArrowLeft } from 'lucide-react';

export default function ClientPostActions({ post }: { post: any }) {
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator
        .share({
          title: post.title,
          text: post.description,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-6 border-t border-stone-200/80 flex flex-wrap items-center justify-between gap-4 no-print">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-rose-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Gourmet Home</span>
      </Link>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setBookmarked(!bookmarked)}
          className={`px-4 py-2.5 rounded-xl border text-sm font-semibold flex items-center gap-2 transition-all ${
            bookmarked
              ? 'bg-rose-50 border-rose-300 text-rose-600 shadow-sm'
              : 'bg-white border-stone-200 text-slate-700 hover:bg-stone-50'
          }`}
        >
          <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-rose-500 text-rose-500' : ''}`} />
          <span>{bookmarked ? 'Saved to Bookmarks' : 'Save Recipe'}</span>
        </button>

        <button
          onClick={handlePrint}
          className="px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-slate-700 hover:bg-stone-50 text-sm font-semibold flex items-center gap-2 transition-all"
        >
          <Printer className="w-4 h-4" />
          <span>Print Card</span>
        </button>

        <button
          onClick={handleShare}
          className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl shadow-md shadow-rose-500/20 text-sm font-semibold flex items-center gap-2 transition-all duration-200"
        >
          <Share2 className="w-4 h-4" />
          <span>{copied ? 'Link Copied!' : 'Share Recipe'}</span>
        </button>
      </div>

      {copied && (
        <div className="w-full text-center py-2 px-3 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-medium border border-emerald-200 flex items-center justify-center gap-1.5 animate-in fade-in">
          <Check className="w-4 h-4 text-emerald-600" />
          <span>Recipe URL copied to clipboard! You can paste and share it anywhere.</span>
        </div>
      )}
    </div>
  );
}
