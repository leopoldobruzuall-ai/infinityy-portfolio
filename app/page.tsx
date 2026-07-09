'use client';

import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold">YourName</div>
          <div className="flex gap-8 text-sm">
            <a href="#home" className="hover:text-gray-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-gray-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-gray-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-gray-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tighter">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Infinityy</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-400 mb-8">
            Roblox Scripter • Python Developer • AI Enthusiast
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-white/30 rounded-full hover:bg-white/10 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12">Who I am</h2>
          <div className="prose prose-invert text-lg leading-relaxed text-gray-300">
            <p>
              I&apos;m a passionate Roblox developer focused on scripting with LuaU. 
              I also work with Python, especially for AI-related projects.
            </p>
            <p>
              Been scripting for about a year and using AI to code for over 2 years. 
              Always learning and building cool stuff.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-zinc-950 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12">Skills &amp; Tools</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Add your skills here similar to Kanibal's style */}
            <div className="border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-2">Roblox Studio</h3>
              <p className="text-gray-400">Scripter / Developer</p>
              <p className="text-sm text-gray-500 mt-4">2024 — Present</p>
            </div>
            
            <div className="border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-2">Python</h3>
              <p className="text-gray-400">Scripting &amp; AI Coding</p>
              <p className="text-sm text-gray-500 mt-4">2023 — Present</p>
            </div>
            
            {/* Add more cards as needed */}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12">Projects</h2>
          <p className="text-gray-400 mb-12">Coming soon — I&apos;ll help you add your actual projects here.</p>
          {/* We'll add nice project cards in the next steps */}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8">Let&apos;s Connect</h2>
          <p className="text-xl text-gray-400 mb-10">Feel free to reach out!</p>
          <a 
            href="mailto:your@email.com" 
            className="inline-block px-10 py-5 bg-white text-black text-lg font-medium rounded-full hover:scale-105 transition-all"
          >
            Send me a message ⚡
          </a>
        </div>
      </section>

      <footer className="py-12 text-center text-sm text-gray-500 border-t border-white/10">
        © {new Date().getFullYear()} YourName. Made with ❤️
      </footer>
    </main>
  );
}