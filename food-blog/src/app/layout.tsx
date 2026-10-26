import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Gourmet Diaries — Artisan Recipes, Food Stories & Culinary Inspiration",
  description: "Discover handcrafted culinary recipes, step-by-step cooking guides, chef secrets, and mouthwatering food photography on Gourmet Diaries.",
  keywords: ["food blog", "recipes", "gourmet cooking", "desserts", "easy dinner", "cooking guide"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#FAF9F6] text-slate-800 antialiased selection:bg-rose-100 selection:text-rose-900">
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
