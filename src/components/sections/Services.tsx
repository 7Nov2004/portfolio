"use client";

import { motion } from "framer-motion";
import { Briefcase, ShoppingCart, Utensils, Dumbbell, Scissors, LayoutTemplate } from "lucide-react";

const services = [
  {
    title: "Business Websites",
    description: "Corporate identity and professional web presence designed to convert.",
    icon: <Briefcase size={24} className="text-purple-400" />,
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    title: "E-Commerce Stores",
    description: "High-performance online stores with seamless checkout experiences.",
    icon: <ShoppingCart size={24} className="text-cyan-400" />,
    colSpan: "col-span-1",
  },
  {
    title: "Restaurant Websites",
    description: "Appetizing designs with integrated menus and reservation systems.",
    icon: <Utensils size={24} className="text-orange-400" />,
    colSpan: "col-span-1",
  },
  {
    title: "Gym & Fitness",
    description: "Energetic designs to attract members and showcase facilities.",
    icon: <Dumbbell size={24} className="text-green-400" />,
    colSpan: "col-span-1",
  },
  {
    title: "Salon & Clinic",
    description: "Elegant, trustworthy sites with online booking integration.",
    icon: <Scissors size={24} className="text-pink-400" />,
    colSpan: "col-span-1",
  },
  {
    title: "Landing Pages",
    description: "High-converting, single-page designs for specific campaigns or products.",
    icon: <LayoutTemplate size={24} className="text-blue-400" />,
    colSpan: "col-span-1 md:col-span-3",
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-4"
          >
            Digital <span className="text-gradient">Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            I build specialized web experiences tailored to your industry, focusing on performance, aesthetics, and conversion.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={`glass p-8 rounded-2xl flex flex-col justify-between group hover:glow transition-all duration-300 ${service.colSpan}`}
            >
              <div className="mb-6 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
