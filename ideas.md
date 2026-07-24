# The Smart Beauty Project — Design Brainstorm

## Three Stylistic Approaches

### 1. Warm Terracotta Editorial
**Theme Name:** Rooted Radiance
**Brief:** A warm, editorial aesthetic rooted in earth tones — terracotta, blush, and cream — evoking empowerment, warmth, and cultural pride. Feels like a premium lifestyle magazine for Black women.
**Probability:** 0.07

### 2. Bold Botanical Modernism
**Theme Name:** Flourish
**Brief:** Deep forest greens, gold accents, and botanical motifs layered over clean white space. Communicates growth, scientific credibility, and natural beauty intelligence.
**Probability:** 0.04

### 3. Soft Luxury Serif
**Theme Name:** Velvet Knowledge
**Brief:** Champagne, dusty mauve, and deep plum with elegant serif typography. Feels like a high-end beauty brand crossed with a financial empowerment journal.
**Probability:** 0.02

---

## Chosen Approach: Rooted Radiance (Warm Terracotta Editorial)

### Design Movement
Afro-editorial modernism — the visual language of premium Black women's lifestyle publications (think Essence meets financial wellness).

### Core Principles
1. Warmth-first color story: every surface should feel inviting and culturally resonant
2. Editorial typography hierarchy: large display serifs anchor sections, clean sans-serif carries body copy
3. Layered depth: soft shadows, subtle grain texture, and warm gradients prevent flatness
4. Mission-forward layout: the nonprofit's purpose is visible within 3 seconds of landing

### Color Philosophy
- **Terracotta** `oklch(0.62 0.12 38)` — the signature brand color; warmth, groundedness, cultural pride
- **Blush Cream** `oklch(0.97 0.02 65)` — background warmth, never cold white
- **Deep Plum** `oklch(0.28 0.08 330)` — authority, depth, financial seriousness
- **Warm Gold** `oklch(0.78 0.12 75)` — accents, highlights, success and achievement
- **Soft Mauve** `oklch(0.82 0.05 330)` — secondary sections, gentle contrast

### Layout Paradigm
Asymmetric editorial columns — hero uses a split layout (text left, image right). Sections alternate between full-bleed color blocks and white editorial panels. No centered grid monotony.

### Signature Elements
1. Terracotta horizontal rule dividers with subtle grain texture
2. Rounded-corner card clusters with soft drop shadows and warm tints
3. Large italic serif pull-quotes highlighting mission statements

### Interaction Philosophy
Interactions feel deliberate and warm — buttons have a gentle press-down scale, hover states shift to gold, and scroll reveals use soft fade-up animations that feel unhurried.

### Animation
- Entrance: `opacity: 0 → 1` + `translateY(20px → 0)` over 500ms with `cubic-bezier(0.23, 1, 0.32, 1)`
- Stagger grouped items by 80ms
- Button press: `scale(0.97)` at 160ms ease-out
- Nav scroll: transitions from transparent to `bg-white/90 backdrop-blur` at 80px scroll

### Typography System
- **Display:** Playfair Display (serif) — bold, 700–900 weight for hero headlines
- **Body:** DM Sans (sans-serif) — 400/500 for all body copy
- **Accent:** Playfair Display italic for pull-quotes and section labels
- Scale: 14/16/18/24/32/48/64px

### Brand Essence
*The Smart Beauty Project empowers Black women to shop smarter, save more, and build wealth — one beauty decision at a time.*
Personality: Empowering · Warm · Credible

### Brand Voice
Headlines sound like a trusted mentor, not a corporation.
- "Your beauty routine shouldn't cost you your financial future."
- "Science over marketing. Savings over spending. Power over products."
Ban: "Welcome to our website" / "Get started today" / generic filler.

### Wordmark & Logo
A stylized leaf or crown motif in terracotta — representing growth and royalty — paired with bold serif lettering. No default fonts.

### Signature Brand Color
Terracotta `oklch(0.62 0.12 38)` — unmistakably The Smart Beauty Project.

## Style Decisions
- Use Playfair Display for all H1/H2 headings, DM Sans for body
- Terracotta is the primary CTA color; gold is for hover/accent states
- All cards use `border-radius: 1.25rem` with `box-shadow: 0 4px 24px oklch(0.62 0.12 38 / 0.12)`
- Section backgrounds alternate: blush cream → white → deep plum → blush cream
