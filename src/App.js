import "./css/reset.css";
import "./css/App.css";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import GetStarted from "./Components/GetStarted";
import LoanCalculator from "./Components/LoanCalculator";
import Footer from "./Components/Footer";
import SocialVerseWidget from "./Components/SocialVerseWidget";
import WhyUseUs from "./Components/WhyUseUs";
import React from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <WhyUseUs />
      <SocialVerseWidget />
      <GetStarted />
      <LoanCalculator />
      <Footer />
    </div>
  );
}

export default App;
