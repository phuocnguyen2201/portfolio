import { motion } from "framer-motion";
import { Cloud, Code, Database, Eye, Layers, PenTool, Terminal, Type, Users, Zap } from "lucide-react";

const skills = [
  { "name": "React Native", "category": "Mobile", "icon": Layers },
  { "name": "Expo + Expo Push Notification", "category": "Mobile", "icon": Zap },
  { "name": "Firebase", "category": "Mobile", "icon": Cloud },
  { "name": "Gluestack UI", "category": "Mobile", "icon": Layers },

  { "name": "TypeScript", "category": "Core", "icon": Type },
  { "name": "JavaScript", "category": "Core", "icon": Code },
  { "name": "Python", "category": "Core", "icon": Code },
  { "name": "Java", "category": "Core", "icon": Code },
  { "name": "Supabase", "category": "Core", "icon": Database },
  { "name": "AWS Lambda", "category": "Core", "icon": Cloud },
  { "name": "Vercel", "category": "Core", "icon": Cloud },
  { "name": "CI/CD (GitHub Actions)", "category": "Core", "icon": Terminal },

  { "name": "Playwright", "category": "Testing", "icon": Terminal },
  { "name": "Jest", "category": "Testing", "icon": Terminal },
  { "name": "Robot Framework", "category": "Testing", "icon": Terminal },
  { "name": "Appium", "category": "Testing", "icon": Terminal },
  { "name": "UI/UX Testing", "category": "Testing", "icon": Eye },
  { "name": "Regression Testing", "category": "Testing", "icon": Eye },
  { "name": "Exploratory Testing", "category": "Testing", "icon": Eye },
  { "name": "Accessibility Testing", "category": "Testing", "icon": Eye },
  { "name": "Web Accessibility", "category": "Testing", "icon": Eye },
  { "name": "ADA & WCAG Compliance", "category": "Testing", "icon": Eye },

  { "name": "Figma", "category": "Design", "icon": PenTool },
  { "name": "Adobe Experience Manager (AEM)", "category": "Design", "icon": PenTool },

  { "name": "Agile Scrum", "category": "Project", "icon": Users },
  { "name": "Sprint Planning", "category": "Project", "icon": Users },
  { "name": "Retrospectives", "category": "Project", "icon": Users },
  { "name": "Backlog Grooming", "category": "Project", "icon": Users },
  { "name": "QA Leadership", "category": "Project", "icon": Users },
  { "name": "Team Coaching", "category": "Project", "icon": Users },
  { "name": "Cross-functional Collaboration", "category": "Project", "icon": Users },

  { "name": "Talent Assessment / Talent Matching", "category": "Personal", "icon": PenTool },
  { "name": "Communication", "category": "Personal", "icon": PenTool },
  { "name": "Decision Making", "category": "Personal", "icon": PenTool },
  { "name": "Conflict Resolution", "category": "Personal", "icon": PenTool },
  { "name": "Composure", "category": "Personal", "icon": PenTool }
]


const categories = ["Mobile", "Core", "Personal", "Project", "Testing", "Design"];

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
            <div className="tag-badge bg-secondary text-secondary-foreground inline-block mb-6 md:text-lg text-black">
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
