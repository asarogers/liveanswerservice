import type { VerticalConfig } from "./types";
import { hvacConfig } from "./hvac";
import { legalConfig } from "./legal";
import { dentalConfig } from "./dental";
import { restaurantConfig } from "./restaurant";
import { smallBusinessConfig } from "./small-business";
import { EXPANSION_VERTICALS } from "./expansion";

/**
 * Registry of all vertical configs. Add new verticals by importing the config
 * and adding it here. The slug must match the route at /services/<slug>.
 *
 * EXPANSION_VERTICALS (Waves 2–9 service-page expansion) is kept in
 * ./expansion.ts so wave-branch merges don't collide with it — see that file.
 */
export const VERTICALS: Record<string, VerticalConfig> = {
  "hvac-answering-service": hvacConfig,
  "attorney-answering-service": legalConfig,
  "dental-answering-service": dentalConfig,
  "restaurant-answering-service": restaurantConfig,
  "small-business-answering-service": smallBusinessConfig,
  ...EXPANSION_VERTICALS,
};

export function getVertical(slug: string): VerticalConfig | undefined {
  return VERTICALS[slug];
}

export type { VerticalConfig };
