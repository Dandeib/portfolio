'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaDiscord, FaEnvelope, FaFile } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex gap-6">
            <Link 
              href="https://github.com/Dandeib" 
              target="_blank" 
              className="text-gray-400 hover:text-purple-400 transition-colors group"
            >
              <FaGithub size={24} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link 
              href="https://discord.com/users/720686770376300544" 
              target="_blank" 
              className="text-gray-400 hover:text-purple-400 transition-colors group"
            >
              <FaDiscord size={24} />
              <span className="sr-only">Discord</span>
            </Link>
            <Link 
              href="mailto:dandeib@protonmail.com" 
              className="text-gray-400 hover:text-purple-400 transition-colors group"
            >
              <FaEnvelope size={24} />
              <span className="sr-only">Email</span>
            </Link>
            <Link 
              href="/impressum" 
              className="text-gray-400 hover:text-purple-400 transition-colors group flex gap-4"
            >
              <FaFile size={24} />
              <span className="">Impressum</span>
            </Link>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Dandeib. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}