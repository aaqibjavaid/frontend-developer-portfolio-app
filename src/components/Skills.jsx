import {
  FaReact,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiReactquery,
  SiAxios,
  SiMongodb,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      {
        name: "React.js",
        level: 90,
        icon: <FaReact />,
      },
      {
        name: "JavaScript",
        level: 85,
        icon: <SiJavascript />,
      },
      {
        name: "Tailwind CSS",
        level: 90,
        icon: <SiTailwindcss />,
      },
      {
        name: "Next.js",
        level: 75,
        icon: <SiNextdotjs />,
      },
    ],
  },

  {
    title: "Libraries & Tools",
    skills: [
      {
        name: "React Query",
        level: 80,
        icon: <SiReactquery />,
      },
      {
        name: "Axios",
        level: 90,
        icon: <SiAxios />,
      },
      {
        name: "Git",
        level: 85,
        icon: <FaGitAlt />,
      },
      {
        name: "TypeScript",
        level: 65,
        icon: <SiTypescript />,
      },
    ],
  },

  {
    title: "Backend Familiarity",
    skills: [
      {
        name: "Node.js",
        level: 65,
        icon: <FaNodeJs />,
      },
      {
        name: "MongoDB",
        level: 60,
        icon: <SiMongodb />,
      },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-28 relative overflow-hidden"
    >
      {/* Glow */}

      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-purple-500/10 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="text-purple-400 font-medium">
            MY SKILLS
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">

            Technologies I Use
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mt-2">
              To Build Modern Products
            </span>

          </h2>

        </div>

        {/* Skill Groups */}

        <div className="grid lg:grid-cols-3 gap-8">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="
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
              <h3 className="text-2xl font-semibold mb-8">
                {group.title}
              </h3>

              <div className="space-y-6">

                {group.skills.map((skill) => (
                  <div key={skill.name}>

                    <div className="flex justify-between mb-2">

                      <div className="flex items-center gap-3">

                        <span className="text-xl text-purple-400">
                          {skill.icon}
                        </span>

                        <span>
                          {skill.name}
                        </span>

                      </div>

                      <span className="text-slate-400">
                        {skill.level}%
                      </span>

                    </div>

                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">

                      <div
                        className="
                          h-full
                          rounded-full
                          bg-gradient-to-r
                          from-purple-500
                          to-blue-500
                        "
                        style={{
                          width: `${skill.level}%`,
                        }}
                      />

                    </div>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;