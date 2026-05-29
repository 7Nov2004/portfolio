"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "We dive deep into your brand, goals, and audience to create a strategic foundation."
  },
  {
    num: "02",
    title: "Design",
    desc: "Crafting a premium, tailored UI/UX with 3D elements and micro-interactions."
  },
  {
    num: "03",
    title: "Develop",
    desc: "Writing clean, scalable code using Next.js and WebGL for peak performance."
  },
  {
    num: "04",
    title: "Launch",
    desc: "Rigorous testing, SEO optimization, and a seamless deployment to the world."
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-4"
          >
            The <span className="text-gradient">Process</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connection Line */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
              )}
              
              <div className="glass p-8 rounded-2xl h-full hover:glow transition-all duration-300 relative z-10 bg-zinc-900/50">
                <div className="text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent mb-6">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
