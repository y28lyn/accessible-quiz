import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainContent from "./components/items/MainContent";

import "./index.css";

const App = () => {
  return (
    <>
      <header role="banner" tabIndex={-1}>
        <Header />
      </header>

      <main
        id="main"
        role="main"
        tabIndex={-1}
        className="h-screen flex justify-center items-center"
      >
        <MainContent
          imgSrc={
            "https://images.unsplash.com/photo-1707343843982-f8275f3994c5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </main>

      <footer role="contentinfo" tabIndex={-1}>
        <Footer />
      </footer>
    </>
  );
};

export default App;
