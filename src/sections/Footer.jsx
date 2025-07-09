import React from 'react';
import {
  FaGithub,
  FaEnvelope,
  FaInstagram
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A1A1A] text-gray-400 text-sm border-t border-t-red-600 shadow-inner">
      <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col items-center gap-2">
        {/* Title */}
        <h2 className="text-white text-xl font-semibold">Connect with me</h2>

        {/* Social Icons with Tooltips */}
        <div className="flex gap-6 relative">
          {/* GitHub */}
          <div className="group relative">
            <a
              href="https://github.com/debasish39"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white p-2 rounded-full transition-all duration-250 hover:scale-150"
            >
              <FaGithub size={25} />
            </a>
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-xs text-white opacity-0 group-hover:opacity-100 transition duration-250 pointer-events-none">
              GitHub
            </span>
          </div>

          {/* Email */}
          <div className="group relative">
            <a
              href="mailto:djproject963@gmail.com"
              className="text-gray-400 hover:text-white p-2 rounded-full transition-all duration-250 hover:scale-150"
            >
              <FaEnvelope size={25} />
            </a>
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-xs text-white opacity-0 group-hover:opacity-100 transition duration-250 pointer-events-none">
              Email
            </span>
          </div>

          {/* Instagram */}
          <div className="group relative">
            <a
              href="https://www.instagram.com/deba_963"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white p-2 rounded-full transition-all duration-250 hover:scale-150"
            >
              <FaInstagram size={25} />
            </a>
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-xs text-white opacity-0 group-hover:opacity-100 transition duration-250 pointer-events-none">
              Instagram
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-700/50 mt-6" />

        {/* Copyright */}
        <p className="text-gray-500 text-center">
          &copy; {new Date().getFullYear()} <span className="text-white font-medium">God Portfolio</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
