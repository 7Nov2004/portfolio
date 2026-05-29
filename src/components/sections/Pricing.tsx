"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹12,000",
    desc: "Perfect for personal portfolios or small local businesses.",
    features: [
      "Custom UI Design",
      "Responsive Layout",
      "Basic Animations",
      "SEO Optimization",
      "Contact Form"
    ],
    popular: false,
  },
  {
    name: "Business",
    price: "₹20,000",
    desc: "Ideal for growing businesses needing a strong online presence.",
    features: [
      "Everything in Starter",
      "Premium 3D Elements",
      "Advanced Scroll Animations",
      "CMS Integration",
      "Analytics Setup",
      "Priority Support"
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹50,000+",
    desc: "For enterprises and startups requiring complex web apps.",
    features: [
      "Everything in Business",
      "Full Web Application",
      "Custom Backend / DB",
      "E-Commerce Functionality",
      "User Authentication",
      "Unlimited Revisions"
    ],
    popular: false,
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-4"
          >
            Transparent <span className="text-gradient">Pricing</span>
          </motion.h2>
          <p className="text-gray-400 text-lg">
            Invest in a digital presence that delivers ROI. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative glass rounded-3xl p-8 flex flex-col ${
                plan.popular ? "border-purple-500/50 glow" : "border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6 min-h-[40px]">{plan.desc}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-heading font-black text-white">{plan.price}</span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-center gap-3 text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-cyan-400" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                plan.popular 
                  ? "bg-white text-black hover:scale-[1.02] shadow-xl shadow-white/10" 
                  : "glass text-white hover:bg-white/10"
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
