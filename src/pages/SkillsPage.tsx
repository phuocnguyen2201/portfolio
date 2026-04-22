import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Palette, Code, Layers, Zap } from "lucide-react";
import { useTheme } from "../context/useTheme";

/* ── Interactive Color Mixer Demo ── */
const ColorMixer = () => {
  const [hue, setHue] = useState(13);
  const [saturation, setSaturation] = useState(76);
  const [lightness, setLightness] = useState(61);

  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  const textColor = lightness > 55 ? "#212121" : "#F5F5F0";

  return (
    <div className="brutal-card">
      <div className="tag-badge bg-primary text-black text-lg inline-block mb-4">
        Interactive Demo
      </div>
      <h3 className="font-heading text-xl font-bold mb-4 flex items-center gap-2">
        <Palette size={20} /> Color Mixer
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        Explore HSL color space interactively. Adjust sliders to see real-time changes.
      </p>

      <div
        className="w-full h-32 border-[3px] border-border mb-6 flex items-center justify-center font-heading font-bold text-lg transition-colors duration-200"
        style={{ backgroundColor: color, color: textColor, boxShadow: 'var(--shadow-brutal)' }}
      >
        {color}
      </div>

      <div className="space-y-4">
        {[
          { label: "Hue", value: hue, set: setHue, max: 360 },
          { label: "Saturation", value: saturation, set: setSaturation, max: 100 },
          { label: "Lightness", value: lightness, set: setLightness, max: 100 },
        ].map(({ label, value, set, max }) => (
          <div key={label}>
            <div className="flex justify-between mb-1">
              <label htmlFor={`slider-${label.toLowerCase()}`} className="font-heading font-semibold text-sm">{label}</label>
              <span className="text-muted-foreground text-xs font-heading">{value}</span>
            </div>
            <label htmlFor={`slider-mixer-${label.toLowerCase()}`} className="sr-only">Color Mixer</label>
            <input
              id={`slider-mixer-${label.toLowerCase()}`}
              type="range"
              min={0}
              max={max}
              value={value}
              onChange={(e) => set(Number(e.target.value))}
              className="w-full h-3 appearance-none border-[2px] border-border bg-muted cursor-pointer accent-primary"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Live Component Builder Demo ── */
const ComponentBuilder = () => {
  const [borderWidth, setBorderWidth] = useState(3);
  const [shadowOffset, setShadowOffset] = useState(4);
  const [bgColor, setBgColor] = useState<"primary" | "secondary" | "accent">("primary");

  const bgMap = {
    primary: "bg-primary text-black",
    secondary: "bg-secondary text-black",
    accent: "bg-accent text-accent-foreground",
  };

  return (
    <div className="brutal-card">
      <div className="tag-badge bg-secondary text-black text-lg inline-block mb-4">
        Interactive Demo
      </div>
      <h3 className="font-heading text-xl font-bold mb-4 flex items-center gap-2">
        <Layers size={20} /> Component Builder
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        Build a neo-brutalist button live. Tweak border, shadow, and color.
      </p>

      <div className="flex justify-center py-8 bg-muted/50 border-[2px] border-border mb-6">
        <button
          className={`${bgMap[bgColor]} font-heading font-bold uppercase tracking-wider text-sm px-6 py-3 transition-all`}
          style={{
            border: `${borderWidth}px solid hsl(var(--border))`,
            boxShadow: `${shadowOffset}px ${shadowOffset}px 0px hsl(var(--border))`,
          }}
        >
          Click Me
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="slider-border" className="font-heading font-semibold text-sm mb-1 block">Border: {borderWidth}px</label>
          <label htmlFor="slider-border" className="sr-only">border slider</label>
          <input id="slider-border" type="range" min={0} max={8} value={borderWidth} onChange={(e) => setBorderWidth(Number(e.target.value))} className="w-full h-3 appearance-none border-[2px] border-border bg-muted cursor-pointer accent-primary" />
        </div>
        <div>
          <label htmlFor="slider-shadow" className="font-heading font-semibold text-sm mb-1 block">Shadow: {shadowOffset}px</label>
          <label htmlFor="slider-shadow" className="sr-only">shadow slider</label>
          <input id="slider-shadow" type="range" min={0} max={12} value={shadowOffset} onChange={(e) => setShadowOffset(Number(e.target.value))} className="w-full h-3 appearance-none border-[2px] border-border bg-muted cursor-pointer accent-primary" />
        </div>
        <div>
          <label className="font-heading font-semibold text-sm mb-2 block">Color</label>
          <div className="flex gap-2">
            {(["primary", "secondary", "accent"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setBgColor(c)}
                className={`brutal-btn text-xs border-[2px] px-3 py-1.5 ${bgColor === c ? bgMap[c] : "bg-background text-foreground"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Animation Playground Demo ── */
const AnimationPlayground = () => {
  const [animType, setAnimType] = useState<"bounce" | "rotate" | "scale" | "shake">("bounce");

  const animations = {
    bounce: { y: [0, -30, 0], transition: { repeat: Infinity, duration: 1 } },
    rotate: { rotate: [0, 360], transition: { repeat: Infinity, duration: 2, ease: "linear" as const } },
    scale: { scale: [1, 1.3, 1], transition: { repeat: Infinity, duration: 1.2 } },
    shake: { x: [0, -10, 10, -10, 10, 0], transition: { repeat: Infinity, duration: 0.5 } },
  };

  return (
    <div className="brutal-card">
      <div className="tag-badge bg-accent text-lg text-black inline-block mb-4">
        Interactive Demo
      </div>
      <h3 className="font-heading text-xl font-bold mb-4 flex items-center gap-2">
        <Zap size={20} /> Animation Playground
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        Explore different motion patterns. Click to switch animations.
      </p>

      <div className="flex justify-center py-12 bg-muted/50 border-[2px] border-border mb-6">
        <motion.div
          key={animType}
          animate={animations[animType]}
          className="w-20 h-20 bg-primary border-[3px] border-border"
          style={{ boxShadow: 'var(--shadow-brutal)' }}
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {(["bounce", "rotate", "scale", "shake"] as const).map((a) => (
          <button
            key={a}
            onClick={() => setAnimType(a)}
            className={`brutal-btn text-xs border-[2px] px-3 py-1.5 capitalize ${
              animType === a ? "bg-primary text-black" : "bg-background text-foreground"
            }`}
          >
            {a}
          </button>
        ))}
      </div>
    </div>
  );
};

/* ── Case Study Section ── */
const CaseStudy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="brutal-card"
    >
      <div className="tag-badge bg-primary text-black text-lg inline-block mb-4">
        Case Study
      </div>
      <h3 className="font-heading text-2xl font-bold mb-3 flex items-center gap-2">
        <Code size={22} /> Design System at Scale
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        How I built and maintained a component library used by 30+ developers across 5 product teams.
      </p>

      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        {[
          { metric: "50+", label: "Components" },
          { metric: "90%", label: "Consistency" },
          { metric: "3x", label: "Faster Dev" },
        ].map((item) => (
          <div key={item.label} className="border-[2px] border-border p-4 text-center bg-muted/30" style={{ boxShadow: 'var(--shadow-brutal)' }}>
            <div className="font-heading text-3xl font-bold text-primary">{item.metric}</div>
            <div className="text-muted-foreground text-xs font-heading uppercase tracking-wider mt-1">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="space-y-4 text-sm">
        <div>
          <h4 className="font-heading font-bold mb-1">Challenge</h4>
          <p className="text-muted-foreground">Inconsistent UI across products led to fragmented user experience and duplicated engineering effort.</p>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-1">Approach</h4>
          <p className="text-muted-foreground">Created a token-based design system with Figma-to-code pipelines, automated testing, and living documentation via Storybook.</p>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-1">Outcome</h4>
          <p className="text-muted-foreground">Reduced UI bugs by 60%, cut new feature development time by 3x, and achieved 98% WCAG AA compliance across all products.</p>
        </div>
      </div>
    </motion.div>
  );
};

/* ── Skills Page ── */
const SkillsPage = () => {
  const { isDark } = useTheme();
  useEffect(() => {
    document.title = "Skills lab";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <section className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="tag-badge bg-accent text-accent-foreground inline-block mb-6">
              Hands-on
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">
              Skills <span className={`${isDark ? 'text-primary' : 'text-secondary'} transition-colors duration-300`}>Lab</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              Interactive demos and case studies that show — not just tell — what I can do.
            </p>
          </motion.div>

          {/* Interactive Demos */}
          <h2 className="font-heading text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-primary inline-block" />
            Interactive Demos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            <ColorMixer />
            <ComponentBuilder />
            <AnimationPlayground />
          </div>

          {/* Case Studies */}
          <h2 className="font-heading text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-secondary inline-block" />
            Case Studies
          </h2>
          <div className="grid md:grid-cols-1 gap-6">
            <CaseStudy />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SkillsPage;
