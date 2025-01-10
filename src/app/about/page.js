"use client";
import AboutSection1 from "../components/AboutSection1";
import AboutSection2 from "../components/AboutSection2";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Skillset from "../components/Skillset";

export default function About() {
  return (
    <main className="relative flex min-h-screen flex-col bg-[#121212] overflow-hidden">
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

      <Navbar />
      <section className="container mx-auto px-12 py-4 relative z-10">
        <div>
          <AboutSection1 />
          <Education />
          {/* <AboutSection2 /> */}
          <Skillset />
        </div>
      </section>
      <Footer />
    </main>
  );
}
