/**
 * EbookSection — Baby Petal design
 * Very light blush background, soft pink accents, editorial eBook showcase
 */
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight } from "lucide-react";

const highlights = [
  "Decode ingredient labels with confidence",
  "Separate beauty marketing from real science",
  "Build sustainable beauty routines on a budget",
  "Make intentional, wealth-aligned purchasing decisions",
  "Develop a beauty budget that supports your financial goals",
];

export default function EbookSection() {
  // Set to the checkout link (paid into 7Band Inc.) once it exists. While empty, the button shows "Coming Soon".
  const EBOOK_PURCHASE_URL = "";

  return (
    <section id="ebook" className="bg-[oklch(0.98_0.02_0)] py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-[oklch(0.78_0.10_0)]" />
          <span className="font-body text-sm font-semibold text-[oklch(0.65_0.12_350)] uppercase tracking-widest">
            The eBook
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: eBook cover */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[1.25rem] bg-[oklch(0.85_0.08_0/0.50)] blur-sm" />
              <img
                src="/images/ebook-cover_3f11228b.jpg"
                alt="The Smart Beauty Project eBook cover"
                className="relative w-64 sm:w-72 rounded-[1.25rem] shadow-2xl shadow-[oklch(0.78_0.10_0/0.20)]"
              />
              {/* Price badge */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[oklch(0.78_0.10_0)] flex flex-col items-center justify-center shadow-lg">
                <span className="font-display font-bold text-white text-xs leading-none">FROM</span>
                <span className="font-display font-black text-white text-sm leading-none">$9.99</span>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-[oklch(0.28_0.05_350)] leading-tight mb-4">
              The Smart Beauty{" "}
              <em className="text-[oklch(0.72_0.12_0)]">Consumer Guide</em>
            </h2>
            <p className="font-body text-[oklch(0.48_0.05_350)] text-lg leading-relaxed mb-6">
              Your comprehensive guide to becoming an educated beauty consumer. Learn to read labels, avoid unnecessary purchases, and build a beauty routine that aligns with your financial goals and generational wealth vision.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[oklch(0.92_0.05_0)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[oklch(0.72_0.12_0)]" />
                  </div>
                  <span className="font-body text-[oklch(0.38_0.05_350)] text-base">{h}</span>
                </li>
              ))}
            </ul>

            {EBOOK_PURCHASE_URL ? (
              <div className="flex flex-wrap gap-4 items-center">
                <a href={EBOOK_PURCHASE_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-[oklch(0.78_0.10_0)] text-white hover:bg-[oklch(0.72_0.12_0)] active:scale-[0.97] transition-all duration-150 font-body font-semibold rounded-full px-8 text-base shadow-lg shadow-[oklch(0.78_0.10_0/0.25)] gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Purchase the eBook
                  </Button>
                </a>
                <a
                  href={EBOOK_PURCHASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-body text-sm font-medium text-[oklch(0.65_0.12_350)] hover:text-[oklch(0.58_0.13_350)] transition-colors"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ) : (
              <Button
                size="lg"
                disabled
                className="bg-[oklch(0.78_0.10_0)] text-white font-body font-semibold rounded-full px-8 text-base gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                eBook Coming Soon
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
