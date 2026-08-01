/**
 * DonateSection — Rose Petal design
 * Deep rose background, donation CTA with Google Form link
 */
import { Button } from "@/components/ui/button";
import { Heart, Users, BookOpen, TrendingUp } from "lucide-react";

// IMPORTANT: Replace this with your actual Google Form URL
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/PLACEHOLDER_FORM_ID/viewform";

const impactStats = [
  { icon: Users, value: "2022", label: "Operating Since" },
  { icon: BookOpen, value: "Free", label: "Resources Provided" },
  { icon: TrendingUp, value: "100%", label: "Mission-Driven" },
];

const donationAmounts = ["$10", "$25", "$50", "$100", "$250", "Custom"];

export default function DonateSection() {
  return (
    <section id="donate" className="relative bg-[oklch(0.38_0.14_350)] py-20 lg:py-28 overflow-hidden">
      {/* Decorative orbs — contained */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[oklch(0.62_0.18_0/0.12)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[oklch(0.80_0.10_60/0.08)] blur-3xl pointer-events-none" />

      {/* Community image strip */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/manus-storage/community-section_7e8141ae.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-[oklch(0.88_0.12_0)]" />
          <span className="font-body text-sm font-semibold text-[oklch(0.90_0.07_0)] uppercase tracking-widest">
            Support Our Work
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: impact message */}
          <div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white leading-tight mb-5">
              Help Us Empower More{" "}
              <em className="text-[oklch(0.88_0.12_0)]">Black Women</em> to Build Wealth
            </h2>
            <p className="font-body text-white/80 text-lg leading-relaxed mb-8">
              Your donation directly funds free educational resources, consumer guides, and financial literacy tools for Black women across the country. Every contribution — no matter the size — makes a difference.
            </p>

            {/* Impact stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {impactStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/15">
                    <Icon className="w-5 h-5 text-[oklch(0.88_0.12_0)] mx-auto mb-2" />
                    <div className="font-display font-bold text-xl text-white">{stat.value}</div>
                    <div className="font-body text-xs text-white/60 mt-0.5">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <blockquote className="border-l-4 border-[oklch(0.88_0.12_0)] pl-5">
              <p className="font-display italic text-lg text-white/80 leading-relaxed">
                "Power over products. Knowledge over marketing. Wealth over waste."
              </p>
            </blockquote>
          </div>

          {/* Right: donation card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[1.5rem] p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[oklch(0.62_0.18_0)] flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg">Make a Donation</div>
                <div className="font-body text-white/60 text-sm">Support The Smart Beauty Project</div>
              </div>
            </div>

            {/* Suggested amounts */}
            <div className="mb-6">
              <p className="font-body text-white/70 text-sm mb-3">Select an amount or enter your own:</p>
              <div className="grid grid-cols-3 gap-2">
                {donationAmounts.map((amount) => (
                  <div
                    key={amount}
                    className="bg-white/10 hover:bg-[oklch(0.62_0.18_0)] border border-white/20 hover:border-[oklch(0.62_0.18_0)] rounded-xl py-2.5 text-center font-body text-sm font-medium text-white cursor-pointer transition-all duration-150 active:scale-[0.97]"
                  >
                    {amount}
                  </div>
                ))}
              </div>
            </div>

            <p className="font-body text-white/70 text-sm mb-5 leading-relaxed">
              Click below to complete your donation via our secure form. You'll be asked for your name, email, phone number, and donation amount.
            </p>

            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="block">
              <Button
                size="lg"
                className="w-full bg-[oklch(0.62_0.18_0)] text-white hover:bg-[oklch(0.55_0.18_0)] active:scale-[0.97] transition-all duration-150 font-body font-semibold rounded-full text-base shadow-lg shadow-[oklch(0.62_0.18_0/0.4)] gap-2"
              >
                <Heart className="w-5 h-5" fill="currentColor" />
                Donate Now — Complete the Form
              </Button>
            </a>

            <p className="font-body text-white/50 text-xs text-center mt-4">
              The Smart Beauty Project is a program of 7Band Inc., a nonprofit organization. Operating since 2022.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
