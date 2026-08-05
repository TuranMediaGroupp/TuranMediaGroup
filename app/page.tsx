import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import Platforms from "@/components/home/Platforms";
import About from "@/components/home/About";
import Statistics from "@/components/home/Statistics";
import FeaturedReleases from "@/components/home/FeaturedReleases";
import Partnership from "@/components/home/Partnership";
import OAC from "@/components/home/OAC";
import Demo from "@/components/home/Demo";
import Services from "@/components/home/Services";
import Artists from "@/components/home/Artists";
import Contact from "@/components/home/Contact";
import Trusted from "@/components/home/Trusted";
import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Header />

      <Hero />

      <Trusted />

      <Platforms />

      <About />

      <Statistics />

      <FeaturedReleases />

      <Partnership />

      <OAC />

      <Demo />

      <Services />

      <Artists />

      <FAQ />

      <CTA />

      <Contact />

      <Footer />
    </main>
  );
}