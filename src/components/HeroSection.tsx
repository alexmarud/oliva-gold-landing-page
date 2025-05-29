import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center bg-amber-50 text-olive-dark"
    >
      <div className="container mx-auto relative z-10 text-center">
        <div className="flex justify-center mb-8">
          <div className="bg-white/80 rounded-lg p-6 inline-block shadow-md">
            <div className="text-gold text-4xl font-bold">
              Oliva<span className="text-gold font-extrabold">Gold</span>
            </div>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-6 drop-shadow-lg">
            Оптовые продажи оливкового масла
          </h1>
          
          <p className="text-xl md:text-2xl text-olive-dark mb-8 font-medium drop-shadow-md">
            Прямой контракт с Андалусией с 2004 года
          </p>
          
          <p className="text-lg text-olive-dark mb-8 font-medium drop-shadow-md">
            Производитель: ACEITES SIERRA SUR S.A.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              className="bg-gold hover:bg-gold-dark text-white text-lg"
              size="lg"
            >
              Получить оптовый прайс
            </Button>
            
            <Button
              className="bg-gold hover:bg-gold-dark text-white text-lg"
              size="lg"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#2C4017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
