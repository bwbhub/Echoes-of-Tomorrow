import "./styles/app.scss";
import Hero from "./components/Hero";
import About from "./components/About";
import KeyFeatures from "./components/KeyFeatures";
import NewsLetter from "./components/Newsleter";
import Faqs from "./components/Faqs";

export default function Home() {
  return (
    <div id="home">
      <Hero />
      <About />
      <KeyFeatures />
      <Faqs />
      <NewsLetter />
    </div>
  );
}
