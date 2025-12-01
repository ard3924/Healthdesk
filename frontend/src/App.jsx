import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryStrip from "./components/CategoryStrip";
import BestSellers from "./components/BestSellers";
import TrustBanner from "./components/TrustBanner";
import SmartHealth from "./components/SmartHealth";
import CharityBanner from "./components/CharityBanner";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoryStrip />
      <BestSellers/>
      <TrustBanner/>
      <SmartHealth/>
      <CharityBanner/>
      <Testimonials/>
      <Footer/>
    </>
  );
}
