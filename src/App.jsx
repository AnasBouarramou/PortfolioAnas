// ============================================
// APP.JSX
// Assemblage de la page d'accueil
// ============================================

import { LanguageProvider } from "./lib/i18n";
import { useCursor } from "./hooks";
import {
  Layout,
  Background,
  Cursor,
  Header,
  Hero,
  Expertise,
  Approach, // Nouveau
  Projects,
  Contact,
  Footer,
} from "./components";

// Styles
import "./styles/globals.css";
import "./styles/ui.css";
import "./styles/sections.css";

function HomePage() {
  const {
    dotRef,
    outlineRef,
    isHovering,
    isFinePointer,
    cursorPos,
    handleMouseEnter,
    handleMouseLeave,
  } = useCursor();

  return (
    <Layout>
      {/* Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Background Effects */}
      <Background />

      {/* Custom Cursor */}
      {isFinePointer && (
        <Cursor dotRef={dotRef} outlineRef={outlineRef} isActive={isHovering} />
      )}

      {/* Header */}
      <Header onHoverEnter={handleMouseEnter} onHoverLeave={handleMouseLeave} />

      {/* Main Content */}
      <main id="main-content">
        <Hero onHoverEnter={handleMouseEnter} onHoverLeave={handleMouseLeave} />

        <Expertise
          onHoverEnter={handleMouseEnter}
          onHoverLeave={handleMouseLeave}
        />

        <Approach
          onHoverEnter={handleMouseEnter}
          onHoverLeave={handleMouseLeave}
        />

        <Projects
          onHoverEnter={handleMouseEnter}
          onHoverLeave={handleMouseLeave}
          cursorPos={cursorPos}
        />

        <Contact
          onHoverEnter={handleMouseEnter}
          onHoverLeave={handleMouseLeave}
        />
      </main>
      {/* Footer */}
      <Footer onHoverEnter={handleMouseEnter} onHoverLeave={handleMouseLeave} />
    </Layout>
  );
}

function App() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
}

export default App;
