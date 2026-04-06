import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certificates = [
  { title: "AWS Solutions Architect", issuer: "Amazon Web Services", year: "2024", color: "bg-accent" },
  { title: "Google UX Design", issuer: "Google / Coursera", year: "2023", color: "bg-secondary" },
  { title: "Meta Frontend Developer", issuer: "Meta / Coursera", year: "2023", color: "bg-primary" },
  { title: "TypeScript Professional", issuer: "Microsoft", year: "2024", color: "bg-accent" },
];

const CertificatesSection = () => {
  return (
    <section className="section-container bg-muted/50" id="certificates">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          Certificates & <span className="text-primary">Awards</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-lg">
          Professional certifications and recognitions.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {certificates.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="brutal-card text-center"
          >
            <div className={`${cert.color} w-14 h-14 border-[3px] border-border mx-auto mb-4 flex items-center justify-center`} style={{ boxShadow: 'var(--shadow-brutal)' }}>
              <Award size={24} className="text-foreground" />
            </div>
            <h3 className="font-heading font-bold text-sm mb-1">{cert.title}</h3>
            <p className="text-muted-foreground text-xs">{cert.issuer}</p>
            <div className="tag-badge bg-background text-foreground inline-block mt-3">{cert.year}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
