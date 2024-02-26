import "../styles/collapse.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Collapse({ title, text }) {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);

  return (
    <div className="container">
      <hr />
      <div className="topbar">
        <h2>{title}</h2>
        {open ? (
          <button className="btn" onClick={handleToggle}>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        ) : (
          <button className="btn" onClick={handleToggle}>
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
        )}
      </div>
      <div className={`bottombar hidden ${open ? "open" : ""}`}>
        <p className="text">{text}</p>
      </div>
    </div>
  );
}
