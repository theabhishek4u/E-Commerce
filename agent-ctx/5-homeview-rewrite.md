# Task 5: HomeView Rewrite

## Agent
HomeView Rewrite

## Task
Rewrite HomeView component for Zylora ultra-premium sneaker brand

## Summary
Completely rewrote `/home/z/my-project/src/components/shop/home-view.tsx` with 8 cinematic, immersive sections that transform the page from a generic e-commerce template into a luxury sneaker brand landing experience.

## Sections Implemented
1. **HERO** - Full viewport with `hero-gradient`, neon gradient text, floating sneaker with `animate-sneaker-float`, `sneaker-spotlight` glow, parallax effect, trust elements
2. **MARQUEE TICKER** - Scrolling brand names with `marquee-container`/`marquee-track`
3. **FEATURED COLLECTIONS** - 5 cinematic banners with `collection-overlay`, icons, CTAs
4. **TRENDING CAROUSEL** - Auto-scrolling horizontal slider with snap scrolling, hover pause
5. **DROP COUNTDOWN** - Live timer with `drop-live` badge, limited stock indicators, spotlight card
6. **CATEGORIES** - Mobile chips + desktop premium cards with `card-hover`/`card-glow`
7. **LIFESTYLE BANNER** - Full-width dark cinematic visual
8. **ALL SNEAKERS GRID** - Sort bar + ProductCard grid + Load More

## Custom Hooks
- `useCountdown(targetOffset)` - Live countdown timer
- `useParallax(intensity)` - Mouse parallax for hero elements
- `useAutoScroll(speed)` - Bidirectional auto-scroll carousel with hover pause

## CSS Classes Used
hero-gradient, glass-premium, btn-brand, btn-outline-brand, neon-glow, text-gradient-brand, text-gradient-neon, animate-sneaker-float, animate-float, sneaker-spotlight, particle-purple, particle-blue, card-hover, card-glow, drop-live, marquee-container, marquee-track, collection-overlay, shadow-brand, shadow-brand-lg, shadow-neon, glass-dark, animate-glow-pulse

## Lint
Passes cleanly with no errors.

## Dependencies
- `useShopStore` for products, categories, filters, navigation
- `ProductCard` from './product-card'
- `formatINR`, `calculateDiscount` from '@/lib/format'
- Framer Motion: motion, AnimatePresence, useScroll, useTransform
- Lucide icons: ArrowRight, TrendingUp, Truck, Shield, Sparkles, etc.
- shadcn/ui: Button, Badge
