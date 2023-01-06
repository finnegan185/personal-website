import React from "react";
import ReactDOM from "react-dom/client";

// My Components
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function Main() {
  return (
    <>
      {/* <Header /> */}
      <Home />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Main />);

if (module.hot) {
  module.hot.accept();
}
