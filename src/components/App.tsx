import MainContent from "./items/MainContent";

import "./App.css";

const App = () => {
  return (
    <>
      <main
        id="main"
        role="main"
        className="h-fit md:h-screen p-6 flex flex-col justify-center items-center"
      >
        <MainContent
          imgSrc={
            "https://images.unsplash.com/photo-1531742633345-8adf1181733c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </main>
    </>
  );
};

export default App;
