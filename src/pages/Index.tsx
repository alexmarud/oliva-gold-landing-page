
import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import AdvantagesSection from "../components/AdvantagesSection";
import ProductsSection from "../components/ProductsSection";
import SpecialOrdersSection from "../components/SpecialOrdersSection";
import GeographySection from "../components/GeographySection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import StickyButton from "../components/StickyButton";

const Index = () => {
  useEffect(() => {
    // Update document title and meta description for SEO
    document.title = "Купить оливковое масло оптом в куба-тейнере 1000 л | Олива Голд";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", 
        'Импорт Extra Virgin и Pomace напрямую из Андалусии. Масло на складе в Подмосковье, поставки под заказ от 10 т. Таможня и логистика под ключ.');
    }
    
    // Initialize animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <main className="min-h-screen">
      <NavBar />
      <HeroSection />
      <AdvantagesSection />
      <ProductsSection />
      <SpecialOrdersSection />
      <GeographySection />
      <ContactSection />
      <Footer />
      <StickyButton />
    </main>
  );
};

export default Index;
