import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/HeroSection";
import About from "./components/About/About";
import ArticleSection from "./components/ArcticleSection/ArticleSection";
import SubscriptionForm from "./components/Form/Form";
import Footer from './components/Footer/Footer';


export default function Home() {
  return (
    <main className="landing">
      <Navbar />
      <Hero />
      <ArticleSection />
      <About />
      <SubscriptionForm />
      <Footer />
    </main>
  );
}
