

## Plan: Use Real Images in Preloader

Replace CSS-drawn shapes with the uploaded photos for a realistic preloader.

### Changes

**Copy uploaded images to project:**
- `user-uploads://шкатулка.jpg` → `src/assets/box-preloader.jpg`
- `user-uploads://ящереца.jpg` → `src/assets/lizard-preloader.jpg`
- `user-uploads://кристалл.webp` → `src/assets/crystals-preloader.webp`

**Rewrite `src/components/Preloader.tsx`:**

Replace the CSS-drawn box, crystals, and lizard with real images:

1. **Box**: Use `box-preloader.jpg` as the central element (~30vh), styled with rounded corners, gold border, and drop shadow. The box stays static (no lid animation since it's a photo).

2. **Lid opening effect**: Instead of CSS lid, use a clipping/overlay approach — a dark overlay on top half of box image that slides up to simulate opening, revealing an emerald glow from within.

3. **Lizard**: `lizard-preloader.jpg` emerges from behind/above the box during the "revealing" phase, scaled and positioned to look like it's climbing out. Cropped to circular/oval with object-fit.

4. **Crystals**: `crystals-preloader.webp` image pieces appear floating above the box. Since it's a single image, it appears as a floating element above the box with glow effects.

5. **Phases remain the same**: closed (box fades in) → opening (glow intensifies, overlay lifts) → revealing (lizard + crystals emerge) → done (fade out).

6. **Gold particles** remain as CSS (they work well already).

### Files
- **Copy**: 3 uploaded images to `src/assets/`
- **Rewrite**: `src/components/Preloader.tsx`

