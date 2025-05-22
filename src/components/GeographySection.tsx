
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const GeographySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('animated');
              }, i * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="geography" className="section-padding bg-gradient-to-b from-amber-50 to-olive-light/10" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="section-heading text-center animate-on-scroll">
          География и наличие
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <div className="animate-on-scroll">
            <div 
              className="rounded-lg overflow-hidden shadow-lg h-96 bg-cover bg-center"
              style={{
                backgroundImage: "url('/lovable-uploads/7e16720c-6bc4-4393-b22b-6bd0fd06e166.png')"
              }}
            ></div>
          </div>
          
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-olive-dark mb-4">
              Постоянный запас на складе в Подмосковье
            </h3>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-gold mr-2 text-2xl">•</span>
                <span className="text-gray-700">
                  <strong>Extra Virgin & Pomace</strong> куба-тейнеры 1000 л
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2 text-2xl">•</span>
                <span className="text-gray-700">
                  Склад класса А с температурным контролем
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2 text-2xl">•</span>
                <span className="text-gray-700">
                  Отгрузки в течение 1-3 рабочих дней
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2 text-2xl">•</span>
                <span className="text-gray-700">
                  Доставка по всей территории России
                </span>
              </li>
            </ul>
            
            <div className="bg-gold/10 rounded-lg p-6 mb-8">
              <h4 className="text-xl font-medium text-olive-dark mb-2">
                Свежие партии прибывают ежемесячно
              </h4>
              <p className="text-gray-700">
                Мы поддерживаем постоянный запас продукции для бесперебойных поставок
                нашим клиентам по всей России.
              </p>
            </div>
            
            <Button 
              className="bg-gold hover:bg-gold-dark text-white"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Запросить актуальный прайс
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeographySection;
