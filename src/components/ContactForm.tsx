
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      console.log("Submitting form data:", formData);
      
      // Save to Supabase
      const { error: supabaseError, data } = await supabase
        .from('contacts')
        .insert([formData]);

      if (supabaseError) {
        console.error("Supabase error:", supabaseError);
        throw new Error(supabaseError.message);
      }
      
      console.log("Data saved to Supabase:", data);

      // Send email via edge function
      try {
        const { error } = await supabase.functions.invoke('send-contact-email', {
          body: JSON.stringify(formData),
        });

        if (error) {
          console.error("Edge function error:", error);
          // We'll continue even if email fails, as we've already saved to db
        }
      } catch (emailError) {
        console.error("Email sending error:", emailError);
        // Continue even if email fails
      }

      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
        duration: 5000,
      });
      
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error("Ошибка отправки формы:", error);
      toast({
        title: "Ошибка отправки",
        description: "Пожалуйста, попробуйте снова или свяжитесь с нами по телефону.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Имя*
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Иван Иванов"
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              Компания*
            </label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              placeholder="ООО Компания"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Телефон*
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+7 (___) ___-__-__"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mail*
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="example@company.ru"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Сообщение
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Опишите ваш запрос или укажите необходимый объем продукции"
          />
        </div>
        
        <div className="flex flex-col items-center">
          <Button 
            type="submit" 
            className="w-full md:w-auto cta-button py-6"
            disabled={loading}
          >
            {loading ? "Отправка..." : "Запросить коммерческое предложение"}
          </Button>
          
          <p className="text-sm text-gray-500 mt-4">
            Нажимая кнопку, вы соглашаетесь на обработку персональных данных
          </p>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
