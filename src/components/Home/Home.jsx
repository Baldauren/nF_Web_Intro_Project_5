import Promo from "../Promo/Promo";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Project from "../Project/Project";
import Experience from "../Experience/Experience";

function Home() {
  return (
    <>
      <Promo />
      <About />
      <Experience />
      <Project />
      <Contact />
    </>
  );
}

export default Home;
