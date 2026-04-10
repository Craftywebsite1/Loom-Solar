/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Loom Solar - Premium Solar Solutions
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  Lightbulb, 
  ShieldCheck, 
  Flag, 
  Star, 
  MapPin, 
  CheckCircle2,
  ChevronRight,
  Maximize2,
  X,
  Phone,
  Mail,
  Menu,
  ArrowRight,
  Sun,
  Battery,
  Zap
} from 'lucide-react';

import img0 from './assets/input_file_0.png';
import img1 from './assets/input_file_1.png';
import img2 from './assets/input_file_2.png';
import img3 from './assets/input_file_3.png';

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
  { url: img0, alt: "Loom Solar Panel Installation in Ahilyanagar", title: "Panel Installation" },
  { url: img1, alt: "CAML High Voltage Lithium Battery for Home", title: "CAML Battery" },
  { url: img2, alt: "Rooftop Solar Project Maharashtra", title: "Rooftop Project" },
  { url: img3, alt: "Solar Installation Team Loom Solar", title: "Installation Team" }
];

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#why-solar' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

// SEO Component for AI and Search Engines
const SEO = () => {
  useEffect(() => {
    document.title = "Loom Solar | Premium Solar Solutions in Ahilyanagar, Maharashtra";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Loom Solar is India's leading solar brand offering high-efficiency TOPCon solar panels, lithium batteries, and rooftop solar installations in Ahilyanagar, Maharashtra. Save up to 80% on electricity bills.");
    }
    
    // JSON-LD for Local Business (AI SEO)
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Loom Solar Ahilyanagar",
      "image": "https://craftywebsite1.github.io/Loom-Solar/assets/input_file_0.png",
      "@id": "https://craftywebsite1.github.io/Loom-Solar/",
      "url": "https://craftywebsite1.github.io/Loom-Solar/",
      "telephone": "+91-9881122448",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "261 Dane Lane, Bhingar",
        "addressLocality": "Ahilyanagar",
        "addressRegion": "Maharashtra",
        "postalCode": "414002",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 19.0948,
        "longitude": 74.7480
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        "opens": "09:00",
        "closes": "19:00"
      }
    });
    document.head.appendChild(script);
    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) document.head.removeChild(existingScript);
    };
  }, []);
  return null;
};

