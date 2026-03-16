

## Plan: Continuous Polished Malachite Texture as Global Page Background

### Current State
- The Hero section uses `malachite-texture.jpg` as its background with a heavy dark overlay (~80-96% opacity)
- The `body` in `index.css` has a very dark solid color (`hsl(160 30% 4%)`) with faint radial gradients
- Other sections have no stone texture — just the dark background color

### Approach
Generate a large, high-quality procedural malachite texture image using AI image generation, then apply it as a fixed/repeating background on the `body` element globally. This ensures a continuous stone texture across the entire page.

### Steps

1. **Generate a seamless malachite texture image** using AI image generation — a polished emerald stone surface with large flowing mineral bands, organic wave patterns, slightly brighter than the current dark theme (around 15-20% lightness instead of 4%)

2. **Save the generated texture** as `src/assets/malachite-bg.jpg`

3. **Update `src/index.css`** — modify the `body` styles to:
   - Apply the new malachite texture as `background-image` with `background-attachment: fixed`, `background-size: cover`
   - Add a semi-transparent dark overlay via `::after` pseudo-element or layered gradients to maintain text readability while letting the texture show through
   - Slightly increase base brightness

4. **Update `src/components/Hero.tsx`** — remove the local `malachite-texture.jpg` background since the global body texture now provides the malachite look. Keep the overlays but reduce their opacity so the global texture shows through.

5. **Adjust section overlays** — ensure other sections (About, Services, Testimonials, Contact, Footer) don't fully obscure the background with opaque backgrounds. Check each component for `bg-background` or similar opaque classes and make them semi-transparent.

### Technical Details

- Body CSS will use: `background-image: url(malachite-bg.jpg); background-size: cover; background-attachment: fixed; background-position: center;`
- A layered gradient on body will add subtle depth while keeping the texture visible: ~40-50% opacity dark overlay
- Cards and text sections will retain their existing backdrop-blur and semi-transparent backgrounds for readability
- The `--background` CSS variable will remain for fallback but the texture image takes visual priority

