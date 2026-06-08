/**
 * Service-page expansion registry (Waves 2–9 folds, authored 2026-06-08).
 *
 * Isolated here ON PURPOSE: the existing wave branches (wave-2…wave-9) each edit
 * lib/verticals/index.ts and lib/services-data.ts. Keeping the 16 expansion
 * imports/registrations in this dedicated module means index.ts and
 * services-data.ts change by a single spread line each — so promoting a wave
 * branch into main never collides with the expansion additions.
 *
 * All 16 pages are gated noindex via site-plan.json `exclude` until their wave's
 * Monday flips them exclude → sitemaps.priority.
 * Spec: important/business/liveanswerservice/SERVICE-PAGE-EXPANSION.md
 */
import type { VerticalConfig } from "./types";
import type { ServiceDetail } from "@/lib/services-data";

import { appointmentSchedulingConfig, appointmentSchedulingDetail } from "./appointment-scheduling-answering-service";
import { emergencyDispatchConfig, emergencyDispatchDetail } from "./emergency-dispatch-answering-service";
import { leadCaptureConfig, leadCaptureDetail } from "./lead-capture-answering-service";
import { liveChatConfig, liveChatDetail } from "./live-chat-answering-service";
import { crmIntegrationConfig, crmIntegrationDetail } from "./crm-integration-answering-service";
import { outboundReminderConfig, outboundReminderDetail } from "./outbound-reminder-answering-service";
import { insuranceConfig, insuranceDetail } from "./insurance-answering-service";
import { accountingConfig, accountingDetail } from "./accounting-answering-service";
import { itMspConfig, itMspDetail } from "./it-msp-answering-service";
import { roofingConstructionConfig, roofingConstructionDetail } from "./roofing-construction-answering-service";
import { cleaningLandscapingConfig, cleaningLandscapingDetail } from "./cleaning-landscaping-answering-service";
import { towingRoadsideConfig, towingRoadsideDetail } from "./towing-roadside-answering-service";
import { chiropracticConfig, chiropracticDetail } from "./chiropractic-answering-service";
import { mentalHealthConfig, mentalHealthDetail } from "./mental-health-answering-service";
import { medSpaConfig, medSpaDetail } from "./med-spa-answering-service";
import { nonprofitConfig, nonprofitDetail } from "./nonprofit-answering-service";

export const EXPANSION_VERTICALS: Record<string, VerticalConfig> = {
  "appointment-scheduling-answering-service": appointmentSchedulingConfig,
  "emergency-dispatch-answering-service": emergencyDispatchConfig,
  "lead-capture-answering-service": leadCaptureConfig,
  "live-chat-answering-service": liveChatConfig,
  "crm-integration-answering-service": crmIntegrationConfig,
  "outbound-reminder-answering-service": outboundReminderConfig,
  "insurance-answering-service": insuranceConfig,
  "accounting-answering-service": accountingConfig,
  "it-msp-answering-service": itMspConfig,
  "roofing-construction-answering-service": roofingConstructionConfig,
  "cleaning-landscaping-answering-service": cleaningLandscapingConfig,
  "towing-roadside-answering-service": towingRoadsideConfig,
  "chiropractic-answering-service": chiropracticConfig,
  "mental-health-answering-service": mentalHealthConfig,
  "med-spa-answering-service": medSpaConfig,
  "nonprofit-answering-service": nonprofitConfig,
};

export const EXPANSION_DETAILS: ServiceDetail[] = [
  appointmentSchedulingDetail,
  emergencyDispatchDetail,
  leadCaptureDetail,
  liveChatDetail,
  crmIntegrationDetail,
  outboundReminderDetail,
  insuranceDetail,
  accountingDetail,
  itMspDetail,
  roofingConstructionDetail,
  cleaningLandscapingDetail,
  towingRoadsideDetail,
  chiropracticDetail,
  mentalHealthDetail,
  medSpaDetail,
  nonprofitDetail,
];
