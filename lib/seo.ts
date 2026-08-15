import type { Metadata } from "next";
import { company, siteUrl } from "@/content/site";

export function pageMetadata(title: string, description: string, path = ""): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: company.name,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    description: company.description,
    url: siteUrl,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: company.city,
      addressRegion: company.state,
      addressCountry: company.country
    },
    sameAs: [company.linkedin, company.github, company.facebook, company.instagram, company.youtube, company.x].filter(
      (item) => item !== "#"
    )
  };
}
