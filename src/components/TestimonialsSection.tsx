import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Martinez",
    role: "Product Manager, TechCorp",
    text: "Alex consistently delivered pixel-perfect implementations ahead of schedule. Their attention to accessibility and performance was exceptional.",
    color: "bg-primary",
  },
  {
    name: "James Wilson",
    role: "CTO, StartupXYZ",
    text: "One of the most talented developers I've worked with. They transformed our design system and reduced component inconsistencies by 90%.",
    color: "bg-secondary",
  },
  {
    name: "Emily Chen",
    role: "Design Lead, Agency Co",
    text: "Rare combination of technical expertise and design sensibility. Alex bridged the gap between our design and engineering teams beautifully.",
    color: "bg-accent",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-container" id="testimonials">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          What People <span className="text-secondary">Say</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-lg">
          Feedback from colleagues and clients I've had the pleasure of working with.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <motion.blockquote
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="brutal-card relative"
          >
            <div className={`${t.color} w-10 h-10 border-[3px] border-border flex items-center justify-center mb-4`} style={{ boxShadow: 'var(--shadow-brutal)' }}>
              <Quote size={16} className="text-foreground" />
            </div>
            <p className="text-sm leading-relaxed mb-6 text-foreground/90">"{t.text}"</p>
            <footer>
              <p className="font-heading font-bold text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.role}</p>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
