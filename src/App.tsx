import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainContent from "./components/items/MainContent";

import "./index.css";

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main id="main" className="h-screen">
        <MainContent
          imgSrc={
            "https://images.unsplash.com/photo-1707343843982-f8275f3994c5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
