
import { useEffect, useRef } from "react";
import ContactForm from "./ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
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
    <section id="contact" className="section-padding bg-gradient-to-b from-amber-50 to-olive-light/10" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="section-heading text-center animate-on-scroll">
          Свяжитесь с нами
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          <div className="lg:col-span-2 animate-on-scroll">
            <ContactForm />
          </div>
          
          <div className="animate-on-scroll">
            <div className="bg-white p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-bold text-olive mb-6">Контакты</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-sunny mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">E-mail:</p>
                    <a href="mailto:sales@olivagold.ru" className="text-olive hover:text-sunny">
                      sales@olivagold.ru
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-sunny mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Телефон:</p>
                    <a href="tel:+74950000000" className="text-olive hover:text-sunny">
                      +7 (495) XXX-XX-XX
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-sunny mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Адрес:</p>
                    <p>Московская область г. Наро-Фоминск</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
