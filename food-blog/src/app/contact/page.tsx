'use client';

import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare,
  Utensils,
  Camera,
  Heart
} from "lucide-react";

export default function Contact() {
  const [topic, setTopic] = useState<string>("recipe");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const topics = [
    { id: "recipe", label: "Recipe Question", icon: Utensils },
    { id: "collab", label: "Brand Collaboration", icon: Sparkles },
    { id: "press", label: "Press & Media", icon: Camera },
    { id: "feedback", label: "Kitchen Feedback", icon: Heart },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-rose-500" />
          <span>We Would Love to Hear From You</span>
        </div>
        <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
          Connect with Our <br />
          <span className="text-rose-600 font-handwriting text-5xl sm:text-6xl lg:text-7xl font-normal">
            Kitchen & Editorial Team
          </span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          Have a recipe troubleshooting question, culinary partnership proposal, or food story to share? Reach our test kitchen directly.
        </p>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-sm space-y-8">
            <div>
              <h2 className="font-serif-title text-2xl font-bold text-slate-900 mb-2">
                Our Test Kitchen &amp; Studio
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                We develop, cook, and photograph our recipes out of our Seattle workshop. We respond to culinary inquiries within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Us</h4>
                  <a href="mailto:hello@gourmetdiaries.com" className="text-base font-semibold text-slate-800 hover:text-rose-600 transition-colors">
                    hello@gourmetdiaries.com
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">For reader questions &amp; media inquiries</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Studio Phone</h4>
                  <a href="tel:+18005554687" className="text-base font-semibold text-slate-800 hover:text-rose-600 transition-colors">
                    +1 (800) 555-GOURMET
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Mon - Fri: 9:00 AM - 5:00 PM EST</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Culinary Studio</h4>
                  <p className="text-base font-semibold text-slate-800">
                    42 Artisan Way, Suite 300
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">Seattle, WA 98101, United States</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Testing Schedule</h4>
                  <p className="text-base font-semibold text-slate-800">
                    Monday – Friday: 9am – 6pm
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">Weekend baking tests &amp; photography</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/80 shadow-sm">
          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            Send a Message
          </h2>
          <p className="text-slate-600 text-sm mb-6">
            Select a topic and tell us how we can assist your cooking journey.
          </p>

          {/* Topic Pills */}
          <div className="mb-6">
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2.5">
              Inquiry Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {topics.map((t) => {
                const Icon = t.icon;
                const isSelected = topic === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTopic(t.id)}
                    className={`p-3 rounded-2xl border text-xs font-semibold flex flex-col items-center gap-2 transition-all ${
                      isSelected
                        ? "bg-rose-50 border-rose-300 text-rose-600 shadow-sm"
                        : "bg-stone-50 border-stone-200 text-slate-600 hover:bg-stone-100 hover:text-slate-900"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{t.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="sarah@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                Subject
              </label>
              <input
                type="text"
                placeholder="What is your message about?"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                Message &amp; Cooking Details
              </label>
              <textarea
                placeholder="Write your question, feedback, or collaboration brief here..."
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm shadow-md shadow-rose-500/20 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Send Message to Test Kitchen</span>
            </button>

            {submitted && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold">Message Delivered!</h5>
                  <p className="text-xs text-emerald-700 mt-0.5">
                    Thank you for reaching out. Our culinary team has received your message and will be in touch shortly.
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
