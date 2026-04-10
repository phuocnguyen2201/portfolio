import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import heroImage from "../assets/hero.png";

const AccessibilityDemo = () => {
  useEffect(() => {
    document.title = "Accessibility Demo";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <header className="text-center mb-16">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">
              WCAG 2.1 <span className="text-primary">Accessibility</span> Demo
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              This interactive demo showcases four essential accessibility practices from WCAG 2.1 guidelines.
              These practices ensure digital content is usable by people with disabilities, improving the experience
              for screen reader users, keyboard navigators, and those with visual impairments.
            </p>
          </header>

          <div className="space-y-16">
            <HeadingOrderSection />
            <ColorContrastSection />
            <TabOrderSection />
            <ImageDescriptionSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const HeadingOrderSection = () => {
  const [activeExample, setActiveExample] = React.useState('good');

  const goodHeadings = (
    <div className="brutal-card p-6 space-y-4">
      <div className="grid gap-3">
        <div className="flex items-center justify-between rounded border border-border bg-muted p-3">
          <h1 className="font-heading text-2xl font-bold m-0">Main Page Title</h1>
          <code className="text-sm text-muted-foreground">{`<h1>Main Page Title</h1>`}</code>
        </div>
        <div className="flex items-center justify-between rounded border border-border bg-muted p-3">
          <h2 className="font-heading text-xl font-semibold m-0">Section One</h2>
          <code className="text-sm text-muted-foreground">{`<h2>Section One</h2>`}</code>
        </div>
        <div className="flex items-center justify-between rounded border border-border bg-muted p-3">
          <h3 className="font-heading text-lg font-medium m-0">Subsection A</h3>
          <code className="text-sm text-muted-foreground">{`<h3>Subsection A</h3>`}</code>
        </div>
        <div className="flex items-center justify-between rounded border border-border bg-muted p-3">
          <h2 className="font-heading text-xl font-semibold m-0">Section Two</h2>
          <code className="text-sm text-muted-foreground">{`<h2>Section Two</h2>`}</code>
        </div>
        <div className="flex items-center justify-between rounded border border-border bg-muted p-3">
          <h3 className="font-heading text-lg font-medium m-0">Subsection B</h3>
          <code className="text-sm text-muted-foreground">{`<h3>Subsection B</h3>`}</code>
        </div>
        <div className="flex items-center justify-between rounded border border-border bg-muted p-3">
          <h4 className="font-heading text-base font-medium m-0">Sub-subsection</h4>
          <code className="text-sm text-muted-foreground">{`<h4>Sub-subsection</h4>`}</code>
        </div>
      </div>
    </div>
  );

  const badHeadings = (
    <div className="brutal-card p-6 space-y-4">
      <div className="grid gap-3">
        <div className="flex items-center justify-between rounded border border-border bg-muted p-3">
          <h1 className="font-heading text-2xl font-bold m-0">Main Page Title</h1>
          <code className="text-sm text-muted-foreground">{`<h1>Main Page Title</h1>`}</code>
        </div>
        <div className="flex items-center justify-between rounded border border-border bg-muted p-3">
          <h3 className="font-heading text-lg font-medium m-0">Skipped to H3</h3>
          <code className="text-sm text-muted-foreground">{`<h3>Skipped to H3</h3>`}</code>
        </div>
        <div className="flex items-center justify-between rounded border border-border bg-muted p-3">
          <h2 className="font-heading text-xl font-semibold m-0">Back to H2 (confusing)</h2>
          <code className="text-sm text-muted-foreground">{`<h2>Back to H2 (confusing)</h2>`}</code>
        </div>
      </div>
    </div>
  );

  const screenReaderOutput = activeExample === 'good'
    ? "Screen reader: 'Main Page Title, heading level 1. Section One, heading level 2. Subsection A, heading level 3. Section Two, heading level 2. Subsection B, heading level 3. Sub-subsection, heading level 4.'"
    : "Screen reader: 'Main Page Title, heading level 1. Skipped to H3, heading level 3. Back to H2 (confusing), heading level 2.' (User may be confused by skipped levels)";

  return (
    <section className="brutal-card">
        
      <div className="tag-badge bg-primary text-primary-foreground inline-block mb-4">
        Practice 1
      </div>
      <h2 className="font-heading text-3xl font-bold mb-4">Heading Order</h2>
      <p className="text-muted-foreground mb-6">
        Proper heading hierarchy (h1 → h2 → h3 → h4 → h5 → h6) helps screen readers understand page structure.
        Skipping heading levels can confuse users and make navigation difficult.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-heading text-xl font-semibold mb-3">Good Example: Proper Hierarchy</h3>
          <button
            className="brutal-btn text-sm border-[2px] px-4 py-2 mb-4"
            onClick={() => setActiveExample('good')}
            aria-pressed={activeExample === 'good'}
          >
            Show Good Example
          </button>
          {activeExample === 'good' && goodHeadings}
        </div>

        <div>
          <h3 className="font-heading text-xl font-semibold mb-3">Bad Example: Skipped Levels</h3>
          <button
            className="brutal-btn text-sm border-[2px] px-4 py-2 mb-4"
            onClick={() => setActiveExample('bad')}
            aria-pressed={activeExample === 'bad'}
          >
            Show Bad Example
          </button>
          {activeExample === 'bad' && badHeadings}
        </div>
      </div>

      <div className="bg-muted p-4 border-[2px] border-border">
        <strong>Screen Reader Output:</strong><br />
        <code className="text-sm">{screenReaderOutput}</code>
      </div>
    </section>
  );
};

const ColorContrastSection = () => {
  const [textSize, setTextSize] = React.useState('small');

  const calculateContrast = (bg: string, fg: string) => {
    // Simplified contrast calculation
    const bgLuminance = bg === '#ffffff' ? 1 : 0.1;
    const fgLuminance = fg === '#000000' ? 0 : 0.9;
    const ratio = (bgLuminance + 0.05) / (fgLuminance + 0.05);
    return Math.round(ratio * 10) / 10;
  };

  const isPass = (ratio: number, size: string) => {
    return size === 'small' ? ratio >= 4.5 : ratio >= 3.0;
  };

  const examples = [
    {
      bg: '#ffffff',
      fg: '#000000',
      size: 'small',
      text: 'Small text with good contrast',
      ratio: calculateContrast('#ffffff', '#000000')
    },
    {
      bg: '#ffffff',
      fg: '#777777',
      size: 'small',
      text: 'Small text with poor contrast',
      ratio: calculateContrast('#ffffff', '#777777')
    },
    {
      bg: '#ffffff',
      fg: '#000000',
      size: 'large',
      text: 'Large text with good contrast',
      ratio: calculateContrast('#ffffff', '#000000')
    },
    {
      bg: '#ffffff',
      fg: '#999999',
      size: 'large',
      text: 'Large text with poor contrast',
      ratio: calculateContrast('#ffffff', '#999999')
    }
  ];

  return (
    <section className="brutal-card">
      <div className="tag-badge bg-secondary text-secondary-foreground inline-block mb-4">
        Practice 2
      </div>
      <h2 className="font-heading text-3xl font-bold mb-4">Color Contrast</h2>
      <p className="text-muted-foreground mb-6">
        Text must have sufficient contrast against its background. WCAG requires 4.5:1 for small text (&lt;18pt)
        and 3:1 for large text (≥18pt). Poor contrast makes content unreadable for users with visual impairments.
      </p>

      <div className="flex gap-4 mb-6">
        <button
          className="brutal-btn text-sm border-[2px] px-4 py-2"
          onClick={() => setTextSize('small')}
          aria-pressed={textSize === 'small'}
        >
          Small Text Examples
        </button>
        <button
          className="brutal-btn text-sm border-[2px] px-4 py-2"
          onClick={() => setTextSize('large')}
          aria-pressed={textSize === 'large'}
        >
          Large Text Examples
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {examples
          .filter(example => example.size === textSize)
          .map((example, index) => (
            <div key={index} className={`p-4 border-[2px] ${isPass(example.ratio, example.size) ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
              <div
                style={{
                  backgroundColor: example.bg,
                  color: example.fg,
                  fontSize: example.size === 'small' ? '14px' : '24px',
                  fontWeight: example.size === 'small' ? 'normal' : 'bold',
                  padding: '1rem'
                }}
              >
                {example.text}
              </div>
              <div className="mt-2 font-semibold" style={{ color: '#000000' }}>
                Contrast Ratio: {example.ratio}:1
                ({isPass(example.ratio, example.size) ? 'PASS' : 'FAIL'})
              </div>
            </div>
          ))}
      </div>

      <div className="bg-muted p-4 border-[2px] border-border mt-6">
        <strong>Screen Reader Note:</strong><br />
        Screen readers cannot detect contrast issues. Users with visual impairments may not be able to read low-contrast text.
      </div>
    </section>
  );
};

const TabOrderSection = () => {
  const [demoType, setDemoType] = React.useState('good');

  const goodOrder = (
    <div className="space-y-4">
      <div className="rounded border border-border bg-muted p-3">
        <label className="flex flex-col gap-2">
          <span className="font-semibold">First name</span>
          <input className="brutal-btn border-[2px] px-4 py-2 bg-background w-full" type="text" placeholder="First name" />
        </label>
        <code className="text-sm text-muted-foreground block mt-3">{`<label><input type="text" placeholder="First name" /></label>`}</code>
      </div>
      <div className="rounded border border-border bg-muted p-3">
        <label className="flex flex-col gap-2">
          <span className="font-semibold">Last name</span>
          <input className="brutal-btn border-[2px] px-4 py-2 bg-background w-full" type="text" placeholder="Last name" />
        </label>
        <code className="text-sm text-muted-foreground block mt-3">{`<label><input type="text" placeholder="Last name" /></label>`}</code>
      </div>
      <div className="rounded border border-border bg-muted p-3">
        <button type="button" className="brutal-btn border-[2px] px-4 py-2">Submit</button>
        <code className="text-sm text-muted-foreground block mt-3">{`<button type="button">Submit</button>`}</code>
      </div>
      <div className="rounded border border-border bg-muted p-3">
        <a href="#top" className="brutal-btn border-[2px] px-4 py-2 inline-block">Back to top</a>
        <code className="text-sm text-muted-foreground block mt-3">{`<a href="#top">Back to top</a>`}</code>
      </div>
    </div>
  );

  const badOrder = (
    <div className="space-y-4">
      <div className="rounded border border-border bg-muted p-3">
        <label className="flex flex-col gap-2">
          <span className="font-semibold">First name</span>
          <input className="brutal-btn border-[2px] px-4 py-2 bg-background w-full" type="text" placeholder="First name" tabIndex={3} />
        </label>
        <code className="text-sm text-muted-foreground block mt-3">{`<label><input type="text" placeholder="First name" tabindex="3" /></label>`}</code>
      </div>
      <div className="rounded border border-border bg-muted p-3">
        <label className="flex flex-col gap-2">
          <span className="font-semibold">Last name</span>
          <input className="brutal-btn border-[2px] px-4 py-2 bg-background w-full" type="text" placeholder="Last name" tabIndex={1} />
        </label>
        <code className="text-sm text-muted-foreground block mt-3">{`<label><input type="text" placeholder="Last name" tabindex="1" /></label>`}</code>
      </div>
      <div className="rounded border border-border bg-muted p-3">
        <button type="button" className="brutal-btn border-[2px] px-4 py-2" tabIndex={2}>Submit</button>
        <code className="text-sm text-muted-foreground block mt-3">{`<button type="button" tabindex="2">Submit</button>`}</code>
      </div>
      <div className="rounded border border-border bg-muted p-3">
        <a href="#top" className="brutal-btn border-[2px] px-4 py-2 inline-block" tabIndex={4}>Back to top</a>
        <code className="text-sm text-muted-foreground block mt-3">{`<a href="#top" tabindex="4">Back to top</a>`}</code>
      </div>
    </div>
  );

  const screenReaderOutput = demoType === 'good'
    ? "Screen reader focus order: 'First name, edit text. Last name, edit text. Submit, button. Back to top, link.'"
    : "Screen reader focus order: 'Last name, edit text. Submit, button. First name, edit text. Back to top, link.' (Confusing order due to tabindex values)";

  return (
    <section className="brutal-card">
      <div className="tag-badge bg-accent text-accent-foreground inline-block mb-4">
        Practice 3
      </div>
      <h2 className="font-heading text-3xl font-bold mb-4">Tab Order (Keyboard Navigation)</h2>
      <p className="text-muted-foreground mb-6">
        Keyboard users navigate using Tab key. Elements should be focused in a logical order matching visual layout.
        Avoid positive tabindex values as they disrupt natural tab order. Use tabindex="0" only for custom focusable elements.
      </p>

      <div className="flex gap-4 mb-6">
        <button
          className="brutal-btn text-sm border-[2px] px-4 py-2"
          onClick={() => setDemoType('good')}
          aria-pressed={demoType === 'good'}
        >
          Good Tab Order
        </button>
        <button
          className="brutal-btn text-sm border-[2px] px-4 py-2"
          onClick={() => setDemoType('bad')}
          aria-pressed={demoType === 'bad'}
        >
          Bad Tab Order (tabindex)
        </button>
      </div>

      <div className="brutal-card p-6 mb-6">
        <p className="mb-4">Try tabbing through these elements:</p>
        {demoType === 'good' ? goodOrder : badOrder}
      </div>

      <div className="bg-muted p-4 border-[2px] border-border">
        <strong>Screen Reader Focus Order:</strong><br />
        <code className="text-sm">{screenReaderOutput}</code>
      </div>

      <p className="text-sm text-muted-foreground mt-4">
        <strong>Note:</strong> tabindex="0" is acceptable for making non-native elements focusable.
        Positive tabindex values (1, 2, 3...) should never be used as they break logical navigation.
      </p>
    </section>
  );
};

const ImageDescriptionSection = () => {
  const [activeImage, setActiveImage] = React.useState('informative');

  const images = {
    informative: {
      src: heroImage,
      alt: 'Layered square icon representing stacked content or components',
      description: 'Informative image with descriptive alt text'
    },
    decorative: {
      src: heroImage,
      alt: '',
      description: 'Decorative image with empty alt attribute'
    },
    missing: {
      src: heroImage,
      alt: undefined,
      description: 'Image with missing alt attribute (bad practice)'
    }
  };

  const currentImage = images[activeImage as keyof typeof images];
  const screenReaderOutput = activeImage === 'informative'
    ? `Screen reader: "Layered square icon representing stacked content or components, image"`
    : activeImage === 'decorative'
    ? `Screen reader: (Image ignored - no announcement)`
    : `Screen reader: "Team Photo, image" (Generic announcement, user gets no useful information)`;

  return (
    <section className="brutal-card">
      <div className="tag-badge bg-primary text-primary-foreground inline-block mb-4">
        Practice 4
      </div>
      <h2 className="font-heading text-3xl font-bold mb-4">Image Description (Alt Text)</h2>
      <p className="text-muted-foreground mb-6">
        Images need appropriate alt text for screen readers. Informative images should have descriptive alt text.
        Purely decorative images should have alt="" to be ignored by screen readers. Missing alt text results in generic announcements.
      </p>

      <div className="flex flex-wrap gap-4 mb-6" role="group" aria-label="Image description examples">
        <button
          type="button"
          className="brutal-btn text-sm border-[2px] px-4 py-2"
          onClick={() => setActiveImage('informative')}
          aria-pressed={activeImage === 'informative'}
        >
          Informative Image
        </button>
        <button
          type="button"
          className="brutal-btn text-sm border-[2px] px-4 py-2"
          onClick={() => setActiveImage('decorative')}
          aria-pressed={activeImage === 'decorative'}
        >
          Decorative Image
        </button>
        <button
          type="button"
          className="brutal-btn text-sm border-[2px] px-4 py-2"
          onClick={() => setActiveImage('missing')}
          aria-pressed={activeImage === 'missing'}
        >
          Missing Alt Text
        </button>
      </div>

      <div className="brutal-card p-6 mb-6 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-start">
        <figure>
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="w-full max-w-md border-[2px] border-border mb-4 aspect-[3/2] object-cover"
          />
          <figcaption className="font-semibold mb-2">{currentImage.description}</figcaption>
          <p className="text-sm text-muted-foreground">Alt text: "{currentImage.alt || '(empty)'}"</p>
        </figure>
        <div className="rounded border border-border bg-muted p-4">
          <p className="font-semibold mb-3">Markup Example</p>
          <code className="block whitespace-pre-wrap text-sm text-muted-foreground">
            {activeImage === 'informative' && `<img src="hero.png" alt="Layered square icon representing stacked content or components" />`}
            {activeImage === 'decorative' && `<img src="hero.png" alt="" />`}
            {activeImage === 'missing' && `<img src="hero.png" />`}
          </code>
        </div>
      </div>

      <div className="bg-muted p-4 border-[2px] border-border">
        <strong>Screen Reader Output:</strong><br />
        <code className="text-sm">{screenReaderOutput}</code>
      </div>
      
    </section>
  );
};

export default AccessibilityDemo;