const Footer = () => {
  return (
    <section className="bg-slate-800 20vh">
      <div className="max-w-screen-xl px-4 py-6 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <a
              href="#main"
              className="leading-6 text-gray-100 hover:text-gray-300"
            >
              À propos
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#main"
              className="leading-6 text-gray-100 hover:text-gray-300"
            >
              Contact
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#main"
              className="leading-6 text-gray-100 hover:text-gray-300"
            >
              Mentions légales
            </a>
          </div>
        </nav>
        <p className="mt-8 leading-6 text-center text-gray-400">
          © 2024 INOLIB
        </p>
      </div>
    </section>
  );
};

export default Footer;
