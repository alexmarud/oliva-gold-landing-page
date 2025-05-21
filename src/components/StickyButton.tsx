
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { toast } from "sonner";

const StickyButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    // In a real application, this would download a PDF file
    toast.success("Скачивание прайс-листа началось");
    // Simulate download delay
    setTimeout(() => {
      toast("Благодарим за интерес к нашей продукции!");
    }, 2000);
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <Button
        className="bg-sunny hover:bg-sunny-dark flex items-center gap-2 py-6 px-4 rounded-full shadow-lg"
        onClick={handleClick}
      >
        <FileText className="h-5 w-5" />
        <span>Скачать прайс (PDF)</span>
      </Button>
    </div>
  );
};

export default StickyButton;
