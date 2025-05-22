
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
        backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundColor: "#F5CB57", // Using the gold color from the logo
      }}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"
      ></div>

      <div className="container mx-auto relative z-10 text-center">
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/93cb3a15-7f26-44af-b975-ecc3ec3b81c7.png" 
            alt="Олива Голд" 
            className="h-40 md:h-48 w-auto drop-shadow-2xl animate-fade-in" 
          />
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
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/20 text-lg"
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
