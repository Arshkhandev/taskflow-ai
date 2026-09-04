import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import HeroPreview from "@/components/landing/HeroPreview";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import AISection from "@/components/landing/AISection";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-(--cream)">
      <Navbar />

      <Hero />

      <div className="-mt-10 sm:-mt-14">
        <HeroPreview />
      </div>

      <div className="-mt-6 sm:-mt-8">
        <Features />
      </div>

      <div className="-mt-8 sm:-mt-10">
        <HowItWorks />
      </div>

      <div className="-mt-8 sm:-mt-10">
        <AISection />
      </div>

      <div className="-mt-8 sm:-mt-10">
        <CTA />
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
}