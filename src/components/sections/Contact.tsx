"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Camera, Phone, Mail, Loader2, CheckCircle, XCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "E-Commerce",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: data.message || 'Message sent successfully!' });
        setFormData({ name: "", email: "", service: "E-Commerce", message: "" });
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please check your connection.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold font-heading mb-6"
            >
              Let's create something <span className="text-gradient">extraordinary.</span>
            </motion.h2>
            <p className="text-gray-400 text-lg mb-10 max-w-md">
              Ready to elevate your digital presence? Reach out today and let's discuss your next project.
            </p>

            <div className="flex flex-col gap-6">
              <a href="mailto:aayush74550@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group w-fit">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="text-lg font-medium">aayush74550@gmail.com</span>
              </a>
              <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-green-400 transition-colors group w-fit">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <Phone size={20} />
                </div>
                <span className="text-lg font-medium">WhatsApp Me</span>
              </a>
              <a href="https://www.instagram.com/_aayushwebstudio?igsh=cXFnZmxndnpwYTh3&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-pink-400 transition-colors group w-fit">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                  <Camera size={20} />
                </div>
                <span className="text-lg font-medium">@_aayushwebstudio</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-10 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Your Name</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Your Email</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Service Required</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors appearance-none"
                >
                  <option className="bg-zinc-900" value="E-Commerce">E-Commerce</option>
                  <option className="bg-zinc-900" value="Business Website">Business Website</option>
                  <option className="bg-zinc-900" value="Landing Page">Landing Page</option>
                  <option className="bg-zinc-900" value="Other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              {status.type && (
                <div className={`p-4 rounded-xl flex items-center gap-3 ${status.type === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                  {status.type === 'success' ? <CheckCircle size={20} /> : <XCircle size={20} />}
                  <p className="text-sm font-medium">{status.message}</p>
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>Sending... <Loader2 size={18} className="animate-spin" /></>
                ) : (
                  <>Send Request <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
