const Footer = () => {
  return (
    <section className="bg-[#0B3168]">
      <div className="flex flex-col md:flex-row justify-center items-center py-6 overflow-hidden">
        <div className="px-5 py-2">
          <p className="text-center text-gray-400">© 2024 INOLIB</p>
        </div>
        <nav className="flex flex-col md:flex-row items-center justify-center">
          <div className="px-5 py-2">
            <a href="#main" className=" text-gray-100 hover:text-gray-300">
              À propos
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#main" className="text-gray-100 hover:text-gray-300">
              Contact
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#main" className="text-gray-100 hover:text-gray-300">
              Mentions légales
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Footer;
