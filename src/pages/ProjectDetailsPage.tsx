import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useEffect } from "react";
import { projects } from "../components/ProjectsSection";
import { useTheme } from "../hooks/use-theme";

const ProjectDetailsPage = () => {
  useTheme();
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.slug === slug);
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="w-full px-6 py-20 min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold mb-4">Project Not Found</h1>
          <Link to="/#projects" className="brutal-btn text-sm border-[2px] px-4 py-2 inline-flex items-center gap-2">
            <ArrowLeft size={14} /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-h-screen bg-background">
      {/* Header */}
      <div className={`${project.color} border-b-[3px] border-border py-12`}>
        <div className="w-full px-6 py-20">
          <button
            onClick={() => navigate("/#projects")}
            className="brutal-btn text-sm border-[2px] px-3 py-1.5 mb-6 inline-flex items-center gap-2 bg-background text-foreground"
          >
            <ArrowLeft size={14} /> Back
          </button>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">{project.title}</h1>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <section className="w-full px-6 py-20">
        <div className="max-w-4xl mx-auto">
                      {/* Overview Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="brutal-card mb-12"
          >
            <h2 className="font-heading text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-foreground/90 leading-relaxed mb-6">
              {project.details}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-heading font-bold mb-2">Key Features</h3>
                <ul className="space-y-2 text-foreground/80">
                  {project.tags.slice(0, 5).map((tag) => (
                    <li key={tag} className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>{tag}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-heading font-bold mb-2">Technology Stack</h3>
                <ul className="space-y-2 text-foreground/80">
                  {project.techStack.map((tag) => (
                    <li key={tag} className="flex items-start gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>{tag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Journey Section */}
          {(project.story || (project.journey && project.journey.length > 0)) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="brutal-card mb-12"
            >
              <h2 className="font-heading text-2xl font-bold mb-6">Journey</h2>
              
              {project.story && (
                <div className="mb-8">
                  <h3 className="font-heading font-bold mb-3 text-lg">Story</h3>
                  <p className="text-foreground/90 leading-relaxed">{project.story}</p>
                </div>
              )}
              
              {project.journey && project.journey.length > 0 && (
                <div>
                  <h3 className="font-heading font-bold mb-4 text-lg">Development Journey</h3>
                  <div className="space-y-6">
                    {project.journey.map((step, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="border-l-4 border-primary pl-6"
                      >
                        <h4 className="font-heading font-semibold mb-2 text-base">
                          {step.url ? (
                            <a 
                              href={step.url} 
                              target="_blank" 
                              rel="noreferrer"
                              className="text-primary hover:underline"
                            >
                              {step.title}
                            </a>
                          ) : (
                            step.title
                          )}
                        </h4>
                        <p className="text-foreground/80 leading-relaxed">{step.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

        {/* Repository Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="brutal-card mb-12"
          >
            <h2 className="font-heading text-2xl font-bold mb-6">Access the Project</h2>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="brutal-btn text-sm border-[2px] px-6 py-3 bg-primary text-primary-foreground inline-flex items-center gap-2 font-semibold"
            >
              <ExternalLink size={16} /> View on GitHub
            </a>
          </motion.div>


        </div>
      </section>

      {/* Related Projects */}
      <section className="w-full px-6 py-20 bg-muted/50 border-t-[3px] border-border">
        <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {projects
            .filter(p => p.slug !== slug)
            .slice(0, 3)
            .map((relatedProject) => (
              <motion.div
                key={relatedProject.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="brutal-card"
              >
                <h3 className="font-heading text-lg font-bold mb-2">{relatedProject.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {relatedProject.description}
                </p>
                <Link
                  to={`/project/${relatedProject.slug}`}
                  className="brutal-btn text-xs border-[2px] px-3 py-1.5 bg-background text-foreground inline-flex items-center gap-1.5"
                >
                  <ExternalLink size={12} /> View Details
                </Link>
              </motion.div>
            ))}
        </div>
         </div>
      </section>
    </div>
   
  );
};

export default ProjectDetailsPage;
