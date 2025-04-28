import Loader from "@/components/Loader";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
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
      <nav className="flex justify-between items-center p-5 bg-gray-800">
        <h1 className="text-xl font-bold">Tanmay Paul</h1>
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
      <section className="flex flex-col md:flex-row items-center justify-center h-screen px-6 bg-gray-900 text-white">
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
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            With over 5 years of total and over 2 years of experience as a
            Software Developer, I have a strong background in website and
            software development. I'm proficient in HTML, CSS, JavaScript,
            React.js, Node.js, and familiar with Figma, Adobe Premiere Pro,
            Adobe Photoshop, etc. I am passionate about building impactful
            digital experiences and continuously learning new technologies.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <div className="p-4 bg-gray-800 rounded shadow hover:shadow-lg transition">
              HTML
            </div>
            <div className="p-4 bg-gray-800 rounded shadow hover:shadow-lg transition">
              CSS
            </div>
            <div className="p-4 bg-gray-800 rounded shadow hover:shadow-lg transition">
              JavaScript
            </div>
            <div className="p-4 bg-gray-800 rounded shadow hover:shadow-lg transition">
              React.js
            </div>
            <div className="p-4 bg-gray-800 rounded shadow hover:shadow-lg transition">
              Node.js
            </div>
            <div className="p-4 bg-gray-800 rounded shadow hover:shadow-lg transition">
              Express.js
            </div>
            <div className="p-4 bg-gray-800 rounded shadow hover:shadow-lg transition">
              MongoDB
            </div>
            <div className="p-4 bg-gray-800 rounded shadow hover:shadow-lg transition">
              MySQL
            </div>
            <div className="p-4 bg-gray-800 rounded shadow hover:shadow-lg transition">
              Tailwind CSS
            </div>
            <div className="p-4 bg-gray-800 rounded shadow hover:shadow-lg transition">
              Bootstrap
            </div>
            <div className="p-4 bg-gray-800 rounded shadow hover:shadow-lg transition">
              Git
            </div>
            <div className="p-4 bg-gray-800 rounded shadow hover:shadow-lg transition">
              GitHub/GitLab
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Project 1: Bulkmatic Solutions */}
            <div className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition text-left">
              <h3 className="text-2xl font-semibold mb-4">
                Bulkmatic Solutions
              </h3>
              <p className="text-gray-300 mb-4">
                Spearheaded the development of a dynamic Planning Board & Admin
                Dashboard for order and tankwash management. Used React.js,
                Node.js, PostgreSQL, Kendo UI, Material UI, and more.
              </p>
              <span className="text-sm text-gray-400">Jan 2023 - Oct 2023</span>
            </div>

            {/* Project 2: Wine App */}
            <div className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition text-left">
              <h3 className="text-2xl font-semibold mb-4">Wine App</h3>
              <p className="text-gray-300 mb-4">
                Developed a robust Admin Dashboard for liquor/wine management
                system. Managed functionalities for admins, distributors, and
                suppliers using React.js, MongoDB, AWS, Material UI, and
                Express.js.
              </p>
              <span className="text-sm text-gray-400">
                Sept 2022 - Oct 2023
              </span>
            </div>

            {/* Project 3: ClearedTalent */}
            <div className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition text-left">
              <h3 className="text-2xl font-semibold mb-4">ClearedTalent</h3>
              <p className="text-gray-300 mb-4">
                Contributed to a robust Admin Dashboard for a Recruitment
                Organization at ClearedTalent. Managed functionalities for
                customers, agencies, clients, and public-specific test cases,
                ensuring an efficient user experience. Utilized a tech stack
                including React.js, Mongoose, Azure Functions, MySQL, Sequelize,
                Kendo UI, and more.
              </p>
              <span className="text-sm text-gray-400">
                Sept 2022 - Oct 2023
              </span>
            </div>

            {/* Project 4: Pathology Lab */}
            <div className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition text-left">
              <h3 className="text-2xl font-semibold mb-4">Pathology Lab</h3>
              <p className="text-gray-300 mb-4">
                Worked on the frontend development of a Pathology Lab
                application. Built dynamic user interfaces using React.js,
                React-Router-DOM, Context API, CSS3, Tailwind CSS, Material UI,
                and other frontend libraries. Focused on creating a clean,
                responsive, and user-friendly experience for lab management and
                patient reports.
              </p>
              <span className="text-sm text-gray-400">Dec 2024 - Mar 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Contact Me</h2>
          <p className="text-lg text-gray-300 mb-6">
            Feel free to reach out if you want to collaborate or have any
            questions!
          </p>
          <div className="flex justify-center space-x-6">
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
        </div>
      </section>
    </motion.div>
  );
}
