import Navbar from "./Navbar";
import '../style/hero.css';
export default function Hero() {
  return (
    <section id='hero' className="hero-container">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="hero-content">
        <div className="hero-image">
          <img src="/pick.png" alt="Shanza Khan" />
        </div>
        <div className="hero-text">
          <p>I'm</p>
          <p>SHANZA</p>
          <p>KHAN</p>
        </div>
      </div>
    </section>
  );
}


