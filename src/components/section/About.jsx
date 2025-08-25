import { RevealOnScroll } from './RevealOnScroll.jsx';
export const About = () => {

  const frontendSkills = [
    "React",
    "Vue",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS"
  ]

  const backedendSkills = [
    "Node.js",
    "python",
    "Spring Boot",
    "AWS",
    "Maven",
    "Junit",
    "Java",
    "MyBatis",
    "MySQL",
    "FastAPI",
    "RESTful APIs",
    "Redis",
    "Docker",
    "Pytorch",
    "TensorFlow",
    "Sckit-learn"
  ]
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Hello! I'm Zhicong Lin, a passionate Software Engineering student at McMaster University, currently in my fourth year. I love building different kinds of cool and useful applications, and I truly enjoy the sense of achievement and satisfaction that comes with completing each project. I am excited to apply my skills in a professional setting, and I be available to start an internship in January 2026              </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                      '
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backedendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                      '
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className='text-xl font-bold mb-4'>
                🏫 Education
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Level 4 Software Engineering Student</strong> - McMaster University (2022-present)
                </li>
                <li>
                  Relevant Coursework: Data Structures and Algorithms, Web Development, Database Management, Software Design and Architecture..
                </li>
              </ul>
            </div>
            <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'> 💼 Work Experience </h3>
              <div>
                <h4 className="font-semibold py-4">
                  Software QA Internship at Leyard (May 2025 - Sep 2025)
                </h4>
                <p>
                  Developed and executed comprehensive test plans for web applications, ensuring functionality, performance, and security standards were met.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-4 p-7">
            <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(0,0,0,0.4)]">
              View Projects
            </a>
            <a href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
                            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(0,0,0,0.4)] hover:bg-blue-500/10">
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}

