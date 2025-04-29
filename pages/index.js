import Loader from "@/components/Loader";
import Head from "next/head";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import HALO from "vanta/dist/vanta.halo.min";

export default function Home() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          baseColor: 0x11a9f,
          backgroundColor: 0x30f51,
          amplitudeFactor: 0.2,
          xOffset: 0.05,
          yOffset: 0.05,
          size: 1.7,
          backgroundColor: 0x1e1e2f,
          baseColor: 0x6745,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gray-900 text-white"
    >
      <Loader />

      {/* Head Section */}
      <Head>
        <title>Tanmay Paul | Software Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Tanmay Paul, a skilled software developer specializing in React, Node.js, MongoDB, and more."
        />
        <meta
          name="keywords"
          content="Tanmay Paul, Software Developer, React Developer, Node.js Developer, Portfolio, Full Stack Developer"
        />
        <meta name="author" content="Tanmay Paul" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <nav className="flex justify-between items-center p-5 bg-transparent backdrop-blur-md fixed top-0 left-0 right-0 z-10">
        <h1 className="text-xl font-bold">DD Paul</h1>
        <ul className="flex space-x-5">
          <li>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        ref={vantaRef}
        className="relative flex flex-col md:flex-row items-center justify-center h-screen px-6 overflow-hidden pt-24 text-white"
      >
        {/* Background Gradient Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 animate-gradient-x opacity-20"></div>

        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="mb-8 md:mb-0 md:mr-12">
            <img
              src="/meatclg.jpg"
              alt="Tanmay Paul"
              className="rounded-full w-48 h-48 object-contain border-4 border-gray-700 bg-white transform transition-transform duration-500 hover:scale-110"
            />
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold flex items-center justify-center md:justify-start">
              Hi, I'm Tanmay Paul
              <span className="ml-3 animate-wave">👋</span>
            </h2>

            <p className="text-lg mt-4">
              Software Developer | React | Node | JavaScript
            </p>
            <div className="mt-6 flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com/tanmayofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/tanmaypaul95/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen bg-gray-800 flex items-center justify-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl text-center"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
          <p className="text-md text-gray-300 leading-relaxed">
            I'm a Frontend Developer with a strong command of{" "}
            <strong>React.js</strong>,<strong>RESTful APIs</strong>,
            <strong>Code Debugging</strong>,<strong>JavaScript</strong>,
            <strong>HTML/CSS</strong>, <strong>Redux</strong>,
            <strong>Tailwind CSS</strong>, <strong>Material-UI</strong>,
            <strong>Kendo-UI</strong>, focused on building responsive, modern,
            and user-friendly web applications. While my core strength lies in
            frontend engineering, I also have basic knowledge of backend
            technologies like <strong>Node.js</strong>,{" "}
            <strong>Express.js</strong>,<strong>MongoDB</strong>, and{" "}
            <strong>MySQL</strong>, allowing me to contribute effectively across
            the stack.
            <br />
            <br />I have hands-on experience with tools and platforms like{" "}
            <strong>Git</strong>,<strong>GitHub</strong>,
            <strong>GitLab CI/CD</strong>,<strong>Azure DevOps</strong>, and{" "}
            <strong>Code Deploy</strong>. I'm also familiar with{" "}
            <strong>Next.js</strong> for server-rendered React apps, and have
            foundational knowledge in <strong>C</strong> and{" "}
            <strong>C++</strong>, which helps me understand problem-solving and
            logic at a lower level.
            <br />
            <br />
            At <strong>TDR Softwares</strong>, I worked closely with both
            clients and developers — gathering requirements, leading product
            demos, and creating both technical and user-focused documentation.
            At <strong>Entiovi Technologies</strong>, I built and maintained
            scalable web apps, supported sprint planning, and participated in
            pre-sales technical support and training.
            <br />
            <br />
            My professional journey also includes a solid foundation in{" "}
            <strong>Sales & Marketing</strong> through roles at{" "}
            <strong>Nikon India</strong>, <strong>Kent RO Systems</strong>, and
            the <strong>Narayana Group</strong>. These experiences sharpened my
            communication and client handling skills — something I bring into
            every technical discussion today.
            <br />
            <br />I take pride in being a solution-oriented developer who can
            bridge technical execution with real-world user needs. I'm
            passionate about clean design, team collaboration, and creating
            software that delivers real impact.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen bg-gray-900 flex items-center justify-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          // viewport={{ once: true }}
          className="max-w-5xl text-center"
        >
          <h2 className="text-4xl font-bold mb-10 text-white">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "MySQL",
              "Tailwind CSS",
              "Bootstrap",
              "Git",
              "GitHub/GitLab",
            ].map((skill, index) => {
              // Determine direction
              const directions = [
                { x: -50, y: 0 },
                { x: 50, y: 0 },
                { x: 0, y: -50 },
                { x: 0, y: 50 },
              ];
              const direction = directions[index % directions.length];

              return (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, ...direction }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  // viewport={{ once: true }}
                  className="p-4 bg-gray-800 rounded shadow hover:shadow-lg transition"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen bg-gray-800 flex items-center justify-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl text-center w-full"
        >
          <h2 className="text-4xl font-bold mb-10 text-white">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Bulkmatic Solutions",
                description:
                  "Spearheaded development of a dynamic Planning Board & Admin Dashboard for order and tankwash management. Used React.js, Node.js, PostgreSQL, Kendo UI, Material UI, and more.",
                time: "Jan 2023 - Oct 2023",
              },
              {
                title: "Wine App",
                description:
                  "Developed a robust Admin Dashboard for liquor/wine management. Managed functionalities for admins, distributors, and suppliers using React.js, MongoDB, AWS, Material UI, and Express.js.",
                time: "Sept 2022 - Oct 2023",
              },
              {
                title: "ClearedTalent",
                description:
                  "Contributed to a Recruitment Dashboard for customers, agencies, and clients. Built with React.js, Mongoose, Azure Functions, MySQL, Sequelize, and Kendo UI.",
                time: "Sept 2022 - Oct 2023",
              },
              {
                title: "Pathology Lab",
                description:
                  "Built the frontend for a lab system using React.js, Node.js, Express.js, MongoDB, Tailwind CSS, and Material UI. Focused on responsive, clean UX.",
                time: "Dec 2024 - Mar 2025",
              },
            ].map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ amount: 1 }}
                className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg text-left"
              >
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {proj.title}
                </h3>
                <p className="text-gray-300 mb-4">{proj.description}</p>
                <span className="text-sm text-gray-400">{proj.time}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-gray-900 flex items-center justify-center px-6 py-20"
      >
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 10 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0 }}
          className="text-center w-full"
        >
          <h2 className="text-4xl font-bold mb-8 text-white">Contact Me</h2>
          <p className="text-lg text-gray-300 mb-10">
            Feel free to reach out if you'd like to collaborate or just say
            hello!
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            <a
              href="mailto:tanmaypaulofficial@gmail.com"
              className="px-6 py-2 bg-gray-800 rounded hover:bg-gray-700 transition"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/tanmaypaul95/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gray-800 rounded hover:bg-gray-700 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/tanmayofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gray-800 rounded hover:bg-gray-700 transition"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
