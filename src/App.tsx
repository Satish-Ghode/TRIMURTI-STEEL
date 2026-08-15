import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { SeoHead } from './components/SeoHead';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ConfiguratorPage } from './pages/ConfiguratorPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { GalleryPage } from './pages/GalleryPage';
import { BlogPage } from './pages/BlogPage';
import { CareersPage } from './pages/CareersPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyTermsPage } from './pages/PrivacyTermsPage';
import { SitemapPage } from './pages/SitemapPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [prefilledQuoteConfig, setPrefilledQuoteConfig] = useState<any>(null);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      if (hash && [
        'home', 'about', 'products', 'services', 'industries', 
        'configurator', 'certifications', 'case-studies', 'gallery', 
        'blog', 'careers', 'faq', 'contact', 'privacy', 'terms', 'sitemap'
      ].includes(hash)) {
        setCurrentRoute(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    window.location.hash = route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (config?: any) => {
    if (config) {
      setPrefilledQuoteConfig(config);
    }
    setIsQuoteModalOpen(true);
  };

  const renderPage = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onOpenQuoteModal={handleOpenQuoteModal} />;
      case 'about':
        return <AboutPage />;
      case 'products':
        return <ProductsPage onNavigate={handleNavigate} onOpenQuoteModal={handleOpenQuoteModal} />;
      case 'services':
        return <ServicesPage onOpenQuoteModal={handleOpenQuoteModal} />;
      case 'industries':
        return <IndustriesPage onOpenQuoteModal={handleOpenQuoteModal} />;
      case 'configurator':
        return <ConfiguratorPage onOpenQuoteModal={handleOpenQuoteModal} />;
      case 'certifications':
        return <CertificationsPage />;
      case 'case-studies':
        return <CaseStudiesPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'blog':
        return <BlogPage />;
      case 'careers':
        return <CareersPage />;
      case 'faq':
        return <FaqPage />;
      case 'contact':
        return <ContactPage />;
      case 'privacy':
      case 'terms':
        return <PrivacyTermsPage />;
      case 'sitemap':
        return <SitemapPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} onOpenQuoteModal={handleOpenQuoteModal} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased text-slate-800 selection:bg-blue-600 selection:text-white">
      {/* SEO & Structured Data */}
      <SeoHead route={currentRoute} />

      {/* Navigation Bar */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Quote Request & AI Assistant Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        prefilledConfig={prefilledQuoteConfig}
      />
    </div>
  );
}
