
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/HeroSection";
import ArticleSection from "./components/ArcticleSection/ArticleSection";
import Info from "./components/Info/Info";
import Footer from "./components/Footer/Footer"; 
import "./page.scss";
import Suscription from "./components/Suscription/Suscription";


export default function Home() {

 
  return (
    <main className="landing">
      

      <Navbar />
      <Hero />

      <hr className="hr__landing"/> 

      

      <ArticleSection />
      <Suscription />
      <Info />
      <Footer /> 
    </main>
  );
}
