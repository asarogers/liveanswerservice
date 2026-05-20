/**
 * Redirect / gone tables consumed by middleware.ts.
 *
 * NOTE: This file is a STUB created by the middleware agent so middleware.ts
 * compiles. Service/location data agents are populating `goneSlugs`,
 * `serviceRedirects`, and `archivedLocationSlugs` in parallel. Do not
 * overwrite their values — append only.
 */

// Service slugs that should return 410 Gone (no canonical replacement).
// 410 set: YMYL nutrition cluster — non-medical chef cannot ethically rank for these.
export const goneSlugs: string[] = [
  "nutrition-coaching-seniors",
  "nutritional-needs-assessment",
  "senior-diet-consulting",
  "senior-nutrition-planning",
];

// Service slugs that should 301 to a canonical service slug.
// Key = old slug, Value = new canonical slug (without the `/services/` prefix).
// Grouped by canonical target.
export const serviceRedirects: Record<string, string> = {
  // → personal-chef-for-seniors (general meal-prep / personal-chef cluster)
  "meal-prep-for-seniors": "personal-chef-for-seniors",
  "meal-prep-for-seniors-in-the-bay-area": "personal-chef-for-seniors",
  "weekly-meal-prep": "personal-chef-for-seniors",
  "weekly-meal-prep-for-elderly": "personal-chef-for-seniors",
  "meal-prepping-for-elderly": "personal-chef-for-seniors",
  "chef-prepared-meal-delivery": "personal-chef-for-seniors",
  "fresh-meal-delivery-seniors": "personal-chef-for-seniors",
  "fresh-meal-delivery-for-seniors-bay-area": "personal-chef-for-seniors",
  "meal-delivery-for-seniors-bay-area": "personal-chef-for-seniors",
  "senior-meal-delivery-bay-area": "personal-chef-for-seniors",
  "chef-that-comes-to-your-house": "personal-chef-for-seniors",
  "couples-meal-prep": "personal-chef-for-seniors",
  "single-serving-meal-prep": "personal-chef-for-seniors",
  "meal-prep-for-elderly-living-alone": "personal-chef-for-seniors",
  "home-cooked-meals-for-seniors": "personal-chef-for-seniors",
  "healthy-prepared-meals-for-seniors": "personal-chef-for-seniors",
  "healthy-meals-for-elderly": "personal-chef-for-seniors",
  "cooking-for-one-senior": "personal-chef-for-seniors",
  "meals-on-wheels-alternatives": "personal-chef-for-seniors",
  "grocery-shopping-assistance": "personal-chef-for-seniors",
  "grocery-shopping-ingredient-sourcing": "personal-chef-for-seniors",
  "personal-chef-dietary-restrictions": "personal-chef-for-seniors",

  // → meal-prep-service-bay-area (regional meal-prep service variant)
  "meal-prep-service-san-jose": "meal-prep-service-bay-area",

  // → post-hospital-meal-prep (post-surgery / recovery cluster)
  "post-surgery-meal-prep": "post-hospital-meal-prep",
  "post-surgery-meal-prep-seniors": "post-hospital-meal-prep",
  "post-hospital-meal-transition": "post-hospital-meal-prep",
  "meals-after-surgery-elderly": "post-hospital-meal-prep",
  "stroke-recovery-meals": "post-hospital-meal-prep",
  "cancer-nutrition-meals": "post-hospital-meal-prep",

  // → medical-diet-planning (condition-specific & therapeutic diets)
  "diabetic-meal-prep": "medical-diet-planning",
  "heart-healthy-meal-prep": "medical-diet-planning",
  "renal-diet-meal-prep": "medical-diet-planning",
  "low-sodium-cooking": "medical-diet-planning",
  "low-sodium-meal-prep": "medical-diet-planning",
  "gluten-free-meal-prep": "medical-diet-planning",
  "vegetarian-meal-prep": "medical-diet-planning",
  "anti-inflammatory-cooking": "medical-diet-planning",
  "soft-food-meal-prep": "medical-diet-planning",
  "pureed-meals-for-seniors": "medical-diet-planning",
  "dysphagia-meal-prep": "medical-diet-planning",
  "dysphagia-pureed-meal-prep": "medical-diet-planning",
  "allergen-free-cooking": "medical-diet-planning",
  "medically-tailored-meal-prep": "medical-diet-planning",

  // → adaptive-cooking (general adaptive technique cluster)
  "arthritis-friendly-cooking": "adaptive-cooking",
  "adaptive-kitchen-tools": "adaptive-cooking",
  "one-handed-cooking": "adaptive-cooking",
  "seated-cooking-instruction": "adaptive-cooking",
  "kitchen-accessibility-consulting": "adaptive-cooking",

  // → tremor-adapted-cooking (Parkinson's-specific cluster)
  "adaptive-cooking-parkinsons": "tremor-adapted-cooking",
  "parkinsons-meal-prep": "tremor-adapted-cooking",

  // → wheelchair-accessible-cooking (mobility-specific cluster)
  "cooking-with-limited-mobility": "wheelchair-accessible-cooking",
  "wheelchair-accessible-kitchen": "wheelchair-accessible-cooking",

  // → kitchen-safety-assessment (kitchen optimization & aging-in-place)
  "aging-in-place-kitchen": "kitchen-safety-assessment",
  "appliance-selection-seniors": "kitchen-safety-assessment",
  "kitchen-decluttering": "kitchen-safety-assessment",
  "kitchen-optimization-seniors": "kitchen-safety-assessment",
  "pantry-organization-seniors": "kitchen-safety-assessment",

  // → caregiver-meal-support (caregiver / family-coordination cluster)
  "caregiver-respite-meal-service": "caregiver-meal-support",
  "caregiver-cooking-training": "caregiver-meal-support",
  "long-distance-caregiver-meal-help": "caregiver-meal-support",
  "long-distance-family-meal-coordination": "caregiver-meal-support",
  "in-home-cooking-lessons": "caregiver-meal-support",

  // → freezer-meal-prep-seniors (batch / freezer cluster)
  "batch-cooking-freezer-meals": "freezer-meal-prep-seniors",

  // → memory-care-nutrition (dementia / Alzheimer's cluster — static page)
  "alzheimers-nutrition-support": "memory-care-nutrition",
  "dementia-meal-support": "memory-care-nutrition",
};

