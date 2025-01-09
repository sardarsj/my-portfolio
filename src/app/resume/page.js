"use client";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { MdOutlineFileDownload } from "react-icons/md";
const project = () => {
  return (
    <>
      <main className="relative flex min-h-screen flex-col bg-[#121212] overflow-hidden">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

        <Navbar />
        <section className="container mt-10 mx-auto px-12 py-4 relative z-10">
          <div className="flex justify-center mb-4">
            <a
              href="/resume.pdf"
              download="resume.pdf"
              className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
            >
              <div className="flex flex-row items-center justify-center gap-2">
                <MdOutlineFileDownload />
                <span>Download Resume</span>
              </div>
            </a>
          </div>
          <div>
            <img src="/resume.png" alt="resume" className="w-full mb-4" />
          </div>
          <div className="flex justify-center mb-4">
            <a
              href="/resume.pdf"
              download="resume.pdf"
              className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
            >
              <div className="flex flex-row items-center justify-center gap-2">
                <MdOutlineFileDownload />
                <span>Download Resume</span>
              </div>
            </a>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default project;
