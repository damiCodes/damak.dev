import Hero from "../components/hero";
import About from "../components/about";
import Arsenal from "../components/arsenal";
import Experience from "../components/experience";
import Playground from "../components/playground";
import Contact from "../components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Arsenal />
        <Experience />
        {/* <Playground /> */}
        <Contact />
      </main>
    </>
  );
}
