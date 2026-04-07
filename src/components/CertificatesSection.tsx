import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certificates = [
  {
    title: "AWS Academy Graduate - Cloud Operations",
    issuer: "Amazon Web Services",
    year: "2025",
    url: "https://www.credly.com/badges/5e88b618-b91f-4e99-bc84-8b4ed76d898f/linked_in_profile",
    color: "bg-accent",
  },
  {
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "Amazon Web Services",
    year: "2025",
    url: "https://www.credly.com/badges/302a6de6-3e4f-4657-a736-be8e1edc5140/linked_in_profile",
    color: "bg-secondary",
  },
  {
    title: "ISTQB® Certified Tester - Foundation Level",
    issuer: "iSQI",
    year: "2022",
    url: "https://zertdb.isqi.org/en/download/index/token/7-5aLL75X-i_yE41-x1-",
    color: "bg-primary",
  },
  {
    title: "Elements of Cloud and Cybersecurity",
    issuer: "Kajaanin Ammattikorkeakoulu",
    year: "2023",
    url: "https://openbadgefactory.com/v1/assertion/410e5da47fc3c88e6711d745e010dec5e73c7fee",
    color: "bg-accent",
  },
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
            <a
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className="brutal-btn text-xs border-[2px] px-3 py-1.5 bg-background text-foreground inline-flex items-center gap-1.5 mt-4"
            >
              Verify
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
