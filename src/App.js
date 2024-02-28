import React from "react";
import "./app.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Main />
      <Footer />
    </>
  );
};

export default App;
