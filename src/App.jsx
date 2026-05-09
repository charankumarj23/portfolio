export default function Portfolio() {

  const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      "C (Basics)",
      "C++ (Basics)",
      "Java (Intermediate)",
      "Python (Intermediate)",
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      "HTML",
      "CSS",
      "React.js",
      "Responsive Web Design",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Android Studio",
    ],
  },
  {
    title: "Core Concepts",
    skills: [
      "OOP",
      "Basics of Data Structures",
      "DBMS",
    ],
  },
];

  const projects = [
    {
      title: "Yoga Posture Detection ML Based",
      tech: "Python • OpenCV • TensorFlow",
      desc: "Developed a basic yoga posture detection system using computer vision and machine learning concepts.",
      github: "https://github.com/charankumarj23/yoga-posture-detection",
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
  className="border border-gray-600 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition focus:outline-none"
>
  GitHub
</a>

          <a
  href="https://www.linkedin.com/in/charankumarj231005"
  target="_blank"
  className="border border-gray-600 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition focus:outline-none"
>
  LinkedIn
</a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="border border-gray-600 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition focus:outline-none"
          >
            Resume
          </a>

        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-8">
          About Me
        </h2>

        <p className="text-gray-300 leading-8 text-lg">
          I am an Integrated M.Tech Computer Science student passionate about
          software development, web technologies, and problem solving.
          I enjoy building practical applications and continuously improving
          my technical skills through projects, internships, and hands-on learning.

          <br /><br />

          I am particularly interested in Full Stack Development, UI/UX Design,
          and beginner-level Machine Learning concepts. I am eager to contribute,
          learn from real-world development environments, and grow as a software engineer.
        </p>

      </section>

      {/* SKILLS */}
      <section className="max-w-5xl mx-auto px-6 py-10">

        <h2 className="text-3xl font-bold mb-10">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
            >

              <h3 className="text-xl font-semibold mb-5">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-gray-700 px-4 py-2 rounded-xl text-gray-300 hover:bg-white hover:text-black transition"
                  >
                    {skill}
                  </span>
                ))}

              </div>

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
  rel="noreferrer"
  className="border border-gray-600 px-5 py-3 rounded-xl hover:bg-white hover:text-black transition"
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
          <p>📧 charankumarj23@gmail.com</p>
          <p>📱 9363667351</p>
        </div>

      </section>

    </div>
  );
}