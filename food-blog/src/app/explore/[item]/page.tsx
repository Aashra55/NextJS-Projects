import Image from "next/image";
import Link from "next/link";
import { recipes } from "../data";
import { notFound } from "next/navigation";
import CommentSection from "@/app/components/commentSection";
import ClientPostActions from "@/app/HeroSection/[slug]/ClientPostActions";
import { ArrowLeft, ChefHat, Clock, Sparkles, Lightbulb, Shuffle } from "lucide-react";

export async function generateStaticParams() {
  return recipes.map((e) => ({
    item: e.item,
  }));
}

export default function Recipes({ params }: { params: { item: string } }) {
  const post = recipes.find((e) => e.item === params.item);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FAF9F6] py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 flex items-center justify-between text-xs sm:text-sm text-slate-500">
        <Link
          href="/explore"
          className="inline-flex items-center gap-1.5 font-semibold text-rose-600 hover:text-rose-700 hover:-translate-x-0.5 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Explore Recipes</span>
        </Link>

        <div className="hidden sm:flex items-center gap-2 text-stone-400">
          <Link href="/" className="hover:text-slate-700">Home</Link>
          <span>/</span>
          <Link href="/explore" className="hover:text-slate-700">Explore</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium truncate max-w-[200px]">{post.title}</span>
        </div>
      </nav>

      <article className="bg-white border border-stone-200/80 shadow-sm rounded-3xl overflow-hidden">
        {/* Photo Banner */}
        <div className="relative h-80 sm:h-[420px] w-full overflow-hidden bg-stone-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute top-6 left-6">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-slate-900 shadow-sm">
              {post.category}
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <p className="text-xs sm:text-sm font-medium text-rose-200 uppercase tracking-widest mb-1.5">
              By {post.author} • Published on {post.date}
            </p>
            <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Recipe Body */}
        <div className="p-6 sm:p-10 lg:p-12 space-y-10">
          {/* Description */}
          <div className="border-b border-stone-100 pb-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
              {post.description}
            </p>
          </div>

          {/* Ingredients & Instructions Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Ingredients */}
            <section className="lg:col-span-5 bg-stone-50/70 p-6 sm:p-8 rounded-3xl border border-stone-200/80">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-stone-200/60">
                <ChefHat className="w-5 h-5 text-rose-600" />
                <h2 className="font-serif-title text-2xl font-bold text-slate-900">
                  Ingredients
                </h2>
              </div>

              <ul className="space-y-3">
                {post.ingredients.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-800 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Instructions */}
            <section className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-sm">
              <div className="flex items-center gap-2 mb-6 pb-2 border-b border-stone-100">
                <Clock className="w-5 h-5 text-rose-600" />
                <h2 className="font-serif-title text-2xl font-bold text-slate-900">
                  Instructions
                </h2>
              </div>

              <ol className="space-y-5">
                {post.instructions.map((step, index) => (
                  <li key={index} className="flex items-start gap-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                    <span className="w-7 h-7 rounded-full bg-rose-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-sm shadow-rose-500/20">
                      {index + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          {/* Tips & Variations Callouts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {post.tips && post.tips.length > 0 && (
              <div className="bg-amber-50/80 p-6 rounded-3xl border border-amber-200/80">
                <div className="flex items-center gap-2.5 mb-3 text-amber-950 font-serif-title text-xl font-bold">
                  <Lightbulb className="w-5 h-5 text-amber-600" />
                  <h3>Chef&apos;s Secrets</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-amber-900 leading-relaxed">
                  {post.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {post.variations && post.variations.length > 0 && (
              <div className="bg-rose-50/80 p-6 rounded-3xl border border-rose-200/80">
                <div className="flex items-center gap-2.5 mb-3 text-rose-950 font-serif-title text-xl font-bold">
                  <Shuffle className="w-5 h-5 text-rose-600" />
                  <h3>Flavor Variations</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-rose-900 leading-relaxed">
                  {post.variations.map((v, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">•</span>
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Client Actions */}
          <ClientPostActions post={post} />
        </div>
      </article>

      {/* Community Comments */}
      <CommentSection />
    </main>
  );
}
