import "../styles/header.scss";

export default function Header() {
  return (
    <header>
      <h1>Echoes of Tomorrow</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Features</li>
          <li>FAQ's</li>
        </ul>
      </nav>
      <button className="enroll">Play Now</button>
    </header>
  );
}
