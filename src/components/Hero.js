import "../styles/hero.scss";
import main from "../assets/images/mainchar1v2.png";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero">
        <div className="main">
          <img src={main} alt="main" />
        </div>
        <div className="text">
          <h2 className="title">Echoes of Tomorrow</h2>
          <p className="subtext">
            Embark on a gripping journey in Echoes of Tomorrow
          </p>
          <button className="enroll">Play Now</button>
        </div>
      </div>
    </section>
  );
}
