import React from "react";
import "./app.scss";
import LandingPage from "./shared/components/LandingPage";
import { Navbar } from "./shared/components/Navbar";
import Demo from "./views/components/Demo";
import NobelPrizeWinners from "./views/components/NobelPrizeWinners";
import Prac from "./views/components/Prac";

function App() {
  return (
    <section className="App">
      <Navbar />
      <LandingPage />
      <NobelPrizeWinners />
    </section>
  );
}

export default App;
