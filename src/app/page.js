import Home1 from "./components/Home1";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection1";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Home2 from "./components/Home2";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-[#121212] overflow-hidden">
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

      <Navbar />
      <div className="container mt-10 mx-auto px-12 py-4 relative z-10">
        <Home1 />
        <Home2 />
        {/* <AchievementsSection /> */}
      </div>
      <Footer />
    </main>
  );
}
