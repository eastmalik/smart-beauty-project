/**
 * HeroSection — Rooted Radiance design
 * Split layout: editorial text left, hero image right
 * Deep plum overlay with terracotta accents
 */
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[oklch(0.28_0.08_330)]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/manus-storage/hero-main_1ea35f32.jpg"
          alt="Empowered Black woman"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.28_0.08_330)] via-[oklch(0.28_0.08_330/0.85)] to-[oklch(0.28_0.08_330/0.3)]" />
      </div>

      {/* Decorative terracotta accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[oklch(0.62_0.12_38)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Since badge */}
          <div className="inline-flex items-center gap-2 bg-[oklch(0.62_0.12_38/0.2)] border border-[oklch(0.62_0.12_38/0.4)] rounded-full px-4 py-1.5 mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-[oklch(0.78_0.12_75)]" />
            <span className="font-body text-sm text-[oklch(0.88_0.06_38)] font-medium tracking-wide">
              Empowering Black Women Since 2022
            </span>
          </div>

          <h1 className="font-display font-black text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6 animate-fade-up animate-fade-up-delay-1">
            Your Beauty Routine Shouldn't Cost You Your{" "}
            <em className="text-[oklch(0.78_0.12_75)] not-italic">Financial Future.</em>
          </h1>

          <p className="font-body text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl animate-fade-up animate-fade-up-delay-2">
            The Smart Beauty Project empowers Black women with the scientific knowledge and financial literacy to make informed purchasing decisions — building wealth one beauty choice at a time.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up animate-fade-up-delay-3">
            <a href="#free-resource">
              <Button
                size="lg"
                className="bg-[oklch(0.62_0.12_38)] text-white hover:bg-[oklch(0.55_0.12_38)] active:scale-[0.97] transition-all duration-150 font-body font-semibold rounded-full px-8 text-base shadow-lg shadow-[oklch(0.62_0.12_38/0.3)]"
              >
                Access Free Resource
              </Button>
            </a>
            <a href="#donate">
              <Button
                size="lg"
                variant="outline"
                className="border-white/50 text-white bg-white/10 hover:bg-white/20 active:scale-[0.97] transition-all duration-150 font-body font-semibold rounded-full px-8 text-base backdrop-blur-sm"
              >
                Support Our Mission
              </Button>
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/20 animate-fade-up animate-fade-up-delay-4">
            {[
              { value: "2022", label: "Founded" },
              { value: "Free", label: "Digital Resources" },
              { value: "501(c)(3)", label: "Nonprofit" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-bold text-2xl text-[oklch(0.78_0.12_75)]">{stat.value}</div>
                <div className="font-body text-sm text-white/60 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
