import React from "react";
import "./app.scss";
import LandingPage from "./shared/components/LandingPage";
import { Navbar } from "./shared/components/Navbar";
import Demo from "./views/components/Demo";
import MultiNobelWinner from "./views/components/MultiNobelWinners";
import NobelPrizeWinners from "./views/components/NobelPrizeWinners";

function App() {
  return (
    <section className="App">
      <Navbar />
      <LandingPage />
      <MultiNobelWinner />
      <NobelPrizeWinners />
    </section>
  );
}

export default App;
