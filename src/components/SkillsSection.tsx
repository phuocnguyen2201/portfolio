import { motion } from "framer-motion";

const skills = [
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 92, category: "Frontend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Python", level: 80, category: "Backend" },
  { name: "PostgreSQL", level: 78, category: "Backend" },
  { name: "Figma", level: 88, category: "Design" },
  { name: "Motion Design", level: 75, category: "Design" },
];

const categories = ["Frontend", "Backend", "Design"];

const SkillsSection = () => {
  return (
    <section className="section-container bg-muted/50" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          Skills & <span className="text-primary">Expertise</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-lg">
          Technologies and tools I use to bring ideas to life.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((category, catIdx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: catIdx * 0.1 }}
            className="brutal-card"
          >
            <div className="tag-badge bg-secondary text-secondary-foreground inline-block mb-6">
              {category}
            </div>
            <div className="space-y-5">
              {skills
                .filter((s) => s.category === category)
                .map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-heading font-semibold text-sm">{skill.name}</span>
                      <span className="text-muted-foreground text-xs font-heading">{skill.level}%</span>
                    </div>
                    <div className="w-full h-3 border-[2px] border-border bg-background">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
