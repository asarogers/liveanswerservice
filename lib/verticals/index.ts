import type { VerticalConfig } from "./types";
import { hvacConfig } from "./hvac";
import { legalConfig } from "./legal";
import { smallBusinessConfig } from "./small-business";

/**
 * Registry of all vertical configs. Add new verticals by importing the config
 * and adding it here. The slug must match the route at /services/<slug>.
 */
export const VERTICALS: Record<string, VerticalConfig> = {
  "hvac-answering-service": hvacConfig,
  "attorney-answering-service": legalConfig,
  "small-business-answering-service": smallBusinessConfig,
};

export function getVertical(slug: string): VerticalConfig | undefined {
  return VERTICALS[slug];
}

export type { VerticalConfig };
