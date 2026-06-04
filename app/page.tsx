import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Leadership from "./components/Leadership";
import Stats from "./components/Stats";
import Certifications from "./components/Certifications";
import Minerals from "./components/Minerals";
import Testimonials from "./components/Testimonials";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Global top announcement bar */}
      <TopBar />

      {/* Sticky navbar — offset content by its height */}
      <Navbar />

      {/* Main page content */}
      <main>
        {/* Phase B: Hero */}
        <Hero />

        {/* Phase C: Feature services grid */}
        <Features />

        {/* Phase C: About split section */}
        <About />

        {/* Leadership & Owners Section */}
        <Leadership />

        {/* Phase C: Dark stats counter bar */}
        <Stats />

        {/* Phase C: Certifications & Compliance section */}
        <Certifications />

        {/* Phase C: Minerals product grid */}
        <Minerals />

        {/* Phase C: Client testimonials */}
        <Testimonials />

        {/* Phase C: CTA + contact form */}
        <CtaBanner />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
