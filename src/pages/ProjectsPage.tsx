import { useEffect, useMemo, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { useTheme } from "../context/useTheme";
import Footer from "../components/Footer";
import Header from "../components/Header";

const projectTypes = [
  { value: "all", label: "All Types" },
  { value: "mobile", label: "Mobile" },
  { value: "web", label: "Web" },
  { value: "ai", label: "AI" },
  { value: "others", label: "Others" },
];

const ProjectsPage = () => {
  useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState("all");
  const [tagsDropdownOpen, setTagsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Projects";
    window.scrollTo(0, 0);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setTagsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Get all unique tags for filtering
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    projects.forEach((project) => {
      project.tags.forEach((tag) => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
  }, []);

  // Filter projects based on search, type, and selected tags
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchLower));

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => project.tags.includes(tag));

      const matchesType =
        selectedType === "all" || project.type === selectedType;

      return matchesSearch && matchesTags && matchesType;
    });
  }, [searchQuery, selectedTags, selectedType]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
    setSelectedType("all");
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background border-b-[3px] border-border">
        <div className="w-full px-6 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4 mt-20">
              All <span className="text-secondary">Projects</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore my complete portfolio of projects spanning mobile apps,
              design tools, testing frameworks, and financial solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 w-full px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            {/* Search Bar */}
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search by project name, description, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 border-[3px] border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:shadow-[2px_2px_0px_0px_rgba(var(--primary-rgb),0.3)]"
              />
            </div>

            {/* Filters Row */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {/* Type Filter */}
              <div>
                <label id='type-filter' className="text-sm font-heading font-bold mb-2 block">
                  Filter by Type
                </label>
                <select
                aria-labelledby="type-filter"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-2 border-[2px] border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary appearance-none cursor-pointer"
                >
                  {projectTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tags Filter */}
              <div>
                <label className="text-sm font-heading font-bold mb-2 block">
                  Filter by Tags
                </label>
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setTagsDropdownOpen(!tagsDropdownOpen)}
                    className="w-full px-4 py-2 border-[2px] border-border rounded-lg bg-background text-foreground text-left flex items-center justify-between focus:outline-none focus:border-primary"
                  >
                    <span className="text-sm">
                      {selectedTags.length === 0
                        ? "All Tags"
                        : `${selectedTags.length} selected`}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        tagsDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {tagsDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-background border-[2px] border-border rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
                      {allTags.map((tag) => (
                        <label
                          key={tag}
                          className="flex items-center gap-2 px-4 py-2 hover:bg-muted cursor-pointer border-b border-border last:border-b-0"
                        >
                          <input
                            type="checkbox"
                            checked={selectedTags.includes(tag)}
                            onChange={() => toggleTag(tag)}
                            className="cursor-pointer"
                          />
                          <span className="text-sm">{tag}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Results Count and Clear Button */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Showing {filteredProjects.length} of {projects.length} projects
                {searchQuery && ` matching "${searchQuery}"`}
                {selectedTags.length > 0 && ` with selected tags`}
                {selectedType !== "all" && ` of type "${selectedType}"`}
              </div>
              {(selectedTags.length > 0 ||
                selectedType !== "all" ||
                searchQuery) && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
                >
                  Clear all
                </button>
              )}
            </div>
          </motion.div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredProjects.map((project, idx) => (
                <motion.article
                  key={project.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="brutal-card group h-full flex flex-col"
                >
                  <div className={`${project.color} h-40 border-b-[3px] border-border -m-6 mb-6 flex items-center justify-center`}>
                    <div
                      className={`w-16 h-16 ${project.accent} border-[3px] border-border rotate-12 group-hover:rotate-45 transition-transform duration-300`}
                    />
                  </div>

                  <h3 className="font-heading text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex gap-3 mb-6">
                    <Link
                      to={`/project/${project.slug}`}
                      state={{ referrer: "projects" }}
                      className="brutal-btn flex-1 text-xs border-[2px] px-3 py-1.5 bg-background text-foreground flex items-center justify-center gap-1.5 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ArrowRight size={12} /> Learn More
                    </Link>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="brutal-btn flex-1 text-xs border-[2px] px-3 py-1.5 bg-background text-foreground flex items-center justify-center gap-1.5 hover:bg-secondary hover:text-secondary-foreground transition-colors"
                    >
                      <ExternalLink size={12} /> View Repo
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`tag-badge text-xs bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer ${
                          selectedTags.includes(tag)
                            ? "bg-primary text-primary-foreground"
                            : ""
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="brutal-card text-center py-16"
            >
              <h3 className="font-heading text-2xl font-bold mb-4">
                No projects found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filters to find what you're looking
                for.
              </p>
              <button
                onClick={clearFilters}
                className="brutal-btn text-sm border-[2px] px-6 py-2 inline-flex items-center gap-2 bg-background text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <X size={14} /> Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
