/**
 * Per-vertical accent colors. Each service detail page sets these
 * as CSS custom properties on its root wrapper, so the design system
 * pulls the right tint without needing per-page CSS.
 *
 * Picked to be:
 *   - distinguishable from each other at a glance
 *   - readable on the off-white `--color-bg` background
 *   - tonally consistent (saturated mid-tones, no neon)
 *
 * The accent is used for:
 *   - vertical-bar background tint
 *   - proof-pill background + dot
 *   - stakes-stat .num color
 *   - .accent-text inline marks
 *   - hero gradient edge
 */
export interface VerticalTint {
  /** Display name shown in the .vertical-bar */
  label: string;
  /** Tabler icon name (without the `ti-` prefix) */
  icon: string;
  /** Primary accent — used for headlines / stat numbers */
  accent: string;
  /** Soft fill — used for proof-pill background, vertical bar background */
  accentSoft: string;
  /** Readable text color on top of accentSoft */
  accentInk: string;
}

/** Default tint for the homepage + any page not in the map */
export const DEFAULT_TINT: VerticalTint = {
  label: "Live Answer",
  icon: "phone-call",
  accent:     "#1A1A17",
  accentSoft: "#F2F0E8",
  accentInk:  "#1A1A17",
};

/** Service slug → tint */
export const SERVICE_TINTS: Record<string, VerticalTint> = {
  "hvac-answering-service": {
    label: "Built for HVAC contractors",
    icon: "flame",
    accent:     "#B83321",   // warm red — heat/emergency
    accentSoft: "#FAE9E1",
    accentInk:  "#7A1F12",
  },
  "attorney-answering-service": {
    label: "Built for law firms",
    icon: "scale",
    accent:     "#1A4A8E",   // deep navy — authority
    accentSoft: "#E6EFFA",
    accentInk:  "#0D2D5A",
  },
  "small-business-answering-service": {
    label: "Built for California small business",
    icon: "building-store",
    accent:     "#3D7A4A",   // forest green — growth
    accentSoft: "#E5F0E8",
    accentInk:  "#1F4A2A",
  },
  "dental-answering-service": {
    label: "Built for dental practices",
    icon: "tooth",
    accent:     "#2A7A7A",   // teal — clinical/clean
    accentSoft: "#E0F0F0",
    accentInk:  "#144848",
  },
  "restaurant-answering-service": {
    label: "Built for restaurants",
    icon: "tools-kitchen-2",
    accent:     "#8B2A3E",   // burgundy — hospitality
    accentSoft: "#F4E3E7",
    accentInk:  "#52162A",
  },
  "real-estate-answering-service": {
    label: "Built for real estate agents",
    icon: "home",
    accent:     "#8A5A1F",   // bronze — premium
    accentSoft: "#F4EAD8",
    accentInk:  "#553509",
  },
  "property-management-answering-service": {
    label: "Built for property managers",
    icon: "building",
    accent:     "#4A5A7A",   // slate blue — utility / stable
    accentSoft: "#E8ECF2",
    accentInk:  "#28324A",
  },
  "salon-and-spa-answering-service": {
    label: "Built for salons & spas",
    icon: "cut",
    accent:     "#8A3A6E",   // mauve — beauty
    accentSoft: "#F2E3EC",
    accentInk:  "#521F40",
  },
  "medical-office-answering-service": {
    label: "Built for medical offices",
    icon: "stethoscope",
    accent:     "#1F6A8E",   // clinical blue
    accentSoft: "#E0EEF5",
    accentInk:  "#0D3D5A",
  },
  "live-answering-service": {
    label: "24/7 live answering service",
    icon: "phone-call",
    accent:     "#1A1A17",
    accentSoft: "#F2F0E8",
    accentInk:  "#1A1A17",
  },
};

/** Location slug → tint. Optional — falls back to DEFAULT_TINT. */
export const LOCATION_TINTS: Record<string, VerticalTint> = {
  "san-jose": {
    label: "Headquartered in San Jose",
    icon: "map-pin",
    accent:     "#1A1A17",
    accentSoft: "#F2F0E8",
    accentInk:  "#1A1A17",
  },
  "san-francisco-bay-area": {
    label: "Serving the Bay Area",
    icon: "map-pin",
    accent:     "#1A4A8E",
    accentSoft: "#E6EFFA",
    accentInk:  "#0D2D5A",
  },
  "sacramento": {
    label: "Serving Sacramento & Central Valley",
    icon: "map-pin",
    accent:     "#B83321",
    accentSoft: "#FAE9E1",
    accentInk:  "#7A1F12",
  },
  "los-angeles": {
    label: "Serving LA & the Inland Empire",
    icon: "map-pin",
    accent:     "#8A5A1F",
    accentSoft: "#F4EAD8",
    accentInk:  "#553509",
  },
};

export function tintForService(slug: string): VerticalTint {
  return SERVICE_TINTS[slug] ?? DEFAULT_TINT;
}

export function tintForLocation(slug: string): VerticalTint {
  return LOCATION_TINTS[slug] ?? DEFAULT_TINT;
}

/**
 * Inline CSS variable bundle, ready to spread into a `style` prop.
 * Use on the outermost wrapping element of a tinted page.
 */
export function tintStyleVars(t: VerticalTint): React.CSSProperties {
  return {
    // Cast to a typed record so TS doesn't complain about CSS custom props
    ["--accent"      as string]: t.accent,
    ["--accent-soft" as string]: t.accentSoft,
    ["--accent-ink"  as string]: t.accentInk,
  };
}
