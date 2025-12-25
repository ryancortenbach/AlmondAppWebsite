import HeroSection from "../components/home/HeroSection.jsx";
import Navbar from "../components/Navbar.jsx";
import FeaturesGrid from "../components/home/FeaturesSection.jsx";
import HowItWorks from "../components/home/HowItWorks.jsx";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesGrid />
        <HowItWorks />
      </main>
    </>
  );
}
