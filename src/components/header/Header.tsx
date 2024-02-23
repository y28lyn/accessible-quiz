const Header = () => {
  return (
    <nav
      role="navigation"
      tabIndex={-1}
      className="flex items-center justify-between flex-wrap bg-[#0B3168] p-6"
    >
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <img
          src="/static/logoinolib.png"
          alt="Logo d'INOLIB"
          className="h-16 w-auto mr-2"
        />
        <span className="font-semibold text-xl tracking-tight ml-3">
          Accessible Quiz
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
          <svg
            className="h-3 w-3"
            fill="#fff"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full hidden md:block flex-grow lg:flex lg:items-center lg:w-auto text-gray-200">
        <div className="text-sm lg:flex-grow">
          <a
            href="#main"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
          >
            Accueil
          </a>
          <a
            href="#main"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
          >
            Exemples
          </a>
          <a
            href="#main"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white"
          >
            Créez vos quiz
          </a>
        </div>
        <div>
          <a
            href="#main"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white hover:text-black duration-200 mt-4 lg:mt-0"
          >
            Se connecter
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
