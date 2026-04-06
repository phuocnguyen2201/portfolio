import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack marketplace with real-time inventory, Stripe payments, and an admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    color: "bg-primary/10",
    accent: "bg-primary",
  },
  {
    title: "AI Writing Assistant",
    description: "GPT-powered writing tool with collaborative editing, templates, and export to multiple formats.",
    tags: ["Next.js", "OpenAI", "TypeScript", "Tailwind"],
    color: "bg-secondary/10",
    accent: "bg-secondary",
  },
  {
    title: "Health & Fitness Tracker",
    description: "Mobile-first PWA for tracking workouts, nutrition, and progress with data visualizations.",
    tags: ["React", "D3.js", "Firebase", "PWA"],
    color: "bg-accent/20",
    accent: "bg-accent",
  },
  {
    title: "Design System Library",
    description: "Comprehensive component library with 50+ accessible components, Storybook docs, and Figma kit.",
    tags: ["TypeScript", "Storybook", "Figma", "A11y"],
    color: "bg-primary/10",
    accent: "bg-primary",
  },
];

const ProjectsSection = () => {
  return (
    <section className="section-container" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          Featured <span className="text-secondary">Projects</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-lg">
          A selection of projects I've built from concept to launch.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="brutal-card group"
          >
            <div className={`${project.color} h-40 border-b-[3px] border-border -m-6 mb-6 flex items-center justify-center`}>
              <div className={`w-16 h-16 ${project.accent} border-[3px] border-border rotate-12 group-hover:rotate-45 transition-transform duration-300`} />
            </div>
            <h3 className="font-heading text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-badge bg-muted text-foreground">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <button className="brutal-btn text-xs border-[2px] px-3 py-1.5 bg-background text-foreground flex items-center gap-1.5">
                <ExternalLink size={12} /> Live
              </button>
              <button className="brutal-btn text-xs border-[2px] px-3 py-1.5 bg-background text-foreground flex items-center gap-1.5">
                <Code size={12} /> Code
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
