export default function Portfolio() {

  const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      "C",
      "Python (Basics)",
      "Java (Basics)",
      "JavaScript",
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      "HTML5",
      "CSS3",
      "React.js",
    ],
  },
  {
  title: "Backend & Database",
  skills: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
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
  title: "AI & Data",
  skills: [
    "Machine Learning",
    "TensorFlow",
    "OpenCV",
    "MediaPipe",
    "Data Science",
  ],
},
];

  const projects = [
  {
    emoji: "🧘",
    title: "Yoga Posture Detection ML Based",
    tech: "Python • TensorFlow • OpenCV • MediaPipe",
    desc: "Developed a real-time yoga posture detection system using Computer Vision and Machine Learning concepts. Utilized MediaPipe and OpenCV for pose detection and posture analysis.",
    github: "https://github.com/charankumarj23/yoga-posture-detection",
  },
  {
    emoji: "🚰",
    title: "Water Supply Notification System",
    tech: "React.js • Node.js • Express.js • MongoDB",
    desc: "Developed a full-stack web application for managing and publishing water supply notifications. Built Admin and User dashboards to provide area-wise water supply schedules and updates.",
  },
  {
  emoji: "🚌",
  title: "Smart Bus Tracking & Notification System",
  tech: "React.js • Node.js • MongoDB",
  desc: "Developed a web-based platform for managing bus routes, schedules and notifications. Designed Admin and User dashboards to provide route information and schedule updates.",
},
];

  return (
  <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">

      {/* HERO SECTION */}
      <section className="text-center pt-36 pb-24 px-6 border-b border-gray-800">

        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
  Charan Kumar J
</h1>
<p className="text-xl text-gray-400 mb-6 font-medium">
  Full Stack Developer & AI Enthusiast
</p>

<p className="text-gray-300 text-lg max-w-4xl mx-auto leading-8">
  Full Stack Developer & AI Enthusiast

  Building web applications and AI-powered solutions using React, Node.js, MongoDB, Python and TensorFlow.
</p>
<div className="flex justify-center gap-8 mt-8 flex-wrap">
  <div className="bg-gray-900 border border-gray-800 rounded-xl px-8 py-4">
  <h3 className="text-3xl font-bold">3+</h3>
  <p className="text-gray-400">Projects</p>
</div>

  <div className="bg-gray-900 border border-gray-800 rounded-xl px-8 py-4">
  <h3 className="text-3xl font-bold">2</h3>
  <p className="text-gray-400">Internships</p>
</div>

  <div className="bg-gray-900 border border-gray-800 rounded-xl px-8 py-4">
  <h3 className="text-3xl font-bold">5+</h3>
  <p className="text-gray-400">Technologies</p>
</div>
</div>
        <div className="flex justify-center gap-5 mt-10 flex-wrap">

          <a
  href="https://github.com/charankumarj23"
  target="_blank"
  className="border border-gray-600 px-6 py-3 rounded-xl hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 focus:outline-none"
>
  GitHub
</a>

          <a
  href="https://www.linkedin.com/in/charankumarj231005"
  target="_blank"
  className="border border-gray-600 px-6 py-3 rounded-xl hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 focus:outline-none"
>
  LinkedIn
</a>

          <a
            href="/resume.pdf"
            target="_blank"
           className="border border-gray-600 px-6 py-3 rounded-xl hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 focus:outline-none"
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

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
  <p className="text-gray-300 leading-8 text-lg">
    I am an Integrated M.Tech Computer Science student passionate about Full Stack Development and Artificial Intelligence. I build web applications using React, Node.js and MongoDB, while exploring Machine Learning and Computer Vision using Python and TensorFlow.

    <br /><br />

    Through internships and academic projects, I have gained practical experience in software development, UI/UX design and problem solving.
  </p>
</div>
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
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-cyan-500 transition-all duration-300"
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

          <div className="relative group bg-gray-900 p-6 rounded-2xl border border-gray-800">
<span className="absolute top-4 right-4 px-3 py-1 text-xs border border-gray-600 rounded-full text-gray-300 cursor-pointer hover:bg-white hover:text-black transition">
  Duration
</span>
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
<div className="absolute top-12 right-4 opacity-0 group-hover:opacity-100 transition bg-white text-black text-xs px-3 py-2 rounded-md pointer-events-none">
 10 June 2025 – 22 June 2025
</div>
          </div>

         <div className="relative group bg-gray-900 p-6 rounded-2xl border border-gray-800">
          <span className="absolute top-4 right-4 px-3 py-1 text-xs border border-gray-600 rounded-full text-gray-300 cursor-pointer hover:bg-white hover:text-black transition">
  Duration
</span>
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
<div className="absolute top-12 right-4 opacity-0 group-hover:opacity-100 transition bg-white text-black text-xs px-3 py-2 rounded-md pointer-events-none">
  8 December 2025 – 21 December 2025
</div>
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
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
<p className="text-4xl mb-4">
  {project.emoji}
</p>
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
      <section className="max-w-4xl mx-auto px-6 py-16">
  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 text-center">
    <h2 className="text-3xl font-bold mb-4">
      Let's Build Something Great
    </h2>

    <p className="text-gray-400 mb-8">
      Interested in Full Stack Development, Artificial Intelligence and Software Engineering opportunities.
    </p>

    <a
      href="/resume.pdf"
      target="_blank"
      className="border border-gray-600 px-8 py-4 rounded-xl hover:bg-white hover:text-black transition"
    >
      Download Resume
    </a>
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

  <p>
    💻 GitHub:
    <a
      href="https://github.com/charankumarj23"
      target="_blank"
      className="ml-2 underline"
    >
      github.com/charankumarj23
    </a>
  </p>

  <p>
    🔗 LinkedIn:
    <a
      href="https://www.linkedin.com/in/charankumarj231005"
      target="_blank"
      className="ml-2 underline"
    >
      linkedin.com/in/charankumarj231005
    </a>
  </p>
        </div>

      </section>

    </div>
  );
}