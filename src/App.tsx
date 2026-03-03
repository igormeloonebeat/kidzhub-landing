import { useEffect } from "react";
import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { AppCards } from "./sections/AppCards";
import { FeaturesKidzCare } from "./sections/FeaturesKidzCare";
import { FeaturesKidzEdu } from "./sections/FeaturesKidzEdu";
import { Testimonials } from "./sections/Testimonials";
import { Pricing } from "./sections/Pricing";
import { FAQ } from "./sections/FAQ";
import { Footer } from "./sections/Footer";

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div className="animate-on-scroll"><AppCards /></div>
        <div className="animate-on-scroll"><FeaturesKidzCare /></div>
        <div className="animate-on-scroll"><FeaturesKidzEdu /></div>
        <div className="animate-on-scroll"><Testimonials /></div>
        <div className="animate-on-scroll"><Pricing /></div>
        <div className="animate-on-scroll"><FAQ /></div>
      </main>
      <Footer />
    </div>
  );
}
