
import { useEffect, useRef } from "react";
import { Map, Calendar, Truck, FileCheck } from "lucide-react";

const AdvantagesSection = () => {
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

  const advantages = [
    {
      icon: <Map className="h-10 w-10 text-gold" />,
      title: "Испания (Андалусия)",
      description: "Регион №1 по качеству оливкового масла в мире"
    },
    {
      icon: <Calendar className="h-10 w-10 text-gold" />,
      title: "Импортёр с 2004 г.",
      description: "Собственная таможенная и логистическая экспертиза"
    },
    {
      icon: <Truck className="h-10 w-10 text-gold" />,
      title: "Масло уже на складе в МО",
      description: "Быстрые отгрузки по всей России"
    },
    {
      icon: <FileCheck className="h-10 w-10 text-gold" />,
      title: "Партия под заказ",
      description: "От 10 т, 30–40 дней «под ключ»"
    }
  ];

  return (
    <section id="advantages" className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="section-heading text-center animate-on-scroll">Наши преимущества</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center animate-on-scroll hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold text-olive-dark mb-2">
                {advantage.title}
              </h3>
              <p className="text-gray-600">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-lg text-gray-700 mb-6 font-medium">
            Прямой импорт из Андалусии с 2004 г.
          </p>
          <button 
            className="bg-gold hover:bg-gold-dark text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Запросить прайс
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
