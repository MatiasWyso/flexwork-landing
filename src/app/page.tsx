
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/About/InfoCard/Card";
import Hero from "./components/Hero/HeroSection";
import Card2 from "./components/Card2/Card2";

export default function Home() {
  return (
    <main className="wrap__app">
       <Navbar />
       <Hero />
       <Card2 />
       

    </main>
  );
}
