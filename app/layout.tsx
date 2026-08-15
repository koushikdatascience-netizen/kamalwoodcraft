import type { Metadata } from "next";
import Script from "next/script";
import "@/app/globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CookieNotice } from "@/components/ui/cookie-notice";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { company, siteUrl } from "@/content/site";
import { organizationJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kamal Woodcraft | Bulk Wooden Furniture Parts Manufacturer in Kalyani",
    template: "%s | Kamal Woodcraft"
  },
  description:
    "Kamal Woodcraft manufactures wooden sofa legs, bed legs, table legs, staircase components, custom wood turning, and jali cutting work in Kalyani, Nadia.",
  openGraph: {
    title: "Kamal Woodcraft | Bulk Wooden Furniture Parts Manufacturer",
    description: company.description,
    url: siteUrl,
    siteName: company.name,
    type: "website"
  },
  twitter: {
    card: "summary_large_image"
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:p-3" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CookieNotice />
        <ScrollToTop />
        <Script id="org-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }} />
      </body>
    </html>
  );
}
