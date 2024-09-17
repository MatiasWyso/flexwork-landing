import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/HeroSection";
import ArticleSection from "./components/ArcticleSection/ArticleSection";
import Info from "./components/Info/Info";
import Footer from "./components/Footer/Footer";
import Suscription from "./components/Suscription/Suscription";
import Phrase from "./components/Atoms/Phrase/Phrase";
import "./page.scss";

export default function Home() {
  return (
    <main className="landing">
      <Navbar />
      <Hero />

      <hr className="hr__landing" />

      <ArticleSection />
      <Suscription />
      <Info />
      <Phrase />
      <Footer />
    </main>
  );
}
