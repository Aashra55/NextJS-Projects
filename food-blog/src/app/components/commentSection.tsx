'use client';

import { useState } from "react";
import { Star, MessageCircle, Heart, Send, CheckCircle2, User } from "lucide-react";

type Comment = {
  id: string;
  name: string;
  comment: string;
  rating: number;
  date: string;
  likes: number;
  isLiked?: boolean;
};

export default function CommentSection() {
  const [name, setName] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      name: "Sophia Martinez",
      comment: "I made this for Sunday family brunch and everyone was raving about it! The textures and balance of flavors are completely restaurant-grade. Definitely saving this into my regular rotation.",
      rating: 5,
      date: "2 days ago",
      likes: 12,
    },
    {
      id: "2",
      name: "Marcus Vance",
      comment: "Super clear instructions! The tips on temperature control made all the difference. Added a little grated orange zest at the end for an extra burst of freshness.",
      rating: 5,
      date: "4 days ago",
      likes: 8,
    },
    {
      id: "3",
      name: "Clara Bennett",
      comment: "Delicious recipe. Very beginner-friendly yet tastes like it took hours of preparation. Can't wait to try more from this blog!",
      rating: 4,
      date: "1 week ago",
      likes: 5,
    }
  ]);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() !== '' && comment.trim() !== '') {
      const newComment: Comment = {
        id: Date.now().toString(),
        name: name.trim(),
        comment: comment.trim(),
        rating,
        date: "Just now",
        likes: 0,
      };

      setComments([newComment, ...comments]);
      setName('');
      setComment('');
      setRating(5);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  const handleLike = (id: string) => {
    setComments(prev =>
      prev.map(c => {
        if (c.id === id) {
          const isLiked = !c.isLiked;
          return {
            ...c,
            likes: isLiked ? c.likes + 1 : c.likes - 1,
            isLiked,
          };
        }
        return c;
      })
    );
  };

  return (
    <section className="mt-14 pt-10 border-t border-stone-200/80">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-rose-100 text-rose-600">
                <MessageCircle className="w-5 h-5" />
              </span>
              <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900">
                Foodie Reviews & Discussion
              </h3>
            </div>
            <p className="text-slate-500 text-sm mt-1">
              Tried this recipe? Share your thoughts, cooking tips, or tweaks!
            </p>
          </div>

          <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 px-4 py-2 rounded-xl">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-amber-900">4.9 / 5</span>
            <span className="text-xs text-amber-700">({comments.length} reviews)</span>
          </div>
        </div>

        {/* Comment Form */}
        <div className="bg-white rounded-2xl border border-rose-100 p-6 sm:p-8 shadow-sm mb-10 transition-all hover:shadow-md">
          <h4 className="font-semibold text-slate-900 text-lg mb-4 flex items-center gap-2">
            <span>Leave Your Review</span>
            <span className="text-xs font-normal text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full">
              Kitchen Verified
            </span>
          </h4>

          <form onSubmit={handleAddComment} className="space-y-4">
            {/* Rating Stars Input */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                Your Rating
              </label>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 focus:outline-none transition-transform hover:scale-110"
                    aria-label={`Rate ${star} stars`}
                  >
                    <Star
                      className={`w-6 h-6 transition-colors ${
                        (hoverRating || rating) >= star
                          ? "fill-amber-400 text-amber-400"
                          : "text-slate-300"
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs font-medium text-slate-500 ml-2">
                  {rating === 5 ? "Exceptional" : rating === 4 ? "Very Good" : rating === 3 ? "Good" : "Could be better"}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Chef Jennifer"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                  Your Kitchen Role (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Weekend Baker / Home Cook"
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                Your Review & Notes
              </label>
              <textarea
                placeholder="How did your recipe turn out? Did you make any substitutions or flavor adjustments?"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                required
                className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <p className="text-xs text-slate-500 hidden sm:block">
                All reviews are shared with our food community.
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-rose-600 text-white font-medium text-sm shadow-md shadow-rose-500/20 hover:bg-rose-700 hover:shadow-lg transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Post Review</span>
              </button>
            </div>

            {submitted && (
              <div className="mt-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Thank you! Your recipe review has been posted successfully.</span>
              </div>
            )}
          </form>
        </div>

        {/* Existing Comments List */}
        <div className="space-y-4">
          <h4 className="font-serif-title text-xl font-bold text-slate-800 mb-4">
            Recent Community Notes ({comments.length})
          </h4>

          {comments.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/70 shadow-sm transition-all hover:border-rose-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 flex items-center justify-center text-white font-bold text-sm shadow-sm flex-shrink-0">
                    {item.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900 text-sm">{item.name}</h5>
                    <div className="flex items-center gap-2 mt-0.5">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < item.rating ? "fill-amber-400 text-amber-400" : "text-stone-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-slate-400">• {item.date}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleLike(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    item.isLiked
                      ? "bg-rose-50 text-rose-600 border border-rose-200"
                      : "bg-stone-50 text-slate-500 hover:bg-stone-100 hover:text-slate-700"
                  }`}
                  aria-label="Like review"
                >
                  <Heart
                    className={`w-3.5 h-3.5 ${item.isLiked ? "fill-rose-500 text-rose-500" : ""}`}
                  />
                  <span>{item.likes}</span>
                </button>
              </div>

              <p className="mt-3 text-slate-700 text-sm leading-relaxed pl-13">
                {item.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
