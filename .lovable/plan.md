

## Plan: Fantasy UI upgrade — "Malachite Box" aesthetic

The user requests a comprehensive visual enhancement across the entire site with gemstone-themed icons, magical decorative elements, a preloader with a lizard waking up, fantasy banners, a LoveBL logo, seamless malachite pattern, and careful lizard usage (max 3 times).

### 1. Site Preloader with Lizard Animation
Create a new `Preloader.tsx` component shown on first load for ~2.5s. A small malachite lizard "wakes up" on a gemstone box with emerald glow and gold particles. Uses framer-motion for opacity/scale animation. Added to `Index.tsx`, hidden after timeout via state.

### 2. Logo "LoveBL"
Update `Header.tsx` — replace "Малахитовая шкатулка" text with "LoveBL" styled in Cormorant Garamond with a gold gradient. Keep the small lizard icon next to it (lizard use #1). Generate a simple logo mark via AI image generation or use styled text with gold gradient.

### 3. Gemstone-themed Section Icons
Replace current lucide icons in `Services.tsx` with more fantasy-appropriate ones:
- Таролог → `Sparkles` (crystal/magic cards)
- Социолог → `Eye` (insight/vision)  
- Коуч → `Compass` (direction)
- Семейный психолог → `HeartHandshake` (family bond)

Add shimmer/glow effect on hover to icon containers.

### 4. Magical Circle Decorative Element
Add a subtle SVG magic circle (gold runes/symbols) as background decoration in the Hero section and/or Approach section. Implemented as an inline SVG with low opacity and slow rotation animation.

### 5. Enhanced Card Styling ("gems in a box")
Update `gold-border-card` in `index.css`:
- Add a subtle inner glow on hover (crystal shimmer)
- Gold frame corners using pseudo-elements with L-shaped borders instead of `✦` characters
- Background: subtle malachite gradient

### 6. Malachite Seamless Pattern
Add a CSS-only seamless pattern to `body` background using layered radial gradients simulating malachite swirls — enhance current implementation with more layers and subtle gold flecks.

### 7. Fantasy Banners / Section Backgrounds
- Hero: keep malachite texture, add magical circle SVG overlay
- Services: add subtle gemstone gradient background  
- Contact: enhance with deeper emerald velvet gradient
- About: add gold ornamental corner borders

### 8. Lizard Usage (exactly 3 places)
1. **Preloader** — lizard waking up animation (new)
2. **Header logo** — small icon next to "LoveBL" (existing)
3. **Footer** — small guardian symbol (existing)

Remove lizard from `LizardDivider.tsx` — replace with a pure decorative malachite vein + gold ornament (no lizard). This keeps total lizard count at 3.

### 9. Animation Enhancements
- Add `@keyframes slow-rotate` for magic circle (360° over 60s)
- Add `mineral-pulse` glow animation for card hover
- Enhance `gold-float` particles with slight size variation
- Add subtle `crystal-shimmer` to section backgrounds

### Files to modify
- **New**: `src/components/Preloader.tsx`
- **Edit**: `src/pages/Index.tsx` (add Preloader)
- **Edit**: `src/components/Header.tsx` (LoveBL logo)
- **Edit**: `src/components/Hero.tsx` (magic circle SVG, enhanced background)
- **Edit**: `src/components/Services.tsx` (new icons, enhanced cards)
- **Edit**: `src/components/About.tsx` (gold corner ornaments)
- **Edit**: `src/components/LizardDivider.tsx` (remove lizard, pure ornament)
- **Edit**: `src/components/Footer.tsx` (keep lizard, minor styling)
- **Edit**: `src/index.css` (enhanced patterns, new animations, card styles)
- **Edit**: `tailwind.config.ts` (new animation keyframes)

