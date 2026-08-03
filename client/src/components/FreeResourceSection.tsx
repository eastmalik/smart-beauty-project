/**
 * FreeResourceSection — Baby Petal design
 * Soft pastel pink background (baby pink), white text, feminine and airy
 */
import { Button } from "@/components/ui/button";
import { Download, Star, BookOpen, CheckCircle } from "lucide-react";

const features = [
  "Ingredient label reading guide",
  "Marketing vs. science cheat sheet",
  "Beauty budget planner template",
  "Sustainable routine builder",
  "Intentional purchasing checklist",
];

export default function FreeResourceSection() {
  const FREE_RESOURCE_URL = "https://docs.google.com/forms/d/e/PLACEHOLDER/viewform";

  return (
    <section id="free-resource" className="relative bg-[oklch(0.85_0.08_0)] py-20 lg:py-28 overflow-hidden">
      {/* Soft decorative orbs */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-[oklch(0.95_0.04_60/0.35)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-[oklch(0.78_0.10_0/0.20)] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/40 rounded-full px-4 py-1.5 mb-6">
              <Star className="w-4 h-4 text-[oklch(0.75_0.10_60)]" fill="currentColor" />
              <span className="font-body text-sm text-[oklch(0.30_0.05_350)] font-medium">100% Free — No Cost to You</span>
            </div>

            <h2 className="font-display font-bold text-4xl lg:text-5xl text-[oklch(0.25_0.04_350)] leading-tight mb-5">
              Access Your Free Digital Resource
            </h2>
            <p className="font-body text-[oklch(0.35_0.05_350)] text-lg leading-relaxed mb-8">
              Get instant access to our free digital toolkit — designed to help you shop smarter, read ingredient labels like a scientist, and build a beauty routine that doesn't break the bank.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[oklch(0.65_0.12_350)] flex-shrink-0" />
                  <span className="font-body text-[oklch(0.32_0.05_350)] text-base">{f}</span>
                </li>
              ))}
            </ul>

            <a href={FREE_RESOURCE_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-[oklch(0.65_0.12_350)] text-white hover:bg-[oklch(0.60_0.13_350)] active:scale-[0.97] transition-all duration-150 font-body font-semibold rounded-full px-8 text-base shadow-lg shadow-[oklch(0.65_0.12_350/0.25)] gap-2"
              >
                <Download className="w-5 h-5" />
                Get Free Access Now
              </Button>
            </a>
          </div>

          {/* Right: decorative card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-[1.5rem] p-8 max-w-sm w-full shadow-xl shadow-[oklch(0.78_0.10_0/0.15)]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[oklch(0.94_0.04_0)] flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-[oklch(0.65_0.12_350)]" />
                </div>
                <div>
                  <div className="font-display font-bold text-[oklch(0.28_0.05_350)] text-lg leading-tight">Smart Beauty Toolkit</div>
                  <div className="font-body text-[oklch(0.55_0.06_350)] text-sm">Digital Resource — Free</div>
                </div>
              </div>
              <div className="space-y-3">
                {["Consumer Education Guide", "Financial Literacy Tools", "Beauty Budget Planner"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 bg-[oklch(0.96_0.02_0)] rounded-xl px-4 py-2.5">
                    <div className="w-2 h-2 rounded-full bg-[oklch(0.78_0.10_0)]" />
                    <span className="font-body text-[oklch(0.35_0.05_350)] text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-[oklch(0.92_0.03_0)] text-center">
                <span className="font-display italic text-[oklch(0.55_0.06_350)] text-sm">
                  "Empowering Black women since 2022"
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
