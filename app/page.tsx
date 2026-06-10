import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Leadership from "./components/Leadership";
import Stats from "./components/Stats";
import Certifications from "./components/Certifications";
import Minerals from "./components/Minerals";
import AmlLogisticsSection from "./components/AmlLogisticsSection";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";
import RevealObserver from "./components/RevealObserver";

export default function Home() {
  return (
    <>
      <RevealObserver />

      <TopBar />
      <Navbar />

      <main>
        <Hero />
        <Features />
        <About />
        <Leadership />
        <Stats />
        <Certifications />
        <Minerals />
        <AmlLogisticsSection />
        <CtaBanner />
      </main>

      <Footer />
    </>
  );
}
