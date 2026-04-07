import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Kris Barnes",
    role: "Senior Technical Project Manager, Protiviti",
    text: `Over the long duration of this
project, he consistently stepped up to the challenge, both on QA and on content entry. He
excelled in both roles, often going above and beyond what was asked or expected, learning and
responding quickly to feedback, and proactively taking on additional tickets and tasks that he
knew were needed in order for the team to be successful. He also led a large FPT team very
successfully. I can confidently say that without his leadership, resilient dedication, team
mentality, and extreme ownership of not only tasks but entire workstreams, that this project
would not have been as successful.`,
    color: "bg-primary",
  }
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

      <div className="grid grid-cols-1">
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
