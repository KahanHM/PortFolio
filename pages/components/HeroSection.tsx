'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#SystemArchitecture', label: 'Projects' },
    { href: '#TechnicalMetrics', label: 'Achievements' },
    { href: '#ContactSection', label: 'Contact' },
  ];

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/5 border-b border-white/10 shadow-md">
        <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
          <Link href="/" className="text-cyan-400 font-mono font-bold text-lg">Kahan HM</Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-8 text-cyan-300 font-mono">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:text-cyan-500 transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-cyan-300 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <ul className="md:hidden bg-black/70 backdrop-blur px-6 py-4 text-cyan-300 font-mono space-y-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-cyan-400 transition"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-4 pt-20"
      >
        <div className="absolute inset-0 bg-[url('/PortFolio/grid.svg')] bg-center opacity-5 pointer-events-none" />
        <div className="relative z-10 max-w-5xl w-full px-8 py-12 bg-white/5 border border-white/10 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center md:items-start gap-10"
          >
            <div className="flex-shrink-0 w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-[#38bdf8] shadow-[0_0_25px_rgba(56,189,248,0.4)]">
              <Image
                src="/PortFolio/profile-pic.png"
                alt="Kahan HM"
                width={208}
                height={208}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <div className="flex gap-2 justify-center md:justify-start mb-6">
                <span className="w-3 h-3 rounded-full bg-red-500 shadow-md" />
                <span className="w-3 h-3 rounded-full bg-yellow-400 shadow-md" />
                <span className="w-3 h-3 rounded-full bg-green-500 shadow-md" />
              </div>
              <p className="text-cyan-400 mb-1 tracking-wide text-sm">$ whoami</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-1 leading-tight">Kahan HM</h1>
              <p className="text-sky-300 mb-5 text-lg font-medium">DevOps & Cloud Engineer</p>
              <p className="text-cyan-400 mb-1 tracking-wide text-sm">$ skills</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
                {['AWS', 'GCP', 'OCI', 'Python', 'BASH', 'Windows', 'Linux', 'Docker', 'Kubernetes', 'Ansible', 'Terraform', 'Jenkins', 'Github Actions'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/10 border border-cyan-500 rounded-full text-xs text-cyan-100 font-medium hover:bg-cyan-500 hover:text-black transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
