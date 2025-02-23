'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaDiscord, FaEnvelope } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiNextdotjs, SiSharp, SiTailwindcss, SiVercel, SiDocker, SiKubernetes, SiPostgresql, SiMysql } from 'react-icons/si';
import { DiJava } from 'react-icons/di';

export default function Home() {
  const tools = [
    { 
      icon: SiNextdotjs, 
      name: "Next.js", 
      description: "React Framework",
      hoverColor: "hover:text-white" 
    },
    { 
      icon: SiTailwindcss, 
      name: "Tailwind", 
      description: "CSS Framework",
      hoverColor: "hover:text-[#38bdf8]" 
    },
    { 
      icon: SiMongodb, 
      name: "MongoDB", 
      description: "Database",
      hoverColor: "hover:text-green-500" 
    },
    { 
      icon: SiTypescript, 
      name: "TypeScript", 
      description: "Programming Language",
      hoverColor: "hover:text-[#3178c6]" 
    },
    { 
      icon: SiDocker, 
      name: "Docker", 
      description: "Containerization",
      hoverColor: "hover:text-[#2496ed]" 
    },
    { 
      icon: DiJava, 
      name: "Java", 
      description: "Programming Language",
      hoverColor: "hover:text-[#f89820]" 
    }
  ];

  return (
    <main className="min-h-screen text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-5xl mx-auto px-8 py-20"
      >
        <div className="space-y-16 mb-32">
          <motion.h1 
            className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 pb-1"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Hey, I&apos;m Dandeib
          </motion.h1>

          <motion.div 
            className="space-y-6 text-gray-300 max-w-3xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-2xl font-light">
              Full Stack Web Developer | Discord Bot Developer | Minecraft Plugin Developer
            </p>
            <p className="text-lg leading-relaxed">
              As a full-stack web developer, I bring your digital visions to life using Next.js. 
              Beyond the web, I create innovative Discord bots and craft captivating Minecraft plugins 
              for immersive gaming experiences. I'm currently expanding my skills by diving into C# 
              and Unity, exploring the exciting world of game development.
            </p>
          </motion.div>

          <motion.div 
            className="flex gap-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link 
              href="https://github.com/Dandeib" 
              target="_blank" 
              className="hover:text-purple-400 transition-colors p-2 group"
            >
              <FaGithub size={35} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link 
              href="/projects" 
              className="px-8 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors text-lg font-medium"
            >
              View Projects
            </Link>
          </motion.div>

          <motion.div 
            className="mt-8 flex items-center gap-8 text-gray-400"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center gap-2 hover:text-purple-400 transition-colors">
              <FaEnvelope size={20} />
              <span>contact@dandeib.de</span>
            </div>
            <div className="flex items-center gap-2 hover:text-purple-400 transition-colors">
              <FaDiscord size={20} />
              <span>dandeib</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">My Toolbox</h2>
            <div className="grid grid-cols-2 gap-4">
              {tools.slice(0, 6).map((tool, index) => (
                <motion.div
                  key={tool.name}
                  className="group flex items-center gap-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <tool.icon className={`text-2xl text-gray-400 transition-colors ${tool.hoverColor} group-hover:scale-110 duration-300`} />
                  <span className="text-gray-300">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="bg-[#1a1a1a] backdrop-blur-sm p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">Current Focus</h2>
            <ul className="space-y-3 text-lg text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Fruity Bot Development
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                DBS Gameplay Website
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Web Applications
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