// Main Application Component
export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleWhatsAppRedirect = () => {
    window.open("https://wa.me/919881122448?text=Hello%20Loom%20Solar,%20I%20am%20interested%20in%20a%20solar%20quote.", "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-neon-green selection:text-black scroll-smooth">
      <SEO />
      
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-neon-green z-[110] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[100] glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-neon-green rounded-lg flex items-center justify-center">
                <Sun className="text-black w-6 h-6" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tighter">LOOM<span className="text-neon-green">SOLAR</span></span>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-medium text-gray-400 hover:text-neon-green transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={handleWhatsAppRedirect}
                className="glow-button bg-neon-green text-black px-6 py-2.5 rounded-full font-bold text-sm"
              >
                Get Quote
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-t border-white/5 overflow-hidden"
            >
              <div className="px-4 py-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-bold hover:text-neon-green transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleWhatsAppRedirect();
                  }}
                  className="bg-neon-green text-black px-8 py-4 rounded-xl font-bold text-lg"
                >
                  Get Free Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
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
      <section id="home" className="relative pt-40 pb-24 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-neon-green/20 text-neon-green text-sm font-bold mb-8"
              >
                <Zap className="w-4 h-4" />
                <span>India's #1 Solar Brand</span>
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-display font-extrabold tracking-tighter leading-[0.9] mb-8">
                POWER YOUR <br />
                <span className="text-neon-green text-glow">FUTURE</span> WITH <br />
                LOOM SOLAR
              </h1>
              
              <p className="text-xl text-gray-400 max-w-xl mb-12 leading-relaxed">
                Experience the next generation of solar technology. High-efficiency TOPCon panels designed for maximum output even in low light.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleWhatsAppRedirect}
                  className="glow-button bg-neon-green text-black px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 group"
                >
                  Start Saving Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => document.getElementById('why-solar')?.scrollIntoView({ behavior: 'smooth' })}
                  className="glass px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/5 transition-all"
                >
                  View Features
                </button>
              </div>

              <div className="mt-16 flex items-center gap-8 border-t border-white/10 pt-8">
                <div>
                  <div className="text-3xl font-bold text-neon-green">50K+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest">Installations</div>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div>
                  <div className="text-3xl font-bold text-neon-green">25Y</div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest">Warranty</div>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div>
                  <div className="text-3xl font-bold text-neon-green">A+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest">Efficiency</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-neon-green/20 rounded-3xl blur-3xl" />
              <img 
                src={img0} 
                alt="Loom Solar Panel Installation" 
                className="relative z-10 w-full h-auto rounded-3xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl border-neon-green/30 z-20 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neon-green/20 rounded-full flex items-center justify-center">
                    <Zap className="text-neon-green w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">80%</div>
                    <div className="text-xs text-gray-400 uppercase">Bill Reduction</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Go Solar? Section */}
      <section id="why-solar" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-7xl font-display font-extrabold mb-6 uppercase">WHY <span className="text-neon-green">LOOM SOLAR?</span></h2>
            <div className="w-24 h-2 bg-neon-green mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass p-10 rounded-3xl glass-hover group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-green/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-neon-green/10 transition-colors" />
                <div className="mb-8 p-4 bg-neon-green/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-32 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="text-5xl font-display font-extrabold mb-6 uppercase tracking-tighter">REAL PEOPLE,<br /><span className="text-neon-green">REAL RESULTS</span></h2>
              <p className="text-gray-400 text-xl">Join thousands of happy customers who have switched to Loom Solar.</p>
            </motion.div>
            <div className="flex gap-2">
              <div className="px-6 py-3 glass rounded-full flex items-center gap-2">
                <Star className="w-5 h-5 fill-neon-green text-neon-green" />
                <span className="font-bold">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-3xl flex flex-col justify-between glass-hover"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-neon-green text-neon-green" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic text-lg leading-relaxed mb-8">"{review.text}"</p>
                </div>
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className="w-12 h-12 bg-neon-green/20 rounded-full flex items-center justify-center font-bold text-neon-green text-xl">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{review.name}</h4>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-7xl font-display font-extrabold mb-6 uppercase">OUR <span className="text-neon-green">WORK</span></h2>
            <p className="text-gray-400 text-xl">Glimpses of our latest installations and cutting-edge technology</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-3xl border border-white/10 aspect-video cursor-pointer bg-zinc-900"
                onClick={() => setSelectedImage(image.url)}
              >
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
                  <div className="flex items-center gap-2 text-neon-green font-bold">
                    <span>View Project</span>
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-display font-extrabold mb-8 uppercase tracking-tighter">READY TO GO <br /><span className="text-neon-green">SOLAR?</span></h2>
              <p className="text-xl text-gray-400 mb-12">Contact us today for a free site survey and personalized solar consultation in Ahilyanagar.</p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-neon-green/20 transition-colors">
                    <Phone className="text-neon-green w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-widest mb-1">Call Us</div>
                    <div className="text-xl font-bold">+91-9881122448</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-neon-green/20 transition-colors">
                    <Mail className="text-neon-green w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-widest mb-1">Email Us</div>
                    <div className="text-xl font-bold">sunshinesolar1008@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-neon-green/20 transition-colors">
                    <MapPin className="text-neon-green w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-widest mb-1">Visit Us</div>
                    <div className="text-xl font-bold">261 Dane Lane, Bhingar, Ahilyanagar</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-[2.5rem]"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-neon-green outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-neon-green outline-none transition-colors" placeholder="+91 00000 00000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-neon-green outline-none transition-colors" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-neon-green outline-none transition-colors resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button 
                  onClick={handleWhatsAppRedirect}
                  className="glow-button w-full bg-neon-green text-black py-5 rounded-2xl font-bold text-lg"
                >
                  Get Quote on WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-neon-green rounded-lg flex items-center justify-center">
                  <Sun className="text-black w-6 h-6" />
                </div>
                <span className="text-3xl font-display font-bold tracking-tighter uppercase">LOOM<span className="text-neon-green">SOLAR</span></span>
              </div>
              <p className="text-gray-400 text-lg max-w-md mb-8">
                Empowering India with clean, sustainable, and affordable solar energy solutions. Join the revolution today.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-8 uppercase tracking-widest">Quick Links</h4>
              <ul className="space-y-4 text-gray-400">
                {navLinks.map((link) => (
                  <li key={link.name}><a href={link.href} className="hover:text-neon-green transition-colors">{link.name}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8 uppercase tracking-widest">Products</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-neon-green transition-colors">TOPCon Solar Panels</a></li>
                <li><a href="#" className="hover:text-neon-green transition-colors">Lithium Batteries</a></li>
                <li><a href="#" className="hover:text-neon-green transition-colors">Solar Inverters</a></li>
                <li><a href="#" className="hover:text-neon-green transition-colors">Rooftop Kits</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2026 Loom Solar Ahilyanagar. All rights reserved.</p>
            <p>Developed by <span className="text-white font-medium">Naitik Bothara</span> owner of <span className="text-neon-green">craftyweb developer</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
