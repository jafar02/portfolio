import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 size={40} /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} /> },
  { name: "JavaScript", icon: <FaJs size={40} /> },
  { name: "React", icon: <FaReact size={40} /> },
  { name: "Node.js", icon: <FaNodeJs size={40} /> },
  { name: "Python", icon: <FaPython size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "Git", icon: <FaGitAlt size={40} /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-slate-900 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 text-center mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-slate-800 p-6 rounded-xl flex flex-col items-center hover:scale-105 transition"
            >
              <div className="text-cyan-400 mb-3">
                {skill.icon}
              </div>
              <p className="text-white font-medium">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}