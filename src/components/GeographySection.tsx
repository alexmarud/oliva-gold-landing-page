
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
                backgroundImage: "url('https://images.unsplash.com/photo-1569445748557-316b8c8af9f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
              }}
            ></div>
          </div>
          
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-olive mb-4">
              Постоянный запас на складе в Подмосковье
            </h3>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-sunny mr-2 text-2xl">•</span>
                <span className="text-gray-700">
                  <strong>Extra Virgin & Pomace</strong> куба-тейнеры 1000 л
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-sunny mr-2 text-2xl">•</span>
                <span className="text-gray-700">
                  Склад класса А с температурным контролем
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-sunny mr-2 text-2xl">•</span>
                <span className="text-gray-700">
                  Отгрузки в течение 1-3 рабочих дней
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-sunny mr-2 text-2xl">•</span>
                <span className="text-gray-700">
                  Доставка по всей территории России
                </span>
              </li>
            </ul>
            
            <div className="bg-sunny/10 rounded-lg p-6 mb-8">
              <h4 className="text-xl font-medium text-olive mb-2">
                Свежие партии прибывают ежемесячно
              </h4>
              <p className="text-gray-700">
                Мы поддерживаем постоянный запас продукции для бесперебойных поставок
                нашим клиентам по всей России.
              </p>
            </div>
            
            <Button 
              className="cta-button"
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
