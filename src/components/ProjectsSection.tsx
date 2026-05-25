import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

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
          Four real-world repositories showcasing secure mobile apps, accessibility tooling, E2E testing, and intelligent finance workflows.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects
          .filter((project) => project.featured)
          .map((project, idx) => (
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
            <p className="text-muted-foreground text-sm mb-6">{project.description}</p>
            <div className="flex gap-3 mb-6">
              <Link
                to={`/project/${project.slug}`}
                state={{ referrer: "home" }}
                className="brutal-btn flex-1 text-xs border-[2px] px-3 py-1.5 bg-background text-foreground flex items-center justify-center gap-1.5"
              >
                <ArrowRight size={12} /> Learn More
              </Link>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="brutal-btn flex-1 text-xs border-[2px] px-3 py-1.5 bg-background text-foreground flex items-center justify-center gap-1.5"
              >
                <ExternalLink size={12} />
                {project.repoUrl.includes("github.com") ? "View Repo" : "View the project"}
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-badge bg-muted text-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
