"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code, ExternalLink, Globe } from "lucide-react";
import TiltCard from "../ui/TiltCard";

const projects = [
  {
    title: "Wallnova 4K",
    category: "Wallpaper App",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1280",
    tech: ["Next.js", "React", "Vercel"],
    link: "https://wallnova-sigma.vercel.app/"
  },
  {
    title: "Loomba Clinic",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1280",
    tech: ["React", "Next.js", "Vercel"],
    link: "https://loomba-clinic.vercel.app/"
  },
  {
    title: "D3 Fitness",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1280",
    tech: ["React", "Tailwind", "Vercel"],
    link: "https://d3-fitness.vercel.app/"
  },
  {
    title: "Hotel Ten Jade",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1280",
    tech: ["Next.js", "React", "Vercel"],
    link: "https://hotel-ten-jade.vercel.app/"
  },
  {
    title: "AK Fitness",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1280",
    tech: ["React", "Vite", "Vercel"],
    link: "https://ak-fitness-nine.vercel.app/"
  }
];

export default function WorkShowcase() {
  return (
    <section id="work" className="py-24 relative bg-black">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex justify-between items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Featured <span className="text-gradient">Work.</span></h2>
            <p className="text-gray-400">A selection of my recent projects.</p>
          </motion.div>
          <motion.a 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#" 
            className="hidden md:flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>View Archive</span>
            <ArrowUpRight size={20} />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <TiltCard key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-3xl overflow-hidden glass p-4 h-full flex flex-col"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 flex-shrink-0">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.link || "#"} target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
                      <ArrowUpRight size={24} />
                    </a>
                  </div>
                </div>

                <div className="px-2 pb-2 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-cyan-400 text-sm font-medium mb-1">{project.category}</p>
                      <h3 className="text-2xl font-bold font-heading text-white">{project.title}</h3>
                    </div>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Code size={24} />
                    </a>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
