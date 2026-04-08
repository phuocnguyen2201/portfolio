import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    slug: "sd-chat",
    title: "SD Chat",
    description: "A secure mobile messaging app with end-to-end encryption, Supabase realtime sync, and push notifications.",
    details: "SD Chat is a React Native app built with Expo that prioritizes user privacy and security for internal-use only, approximately 15 users. It features end-to-end encryption for all messages, ensuring that only the sender and recipient can read the content. The app uses Supabase for realtime data synchronization, allowing for instant message delivery and updates across devices, integrates Expo Push Notifications to keep users informed of new messages even when the app is in the background.",
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
    techStack: ["React Native", "Expo", "TypeScript","Firebase", "supabase included Edge Functions, Database, Storage and realtime", "E2E Encryption", "Expo Push Notifications", "gluestack v3", "symmetric-key cryptography"],
    story: "It's all started when my dad send me his passport photo via messenger, but he mistakenly make it public like a post on Facebook, so everyone can see it. I was so scared and took almost an hour to instruct him to delete it. Secondly, the common sense about privacy and security is still very low in Vietnam, especially for the older generation. I want to build an app that can be used by my family and friends, so they can communicate without worrying about their privacy.",
    journey:[
      {title:"Cryptographic Protocols", url:"https://github.com/phuocnguyen2201/info-sec/blob/main/h5-Uryyb-Greb!.md", description:"I started with basic knowledge of cryptographic protocols, obtained through a security course in Haaga-Helia taught by Tero Karvinen here is his website: https://terokarvinen.com/. So, I understand the concepts of symmetric and asymmetric encryption, key exchange, hashing, encryption and decryption."},
      {title:"Choosing Technologies", url:"", description:"For the front-end I choose Expo React Native enable me to build for both Android and iOS but right now only android is available, back-end will be powered by Supabase they provide database, storage for images and documents, realtime for sending and receiving messages, edge function for Push Notification. For encryption, I will use symmetric-key cryptography, I will implement the encryption and decryption logic using the crypto library in JavaScript like ChaCha20-Poly1305 encryption, Ed25519 key pair generation and ECDH key exchange, expo-secure-store for secure local storage."},
      {title:"Current challenges and future solutions", url:"", description:"The app was first design to be use on a single device, when you use more than one device, It will need to re-design the architecture of key management, since the need for secure key distribution and storage across multiple devices is a significant challenge."},],
    color: "bg-primary/10",
    accent: "bg-primary",
  },
  {
    slug: "accessibility-view",
    title: "Accessibility View",
    description: "A Figma plugin for WCAG contrast checks, color blindness simulation, and AI-assisted palette generation.",
    details: "Accessibility View is a Figma plugin designed to help designers create more inclusive and accessible designs. It provides tools for checking color contrast against WCAG guidelines, simulating various types of color blindness, and generating AI-assisted color palettes that meet accessibility standards. The plugin integrates with the Figma API to analyze design elements in real-time, offering actionable feedback and suggestions for improving accessibility. By incorporating this plugin into their workflow, designers can ensure that their creations are usable by a wider audience, including those with visual impairments.",
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
    techStack: ["TypeScript", "Figma Plugin API", "WCAG Guidelines", "Color Blindness Simulation", "AI Palette Generation"],
    story:"During the time I working as a QA, there is one particular task that overlapped with my other responsibilities, and I find it very easy to do, and it can be eliminated in early stage of desing instead of development stage. So, I decided to build a tool to be assist for designers.",
    journey:[
      {title:"Initial Concept", url:"https://en.wikipedia.org/wiki/Color_blindness", description:"The idea was born from the need to streamline the accessibility checking process in our design workflow."}, {title:"Development", url:"https://stackoverflow.com/questions/635022/calculating-contrasting-colours-in-javascript", description:"I started by learning the Figma Plugin API and setting up a development environment.I dont have to worry much about the solution, there is a lot of existing solutions can find on the internet especially on stackoverflow. I implemented features incrementally, starting with color contrast checks, followed by color blindness simulation, and finally AI-assisted palette generation."}],
    color: "bg-secondary/10",
    accent: "bg-secondary",
  },
  {
    slug: "playwright-showcase",
    title: "Playwright Showcase",
    description: "A compact test suite demonstrating E2E coverage for web apps, MFA flows, and accessibility checks.",
    details: "Playwright Showcase is a curated collection of end-to-end tests built with Playwright, designed to demonstrate best practices in web application testing. The suite includes tests for common user flows, multi-factor authentication (MFA) scenarios, and accessibility checks using Axe. Each test is crafted to be concise yet comprehensive, providing clear examples of how to structure tests for maintainability and reliability. The project serves as a reference for developers looking to implement robust testing strategies in their web applications, ensuring high-quality releases and improved user experience.",
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
    techStack: ["Playwright", "TypeScript", "Axe Accessibility", "MFA Testing", "Cross-Browser"],
    story:"",
    journey:[],
    color: "bg-accent/20",
    accent: "bg-accent",
  },
  {
    slug: "financial-management",
    title: "Financial Management",
    description: "A bill scanner and expense tracker using OCR, Firebase, and visual analytics for spending insights.",
    details: "Financial Management is a React Native app that helps users track their expenses by scanning receipts using OCR technology. The app utilizes Tesseract OCR to extract text from receipt images, allowing users to quickly log their expenses without manual entry. Data is stored and synchronized in real-time using Firebase Realtime Database, ensuring that users can access their financial information across devices. The app also features visual analytics powered by Victory Charts, providing users with insights into their spending habits through interactive graphs and charts. This project showcases the integration of mobile development, OCR, cloud databases, and data visualization to create a practical financial tool.",
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
    techStack: ["React Native", "Tesseract OCR", "Firebase Realtime Database", "Victory Charts", "Mobile UX"],
    story:"",
    journey:[],
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
            <p className="text-muted-foreground text-sm mb-6">{project.description}</p>
            <div className="flex gap-3 mb-6">
              <Link
                to={`/project/${project.slug}`}
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
                <ExternalLink size={12} /> View Repo
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

export { projects };
export default ProjectsSection;
