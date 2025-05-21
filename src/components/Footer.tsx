
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-semibold">Олива Голд</p>
            <p className="text-sm text-gray-400">
              © Олива Голд, 2004–2025. Все права защищены.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a href="#top" className="text-sm text-gray-400 hover:text-sunny">
              Главная
            </a>
            <a href="#advantages" className="text-sm text-gray-400 hover:text-sunny">
              Преимущества
            </a>
            <a href="#products" className="text-sm text-gray-400 hover:text-sunny">
              Ассортимент
            </a>
            <a href="#special" className="text-sm text-gray-400 hover:text-sunny">
              Спец-решения
            </a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-sunny">
              Контакты
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
