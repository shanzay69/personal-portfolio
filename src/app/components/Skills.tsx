'use client';
import React from "react"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import Typewriter from 'typewriter-effect';
import '../style/skills.css';

export default function Skill() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="skill-icon skill-html" /> },
    { name: "CSS", icon: <FaCss3Alt className="skill-icon skill-css" /> },
    { name: "JavaScript", icon: <FaJs className="skill-icon skill-js" /> },
    { name: "React", icon: <FaReact className="skill-icon skill-react" /> },
    { name: "Node.js", icon: <FaNodeJs className="skill-icon skill-node" /> },
    { name: "TypeScript", icon: <SiTypescript className="skill-icon skill-typescript" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="skill-icon skill-tailwind" /> },
    { name: "Next.js", icon: <SiNextdotjs className="skill-icon skill-nextjs" /> },
    { name: "VS Code", icon: <VscVscode className="skill-icon skill-vscode" /> },
  ];

  return (
    <section id="skills"   className="skill-container">
      <h2 className="skill-heading">My skills set's the hidden Talents</h2>
      <h2 className="skill-subheading">
        <Typewriter
          options={{
            strings: ['Programming Languages'],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

