/**
 * EbookSection — Rose Petal design
 * White background, editorial eBook showcase with purchase CTA
 */
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, ArrowRight } from "lucide-react";

const highlights = [
  "Decode ingredient labels with confidence",
  "Separate beauty marketing from real science",
  "Build sustainable beauty routines on a budget",
  "Make intentional, wealth-aligned purchasing decisions",
  "Develop a beauty budget that supports your financial goals",
];

export default function EbookSection() {
  const EBOOK_PURCHASE_URL = "https://example.com/ebook";

  return (
    <section id="ebook" className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-[oklch(0.62_0.18_0)]" />
          <span className="font-body text-sm font-semibold text-[oklch(0.62_0.18_0)] uppercase tracking-widest">
            The eBook
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: eBook cover */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[1.25rem] bg-[oklch(0.62_0.18_0/0.15)] blur-sm" />
              <img
                src="/manus-storage/ebook-cover_3f11228b.jpg"
                alt="The Smart Beauty Project eBook cover"
                className="relative w-64 sm:w-72 rounded-[1.25rem] shadow-2xl"
              />
              {/* Price badge */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[oklch(0.62_0.18_0)] flex flex-col items-center justify-center shadow-lg">
                <span className="font-display font-bold text-white text-xs leading-none">FROM</span>
                <span className="font-display font-black text-white text-sm leading-none">$9.99</span>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[oklch(0.80_0.10_60)]" fill="currentColor" />
              ))}
              <span className="font-body text-sm text-[oklch(0.52_0.06_350)] ml-2">Reader Approved</span>
            </div>

            <h2 className="font-display font-bold text-4xl lg:text-5xl text-[oklch(0.22_0.04_350)] leading-tight mb-4">
              The Smart Beauty{" "}
              <em className="text-[oklch(0.62_0.18_0)]">Consumer Guide</em>
            </h2>
            <p className="font-body text-[oklch(0.45_0.06_350)] text-lg leading-relaxed mb-6">
              Your comprehensive guide to becoming an educated beauty consumer. Learn to read labels, avoid unnecessary purchases, and build a beauty routine that aligns with your financial goals and generational wealth vision.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[oklch(0.90_0.07_0)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[oklch(0.62_0.18_0)]" />
                  </div>
                  <span className="font-body text-[oklch(0.35_0.06_350)] text-base">{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 items-center">
              <a href={EBOOK_PURCHASE_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-[oklch(0.62_0.18_0)] text-white hover:bg-[oklch(0.55_0.18_0)] active:scale-[0.97] transition-all duration-150 font-body font-semibold rounded-full px-8 text-base shadow-lg shadow-[oklch(0.62_0.18_0/0.25)] gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Purchase the eBook
                </Button>
              </a>
              <a
                href={EBOOK_PURCHASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-body text-sm font-medium text-[oklch(0.62_0.18_0)] hover:text-[oklch(0.55_0.18_0)] transition-colors"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
