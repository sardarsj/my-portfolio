"use client";
import AboutSection1 from "../components/AboutSection1";
import AboutSection2 from "../components/AboutSection2";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <main className="relative flex min-h-screen flex-col bg-[#121212] overflow-hidden">
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

      <Navbar />
      <section className="container mt-10 mx-auto px-12 py-4 relative z-10">
        <div>
          <AboutSection1 />
          <AboutSection2 />
        </div>
      </section>
      <Footer />
    </main>
  );
}
