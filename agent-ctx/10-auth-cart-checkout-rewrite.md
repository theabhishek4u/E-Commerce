# Task 10: Auth/Cart/Checkout Rewrite

## Summary
Rewrote AuthView, CartView, and CheckoutView components for Zylora ultra-premium sneaker brand, replacing all blue themes with purple/violet brand palette.

## Changes Made

### AuthView (`src/components/shop/auth-view.tsx`)
- Split screen: Left = dark gradient panel (`#0A0A1A → #1A1035 → #2D1B69`) with "Step Into The Future" tagline, floating particles, neon glow
- Right = login/register form with smooth tab toggle
- Login: email + password, "Sign In" btn-brand button
- Register: name + email + phone + password + confirm password with validation
- "or continue with" divider with Google (SVG logo) + GitHub social buttons
- Purple focus rings throughout
- AnimatePresence for tab transitions

### CartView (`src/components/shop/cart-view.tsx`)
- "Your Bag" heading with item count Badge
- glass-premium glassmorphism cards with card-hover + shimmer-overlay
- Pill-style quantity controls (purple gradient +/- buttons)
- Order summary with gradient top border, text-gradient-brand total, btn-brand Checkout
- Empty state: "Your bag is empty" with text-gradient-brand, "Start Shopping" btn-brand
- Mobile sticky bottom bar with glass-strong

### CheckoutView (`src/components/shop/checkout-view.tsx`)
- Multi-step: Address → Payment → Review with purple gradient step indicators + neon-glow
- Saved addresses from GET /api/addresses with radio selection + animated layoutId indicator
- "Add New Address" toggle, full address form with Indian state dropdown
- Payment: UPI/Card/NetBanking/COD radio-style cards with layoutId animated indicator
- Review: Delivery + Payment info, item list, text-gradient-brand total
- "Place Order" btn-brand with pulse animation (expanding purple box-shadow)
- Security badge with purple gradient

## CSS Classes Used
- glass-premium, glass-strong, btn-brand, btn-outline-brand, text-gradient-brand
- neon-glow, shadow-brand, shadow-brand-lg, card-hover, shimmer-overlay
- particle, particle-1, particle-2, particle-purple, particle-blue, particle-white

## Lint Status
✅ Clean - no errors

## Dev Server
✅ Running on port 3000
