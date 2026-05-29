import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WorkShowcase from "@/components/sections/WorkShowcase";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/ui/Preloader";

export default function Home() {
  return (
    <>
      <Preloader />
      <Hero />
      <Services />
      <WorkShowcase />
      <About />
      <Process />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
