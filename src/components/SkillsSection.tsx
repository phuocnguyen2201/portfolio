import { motion } from "framer-motion";
import { Cloud, Code, Database, Eye, Layers, PenTool, Terminal, Type, Zap } from "lucide-react";

const skills = [
  { name: "React Native", category: "Mobile", icon: Layers },
  { name: "Expo + Expo Push Notification", category: "Mobile", icon: Zap },
  { name: "Firebase", category: "Mobile", icon: Cloud },
  { name: "TypeScript",category: "Core", icon: Type },
  { name: "JavaScript", category: "Core", icon: Code },
  { name: "supabase", category: "Core", icon: Database },
  { name: "Playwright", category: "Testing", icon: Terminal },
  { name: "Web Accessibility",category: "Testing", icon: Eye },
  { name: "Figma", category: "Design", icon: PenTool },
];

const categories = ["Mobile", "Core", "Testing", "Design"];

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
                    <div className="flex justify-between mb-1 items-center">
                      <span className="font-heading font-semibold text-sm flex items-center gap-2">
                        <skill.icon size={14} className="text-primary" />
                        {skill.name}
                      </span>
  
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
