'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: "Fruity Bot",
      description: "A Discord bot that provides various utilities and fun commands for users.",
      tags: ["Discord.js", "TypeScript", "MongoDB"],
      status: "Closed Beta",
      link: "https://fruity.bot",
      image: "/fruitybot.png"
    },
    {
      title: "Awonia.net",
      description: "Awonia.net is an exceptional minecraft server with a custom game mode where I work as a discord bot and website developer",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "Discord.js", "Java - Plugin Development"],
      status: "Finished",
      link: "https://awonia.net",
      image: "/awonia.png"
    },
    {
      title: "RadioPlayz",
      description: "RadioPlayz is a radio station that provides musics for users.",
      tags: ["Next.js", "TypeScript", "TailwindCSS"],
      status: "Under Development",
      link: "http://dandeib.de:3001",
      image: "/radioplayz.png"
    }
  ];

  return (
    <main className="min-h-screen text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20"
      >
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 sm:mb-16 text-lg"
        >
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>

        <div className="text-center mb-12 sm:mb-20">
          <motion.p 
            className="text-purple-400 text-base sm:text-lg font-medium mb-3 sm:mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            PROJECTS
          </motion.p>
          <motion.h1 
            className="text-4xl sm:text-6xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 pb-1"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            Featured Projects
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg text-gray-400"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            A selection of projects I've worked on recently.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative bg-[#1a1a1a] rounded-2xl p-6 sm:p-8 border border-gray-800 overflow-hidden"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-8">
                <div className="space-y-4 flex-1">
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <h2 className="text-2xl sm:text-3xl font-bold">{project.title}</h2>
                    {project.status && (
                      <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                        {project.status}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-base sm:text-lg">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-3 sm:px-4 py-1 sm:py-1.5 bg-gray-800 rounded-full text-xs sm:text-sm font-medium text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <Link 
                      href={project.link}
                      target="_blank"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium mt-4 group-hover:translate-x-2 transition-transform"
                    >
                      View Project <span className="ml-2">→</span>
                    </Link>
                  )}
                </div>
                {project.image && (
                  <div className="w-24 h-24 sm:w-32 sm:h-32 relative shrink-0">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}