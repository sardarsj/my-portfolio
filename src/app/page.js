import Home1 from "./components/Home1";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Home2 from "./components/Home2";

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-10 mx-auto px-12 py-4">
        <Home1 />
        <Home2 />
        {/* <AchievementsSection /> */}
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
