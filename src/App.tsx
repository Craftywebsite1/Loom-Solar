/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Lightbulb, 
  ShieldCheck, 
  Flag, 
  Star, 
  MapPin, 
  CheckCircle2,
  ChevronRight,
  Maximize2,
  X
} from 'lucide-react';

const reviews = [
  {
    name: "Chinmayi",
    role: "Verified Buyer",
    rating: 5,
    text: "Loom solar is an awesome product. The panel is very well made and is performing as expected. The customer service was excellent."
  },
  {
    name: "Sunil",
    role: "Verified Buyer",
    rating: 5,
    text: "Superb charging performance. The product is value for money, delivery on time."
  },
  {
    name: "Rakesh",
    role: "Verified Buyer",
    rating: 5,
    text: "Excellent product with high efficiency. Even in low light, it generates decent power."
  },
  {
    name: "Ankit",
    role: "Verified Buyer",
    rating: 5,
    text: "The build quality is top-notch. Highly recommended for home use."
  },
  {
    name: "West Bengal User",
    role: "Long-term User",
    rating: 5,
    text: "It has generated over 500 units. The price is great for Mono PERC."
  }
];

const features = [
  {
    icon: <Lightbulb className="w-8 h-8 text-neon-green" />,
    title: "Save Up to 80% on Bills",
    text: "Generate your own clean energy and slash your electricity bills."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-neon-green" />,
    title: "25-Year Performance Warranty",
    text: "Peace of mind with the industry's best warranty on our TOPCon panels."
  },
  {
    icon: <Flag className="w-8 h-8 text-neon-green" />,
    title: "Make in India",
    text: "Proudly manufactured in India with global quality standards."
  }
];

const galleryImages = [
  { url: "/input_file_0.png", alt: "Loom Solar Panel Installation" },
  { url: "/input_file_1.png", alt: "CAML High Voltage Battery" },
  { url: "/input_file_2.png", alt: "Rooftop Solar Project" },
  { url: "/input_file_3.png", alt: "Solar Installation Team" }
];

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-neon-green selection:text-black scroll-smooth">
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button 
              className="absolute top-8 right-8 text-white hover:text-neon-green transition-colors z-[101]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Full size view" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl shadow-neon-green/20"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1600&fm=webp" 
            srcSet="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=640&fm=webp 640w, https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200&fm=webp 1200w, https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1600&fm=webp 1600w"
            sizes="100vw"
            alt="Solar Panels" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            Power Your Future with <span className="text-neon-green text-glow">Loom Solar</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            India's premium solar brand, now serving Ahmednagar. High-efficiency panels for a sustainable tomorrow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={() => document.getElementById('why-solar')?.scrollIntoView({ behavior: 'smooth' })}
              className="glow-button bg-neon-green text-black px-10 py-4 rounded-full font-bold text-lg flex items-center gap-2"
            >
              Explore Our Solar Solutions <ChevronRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/10 transition-colors duration-300"
            >
              View Gallery
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-400"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-neon-green" />
              Trusted by 50,000+ Homes
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-neon-green" />
              3500+ Retail Stores
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Go Solar? Section */}
      <section id="why-solar" className="py-24 bg-dark-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Loom Solar?</h2>
            <div className="w-20 h-1 bg-neon-green mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-neon-green/50 transition-all group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Real People, Real Results</h2>
            <p className="text-gray-400">What our customers say about our solar solutions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-neon-green text-neon-green" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-6">"{review.text}"</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-neon-green/20 rounded-full flex items-center justify-center font-bold text-neon-green">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{review.name}</h4>
                    <p className="text-xs text-gray-500">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-glow">Our Work & Innovation</h2>
            <p className="text-gray-400">Glimpses of our latest installations and cutting-edge technology</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="flex flex-col gap-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group overflow-hidden rounded-2xl border border-white/10 aspect-video cursor-pointer bg-white/5 flex items-center justify-center"
                  onClick={() => setSelectedImage(image.url)}
                >
                  <img 
                    src={image.url} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="text-white w-8 h-8" />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 bg-dark-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Visit Our Ahmednagar Hub</h2>
              <div className="flex items-start gap-4 mb-8">
                <MapPin className="w-6 h-6 text-neon-green shrink-0 mt-1" />
                <div>
                  <p className="text-xl font-medium mb-2">Loom Solar Ahmednagar</p>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    261 Dane Lane, Bhingar,<br />
                    Ahmednagar, Maharashtra 414002,<br />
                    India
                  </p>
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=261+Dane+Lane,+Bhingar,+Ahmednagar,+Maharashtra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-neon-green hover:text-white transition-colors duration-300 font-bold"
                  >
                    Get Directions <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <p className="text-neon-green font-medium flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Come see our solar solutions in person.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-neon-green/10"
            >
              <iframe 
                src="https://maps.google.com/maps?q=261%20Dane%20Lane,%20Bhingar,%20Ahmednagar,%20Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Developed by <span className="text-white font-medium">Naitik Bothara</span> owner of <span className="text-neon-green">craftyweb developer</span>
          </p>
          <p className="text-gray-600 text-xs">
            © 2026 Loom Solar. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
