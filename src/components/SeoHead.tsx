import React, { useEffect } from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO } from '../data/companyData';

interface SeoHeadProps {
  route: PageRoute;
  customTitle?: string;
  customDescription?: string;
  productName?: string;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  route,
  customTitle,
  customDescription,
  productName
}) => {
  useEffect(() => {
    // Generate page title and description
    let pageTitle = `${COMPANY_INFO.name} | Authorized ${COMPANY_INFO.partnerBrand} Smart Steel Doors & Windows`;
    let metaDescription = COMPANY_INFO.description;

    switch (route) {
      case 'home':
        pageTitle = `${COMPANY_INFO.name} - ${COMPANY_INFO.partnerBrand} Smart Steel Doors & Windows | NOTHING CORRODES US`;
        metaDescription = `Authorized channel partner for JSW Avante Smart Steel Doors & Windows. Fire-rated, embossed, glazed, and sliding doors engineered for maximum security, termite protection, and anti-corrosion.`;
        break;
      case 'about':
        pageTitle = `About Us - ${COMPANY_INFO.name} | ${COMPANY_INFO.parentGroup} Authorized Partner`;
        metaDescription = `Learn about Trimurti Enterprises, our partnership with JSW Steel Coated Products, manufacturing standards, quality control, and vision for modern steel architecture.`;
        break;
      case 'products':
        pageTitle = `JSW Avante Steel Doors & Windows Catalog | ${COMPANY_INFO.name}`;
        metaDescription = `Browse JSW Avante Plain Finish, 3D Embossed, Double Grill, Fire Rated (120 Min), Glazed Doors, and Steel Sliding Windows with RAL & Wood finishes.`;
        break;
      case 'configurator':
        pageTitle = `Interactive 3D Steel Door Configurator & Price Calculator | ${COMPANY_INFO.name}`;
        metaDescription = `Customize JSW Avante smart steel doors online. Choose dimensions, wood finishes, RAL colors, fire ratings, and locks with instant price estimates.`;
        break;
      case 'certifications':
        pageTitle = `CBRI Fire Testing & ISO Certifications | ${COMPANY_INFO.name}`;
        metaDescription = `View official CBRI fire test certificates, NBC 2016 compliance reports, salt-spray anti-corrosion test data, and ISO 9001:2015 documentation.`;
        break;
      case 'contact':
        pageTitle = `Contact ${COMPANY_INFO.name} | Sales, Factory Visit & Inquiries`;
        metaDescription = `Get in touch with Trimurti Enterprises. Visit our NCR industrial showroom & factory, call +91 98765 43210, or request an instant project callback.`;
        break;
      default:
        if (customTitle) pageTitle = `${customTitle} | ${COMPANY_INFO.name}`;
        if (customDescription) metaDescription = customDescription;
        break;
    }

    if (productName) {
      pageTitle = `${productName} - ${COMPANY_INFO.partnerBrand} | ${COMPANY_INFO.name}`;
    }

    document.title = pageTitle;

    // Update Meta Description
    let metaDescTag = document.querySelector('meta[name="description"]');
    if (!metaDescTag) {
      metaDescTag = document.createElement('meta');
      metaDescTag.setAttribute('name', 'description');
      document.head.appendChild(metaDescTag);
    }
    metaDescTag.setAttribute('content', metaDescription);

    // Update OpenGraph
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', pageTitle);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', metaDescription);

    // Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);

    // Inject JSON-LD Schema.org Structured Data
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": COMPANY_INFO.name,
      "alternateName": `${COMPANY_INFO.partnerBrand} Authorized Channel Partner`,
      "description": COMPANY_INFO.description,
      "url": window.location.origin,
      "telephone": COMPANY_INFO.phone,
      "email": COMPANY_INFO.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": COMPANY_INFO.address,
        "addressLocality": "New Delhi / NCR",
        "addressCountry": "IN"
      },
      "brand": {
        "@type": "Brand",
        "name": COMPANY_INFO.partnerBrand,
        "slogan": COMPANY_INFO.tagline
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:00"
        }
      ],
      "priceRange": "₹₹₹"
    };

    let scriptTag = document.getElementById('jsonld-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'jsonld-schema';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

  }, [route, customTitle, customDescription, productName]);

  return null;
};
