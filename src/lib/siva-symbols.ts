@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap");

:root {
  --bg-1: #05070d;
  --bg-2: #0f1320;
  --panel: rgba(17, 20, 31, 0.82);
  --panel-border: rgba(186, 194, 220, 0.2);
  --text: #f5f3ee;
  --muted: #d9dbe4;
  --muted-strong: #bfc6de;
  --accent: #caa6ff;
  --gold: #f9d79d;
  --shadow: rgba(10, 10, 16, 0.75);
}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  min-height: 100%;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top, rgba(118, 112, 189, 0.38), transparent 25%),
    linear-gradient(135deg, var(--bg-1), var(--bg-2));
  color: var(--text);
}

body {
  min-height: 100vh;
}

button {
  font: inherit;
}

.app-shell {
  position: relative;
  display: grid;
  gap: 1rem;
  min-height: 100vh;
  padding: 1.1rem;
  max-width: 1500px;
  margin: 0 auto;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background: rgba(15, 18, 28, 0.72);
  border: 1px solid var(--panel-border);
  border-radius: 1rem;
  box-shadow: 0 18px 50px var(--shadow);
  backdrop-filter: blur(12px);
}

.eyebrow {
  margin: 0 0 0.2rem 0;
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted-strong);
}

h1,
h2,
h3 {
  margin: 0;
  font-family: "Cormorant Garamond", serif;
  font-weight: 600;
}

h1 {
  font-size: clamp(2.5rem, 4vw, 4.5rem);
  letter-spacing: 0.18em;
}

.mode-toggle,
.toolbar,
.control-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.mode-toggle button,
.toolbar button,
.symbol-marker {
  border: 1px solid rgba(240, 232, 255, 0.22);
  background: rgba(20, 25, 36, 0.9);
  color: var(--text);
  border-radius: 999px;
  padding: 0.68rem 1rem;
  cursor: pointer;
  transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
}

.mode-toggle button:hover,
.toolbar button:hover,
.symbol-marker:hover {
  transform: translateY(-1px);
  border-color: rgba(220, 203, 255, 0.42);
}

.mode-toggle button.active,
.toolbar button.active {
  background: linear-gradient(135deg, rgba(116, 89, 171, 0.72), rgba(69, 106, 164, 0.8));
  border-color: rgba(255, 235, 170, 0.42);
  box-shadow: 0 12px 24px rgba(119, 96, 180, 0.22);
}

.scene-panel {
  position: relative;
  min-height: 70vh;
  border-radius: 1.25rem;
  overflow: hidden;
  border: 1px solid var(--panel-border);
  background: rgba(8, 10, 16, 0.7);
  box-shadow: 0 18px 48px var(--shadow);
}

.detail-panel {
  position: absolute;
  right: 1rem;
  top: 6.3rem;
  width: min(26rem, calc(100% - 2rem));
  padding: 1.2rem 1.25rem;
  border-radius: 1rem;
  background: rgba(12, 16, 24, 0.8);
  border: 1px solid var(--panel-border);
  backdrop-filter: blur(12px);
  box-shadow: 0 28px 60px rgba(0, 0, 0, 0.28);
}

.heading-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.8rem;
  margin-bottom: 0.75rem;
}

.tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(246, 210, 149, 0.12);
  border: 1px solid rgba(246, 210, 149, 0.42);
  border-radius: 999px;
  padding: 0.3rem 0.75rem;
  color: var(--gold);
  font-size: 0.76rem;
}

.subtitle {
  margin: 0 0 0.85rem;
  color: var(--muted);
  line-height: 1.6;
  font-size: 0.96rem;
}

.subtitle.ta {
  color: #f1d9ff;
}

.explanation-block {
  margin-top: 1rem;
}

.explanation-block h3 {
  margin-bottom: 0.45rem;
  font-size: 1.25rem;
  color: var(--gold);
}

.explanation-block p,
.art-note {
  margin: 0;
  color: var(--text);
  line-height: 1.7;
}

.art-note {
  margin-top: 1rem;
  padding-top: 0.8rem;
  border-top: 1px solid rgba(220, 225, 245, 0.18);
  color: var(--muted-strong);
  font-size: 0.85rem;
}

.toolbar {
  justify-content: space-between;
  padding: 0.8rem 1rem 0.1rem;
  color: var(--muted);
}

.control-group {
  background: rgba(14, 18, 27, 0.72);
  border: 1px solid var(--panel-border);
  border-radius: 999px;
  padding: 0.4rem 0.55rem;
}

.control-group span {
  margin: 0 0.2rem;
  font-size: 0.76rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted-strong);
}

.symbol-marker {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 5.5rem;
  background: rgba(38, 42, 58, 0.9);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.symbol-marker.selected {
  background: linear-gradient(135deg, rgba(146, 115, 207, 0.9), rgba(80, 123, 221, 0.9));
  box-shadow: 0 12px 28px rgba(144, 96, 176, 0.3);
}

@media (max-width: 760px) {
  .app-shell {
    padding: 0.75rem;
  }

  .top-bar {
    flex-direction: column;
    align-items: flex-start;
  }

  .scene-panel {
    min-height: 60vh;
  }

  .detail-panel {
    position: static;
    width: 100%;
    margin-top: 0.75rem;
  }

  .toolbar {
    flex-direction: column;
    align-items: stretch;
  }

  .control-group {
    width: 100%;
    justify-content: space-between;
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
