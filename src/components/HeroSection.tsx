
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/lovable-uploads/8bb2b844-3965-4e01-af6f-a3327c183678.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"
      ></div>

      <div className="container mx-auto relative z-10 text-center">
        <div className="flex justify-center mb-8">
          <div className="bg-olive-dark/90 rounded-lg p-6 inline-block shadow-2xl">
            <div className="text-gold text-4xl font-bold flex items-center">
              <span className="mr-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 5C22.5 10 30 12 35 12C35 25 27.5 35 20 35C12.5 35 5 25 5 12C10 12 17.5 10 20 5Z" fill="#F5CB57"/>
                  <path d="M20 10C21 13 25 14 28 14C28 22 24 28 20 28C16 28 12 22 12 14C15 14 19 13 20 10Z" fill="#2C4017" fillOpacity="0.3"/>
                  <circle cx="20" cy="18" r="3" fill="#F5CB57"/>
                </svg>
              </span>
              Oliva<span className="text-gold font-extrabold">Gold</span>
            </div>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-6 drop-shadow-lg">
            Оптовые продажи оливкового масла
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Прямой контракт с Андалусией с 2004 года
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
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
