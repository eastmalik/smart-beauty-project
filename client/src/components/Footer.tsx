/**
 * Footer — Rooted Radiance design
 * Warm blush cream background, terracotta accents
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[oklch(0.93_0.03_55)] border-t border-[oklch(0.88_0.04_55)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/manus-storage/logo-icon_caa36e32.png"
                alt="The Smart Beauty Project"
                className="w-8 h-8 object-contain"
              />
              <div>
                <div className="font-display font-bold text-sm text-[oklch(0.22_0.04_50)] leading-none">The Smart Beauty</div>
                <div className="font-display italic text-xs text-[oklch(0.62_0.12_38)] leading-none">Project</div>
              </div>
            </div>
            <p className="font-body text-sm text-[oklch(0.52_0.05_50)] leading-relaxed max-w-xs">
              Empowering Black women through financial literacy and consumer education since 2022.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-sm text-[oklch(0.22_0.04_50)] mb-4 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Our Mission", href: "#mission" },
                { label: "Free Resource", href: "#free-resource" },
                { label: "eBook", href: "#ebook" },
                { label: "Donate", href: "#donate" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-[oklch(0.52_0.05_50)] hover:text-[oklch(0.62_0.12_38)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / info */}
          <div>
            <h4 className="font-display font-bold text-sm text-[oklch(0.22_0.04_50)] mb-4 uppercase tracking-wide">About</h4>
            <ul className="space-y-2.5">
              <li className="font-body text-sm text-[oklch(0.52_0.05_50)]">Nonprofit Organization</li>
              <li className="font-body text-sm text-[oklch(0.52_0.05_50)]">Operating Since 2022</li>
              <li className="font-body text-sm text-[oklch(0.52_0.05_50)]">Financial Literacy & Consumer Education</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[oklch(0.88_0.04_55)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-[oklch(0.62_0.08_50)]">
            © {currentYear} The Smart Beauty Project. All rights reserved. Nonprofit organization operating since 2022.
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[oklch(0.62_0.12_38)]" />
            <span className="font-body text-xs text-[oklch(0.62_0.08_50)]">Empowering Black Women Since 2022</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
