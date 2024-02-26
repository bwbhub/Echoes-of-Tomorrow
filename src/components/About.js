import "../styles/about.scss";
import { useState } from "react";

export default function About() {
  const [open, setOpen] = useState(false);
  const handleMore = () => setOpen(!open);

  return (
    <section id="about">
      <div className="about">
        <h2 className="title">About</h2>
        <p className="subtext">
          In Echoes of Tomorrow, players are thrust into a world ravaged by war,
          where conflicting ideologies have torn society apart. As a soldier
          named Alex Turner, you once proudly served a powerful military
          corporation, believing in the righteousness of your cause. Clad in
          advanced armor and armed with cutting-edge weaponry, you fought
          alongside your comrades, confident that you were on the side of
          justice.
        </p>
        <button className="enroll" onClick={handleMore}>
          Read More
        </button>
        <p className={`subtext hidden ${open ? "open" : ""}`}>
          However, everything changed when you encountered a group of rebels
          fighting to defend their homeland from the corporation's ruthless
          expansion. Witnessing the devastation wrought upon innocent civilians
          and the atrocities committed in the name of profit, you were forced to
          confront the harsh realities of war and the lies perpetuated by those
          in power.
          <br />
          <br />
          Haunted by the memories of the lives lost and the suffering you
          witnessed, you made the daring decision to desert your unit and set
          out on a path of redemption. With each step, you journey deeper into
          the heart of the conflict, seeking to right the wrongs of a world
          consumed by greed and betrayal.
          <br />
          <br />
          Along the way, you encounter a diverse cast of characters, each with
          their own motivations and agendas. From fellow deserters seeking
          refuge to civilians struggling to survive amidst the chaos, your
          choices will determine who you ally with and who you oppose.
          <br />
          <br />
          As you navigate the treacherous landscape of war-torn cities and
          barren wastelands, you are faced with moral dilemmas that test the
          very essence of your being. Will you stand firm in your convictions
          and fight for what's right, even in the face of overwhelming odds? Or
          will you succumb to the temptations of power and self-interest,
          sacrificing your principles for personal gain?
          <br />
          <br />
          In "Echoes of Tomorrow," the fate of the future hangs in the balance,
          and only you have the power to shape its course. Will you be
          remembered as a hero who helped usher in a new era of peace and
          prosperity, or will you become just another echo of the past, lost to
          the annals of history?
        </p>
      </div>
    </section>
  );
}
