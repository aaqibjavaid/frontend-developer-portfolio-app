import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import sketch from "../assets/aaqib-sketch.png";

const Hero = () => {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Glow */}
      <div aria-hidden="true" className="absolute top-0 right-0 w-[700px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full" />
      <div aria-hidden="true" className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/20 blur-[180px] rounded-full" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 mb-8">
              <span aria-hidden="true" className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm">Available For Remote Work</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Hi, I'm
              <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Aaqib Javaid
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-slate-300 mt-6">
              Frontend Developer • React.js Developer
            </h2>

            <p className="text-slate-400 leading-8 mt-6 max-w-xl">
              Frontend Developer with 3+ years of experience building modern,
              responsive, and scalable web applications using React.js,
              JavaScript, Tailwind CSS and REST APIs.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#projects"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 font-medium hover:scale-105 transition duration-300 cursor-pointer"
              >
                View My Work
              </a>

              <a
                href="/Frontend Developer - Aaqib Javaid.pdf"
                download
                aria-label="Download Aaqib Javaid's resume PDF"
                className="px-8 py-4 rounded-xl border border-slate-700 hover:border-purple-500 transition duration-300 cursor-pointer"
              >
                Download Resume
              </a>
            </div>

            {/* SOCIALS */}
            <div className="flex items-center gap-4 mt-10">
              <a
                href="https://github.com/aaqibjavaid"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Aaqib Javaid's GitHub profile"
                className="hover:cursor-pointer w-12 h-12 rounded-xl border border-slate-700 flex items-center justify-center hover:border-purple-500 hover:text-purple-400 transition"
              >
                <FaGithub size={22} aria-hidden="true" />
              </a>

              <a
                href="https://linkedin.com/in/aaqib-javaid"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Aaqib Javaid's LinkedIn profile"
                className="w-12 h-12 rounded-xl border border-slate-700 flex items-center justify-center hover:border-purple-500 hover:text-purple-400 transition"
              >
                <FaLinkedin size={22} aria-hidden="true" />
              </a>

              <a
                href="mailto:developeraaqibjavaid@gmail.com"
                aria-label="Send email to Aaqib Javaid"
                className="w-12 h-12 rounded-xl border border-slate-700 flex items-center justify-center hover:border-purple-500 hover:text-purple-400 transition"
              >
                <MdEmail size={22} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center z-20">
            <div aria-hidden="true" className="absolute w-[450px] h-[450px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-[100px] opacity-30" />

            <img
              src={sketch}
              alt="Aaqib Javaid - Frontend Developer and React.js Expert"
              fetchpriority="high"
              className="relative z-10 w-full max-w-md"
              width="448"
              height="448"
            />

            {/* Floating tech labels - decorative */}
            <div aria-hidden="true" className="absolute top-16 left-0 bg-slate-900/90 backdrop-blur-xl border border-purple-500/20 rounded-2xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <FaReact className="text-cyan-400" />
                React.js
              </div>
            </div>

            <div aria-hidden="true" className="absolute top-40 right-0 bg-slate-900/90 backdrop-blur-xl border border-yellow-500/20 rounded-2xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <SiJavascript className="text-yellow-400" />
                JavaScript
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute bottom-20 left-4 md:left-12 lg:left-20 bg-slate-900/90 backdrop-blur-xl border border-cyan-500/20 rounded-2xl px-4 py-3 shadow-xl z-20"
            >
              <div className="flex items-center gap-2">
                <SiTailwindcss className="text-cyan-400" />
                Tailwind CSS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
