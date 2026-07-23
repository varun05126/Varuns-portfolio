# Known Issues

## GlassPanel.tsx
- `rounded-${radius}` produces an invalid double-prefixed class (rounded-rounded-xl) since radius's default already includes the rounded- prefix. Border radius currently doesn't apply.

## Card.tsx
- asChild prop is broken: passing className to React.Fragment silently drops all sizing/variant styling when asChild is true.

## FishBackground.tsx
- geometry constructor args are malformed (non-integer segment counts) on all sphere/cone geometries;
- the two secondary fish are static (not animated);
- the swim path is sine/cosine-based rather than the originally-speced CatmullRomCurve3;
- devicePixelRatio capping is wired incorrectly (set inside gl={{}} instead of via the Canvas dpr prop);
- there's an unverified possible brace mismatch in the gl={{...}} block that needs a tsc --noEmit check.