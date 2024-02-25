import "../styles/faqs.scss";
import Collapse from "./Collapse";

export default function Faqs() {
  const faqsList = [
    {
      title: "What platforms will Echoes of Tomorrow be playable on?",
      content:
        "Echoes of Tomorrow will be available on PC, PlayStation, and Xbox platforms.",
    },
    {
      title: "When will Echoes of Tomorrow be released?",
      content:
        "We plan on release Echoes of Tomorrow in first semester of 2025",
    },
    {
      title: "How does player choice affect the outcome of the game?",
      content:
        "Player choice plays a significant role in Echoes of Tomorrow, influencing the direction of the narrative and the fate of characters and factions within the game world. Your decisions will have consequences that shape the story in meaningful ways.",
    },
    {
      title: "Will Echoes of Tomorrow feature multiplayer or co-op modes?",
      content:
        "Yes, we plan to provide a multiplayer experience! Team up with other players to defeat higher-ranked enemies, or simply join matchmaking and play classic modes such as deathmatch or free-for-all!",
    },
    {
      title: "Is there a demo or beta version available to try?",
      content:
        "The beta is currently live ! Get your access with the link bellow !",
    },
  ];

  return (
    <section id="faqs">
      <h2 className="title">FAQ'S</h2>
      <div className="pre-text">
        You got questions about Echoes of Tomorrow, and we got answers.
      </div>
      {faqsList.map((list, index) => (
        <div className="question">
          <Collapse key={index} title={list.title} text={list.content} />
          <hr key={index} />
        </div>
      ))}
    </section>
  );
}
