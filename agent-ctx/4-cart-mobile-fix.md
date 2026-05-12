# Task 4: Fix cart-view.tsx Mobile Responsiveness

## Changes Made

### 1. Mobile Sticky Bottom Bar Position Fix
- **File**: `/home/z/my-project/src/components/shop/cart-view.tsx`
- **Change**: `fixed bottom-0` → `fixed bottom-16` on the mobile sticky cart summary bar
- **Reason**: The MobileBottomNav is at `fixed bottom-0 z-50` (~64px tall). The cart summary was also at `fixed bottom-0 z-40`, causing overlap. Moving it to `bottom-16` (64px) places it above the nav bar.

### 2. Mobile Coupon Section Added
- **Added**: New `lg:hidden` section between the cart items and the sticky bottom bar
- **Features**: 
  - Shows applied coupon badge with Tag icon + remove button (when coupon is applied)
  - Shows coupon input + apply button (when no coupon is applied)
- **Reason**: The coupon section was only visible on desktop (`hidden lg:block`), preventing mobile users from applying coupons.

### 3. Bottom Padding Fix
- **Change**: `pb-32 sm:pb-6` → `pb-36 sm:pb-6`
- **Reason**: Mobile needs extra padding to account for both the cart summary bar (~80px) and the mobile bottom nav (~64px) plus safe area. Desktop only needs standard padding.

## Verification
- Lint passes cleanly
- Dev server compiles without errors
