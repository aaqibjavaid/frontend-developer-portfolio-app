import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <p className="font-bold text-xl">Aaqib Javaid</p>
            <p className="text-slate-400 mt-2">Frontend Developer | React Developer</p>
          </div>

          <nav aria-label="Social media links">
            <div className="flex gap-4">
              <a
                href="https://github.com/aaqibjavaid"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Aaqib Javaid's GitHub profile"
                className="text-xl hover:text-purple-400 transition"
              >
                <FaGithub aria-hidden="true" />
              </a>

              <a
                href="https://linkedin.com/in/aaqib-javaid"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Aaqib Javaid's LinkedIn profile"
                className="text-xl hover:text-purple-400 transition"
              >
                <FaLinkedin aria-hidden="true" />
              </a>
            </div>
          </nav>

        </div>

        <div className="mt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Aaqib Javaid. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
