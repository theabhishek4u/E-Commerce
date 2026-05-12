# Task 3-a: Dark/Light Mode Fix for Auth, Cart, and Checkout Views

## Agent: Dark/Light Mode Fix

## Summary
Updated 3 shop components (auth-view.tsx, cart-view.tsx, checkout-view.tsx) to properly support both dark and light modes by adding `dark:` variant classes to all hardcoded dark-only or light-only colors.

## Changes Made

### auth-view.tsx
- Form container: Added dark: background variants
- Tab toggle: Changed `bg-white` to `bg-card` (semantic)
- Form card: Changed `bg-white` to `bg-card`, added dark shadow/border variants
- All 7 input fields: Added `dark:bg-white/5 dark:border-purple-500/15 dark:focus:bg-white/5`
- Divider: Changed `border-slate-200` to `border-border`, `bg-white` to `bg-card`
- Social buttons: Added dark border and hover variants
- GitHub icon: Added dark text and hover variants
- Footer Zap icons: `text-purple-400` → `text-purple-500 dark:text-purple-400`
- Left panel and mobile header kept as always-dark (decorative brand panels)

### cart-view.tsx
- Back button: Added dark hover variant
- Items badge: Added dark bg/text variants
- Empty cart icon: Added dark gradient variants
- Product image container: Added dark gradient and ring variants
- Quantity pill: Added dark bg and ring variants
- Coupon applied box: Added dark bg/border/text variants
- Coupon input: Added dark border/bg variants
- Savings highlight: Added dark text/gradient/ring variants
- Mobile sticky bar: Added dark border variant
- Mobile savings badge: Added dark text/bg variants

### checkout-view.tsx
- Empty state icon: Added dark gradient variants
- Back button: Added dark hover variant
- PAYMENT_OPTIONS: Updated all 4 options with dark: color, bgColor, ringColor
- Section icon containers (3x): Added dark bg variants
- Section icons (3x): Added dark text variants
- Address/payment cards: Added dark selected/unselected state variants
- Default/Popular badges: Added dark bg/text variants
- Radio indicator: Added dark unselected border
- Add address button: Added dark text/hover/bg variants
- All 7 form inputs + state select: Added dark border/bg variants
- Delivery/payment info sections: Added dark bg variants
- Review items: Added dark bg and hover variants
- Review item images: Added dark bg and ring variants
- Security badge: Added dark gradient, ring, and text variants
- Lock icon: Added dark text variant

## Verification
- `bun run lint` passes cleanly
- Dev server compiles without errors
- No structural or functional changes made
