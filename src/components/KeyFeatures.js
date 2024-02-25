import "../styles/keyfeatures.scss";
import faction from "../assets/images/blksoldiers1-card.png";
import choices from "../assets/images/whsoldiers1-card.jpg";
import custom from "../assets/images/whsol6-card.png";
import Card from "./Card";

const features = [
  {
    title: "Factions",
    text: "Navigate a complex web of alliances and rivalries as you interact with multiple factions vying for control. Choose your allegiances carefully, as your decisions will shape the course of the conflict and determine the fate of those caught in the crossfire.",
    image: faction,
  },
  {
    title: "Choices",
    text: "Experience a branching narrative where your decisions have far-reaching repercussions. Will you uphold your principles and fight for what's right, or succumb to the temptations of power and self-interest? The choice is yours, but be prepared to face the consequences of your actions.",
    image: choices,
  },
  {
    title: "Customization",
    text: "Personalize your experience through a robust customization system that allows you to tailor your character's appearance, weapons, and abilities to suit your playstyle. Whether you prefer stealthy infiltration or all-out firepower, the battlefield is yours to command.",
    image: custom,
  },
];

export default function KeyFeatures() {
  return (
    <section id="features">
      <h2 className="title">Features</h2>
      <div className="container">
        {features.map((feature, index) => (
          <Card
            key={index}
            title={feature.title}
            text={feature.text}
            image={feature.image}
          />
        ))}
      </div>
    </section>
  );
}
