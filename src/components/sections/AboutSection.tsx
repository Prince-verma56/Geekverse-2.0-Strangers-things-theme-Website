import React from "react";
import { motion, Variants } from "framer-motion";
import InteractiveTilt3D from "../InteractiveTilt3D";

// Cinematic easing curve - smooth and premium
const SLOW_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease: SLOW_EASE },
  },
};

const card3DVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.4,
      ease: SLOW_EASE,
    },
  },
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen py-32 px-4 overflow-hidden bg-background"
      style={{ perspective: '1200px' }}
    >
      {/* Optimized Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />

      {/* Background Image - Optimized */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 0.9, scale: 1 }}
        transition={{ duration: 1.8, ease: SLOW_EASE }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src="/images/Bg/AboutBg2.png"
          alt="Background"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover pointer-events-none"
          style={{
            filter: 'brightness(1.1)',
            willChange: 'transform',
            transform: 'translateZ(0)',
          }}
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none z-0" />

      {/* Radial glow effects */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 40%, hsl(0 100% 50% / 0.25) 0%, transparent 55%),
            radial-gradient(circle at 70% 60%, hsl(0 100% 50% / 0.25) 0%, transparent 55%)
          `,
        }}
      />

      {/* Content Container */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px", amount: 0.2 }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          variants={headerVariants}
          style={{ willChange: 'transform' }}
        >
          <h2 className="font-stranger-outline text-red-300 text-5xl sm:text-6xl md:text-7xl text-foreground mb-4">
            <span
              style={{
                textShadow: `
                  0 0 10px hsl(0 100% 50% / 1),
                  0 0 20px hsl(0 100% 50% / 0.8),
                  0 0 40px hsl(0 100% 50% / 0.6)
                `
              }}
            >
              GEEKVERSE 2.0
            </span>
          </h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-transparent via-crimson to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: SLOW_EASE }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={headerVariants}
          className="font-horror text-xl sm:text-2xl md:text-3xl text-muted-foreground leading-relaxed text-center"
          style={{ willChange: 'transform' }}
        >
          A battle of innovation, code, and creativity. Experience a 30-hour
          hackathon hosted by the
          <span className="text-crimson font-semibold"> GeeksforGeeks Campus Body</span>.
          Bring your ideas to life, compete with great minds, and shape the future.
        </motion.p>

        {/* Top Cards Grid */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <motion.div
            variants={card3DVariants}
            style={{ willChange: 'transform' }}
          >
            <InteractiveTilt3D>
              <div className="p-8 bg-card/20 backdrop-blur-md border border-red-400 border-border/30 rounded-xl transition-all duration-500 hover:border-crimson/50 hover:bg-card/40 hover:shadow-xl hover:shadow-crimson/10 relative overflow-hidden">
                {/* Shiny effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <h3 className="font-empire text-2xl text-crimson mb-4 tracking-wider relative z-10">
                  ABOUT THE EVENT
                </h3>
                <p className="font-horror text-muted-foreground leading-relaxed relative z-10">
                  GeekVerse 2.0 is a 30-hour offline hackathon designed to push
                  real-world innovation.
                  <br />
                  Expected participation:
                  <span className="text-foreground font-semibold"> 350–400 students</span>.
                </p>
              </div>
            </InteractiveTilt3D>
          </motion.div>

          <motion.div
            variants={card3DVariants}
            style={{ willChange: 'transform' }}
          >
            <InteractiveTilt3D>
              <div className=" border-red-400 p-8 bg-card/20 backdrop-blur-md border border-border/30 rounded-xl transition-all duration-500 hover:border-crimson/50 hover:bg-card/40 hover:shadow-xl hover:shadow-crimson/10 relative overflow-hidden">
                {/* Shiny effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <h3 className="font-empire text-2xl text-crimson mb-4 tracking-wider relative z-10">
                  WHEN & WHERE
                </h3>
                <p className="font-horror text-muted-foreground leading-relaxed relative z-10">
                  <span className="text-foreground font-semibold">
                    Tentative Date: 10 Jan 2026 – 15 Jan 2026
                  </span>
                  <br /> Mode: Offline
                  <br /> Venue: Yet to be decided
                </p>
              </div>
            </InteractiveTilt3D>
          </motion.div>
        </div>

        {/* Bottom Details Grid */}
        <motion.div
          className="grid sm:grid-cols-3 gap-6 mt-12 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px", amount: 0.3 }}
        >
          {[
            { title: "TEAM SIZE", desc: "2–4 Members per team" },
            { title: "TICKET PRICE", desc: "₹200 – ₹250 per participant" },
            { title: "DURATION", desc: "30 Hours nonstop coding" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={card3DVariants}
              style={{ willChange: 'transform' }}
            >
              <InteractiveTilt3D>
                <div className="border-red-400 p-5 bg-card/20 backdrop-blur-md border border-border/30 rounded-lg transition-all duration-500 hover:border-crimson/50 hover:bg-card/40 hover:shadow-lg relative overflow-hidden group">
                  {/* Shiny effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  <p className="font-empire text-xl text-crimson mb-1 tracking-wide relative z-10">
                    {item.title}
                  </p>
                  <p className="text-muted-foreground font-horror relative z-10">
                    {item.desc}
                  </p>
                </div>
              </InteractiveTilt3D>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Quote */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: SLOW_EASE }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="font-horror text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            "Great things are born when ideas collide with courage. Code it,
            build it, own it."
          </p>
          <span className="block mt-4 font-dragonforce text-crimson tracking-widest text-lg">
            — GEEKVERSE
          </span>
        </motion.div>
      </motion.div>

      {/* Custom Styles */}
      <style>{`
        .font-empire {
          font-family: 'empire', sans-serif;
        }
        .font-dragonforce {
          font-family: 'Dragonforce', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;