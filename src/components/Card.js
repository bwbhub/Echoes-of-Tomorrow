import "../styles/card.scss";
import { useState } from "react";

export default function Card({ title, text, image }) {
  const [open, setOpen] = useState(false);
  const handleMore = () => setOpen(!open);
  return (
    <div className="card">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className={`text ${open ? "active" : ""}`}>
        <h3 className="title-card"> {title} </h3>
        <button className="enroll" onClick={handleMore}>
          Read More
        </button>
        <p className={`subtext ${open ? "open" : "hidden"}`}> {text} </p>
      </div>
    </div>
  );
}
