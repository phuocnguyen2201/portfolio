import { motion } from "framer-motion";
import avatarImage from "../assets/avatar/Bruce_Ng_1.jpg";

const HeroSection = () => {
  return (
    <section className="section-container relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Geometric decorations */}
      <div className="geometric-circle w-32 h-32 bg-primary/20 -top-8 -right-8 animate-spin-slow" />
      <div className="geometric-square w-20 h-20 bg-accent/30 top-40 right-20 rotate-12" />
      <div className="geometric-circle w-16 h-16 bg-secondary/25 bottom-20 left-10 animate-bounce-subtle" />
      <div className="geometric-square w-12 h-12 bg-primary/15 bottom-40 right-40 -rotate-6" />

      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="tag-badge bg-accent text-accent-foreground inline-block mb-6">
            Available for work
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-[0.95] mb-6">
            Hi, I'm{" "}
            <span className="brutal-underline">Bruce</span>
            <br />
            <span className="text-primary">Ng</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md mb-8 font-body">
            A quality-focused developer who loves to build digital experiences. 
            I craft interfaces that are functional, accessible, and unforgettable.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="brutal-btn-primary">
              View Projects
            </a>
            <a href="#contact" className="brutal-btn-secondary">
              Get in Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotate: -5 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="brutal-card bg-primary/10 max-w-[400px] ml-auto flex items-center justify-center">
            <div className="text-[120px] font-heading font-bold text-primary/30 select-none">
              <img src={avatarImage} alt="Bruce Avatar" className="w-full h-full object-cover object-top" />
            </div>
            {/* Overlapping geometric shapes */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent border-[3px] border-border" style={{ boxShadow: 'var(--shadow-brutal)' }} />
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-secondary border-[3px] border-border" style={{ boxShadow: 'var(--shadow-brutal)' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
