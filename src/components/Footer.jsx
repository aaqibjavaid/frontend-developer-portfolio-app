import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>

            <h3 className="font-bold text-xl">
              Aaqib Javaid
            </h3>

            <p className="text-slate-400 mt-2">
              Frontend Developer | React Developer
            </p>

          </div>

          <div className="flex gap-4">

            <a
              href="https://github.com/aaqibjavaid"
              target="_blank"
              className="text-xl hover:text-purple-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/aaqib-javaid"
              target="_blank"
              className="text-xl hover:text-purple-400 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        <div className="mt-8 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Aaqib Javaid.
          All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;