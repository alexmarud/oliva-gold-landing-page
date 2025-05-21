
import { useEffect, useRef } from "react";
import ContactForm from "./ContactForm";
import { Mail, Phone, MapPin, Link } from "lucide-react";

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
    <section id="contact" className="section-padding" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="section-heading text-center animate-on-scroll">
          Свяжитесь с нами
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          <div className="lg:col-span-2 animate-on-scroll">
            <ContactForm />
            
            <div className="mt-6 p-4 bg-sunny/10 rounded-lg">
              <p className="text-sm">
                <strong>Получите бесплатно:</strong> После отправки формы на вашу почту 
                будет отправлен &quot;Чек-лист по качеству оливкового масла&quot;
              </p>
            </div>
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
                    <p className="font-medium">Юридический адрес:</p>
                    <p>Московская область</p>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <p className="font-medium mb-4">Мессенджеры и соцсети:</p>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-sunny hover:text-white transition-colors"
                    >
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-sunny hover:text-white transition-colors"
                    >
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-sunny hover:text-white transition-colors"
                    >
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                    </a>
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
