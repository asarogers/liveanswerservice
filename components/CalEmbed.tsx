"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { siteConfig } from "@/lib/siteConfig";
import { trackEvent } from "@/lib/analytics";

/**
 * Inline Cal.com booking widget for the 30-min setup consult.
 * Books straight onto the founder's Google Calendar (cal.com/liveanswerservice/30min).
 * Fires `book_complete` (key event) when a booking is confirmed.
 */
export default function CalEmbed() {
  const calLink = `${siteConfig.calcom.username}/${siteConfig.calcom.consultationSlug}`;

  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: { light: { "cal-brand": "#5a1f2e" }, dark: { "cal-brand": "#5a1f2e" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      cal("on", {
        action: "bookingSuccessful",
        callback: () => trackEvent("book_complete", { event_category: "conversion", source: "calcom" }),
      });
    })();
  }, []);

  return (
    <Cal
      calLink={calLink}
      style={{ width: "100%", height: "100%", minHeight: 620, overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}
