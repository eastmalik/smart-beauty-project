/**
 * HeroSection — Baby Petal design
 * Soft pastel pink hero: blush-to-dusty-rose gradient, light feminine palette
 */
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-[oklch(0.72_0.10_350)]"
      style={{ overflow: "hidden", clipPath: "inset(0)" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/manus-storage/hero-main_1ea35f32.jpg"
          alt="Empowered Black woman"
          className="w-full h-full object-cover object-center opacity-25"
        />
        {/* Soft pastel pink gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.72_0.10_350)] via-[oklch(0.72_0.10_350/0.90)] to-[oklch(0.72_0.10_350/0.80)]" />
        {/* Right-edge mask to hide any image text */}
        <div className="absolute inset-y-0 right-0 w-2/5 bg-gradient-to-l from-[oklch(0.72_0.10_350)] to-transparent" />
      </div>
      {/* Hard solid mask on far right to fully eliminate any image text */}
      <div className="absolute inset-y-0 right-0 w-1/4 bg-[oklch(0.72_0.10_350)] pointer-events-none" />

      {/* Soft glow orbs — fully contained */}
      <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-[oklch(0.90_0.06_0/0.30)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-40 w-56 h-56 rounded-full bg-[oklch(0.95_0.04_60/0.25)] blur-3xl pointer-events-none" />

      {/* Left accent stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[oklch(0.90_0.06_0)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          <h1 className="font-display font-black text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6 animate-fade-up">
            Your Beauty Routine Shouldn't Cost You Your{" "}
            <em className="text-[oklch(0.97_0.03_0)] not-italic drop-shadow-sm">Financial Future.</em>
          </h1>

          <p className="font-body text-white/85 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl animate-fade-up animate-fade-up-delay-1">
            The Smart Beauty Project empowers Black women with the scientific knowledge and financial literacy to make informed purchasing decisions — building wealth one beauty choice at a time.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up animate-fade-up-delay-2">
            <a href="#free-resource">
              <Button
                size="lg"
                className="bg-white text-[oklch(0.55_0.12_350)] hover:bg-[oklch(0.97_0.03_0)] active:scale-[0.97] transition-all duration-150 font-body font-semibold rounded-full px-8 text-base shadow-lg shadow-white/20"
              >
                Access Free Resource
              </Button>
            </a>
            <a href="#donate">
              <Button
                size="lg"
                variant="outline"
                className="border-white/60 text-white bg-white/15 hover:bg-white/25 active:scale-[0.97] transition-all duration-150 font-body font-semibold rounded-full px-8 text-base backdrop-blur-sm"
              >
                Support Our Mission
              </Button>
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/25 animate-fade-up animate-fade-up-delay-3">
            {[
              { value: "2022", label: "Founded" },
              { value: "Free", label: "Digital Resources" },
              { value: "501(c)(3)", label: "Nonprofit" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-bold text-2xl text-white">{stat.value}</div>
                <div className="font-body text-sm text-white/65 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
