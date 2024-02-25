import "../styles/newsletter.scss";
import bar from "../assets/images/bar1.jpg";

export default function NewsLetter() {
  return (
    <section id="newsletter">
      <div className="container">
        <img src={bar} alt="bar" />
        <form>
          <label htmlFor="name">Name</label>
          <input name="name" type="text" id="name" required />
          <label htmlFor="email">Email</label>
          <input name="email" type="email" id="email" required />
        </form>
      </div>
    </section>
  );
}
