import { siteConfig } from "@/lib/site-config";

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        logo: `${siteConfig.url}/logo/icon.png`,
        email: siteConfig.contact.email,
        taxID: siteConfig.contact.cnpj,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Sinop",
          addressRegion: "MT",
          addressCountry: "BR",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: siteConfig.contact.email,
          telephone: `+${siteConfig.contact.whatsappNumber}`,
          areaServed: "BR",
          availableLanguage: "Portuguese",
        },
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
        inLanguage: "pt-BR",
      }}
    />
  );
}

export function ProfessionalServiceJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        areaServed: "BR",
      }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: name,
        description,
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        url,
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  );
}
