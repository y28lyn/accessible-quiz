import MainContent from "./items/MainContent";

import "./App.css";

const App = () => {
  return (
    <>
      <main
        id="main"
        role="main"
        className="h-fit p-6 flex justify-center items-center"
      >
        <MainContent
          imgSrc={
            "https://images.unsplash.com/photo-1707343843982-f8275f3994c5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </main>
    </>
  );
};

export default App;
