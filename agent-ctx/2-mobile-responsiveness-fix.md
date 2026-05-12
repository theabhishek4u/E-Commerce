# Task 2: Mobile Responsiveness Fix for HomeView

## Summary
Fixed all 8 mobile responsiveness issues in `/home/z/my-project/src/components/shop/home-view.tsx`.

## Changes Made

### Section 1 (Hero)
- `min-h-screen` → `min-h-[85vh] sm:min-h-screen`
- Added `pt-20 sm:pt-0` to content container
- Feature icons gap reduced on mobile: `gap-3 sm:gap-6 lg:gap-8`
- Headline: `text-4xl sm:text-5xl lg:text-7xl xl:text-8xl`
- Subheading margin: `mb-5 sm:mb-8`
- Trust separator: `ml-2 sm:ml-6`

### Section 2.5 (The Collection)
- `py-10 sm:py-24 lg:py-32`
- `text-3xl sm:text-4xl lg:text-6xl xl:text-7xl`
- `aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4]`
- `p-4 sm:p-8 lg:p-14`

### Section 3 (Featured Collections)
- Removed `hidden sm:block` for items >= 3
- Added mobile horizontal scrollable container
- Desktop grid shown via `hidden md:grid`
- `py-8 sm:py-12 lg:py-20`

### Section 5 (Countdown)
- Timer box: `min-w-[48px] sm:min-w-[56px] lg:min-w-[72px]`
- Gaps, padding, font sizes all reduced for mobile
- Drop card: `max-w-[200px] sm:max-w-xs`

### Section 7 (Lifestyle Banner)
- `aspect-[2/1] sm:aspect-[3/1] lg:aspect-[4/1]`
- `text-2xl sm:text-3xl lg:text-5xl xl:text-6xl`
- Added `px-4 sm:px-6`

### Section 8 (Sort Bar)
- `sticky top-[72px]`

### Mobile Category Chips
- Dark mode: `dark:bg-white/10 dark:text-white/80 dark:border-white/20`

### General
- Added `pt-[72px]` to outermost div

## Verification
- Lint passes cleanly
- Dev server compiles without errors
