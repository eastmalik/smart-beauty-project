/**
 * MissionSection — Rose Petal design
 * Soft blush background, pink accents, editorial pull-quote
 */
import { BookOpen, TrendingUp, ShoppingBag, Leaf } from "lucide-react";

const pillars = [
  {
    icon: BookOpen,
    title: "Educated Consumer",
    description: "Better purchasing decisions, financial confidence, and long-term wealth building through consumer education.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Outcomes",
    description: "Reduced impulse spending, better financial management, increased savings, and greater wealth-building capacity.",
  },
  {
    icon: ShoppingBag,
    title: "Smart Objectives",
    description: "Understand ingredient labels, separate marketing from science, and make intentional purchasing decisions.",
  },
  {
    icon: Leaf,
    title: "Integration",
    description: "Financial literacy delivered through consumer education — equipping Black women to align beauty goals with financial goals.",
  },
];

export default function MissionSection() {
  return (
    <section id="mission" className="bg-[oklch(0.98_0.015_0)] py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-[oklch(0.62_0.18_0)]" />
          <span className="font-body text-sm font-semibold text-[oklch(0.62_0.18_0)] uppercase tracking-widest">
            Our Mission
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: mission statement */}
          <div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-[oklch(0.22_0.04_350)] leading-tight mb-6">
              Science Over Marketing.{" "}
              <em className="text-[oklch(0.62_0.18_0)]">Savings Over Spending.</em>
            </h2>
            <blockquote className="border-l-4 border-[oklch(0.62_0.18_0)] pl-5 mb-6">
              <p className="font-display italic text-xl text-[oklch(0.38_0.08_350)] leading-relaxed">
                "To empower Black women through financial literacy and consumer education, equipping them with the knowledge and confidence to make informed financial and purchasing decisions that promote long-term financial wellness and generational wealth."
              </p>
            </blockquote>
            <p className="font-body text-[oklch(0.48_0.06_350)] text-base leading-relaxed">
              The Smart Beauty Project has been equipping Black women with the scientific knowledge necessary to critically evaluate skincare, haircare, and bodycare products — so they can confidently purchase products that align with both their beauty goals and financial goals.
            </p>
          </div>

          {/* Right: pillars grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white rounded-[1.25rem] p-6 shadow-[0_4px_24px_oklch(0.62_0.18_0/0.08)] hover:shadow-[0_8px_32px_oklch(0.62_0.18_0/0.18)] transition-shadow duration-300 group border border-[oklch(0.90_0.07_0/0.5)]"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-[oklch(0.90_0.07_0)] flex items-center justify-center mb-4 group-hover:bg-[oklch(0.62_0.18_0)] transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[oklch(0.62_0.18_0)] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[oklch(0.22_0.04_350)] mb-2">{pillar.title}</h3>
                  <p className="font-body text-sm text-[oklch(0.52_0.06_350)] leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
