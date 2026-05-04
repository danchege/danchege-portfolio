// ============================================================
//  App.jsx  —  Root component: router, theme provider, layout
// ============================================================
import { useState } from "react";
import { ThemeProvider, useTheme, tokens } from "./context/ThemeContext";
import Navbar  from "./components/Navbar";
import Footer  from "./components/Footer";
import Home       from "./pages/Home";
import About      from "./pages/About";
import Education  from "./pages/Education";
import Projects   from "./pages/Projects";
import Skills     from "./pages/Skills";
import Contact    from "./pages/Contact";
import "./styles/global.css";

// ─── Page registry ────────────────────────────────────────────────────────────
const PAGES = { Home, About, Education, Projects, Skills, Contact };

// ─── Inner shell (needs theme context) ──────────────────────────────────────
const Shell = () => {
  const [page, setPage] = useState("Home");
  const { dark } = useTheme();
  const t = tokens(dark);

  const PageComponent = PAGES[page] || Home;

  // Scroll to top on page change
  const navigate = (newPage) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPage(newPage);
  };

  return (
    <div style={{
      background: t.bg,
      color: t.text,
      minHeight: "100vh",
      transition: "background-color 0.35s ease, color 0.35s ease",
    }}>
      <Navbar page={page} setPage={navigate} />

      <main style={{ animation: "fadeIn 0.35s ease" }}>
        <PageComponent setPage={navigate} />
      </main>

      <Footer setPage={navigate} />
    </div>
  );
};

// ─── Root export ──────────────────────────────────────────────────────────────
const App = () => (
  <ThemeProvider>
    <Shell />
  </ThemeProvider>
);

export default App;
