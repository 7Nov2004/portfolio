"use client";

import { motion } from "framer-motion";
import HeroScene from "../3d/HeroScene";
import { ArrowRight, Sparkles } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";

const textVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pb-20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full pt-20">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start space-y-6"
        >
          <motion.div variants={textVariants} className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass text-sm font-medium text-cyan-400">
            <Sparkles size={16} />
            <span>Hi, I'm Aayush Jaiwal</span>
          </motion.div>

          <motion.h1 variants={textVariants} className="text-5xl md:text-7xl font-bold font-heading leading-tight">
            Crafting <span className="text-gradient">Digital</span> <br />
            Experiences.
          </motion.h1>

          <motion.p variants={textVariants} className="text-gray-400 text-lg md:text-xl max-w-lg">
            At AJ Studios, I build high-end, 3D interactive websites that elevate your brand and leave a lasting impression.
          </motion.p>

          <motion.div variants={textVariants} className="flex flex-wrap gap-4 pt-4">
            <MagneticButton>
              <a
                href="#work"
                className="px-8 py-4 rounded-full bg-white text-black font-bold flex items-center space-x-2 hover:scale-105 transition-transform"
              >
                <span>View Projects</span>
                <ArrowRight size={20} />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="#contact"
                className="px-8 py-4 rounded-full glass text-white font-medium hover:bg-white/10 transition-colors block"
              >
                Contact Me
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* 3D Canvas Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-[60vh] lg:h-[100vh] w-full relative lg:-mr-10 lg:-mb-32 z-0"
        >
          <HeroScene />
          
          {/* Floating UI Elements (Dummy Website Cards) */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-1/4 right-0 md:-right-10 glass p-4 rounded-xl shadow-2xl flex items-center space-x-3 hidden sm:flex glow"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-500" />
            <div>
              <div className="text-sm font-bold text-white">E-Commerce</div>
              <div className="text-xs text-gray-400">Conversion +45%</div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 left-0 md:-left-10 glass p-4 rounded-xl shadow-2xl flex items-center space-x-3 hidden sm:flex glow"
          >
            <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center border border-zinc-700">
              <Sparkles size={16} className="text-yellow-400" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">SaaS Landing</div>
              <div className="text-xs text-green-400">Deployed</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
