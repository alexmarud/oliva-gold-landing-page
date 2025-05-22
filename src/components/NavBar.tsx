
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/93cb3a15-7f26-44af-b975-ecc3ec3b81c7.png" 
            alt="Олива Голд" 
            className="h-14 w-auto" 
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="#advantages" scrolled={scrolled}>Преимущества</NavLink>
          <NavLink href="#products" scrolled={scrolled}>Ассортимент</NavLink>
          <NavLink href="#special" scrolled={scrolled}>Спец-решения</NavLink>
          <NavLink href="#geography" scrolled={scrolled}>География</NavLink>
          <NavLink href="#contact" scrolled={scrolled}>Контакты</NavLink>
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gold hover:bg-gold-dark text-white"
          >
            Получить прайс
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className={cn(
            "h-6 w-6 transition-colors duration-300",
            scrolled ? "text-olive-dark" : "text-white"
          )} />
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col py-4 px-6">
            <MobileNavLink href="#advantages" onClick={() => setMobileMenuOpen(false)}>
              Преимущества
            </MobileNavLink>
            <MobileNavLink href="#products" onClick={() => setMobileMenuOpen(false)}>
              Ассортимент
            </MobileNavLink>
            <MobileNavLink href="#special" onClick={() => setMobileMenuOpen(false)}>
              Спец-решения
            </MobileNavLink>
            <MobileNavLink href="#geography" onClick={() => setMobileMenuOpen(false)}>
              География
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>
              Контакты
            </MobileNavLink>
            <Button 
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
              className="bg-gold hover:bg-gold-dark text-white mt-4 w-full"
            >
              Получить прайс
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ 
  href, 
  children, 
  scrolled 
}: { 
  href: string; 
  children: React.ReactNode; 
  scrolled: boolean;
}) => {
  return (
    <a 
      href={href} 
      className={cn(
        "font-medium text-sm transition-colors duration-300 hover:text-gold",
        scrolled ? "text-gray-700" : "text-white"
      )}
    >
      {children}
    </a>
  );
};

const MobileNavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <a 
      href={href} 
      className="font-medium text-gray-700 py-2 border-b border-gray-100 hover:text-gold"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default NavBar;
