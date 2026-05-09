export default function Portfolio() {
  const skills = [
    "C",
    "Java",
    "Python",
    "HTML",
    "CSS",
    "React.js",
    "DBMS",
    "Git",
  ];

  const projects = [
    {
      title: "Yoga Posture Detection ML Based",
      tech: "Python • OpenCV • TensorFlow",
      desc: "Developed a basic yoga posture detection system using computer vision and machine learning concepts.",
      github: "https://github.com/charankumarj23/yoga-pose-detection",
    },
    {
      title: "Water Supply Notification System",
      tech: "React.js • Node.js • MongoDB",
      desc: "Created a web application for water supply updates with simple Admin and User dashboards.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* HERO SECTION */}
      <section className="text-center py-24 px-6 border-b border-gray-800">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Charan Kumar J
        </h1>

        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-8">
          Computer Science student interested in software development,
          web technologies, and learning modern programming concepts
          through projects and internships.
        </p>

        <div className="flex justify-center gap-5 mt-10 flex-wrap">
          <a
            href="https://github.com/charankumarj23"
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-xl font-medium"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/charankumarj231005"
            target="_blank"
            className="border border-gray-600 px-6 py-3 rounded-xl"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">
          About Me
        </h2>

        <p className="text-gray-300 leading-8 text-lg">
          I am currently pursuing Integrated M.Tech Computer Science Engineering.
          I enjoy learning programming, web development, and building practical
          applications. I have completed short-term internships in Web Development
          and UI/UX Design, where I learned basics of responsive web pages,
          dashboards, and user interface design.
        </p>
      </section>

      {/* SKILLS */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-10">
          Technical Skills
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-900 border border-gray-700 px-5 py-3 rounded-xl"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* INTERNSHIPS */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">
          Internships
        </h2>

        <div className="space-y-8">

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-semibold">
              Web Development Intern
            </h3>

            <p className="text-gray-400 mt-2">
              Mist Software Solutions – Coimbatore
            </p>

            <p className="text-gray-300 mt-4 leading-7">
              Learned basics of responsive web development using HTML,
              CSS, and JavaScript. Worked on improving simple UI layouts
              and understanding development workflows.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-semibold">
              UI / UX Intern
            </h3>

            <p className="text-gray-400 mt-2">
              Gateway Software Solutions – Coimbatore
            </p>

            <p className="text-gray-300 mt-4 leading-7">
              Learned basics of UI/UX design using Figma and worked on
              simple dashboard designs and interactive prototypes.
            </p>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8"
            >
              <p className="text-gray-400 text-sm mb-3">
                {project.tech}
              </p>

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-7 mb-6">
                {project.desc}
              </p>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="bg-white text-black px-5 py-3 rounded-xl font-medium"
                >
                  View GitHub
                </a>
              )}
            </div>
          ))}

        </div>
      </section>

      {/* CONTACT */}
      <section className="text-center py-20 border-t border-gray-800 px-6">
        <h2 className="text-3xl font-bold mb-6">
          Contact
        </h2>

        <div className="space-y-3 text-gray-300 text-lg">
          <p>📍 Salem, Tamil Nadu</p>
          <p>📧 djcharankumar2305@gmail.com</p>
          <p>📱 9363667351</p>
        </div>
      </section>

    </div>
  );
}