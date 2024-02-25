import "../styles/header.scss";

export default function Header() {
  return (
    <header>
      <h1
        onClick={() => {
          const hero = document.getElementById("hero");
          hero?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        Echoes of Tomorrow
      </h1>
      <nav>
        <ul>
          <li
            onClick={() => {
              const hero = document.getElementById("hero");
              hero?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              const about = document.getElementById("about");
              about?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              const features = document.getElementById("features");
              features?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Features
          </li>
          <li
            onClick={() => {
              const faqs = document.getElementById("faqs");
              faqs?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            FAQ's
          </li>
          <li
            onClick={() => {
              const newsletter = document.getElementById("newsletter");
              newsletter?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Newsletter
          </li>
        </ul>
      </nav>
      <button
        className="enroll"
        onClick={() => {
          const download = document.getElementById("download");
          download?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        Play Now
      </button>
    </header>
  );
}
