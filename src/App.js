import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Emotions from "./components/Emotions";
import Meet from "./components/Meet";
import Selfimprovement from "./components/Selfimprovement";
import RateYourSkills from "./components/Rateyourskills";
import Starttest from "./components/Starttest";
import Work from "./components/Work";
import Contact from "./components/Contact";

import "./App.css";


const App = () => (
  <>
    <Navbar />
    <Home />
    <Emotions />
    <Meet />
    <Selfimprovement />
    <RateYourSkills />
    <Starttest />
    <Work />
    <Contact />
  </>
);

export default App;