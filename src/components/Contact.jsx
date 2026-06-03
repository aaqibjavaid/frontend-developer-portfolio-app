import {
  //   FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { MdEmail } from "react-icons/md";




const Contact = () => {
  const form = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Message sent successfully 🚀");

      form.current.reset();
    } catch (error) {
      console.error(error);

      toast.error("Failed to send message ❌");
    }
  };
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Glow Effects */}

      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-purple-500/10 blur-[180px]" />
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-blue-500/10 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center mb-20">
          <span className="text-purple-400 font-medium">CONTACT</span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Let's Build Something
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mt-2">
              Amazing Together
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side */}

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

            <div className="mt-10 space-y-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=developeraaqibjavaid@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
    flex items-center gap-4
    bg-slate-900/60
    backdrop-blur-xl
    border border-white/5
    rounded-2xl
    p-5
    hover:border-purple-500/20
    transition
  "
              >
                <MdEmail size={24} className="text-purple-400" />

                <div>
                  <p className="text-slate-400 text-sm">Email</p>

                  <p>developeraaqibjavaid@gmail.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/aaqib-javaid"
                target="_blank"
                className="
                  flex items-center gap-4
                  bg-slate-900/60
                  backdrop-blur-xl
                  border border-white/5
                  rounded-2xl
                  p-5
                  hover:border-purple-500/20
                  transition
                "
              >
                <FaLinkedin size={24} className="text-blue-400" />

                <div>
                  <p className="text-slate-400 text-sm">LinkedIn</p>

                  <p>Connect With Me</p>
                </div>
              </a>

              <a
                href="https://wa.me/923453434382"
                target="_blank"
                className="
                  flex items-center gap-4
                  bg-slate-900/60
                  backdrop-blur-xl
                  border border-white/5
                  rounded-2xl
                  p-5
                  hover:border-purple-500/20
                  transition
                "
              >
                <FaWhatsapp size={24} className="text-green-400" />

                <div>
                  <p className="text-slate-400 text-sm">WhatsApp</p>

                  <p>Quick Response</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side Form */}

          <div
            className="
              bg-slate-900/60
              backdrop-blur-xl
              border border-white/5
              rounded-3xl
              p-8
            "
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="
                    w-full
                    bg-slate-800
                    rounded-xl
                    px-4
                    py-4
                    outline-none
                    border border-transparent
                    focus:border-purple-500
                  "
                />
              </div>

              <div>
                <label className="block mb-2">Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="
                    w-full
                    bg-slate-800
                    rounded-xl
                    px-4
                    py-4
                    outline-none
                    border border-transparent
                    focus:border-purple-500
                  "
                />
              </div>

              <div>
                <label className="block mb-2">Message</label>

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                  required
                  className="
                    w-full
                    bg-slate-800
                    rounded-xl
                    px-4
                    py-4
                    outline-none
                    border border-transparent
                    focus:border-purple-500
                  "
                />
              </div>
              <button
                type="submit"
                className="
    w-full
    py-4
    rounded-xl
    font-medium
    bg-gradient-to-r
    from-purple-600
    to-blue-600 cursor-pointer
  "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
