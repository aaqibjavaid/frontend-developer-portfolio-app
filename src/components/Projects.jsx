import {
  // FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
 
  {
    title: "Freddy's Moving Services",
    description:
      "Business website developed from Figma designs with responsive layouts, SEO-friendly structure and optimized user experience.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",

    technologies: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "JavaScript",
    ],

    
    live: "https://freddysmovingservice.com/",
  },

  {
    title: "Iyrix Tech",
    description:
      "Collection of client-facing websites and web applications built during my tenure as a Software Engineer.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",

    technologies: [
      "JavaScript",
      "Bootstrap",
      "REST APIs",
    ],

    
    live: "https://iyrix.com/",
  },
   {
    title: "Tradesposter",
    description:
      "A contractor marketplace platform built using React.js. Features dashboards, API integrations, reusable components, authentication flows and responsive design.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",

    technologies: [
      "React.js",
      "Tailwind CSS",
      "Axios",
    ],

  
    live: "https://dev.tradesposter.com/",
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-28 relative overflow-hidden"
    >
      {/* Glow */}

      <div className="absolute right-0 top-20 w-[500px] h-[500px] bg-purple-500/10 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="text-purple-400 font-medium">
            PORTFOLIO
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">

            Featured

            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mt-2">
              Projects
            </span>

          </h2>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="
                group
                bg-slate-900/60
                backdrop-blur-xl
                border
                border-white/5
                rounded-3xl
                overflow-hidden
                hover:border-purple-500/20
                hover:-translate-y-2
                transition-all
                duration-500
              "
            >
              {/* Image */}

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-56
                    w-full
                    object-cover
                    group-hover:scale-110
                    transition
                    duration-700
                  "
                />

              </div>

              {/* Content */}

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-slate-400 mt-4 leading-7">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-2 mt-5">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3
                        py-2
                        rounded-full
                        bg-slate-800
                        text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Buttons */}

                <div className="flex gap-3 mt-6">

                  {/* <a
                    href={project.github}
                    target="_blank"
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      py-3
                      rounded-xl
                      border
                      border-white/10
                      hover:border-purple-500
                      transition
                    "
                  >
                    <FaGithub />
                    GitHub
                  </a> */}

                  <a
                    href={project.live}
                    target="_blank"
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      py-3
                      rounded-xl
                      bg-gradient-to-r
                      from-purple-600
                      to-blue-600
                    "
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;