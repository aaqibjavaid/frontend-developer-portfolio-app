import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact" aria-label="Contact Aaqib Javaid" className="relative py-28 overflow-hidden">
      {/* Glow Effects */}
      <div aria-hidden="true" className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-purple-500/10 blur-[180px]" />
      <div aria-hidden="true" className="absolute right-0 top-0 w-[500px] h-[500px] bg-blue-500/10 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-purple-400 font-medium uppercase tracking-widest text-sm">Contact</p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Let's Build Something
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mt-2">
              Amazing Together
            </span>
          </h2>
        </div>

        <div className="gap-12">
          <div>
            <h3 className="text-3xl font-bold">
              Available For Remote Opportunities
            </h3>

            <p className="text-slate-400 mt-6 leading-8">
              I'm currently open to Frontend Developer, React Developer, and
              Remote opportunities. If you're looking for someone who can build
              modern, scalable, and responsive web applications, I'd love to
              connect.
            </p>

            {/* Contact Cards */}
            <address className="mt-10 space-y-4 not-italic">
              <a
                href="mailto:developeraaqibjavaid@gmail.com"
                aria-label="Send email to developeraaqibjavaid@gmail.com"
                className="flex items-center gap-4 bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-2xl p-5 hover:border-purple-500/20 transition"
              >
                <MdEmail size={24} aria-hidden="true" className="text-purple-400" />
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <p>developeraaqibjavaid@gmail.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/aaqib-javaid"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Aaqib Javaid on LinkedIn"
                className="flex items-center gap-4 bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-2xl p-5 hover:border-purple-500/20 transition"
              >
                <FaLinkedin size={24} aria-hidden="true" className="text-blue-400" />
                <div>
                  <p className="text-slate-400 text-sm">LinkedIn</p>
                  <p>Connect With Me</p>
                </div>
              </a>

              <a
                href="https://wa.me/923453434382"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Aaqib Javaid on WhatsApp"
                className="flex items-center gap-4 bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-2xl p-5 hover:border-purple-500/20 transition"
              >
                <FaWhatsapp size={24} aria-hidden="true" className="text-green-400" />
                <div>
                  <p className="text-slate-400 text-sm">WhatsApp</p>
                  <p>Quick Response</p>
                </div>
              </a>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
