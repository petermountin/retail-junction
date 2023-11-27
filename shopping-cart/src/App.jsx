import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  async function getItemImg() {
    try {
      fetch("https://fakestoreapi.com/products/category/jewelery")
        .then((res) => res.json())
        .then((json) => console.log(json));
    } catch (error) {
      console.log(error);
    }
  }

  getItemImg();
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;