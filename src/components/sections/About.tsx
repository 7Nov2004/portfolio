"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skills = [
  "Next.js", "React", "TypeScript", "Three.js", 
  "Tailwind CSS", "Framer Motion", "GSAP", "Node.js", 
  "Supabase", "Figma"
];

function ScrollText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 50%"]
  });

  const words = text.split(" ");
  
  return (
    <p ref={ref} className="flex flex-wrap gap-x-[0.25em] gap-y-1 mb-6">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
        const color = useTransform(scrollYProgress, [start, end], ["#3f3f46", "#ffffff"]);
        return (
          <motion.span key={i} style={{ opacity, color }} className="inline-block">
            {word}
          </motion.span>
        );
      })}
    </p>
  );
}

export default function About() {
  return (
    <section id="about" className="py-32 relative bg-black border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image / Abstract Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square max-w-md mx-auto lg:mx-0 w-full group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-cyan-600 rounded-full blur-[80px] opacity-30 group-hover:opacity-50 transition-opacity duration-1000" />
            <div className="relative h-full w-full glass rounded-3xl overflow-hidden p-2 transform transition-transform duration-700 group-hover:scale-[1.02]">
              <img 
                src="/profile.jpg" 
                alt="Aayush Jaiwal" 
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
            </div>
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 md:bottom-10 md:-right-10 glass p-6 rounded-2xl flex items-center gap-4 glow"
            >
              <div className="text-4xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                5+
              </div>
              <div className="text-sm text-gray-400 leading-tight">
                Years of <br/> Experience
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-10">
                Meet <span className="text-gradient">Aayush.</span>
              </h2>
              <div className="text-2xl md:text-3xl font-medium leading-relaxed tracking-tight text-white mb-10">
                <ScrollText text="I'm Aayush Jaiwal, the founder of AJ Studios and a premium web developer specializing in creating immersive digital experiences. My approach merges high-end design with robust engineering to deliver websites that don't just look stunning, but perform flawlessly." />
                <ScrollText text="I believe that the web is a canvas. By leveraging technologies like WebGL, Three.js, and modern animation libraries, I transform standard interfaces into interactive journeys." />
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold text-white mb-6">Core Arsenal</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-5 py-2.5 glass rounded-full text-gray-300 font-medium hover:text-white hover:border-cyan-500/50 transition-colors cursor-default hover:glow"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
