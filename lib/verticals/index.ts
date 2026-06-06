import type { VerticalConfig } from "./types";
import { hvacConfig } from "./hvac";
import { legalConfig } from "./legal";
import { dentalConfig } from "./dental";
import { restaurantConfig } from "./restaurant";
import { realEstateConfig } from "./real-estate";
import { propertyManagementConfig } from "./property-management";
import { salonConfig } from "./salon";
import { smallBusinessConfig } from "./small-business";
import { veterinaryConfig } from "./veterinary";

/**
 * Registry of all vertical configs. Add new verticals by importing the config
 * and adding it here. The slug must match the route at /services/<slug>.
 */
export const VERTICALS: Record<string, VerticalConfig> = {
  "hvac-answering-service": hvacConfig,
  "attorney-answering-service": legalConfig,
  "dental-answering-service": dentalConfig,
  "restaurant-answering-service": restaurantConfig,
  "real-estate-answering-service": realEstateConfig,
  "property-management-answering-service": propertyManagementConfig,
  "salon-and-spa-answering-service": salonConfig,
  "small-business-answering-service": smallBusinessConfig,
  "veterinary-answering-service": veterinaryConfig,
};

export function getVertical(slug: string): VerticalConfig | undefined {
  return VERTICALS[slug];
}

export type { VerticalConfig };
