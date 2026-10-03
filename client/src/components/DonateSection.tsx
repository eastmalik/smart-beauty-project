/**
 * DonateSection — Baby Petal design
 * Medium pastel pink background, soft and feminine donation CTA
 */
import { Button } from "@/components/ui/button";
import { Heart, Users, BookOpen, TrendingUp } from "lucide-react";

// Set to the 7Band Inc. hosted donation page once it exists. While empty, the button shows "Coming Soon".
const DONATION_URL = "";

const impactStats = [
  { icon: Users, value: "2022", label: "Operating Since" },
  { icon: BookOpen, value: "Free", label: "Resources Provided" },
  { icon: TrendingUp, value: "100%", label: "Mission-Driven" },
];

export default function DonateSection() {
  return (
    <section id="donate" className="relative bg-[oklch(0.78_0.10_0)] py-20 lg:py-28 overflow-hidden">
      {/* Soft decorative orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[oklch(0.90_0.06_0/0.30)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[oklch(0.65_0.12_350/0.15)] blur-3xl pointer-events-none" />

      {/* Faint community image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/images/community-section_7e8141ae.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-white/60" />
          <span className="font-body text-sm font-semibold text-white/80 uppercase tracking-widest">
            Support Our Work
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: impact message */}
          <div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white leading-tight mb-5">
              Help Us Empower More{" "}
              <em className="text-[oklch(0.97_0.03_0)]">Black Women</em> to Build Wealth
            </h2>
            <p className="font-body text-white/85 text-lg leading-relaxed mb-8">
              Your donation directly funds free educational resources, consumer guides, and financial literacy tools for Black women across the country. Every contribution — no matter the size — makes a difference.
            </p>

            {/* Impact stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {impactStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="bg-white/25 backdrop-blur-sm rounded-xl p-4 text-center border border-white/30">
                    <Icon className="w-5 h-5 text-white mx-auto mb-2" />
                    <div className="font-display font-bold text-xl text-white">{stat.value}</div>
                    <div className="font-body text-xs text-white/70 mt-0.5">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <blockquote className="border-l-4 border-white/50 pl-5">
              <p className="font-display italic text-lg text-white/85 leading-relaxed">
                "Power over products. Knowledge over marketing. Wealth over waste."
              </p>
            </blockquote>
          </div>

          {/* Right: donation card */}
          <div className="bg-white/85 backdrop-blur-md border border-white/90 rounded-[1.5rem] p-8 shadow-2xl shadow-[oklch(0.65_0.12_350/0.15)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[oklch(0.78_0.10_0)] flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <div>
                <div className="font-display font-bold text-[oklch(0.28_0.05_350)] text-lg">Make a Donation</div>
                <div className="font-body text-[oklch(0.55_0.06_350)] text-sm">Support The Smart Beauty Project</div>
              </div>
            </div>

            <p className="font-body text-[oklch(0.50_0.05_350)] text-sm mb-5 leading-relaxed">
              Donations are processed securely by 7Band Inc. You choose your amount on the donation page.
            </p>

            {DONATION_URL ? (
              <a href={DONATION_URL} target="_blank" rel="noopener noreferrer" className="block">
                <Button
                  size="lg"
                  className="w-full bg-[oklch(0.72_0.12_0)] text-white hover:bg-[oklch(0.65_0.13_0)] active:scale-[0.97] transition-all duration-150 font-body font-semibold rounded-full text-base shadow-lg shadow-[oklch(0.72_0.12_0/0.30)] gap-2"
                >
                  <Heart className="w-5 h-5" fill="currentColor" />
                  Donate Now
                </Button>
              </a>
            ) : (
              <Button
                size="lg"
                disabled
                className="w-full bg-[oklch(0.72_0.12_0)] text-white font-body font-semibold rounded-full text-base gap-2"
              >
                <Heart className="w-5 h-5" fill="currentColor" />
                Online Donations Coming Soon
              </Button>
            )}

            <p className="font-body text-[oklch(0.55_0.05_350)] text-xs text-center mt-4">
              The Smart Beauty Project is a program of 7Band Inc., a nonprofit organization. Operating since 2022.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
