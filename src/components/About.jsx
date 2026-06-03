import {
  FaCode,
  FaLaptopCode,
  FaUsers,
  FaRocket,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaLaptopCode />,
    value: "3+",
    label: "Years Experience",
  },
  {
    icon: <FaCode />,
    value: "20+",
    label: "Projects Built",
  },
  {
    icon: <FaUsers />,
    value: "International",
    label: "Clients",
  },
  {
    icon: <FaRocket />,
    value: "Remote",
    label: "Ready",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute left-0 top-20 w-96 h-96 bg-blue-500/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <span className="text-purple-400 font-medium">
              ABOUT ME
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">

              Crafting Digital
              <br />

              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Experiences
              </span>

              <br />

              That Make Impact

            </h2>

            <p className="text-slate-400 mt-8 leading-8 max-w-xl">
              I'm a Frontend Developer specializing in
              React.js, JavaScript, and Tailwind CSS.

              Over the last 3+ years, I've built
              responsive web applications, reusable
              component systems, and modern user
              interfaces for businesses and international
              clients.

              I enjoy transforming ideas into elegant,
              scalable, and user-friendly digital
              experiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <span className="px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10">
                React.js
              </span>

              <span className="px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10">
                JavaScript
              </span>

              <span className="px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10">
                Tailwind CSS
              </span>

              <span className="px-4 py-2 rounded-full border border-green-500/20 bg-green-500/10">
                REST APIs
              </span>

            </div>

          </div>

          {/* RIGHT */}

          <div className="grid sm:grid-cols-2 gap-6">

            {stats.map((item, index) => (
              <div
                key={index}
                className="
                  bg-slate-900/60
                  backdrop-blur-xl
                  border
                  border-white/5
                  rounded-3xl
                  p-8
                  hover:border-purple-500/20
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >
                <div className="text-3xl text-purple-400 mb-4">
                  {item.icon}
                </div>

                <h3 className="text-3xl font-bold">
                  {item.value}
                </h3>

                <p className="text-slate-400 mt-2">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;