import "./styles/app.scss";
import Hero from "./components/Hero";
import About from "./components/About";
import KeyFeatures from "./components/KeyFeatures";
import Faqs from "./components/Faqs";
import BetaTest from "./components/BetaTest";

export default function Home() {
  return (
    <div id="home">
      <Hero />
      <About />
      <KeyFeatures />
      <Faqs />
      <BetaTest />
    </div>
  );
}
