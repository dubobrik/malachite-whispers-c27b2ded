

## Plan: Realistic Malachite Box Preloader with Opening Animation

Replace the current simple preloader with a detailed, realistic malachite box that occupies ~30% of the screen, opens with a lid animation, and reveals a lizard and crystals emerging from inside.

### Animation Phases (total ~4s)

1. **"closed"** (0–0.8s): Box fades in, centered, closed with ornate details
2. **"opening"** (0.8–2s): Lid rotates open (3D perspective transform), emerald glow intensifies from inside
3. **"revealing"** (2–3.2s): Crystals float up from inside the box, lizard climbs out onto the rim
4. **"done"** (3.2–4s): Everything fades out, `onComplete` fires

### Visual Design

**The Box (~30% viewport height):**
- Detailed CSS box with malachite texture gradients (layered radial/linear gradients for realistic stone veins)
- Gold trim borders and corner ornaments
- Gold clasp/lock detail on front
- 3D perspective for the lid opening (rotateX transform)
- Inner glow (emerald/gold) visible when lid opens

**The Lid:**
- Separate element positioned on top of the box body
- `transform-origin: top` so it rotates upward like a real lid
- Same malachite texture with gold edge trim
- Opens with a smooth rotateX(-110deg) animation

**Crystals (3-5 pieces):**
- CSS shapes (rotated squares/diamonds) with emerald/amethyst/gold gradients
- Float upward from inside the box with staggered delays
- Subtle glow/shimmer effect

**Lizard:**
- Use existing `lizard-divider.png` asset
- Starts hidden inside box, then climbs up to perch on the rim
- Scale from small to full size with rotation

**Particles:**
- Gold dust particles floating upward when box opens
- More numerous than current (12-16 particles)

### Text
- "Малахитовая шкатулка" appears below the box during the revealing phase

### File Changes

- **Rewrite**: `src/components/Preloader.tsx` — complete rebuild with 4-phase animation, 3D box, lid, crystals, lizard

