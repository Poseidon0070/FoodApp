import React from "react"
import Header from "./components/Layout/Header"
import Meal from "./components/Meals/Meal";
import { useContext, useState } from "react";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <main>
        <Meal></Meal>
      </main>
    </React.Fragment>
  );
}

export default App;
