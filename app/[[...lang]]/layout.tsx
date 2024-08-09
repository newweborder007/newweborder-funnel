import React from "react";
import "@/styles/global.css";
import { Orbitron, Noto_Sans } from "next/font/google";
// import Script from 'next/script';
import Navbar from "@/components/widgets/Navbar";
import Footer from "@/components/widgets/Footer";
import { getDictionary } from "./dictionaries";
import { TLocale } from "@/middleware";
import Script from "next/script";

export const dynamic = "force-dynamic";

const favicons = [
  // Generic icons
  {
    rel: "icon",
    type: "image/x-icon",
    href: "/favicon/favicon.ico",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon/favicon-16x16.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: "/favicon/favicon-96x96.png",
  },

  // Android specific
  {
    rel: "icon",
    type: "image/png",
    sizes: "192x192",
    href: "/favicon/android-icon-192x192.png",
  },

  // Apple specific
  {
    rel: "apple-touch-icon",
    sizes: "57x57",
    href: "/favicon/apple-icon-57x57.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "60x60",
    href: "/favicon/apple-icon-60x60.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "/favicon/apple-icon-72x72.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: "/favicon/apple-icon-76x76.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/favicon/apple-icon-114x114.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/favicon/apple-icon-120x120.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/favicon/apple-icon-144x144.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/favicon/apple-icon-152x152.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/favicon/apple-icon-180x180.png",
  },

  // Safari specific
  {
    rel: "mask-icon",
    href: "/favicon/safari-pinned-tab.svg",
    color: "#F59A9A",
  },

  // Windows 8 specific
  {
    rel: "manifest",
    href: "/site.webmanifest",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "New Web Order",
  legalName: "New Web Order",
  url: "https://www.newweborder.co/",
  logo: "/nwo-logo.png",
  foundingDate: "2019",
  founders: [
    {
      "@type": "Person",
      name: "Muhammad Musa",
    },
    {
      "@type": "Person",
      name: "Syed Saif",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Heights 1, Square Commercial, Phase 7 Bahria Town",
    addressLocality: "Rawalpindi",
    addressRegion: "Punjab",
    postalCode: "46000",
    addressCountry: "PAK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: "+44-73-6085-6434",
    email: "contact@newweborder.co",
  },
  sameAs: [
    "https://dribbble.com/NewWebOrder",
    "https://github.com/syedsaif666",
    "https://medium.com/@newweborder007",
    "https://twitter.com/New_Web_Order",
    "https://www.linkedin.com/company/96434846/",
    "https://www.facebook.com/NewWebOrder1",
    "https://instagram.com/newweborderltd?igshid=NTc4MTIwNjQ2YQ==",
  ],
};

export const metadata = {
  title: "Funnel | Advanced AI Solutions & Automation",
  description:
    "Welcome to New Web Order, your trusted partner for cutting-edge software solutions. We are dedicated to transforming your ideas into reality. With our passion for innovation and expertise in the latest technologies, we create customized software solutions tailored to meet your unique business needs.",
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  icons: [],
  manifest: "/manifest.json",
  og: {
    title: "New Web Order",
    description:
      "Welcome to New Web Order, your trusted partner for cutting-edge software solutions. We are dedicated to transforming your ideas into reality. With our passion for innovation and expertise in the latest technologies, we create customized software solutions tailored to meet your unique business needs.",
    image: "https://i.ibb.co/pvyyBfJ/nwo-banner-1280x720.png",
    url: "https://www.newweborder.co",
    type: "website",
  },
  googleSiteVerification: "KHKPgHxU_MY60EQUQfBjvdl4RzJjG_LBtj4HsI6cvoo",
  msapplication: {
    TileColor: "#F53838",
    TileImage: "/favicon/ms-icon-144x144.png",
  },
};

export const viewport = {
  themeColor: "#FFFFFF",
};

const orbitron = Orbitron({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const notosans = Noto_Sans({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-notosans",
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lang: TLocale;
  };
}

const RootLayout: React.FC<RootLayoutProps> = async ({ children, params }) => {
  const dict = await getDictionary(params.lang || "en");

  return (
    <html
      lang={params.lang}
      className={`${orbitron.variable} ${notosans.variable}`}
    >
      <head>
        {favicons.map((linkProps) => (
          <link
            key={linkProps.href || "rel"}
            {...(linkProps || "/favicon/favicon.ico")}
          />
        ))}
      </head>
      <body className="loading">
        <Navbar data={dict} />
        <main
          id="skip"
          className="md:min-h[calc(100dvh-5rem)] min-h-[calc(100dvh-4rem)]"
        >
          {children}
        </main>
        <Script type="application/ld+json" id="script">
          {JSON.stringify(structuredData)}
        </Script>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
