import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dorodavid.it"),
  title: {
    default: "David Doro",
    template: "%s | David Doro",
  },
  description: "Brand and Product Design",

  keywords: [
    "Set Design",
    "Industrial Design",
    "Brand Identity",
    "Web Design",
    "Design Direction",
    "UX&UI",
    "Strategy",
    "Product Design",
  ],

  authors: [{ name: "David Doro" }],
  creator: "David Doro",

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
  openGraph: {
    title: "David Doro",
    description: "Brand and Product Design",
    url: "https://dorodavid.it",
    siteName: "David Doro",
    images: [
      {
        url: "https://dorodavid.it/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Doro",
    description: "Brand and Product Design",
    images: ["https://dorodavid.it/og-image.png"],
  },
  alternates: {
    canonical: "https://dorodavid.it",
    languages: {
      "en-US": "https://dorodavid.it/en",
      "es-ES": "https://dorodavid.it/es",
      it: "https://dorodavid.it",
      "it-IT": "https://dorodavid.it",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "David Doro",
      jobTitle: "Brand and Product Designer",
      worksFor: {
        "@type": "Organization",
        name: "David Doro",
        location: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Treviso",
            addressRegion: "Veneto",
            addressCountry: "IT",
          },
        },
      },
      url: "https://dorodavid.it",
      sameAs: [
        "https://www.linkedin.com/in/david-doro-design-industriale/",
        // "https://twitter.com/daviddoro"
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "David Doro",
      url: "https://dorodavid.it",
      description: "Brand and Product Design",
      author: {
        "@type": "Person",
        name: "David Doro",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "David Doro Studio",
      url: "https://dorodavid.it",
      logo: "https://dorodavid.it/logo.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Treviso",
        addressRegion: "Veneto",
        addressCountry: "IT",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@dorodavid.com",
        contactType: "customer service",
      },
    },
  ];

  
  return (
    <html lang="it" className={inter.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5J8PV8N2');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5J8PV8N2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>{" "}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
