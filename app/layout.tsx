import type { Metadata, Viewport } from "next";
import { Fraunces, Geist } from "next/font/google";
import { Suspense } from "react";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MobileStickyButton from "@/components/MobileStickyButton";
import CookieBanner from "@/components/CookieBanner";
import { siteConfig } from "@/lib/siteConfig";

/* ============================================================
   FONT LOADING — matches the Live Answer design system
   (display serif + body sans, per files/styles.css)
   ============================================================ */
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

/* ============================================================
   METADATA
   ============================================================ */
const defaultTitle = "Live Answer | AI Receptionist for California Small Business";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultTitle,
    template: "%s | Live Answer",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: defaultTitle,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Live Answer — AI receptionist for California small business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image.png`],
    creator: "@liveanswerservice",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "en-US": siteConfig.url,
      "x-default": siteConfig.url,
    },
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/brand-favicon-1780112772.png", sizes: "32x32", type: "image/png" },
      { url: "/brand-icon-512-1780112772.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/brand-apple-1780112772.png",
    shortcut: "/brand-favicon-1780112772.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1A1A17",
};

/* ============================================================
   SCHEMA.ORG — LocalBusiness JSON-LD
   2561 Skylark Drive, San Jose, CA 95125 (Willow Glen)
   Service area: statewide California (~600km radius from SJ)
   ============================================================ */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}/opengraph-image.png`,
  logo: {
    "@type": "ImageObject",
    url: `${siteConfig.url}/icon-512.png`,
    width: 512,
    height: 512,
  },
  description: siteConfig.description,
  telephone: siteConfig.phone.schema,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "2561 Skylark Drive",
    addressLocality: "San Jose",
    addressRegion: "CA",
    postalCode: "95125",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.298,
    longitude: -121.873,
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 36.7783,
      longitude: -119.4179,
    },
    geoRadius: "600000",
    name: "California",
  },
  serviceType: [
    "AI Receptionist",
    "Answering Service",
    "Virtual Receptionist",
    "Bilingual Answering Service",
    "24/7 Call Answering",
    "Appointment Booking Service",
  ],
  priceRange: "$$",
  openingHours: ["Mo-Su 00:00-23:59"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "1",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    siteConfig.social.instagram,
    siteConfig.social.facebook,
    siteConfig.social.tiktok,
    siteConfig.social.linkedin,
  ],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/guides?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

/* ============================================================
   ROOT LAYOUT
   ============================================================ */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className={`${fraunces.variable} ${geist.variable}`}>
      <head>
        <link rel="alternate" hrefLang="en-US" href={siteConfig.url} />
        <link rel="alternate" hrefLang="x-default" href={siteConfig.url} />
        {/* Tabler Icons webfont — used by the design system in globals.css */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.0.0/dist/tabler-icons.min.css"
        />
        {gaMeasurementId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('consent', 'default', {
                  analytics_storage: 'granted',
                  ad_storage: 'denied',
                  ad_user_data: 'denied',
                  ad_personalization: 'denied',
                });
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}', {
                  page_path: window.location.pathname,
                  url_passthrough: true,
                  ads_data_redaction: true,
                });`,
              }}
            />
          </>
        )}
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Suspense>
          <Navigation />
        </Suspense>

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <Footer />

        <MobileStickyButton />
        <CookieBanner />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />

        {/* Microsoft Clarity — TODO: replace project ID once provisioned for Live Answer */}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <Script
            id="microsoft-clarity"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");`,
            }}
          />
        )}
      </body>
    </html>
  );
}
