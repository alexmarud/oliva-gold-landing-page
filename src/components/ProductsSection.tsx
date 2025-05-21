
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const ProductsSection = () => {
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

  const products = [
    {
      name: "Extra Virgin",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      description: "Первоклассное купажирование, кислотность ≤ 0,8%",
      features: [
        "Мягкий, фруктовый вкус с нотами свежескошенной травы",
        "Подходит для салатов, холодных закусок, маринадов",
        "Богат антиоксидантами и полифенолами",
        "Высшая категория оливкового масла"
      ]
    },
    {
      name: "Pomace",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      description: "Оптимально для жарки и фритюра, высокое дымление",
      features: [
        "Нейтральный вкус, идеально для термической обработки",
        "Высокая температура дымления (240°C)",
        "Экономичный расход при жарке",
        "Стабильные характеристики в промышленном производстве"
      ]
    }
  ];

  return (
    <section id="products" className="section-padding" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="section-heading text-center animate-on-scroll">Ассортимент</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {products.map((product, index) => (
            <div key={index} className="animate-on-scroll">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div 
                  className="h-64 bg-cover bg-center" 
                  style={{
                    backgroundImage: `url(${product.image})`
                  }}
                ></div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-olive mb-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-700 mb-4">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-sunny mr-2 font-bold">•</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-gray-700 font-medium">
                      Доступно в куба-тейнере 1000 л
                    </p>
                    <p className="text-sm text-gray-500">
                      На складе в Московской области
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll">
          <Button 
            className="cta-button"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Запросить актуальный прайс
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
