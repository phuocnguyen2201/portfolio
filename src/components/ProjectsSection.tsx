import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";

const projects = [
  {
    title: "SD Chat",
    description: "A secure mobile messaging app with end-to-end encryption, Supabase realtime sync, and push notifications.",
    repoUrl: "https://github.com/phuocnguyen2201/sd-chat",
    tags: [
      "React Native",
      "Expo",
      "Supabase",
      "Encryption",
      "Realtime",
      "Push Notifications",
      "Auth",
      "Secure Storage",
      "AsyncStorage",
      "Mobile UX",
    ],
    color: "bg-primary/10",
    accent: "bg-primary",
  },
  {
    title: "Accessibility View",
    description: "A Figma plugin for WCAG contrast checks, color blindness simulation, and AI-assisted palette generation.",
    repoUrl: "https://github.com/phuocnguyen2201/accessibility-view",
    tags: [
      "TypeScript",
      "Figma Plugin",
      "WCAG",
      "Contrast Analysis",
      "Color Blindness",
      "AI Palette",
      "Accessibility",
      "Design System",
      "Webpack",
      "UI Tools",
    ],
    color: "bg-secondary/10",
    accent: "bg-secondary",
  },
  {
    title: "Playwright Showcase",
    description: "A compact test suite demonstrating E2E coverage for web apps, MFA flows, and accessibility checks.",
    repoUrl: "https://github.com/phuocnguyen2201/playwright-showcase",
    tags: [
      "Playwright",
      "E2E",
      "Axe",
      "TypeScript",
      "MFA",
      "Automated Tests",
      "Browser",
      "CI-ready",
      "Accessibility",
      "Test Suites",
    ],
    color: "bg-accent/20",
    accent: "bg-accent",
  },
  {
    title: "Financial Management",
    description: "A bill scanner and expense tracker using OCR, Firebase, and visual analytics for spending insights.",
    repoUrl: "https://github.com/phuocnguyen2201/financial-management",
    tags: [
      "React Native",
      "OCR",
      "Firebase",
      "Analytics",
      "Receipt Scanner",
      "Expense Tracking",
      "AsyncStorage",
      "Data Visualizations",
      "Mobile Finance",
      "API Integration",
    ],
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
          Four real-world repositories showcasing secure mobile apps, accessibility tooling, E2E testing, and intelligent finance workflows.
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
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="brutal-btn text-xs border-[2px] px-3 py-1.5 bg-background text-foreground flex items-center gap-1.5"
              >
                <ExternalLink size={12} /> View Repo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
