import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Hero,
  About,
  Services,
  Packages,
  Process,
  Terms,
  Contact,
} from "@/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Packages />
        <Process />
        <Terms />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