// Location slugs that should 301 to /service-areas.
export const archivedLocationSlugs: string[] = [
  "sunnyvale",
  "campbell",
  "los-gatos",
  "redwood-city",
  "walnut-creek",
  "marin",
  "los-altos",
  "atherton",
  "menlo-park",
  "cupertino",
  "santa-clara",
  "saratoga",
  "los-altos-hills",
  "burlingame",
  "milpitas",
  "east-palo-alto",
];

// Service category hub slugs archived in Phase 4.6 — return 410 Gone.
// (Hubs whose entire child-slug list collapsed to archived/redirected pages.)
export const archivedCategorySlugs: string[] = [
  "nutrition-consulting",
  "specialized-diet-meal-prep",
  // Phase trim 2026-05-08: collapsed redundant aggregator hubs.
  "meal-prep",
  "adaptive-cooking-disability",
  "caregiver-support",
];

// GBP category subroute slugs archived in Phase trim — return 410 Gone.
// These were the dynamic /services/categories/[slug] children.
export const archivedGBPCategorySlugs: string[] = [
  "aged-care",
  "personal-chef-service",
  "meal-preparation-delivery",
  "home-health-care",
  "health-consultant",
  "disability-services",
];

// Blog post slugs archived in Phase 1.4 — return 410 Gone.
export const archivedBlogSlugs: string[] = [
  "adaptive-cooking-tools-for-seniors-with-arthritis",
  "affordable-healthy-meals-for-seniors-near-me",
  "best-low-sodium-meal-ideas-for-seniors",
  "cooking-tips-for-seniors-with-parkinsons",
  "eating-well-alone-seniors-who-cook-for-one",
  "how-to-get-home-cooked-meals-for-senior-living-alone",
  "meal-prep-after-stroke-recovery-for-seniors",
  "meal-prep-for-elderly-after-surgery-recovery",
  "meal-prep-for-seniors-with-dementia",
  "meal-prep-for-seniors-with-diabetes",
];
