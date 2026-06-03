const experiences = [
  {
    company: "Tradesposter",
    role: "Front-End React Developer",
    period: "Jan 2023 - Present",
    description:
      "Building scalable React applications, reusable components, API integrations, and responsive user interfaces for an Australian client.",
    achievements: [
      "Developed production-ready React applications",
      "Integrated REST APIs and optimized data fetching",
      "Collaborated with international stakeholders",
      "Built reusable and maintainable UI components",
    ],
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Axios"],
  },

  {
    company: "Iyrix Technologies",
    role: "Software Engineer",
    period: "Jun 2021 - Dec 2022",
    description:
      "Developed responsive websites and client-facing applications while collaborating closely with UI/UX designers.",
    achievements: [
      "Converted Figma designs into responsive interfaces",
      "Built reusable UI components",
      "Worked on multiple client projects",
      "Improved website performance and responsiveness",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "SEO",],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-28 overflow-hidden"
    >
      {/* Glow */}

      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-blue-500/10 blur-[180px]" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="text-purple-400 font-medium">
            EXPERIENCE
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">

            My Professional

            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mt-2">
              Journey
            </span>

          </h2>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Center Line */}

          <div className="hidden md:block absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-purple-500 to-blue-500" />

          {experiences.map((exp, index) => (

            <div
              key={exp.company}
              className={`relative mb-16 flex ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >

              {/* Dot */}

              <div
                className="
                  hidden
                  md:block
                  absolute
                  left-1/2
                  top-10
                  -translate-x-1/2
                  w-5
                  h-5
                  rounded-full
                  bg-gradient-to-r
                  from-purple-500
                  to-blue-500
                  border-4
                  border-[#050816]
                "
              />

              {/* Card */}

              <div
                className="
                  w-full
                  md:w-[45%]
                  bg-slate-900/60
                  backdrop-blur-xl
                  border
                  border-white/5
                  rounded-3xl
                  p-8
                  hover:border-purple-500/20
                  transition-all
                  duration-300
                "
              >

                <span className="text-purple-400 text-sm">
                  {exp.period}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {exp.company}
                </h3>

                <h4 className="text-blue-400 mt-2">
                  {exp.role}
                </h4>

                <p className="text-slate-400 mt-5 leading-7">
                  {exp.description}
                </p>

                {/* Achievements */}

                <div className="mt-6">

                  <h5 className="font-semibold mb-3">
                    Highlights
                  </h5>

                  <ul className="space-y-2 text-slate-400">

                    {exp.achievements.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2"
                      >
                        <span className="text-purple-400">
                          •
                        </span>

                        {item}
                      </li>
                    ))}

                  </ul>

                </div>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-3 mt-6">

                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3
                        py-2
                        rounded-full
                        bg-slate-800
                        border
                        border-white/5
                        text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;