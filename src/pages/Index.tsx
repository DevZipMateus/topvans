
import React, { useEffect } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import FleetSection from '../components/FleetSection';
import Contact from '../components/Contact';
import FloatingButton from '../components/FloatingButton';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Add structured data for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Top Vans Turismo e Locações",
      "image": window.location.origin + "/lovable-uploads/25251098-fff7-4bff-bf39-e72ba91e2910.png",
      "@id": "",
      "url": window.location.origin,
      "telephone": "+5517997620162",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua José Tibúrcio de Souza, 871",
        "addressLocality": "Américo de Campos",
        "addressRegion": "SP",
        "postalCode": "",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -20.2986,
        "longitude": -49.7267
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "13:00"
        }
      ],
      "sameAs": [
        "https://instagram.com/topvans.turismo"
      ]
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <AboutUs />
        <FleetSection />
        <Contact />
      </main>
      
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Index;
