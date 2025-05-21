
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const SpecialOrdersSection = () => {
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
    <section
      id="special"
      className="section-padding relative"
      style={{
        backgroundImage: "linear-gradient(rgba(93, 110, 30, 0.9), rgba(93, 110, 30, 0.9)), url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      ref={sectionRef}
    >
      <div className="container mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-on-scroll">
          Спец-решения под заказ
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-on-scroll">
          Нужен BIO, High-Polyphenol, Organic?
        </p>
        
        <p className="text-lg mb-10 max-w-3xl mx-auto animate-on-scroll">
          Привезём от 10 т за 30–40 дней. Полный цикл: <br/>
          <span className="font-bold">контракт → таможня → доставка</span>
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-on-scroll">
            <h3 className="text-xl font-bold mb-3 text-sunny">BIO</h3>
            <p>Органическое масло с соответствующей сертификацией для производства био-продуктов</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-on-scroll">
            <h3 className="text-xl font-bold mb-3 text-sunny">High-Polyphenol</h3>
            <p>Масло с повышенным содержанием полифенолов для продуктов с заявленной пользой для здоровья</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-on-scroll">
            <h3 className="text-xl font-bold mb-3 text-sunny">Organic</h3>
            <p>100% органическое масло из оливок, выращенных без пестицидов и химических удобрений</p>
          </div>
        </div>
        
        <div className="animate-on-scroll">
          <p className="text-lg font-medium mb-6">
            ВВОЗИМ под заказ: от 10 т, 30–40 дней, таможня + логистика = под ключ
          </p>
          
          <Button 
            variant="default"
            className="bg-sunny hover:bg-sunny-dark text-white"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Оставить заявку на спец-заказ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOrdersSection;
