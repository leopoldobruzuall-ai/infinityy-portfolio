'use client';

import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0a]/95 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between text-sm">
          <div className="font-bold text-xl">Infinityy</div>
          
          <div className="flex gap-8">
            <a href="#home" className="hover:text-gray-400 transition">Home</a>
            <a href="#about" className="hover:text-gray-400 transition">About</a>
            <a href="#projects" className="hover:text-gray-400 transition">Projects</a>
            <a href="#commissions" className="hover:text-gray-400 transition">Commissions</a>
            <a href="#socials" className="hover:text-gray-400 transition">Socials</a>
          </div>

          <a href="#contact" className="text-yellow-400 font-medium hover:underline">⚡ Contact me</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <h1 className="text-7xl md:text-8xl font-bold mb-4 tracking-tighter">
          Infinityy
        </h1>
        <p className="text-3xl text-gray-400">Lua Scripter &amp; UI Artist</p>
        
        <div className="mt-12 max-w-md text-lg text-gray-300">
          I create high-quality Roblox experiences with clean LuaU scripts and nice UIs.<br />
          Passionate AI enthusiast who loves building cool stuff.
        </div>
      </section>

      {/* Who I am */}
      <section id="about" className="py-24 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12">Who I am</h2>
          <div className="space-y-8 text-[17px] leading-relaxed text-gray-300">
            <p>I'm Infinityy, a dedicated Roblox Lua Scripter and UI Artist.</p>
            <p>I focus on creating smooth, optimized scripts and beautiful user interfaces for Roblox games.</p>
            <p>I'm also a big AI enthusiast — I use AI daily to improve my workflow and build smarter tools.</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12">Skills &amp; Tools</h2>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-1">LuaU / Roblox Studio</h3>
              <p className="text-gray-400">Scripter &amp; UI Designer</p>
              <p className="text-sm text-emerald-400 mt-3">2024 — Present</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-1">UI/UX Design</h3>
              <p className="text-gray-400">Roblox Interfaces</p>
              <p className="text-sm text-emerald-400 mt-3">2024 — Present</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-1">Python</h3>
              <p className="text-gray-400">AI Tools &amp; Automation</p>
              <p className="text-sm text-emerald-400 mt-3">2023 — Present</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-1">AI Enthusiast</h3>
              <p className="text-gray-400">Prompt Engineering &amp; AI Coding</p>
              <p className="text-sm text-emerald-400 mt-3">2023 — Present</p>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder sections */}
      <section id="projects" className="py-24 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-8">Projects</h2>
          <p className="text-gray-400">My best Roblox projects will appear here soon...</p>
        </div>
      </section>

      <section id="contact" className="py-24 border-t border-white/10 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">Get in touch</h2>
          <p className="text-gray-400 mb-10">Interested in working together or just want to say hi?</p>
          <a href="mailto:your.email@example.com" className="inline-block px-10 py-5 bg-white text-black rounded-full text-lg font-medium hover:bg-gray-200 transition">
            Send Message ⚡
          </a>
        </div>
      </section>

      <footer className="py-12 text-center text-xs text-gray-600">
        © Infinityy 2026 • All Rights Reserved
      </footer>
    </main>
  );
}