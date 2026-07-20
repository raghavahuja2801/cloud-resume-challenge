// src/components/LoadingScreen.jsx
import { useEffect, useState, useRef } from "react";

/**
 * LoadingScreen
 * A ~2.4s terminal-boot / glitch-out loader.
 *
 * Usage in your real app (App.jsx):
 *
 *   const [loading, setLoading] = useState(true);
 *   return (
 *     <>
 *       {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
 *       {!loading && <YourRealSite />}
 *     </>
 *   );
 *
 * Props:
 *   onComplete  - called once the boot + glitch-out sequence finishes
 *   duration    - total lifetime in ms (default 2400)
 */
export default function LoadingScreen({ onComplete = () => {}, duration = 2400 }) {
  const [phase, setPhase] = useState("boot"); // boot -> glitch -> gone
  const [visibleLines, setVisibleLines] = useState(0);
  const doneRef = useRef(false);

  const lines = [
    "$ init --profile=dev",
    "loading modules ......... ok",
    "mounting components ..... ok",
    "compiling ui ............ ok",
    "$ ready",
  ];

  useEffect(() => {
    // stagger the boot lines across the first ~55% of the duration
    const bootWindow = duration * 0.58;
    const step = bootWindow / lines.length;
    const timers = lines.map((_, i) =>
      setTimeout(() => setVisibleLines(i + 1), step * (i + 1))
    );

    // trigger glitch-out phase
    const glitchTimer = setTimeout(() => setPhase("glitch"), bootWindow + 120);

    // fully unmount / hand off
    const endTimer = setTimeout(() => {
      if (!doneRef.current) {
        doneRef.current = true;
        setPhase("gone");
        onComplete();
      }
    }, duration);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(glitchTimer);
      clearTimeout(endTimer);
    };
  }, [duration]); // eslint-disable-line react-hooks/exhaustive-deps

  if (phase === "gone") return null;

  return (
    <div className={`ls-root ${phase === "glitch" ? "ls-glitching" : ""}`}>
      <style>{css}</style>

      <div className="ls-noise" />
      <div className="ls-scanlines" />

      <div className="ls-mark" data-text="◆">
        <span className="ls-mark-glow">◆</span>
      </div>

      <div className="ls-terminal">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div className="ls-line" key={i}>
            <span className="ls-caret">›</span> {line}
          </div>
        ))}
        {visibleLines < lines.length && (
          <div className="ls-line ls-cursor-line">
            <span className="ls-caret">›</span>
            <span className="ls-blink">_</span>
          </div>
        )}
      </div>

      <div className="ls-glitch-bars">
        <div className="ls-bar" />
        <div className="ls-bar" />
        <div className="ls-bar" />
        <div className="ls-bar" />
      </div>
    </div>
  );
}

const css = `
.ls-root{
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: var(--color-bg-primary, #FAFAFA);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "JetBrains Mono","Fira Code",ui-monospace,SFMono-Regular,Menlo,monospace;
  overflow: hidden;
  animation: ls-fade-in 0.15s ease-out;
}

[data-theme="dark"] .ls-root {
  background: var(--color-bg-primary, #0E0E0D);
}

@keyframes ls-fade-in{
  from{ opacity: 0; }
  to{ opacity: 1; }
}

/* ---------- ambient noise + scanlines ---------- */
.ls-noise{
  position: absolute; inset: 0;
  background-image: radial-gradient(var(--color-text-secondary, rgba(0,0,0,0.05)) 1px, transparent 1px);
  background-size: 3px 3px;
  opacity: 0.5;
  pointer-events: none;
}

[data-theme="dark"] .ls-noise {
  background-image: radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px);
}

.ls-scanlines{
  position: absolute; inset: 0;
  background: repeating-linear-gradient(
    to bottom,
    var(--color-border-primary, rgba(0,0,0,0.05)) 0px,
    var(--color-border-primary, rgba(0,0,0,0.05)) 1px,
    transparent 1px,
    transparent 3px
  );
  pointer-events: none;
  mix-blend-mode: overlay;
}

[data-theme="dark"] .ls-scanlines {
  background: repeating-linear-gradient(
    to bottom,
    rgba(255,255,255,0.025) 0px,
    rgba(255,255,255,0.025) 1px,
    transparent 1px,
    transparent 3px
  );
}

/* ---------- center mark ---------- */
.ls-mark{
  position: relative;
  font-size: 34px;
  color: var(--color-text-primary, #161616);
  margin-bottom: 28px;
  animation: ls-mark-pulse 1.1s ease-in-out infinite;
}

[data-theme="dark"] .ls-mark {
  color: var(--color-text-primary, #F3F2EF);
}

.ls-mark-glow{
  display:inline-block;
  filter: drop-shadow(0 0 10px var(--color-accent-link, rgba(143,168,201,0.55))) 
         drop-shadow(0 0 22px var(--color-accent-lavender, rgba(166,155,200,0.25)));
}

@keyframes ls-mark-pulse{
  0%, 100%{ transform: scale(1); opacity: 0.9; }
  50%{ transform: scale(1.12); opacity: 1; }
}

/* ---------- terminal block ---------- */
.ls-terminal{
  min-height: 130px;
  width: min(360px, 80vw);
  font-size: 13px;
  line-height: 1.9;
  color: var(--color-text-secondary, #5F5F5F);
  letter-spacing: 0.01em;
}

[data-theme="dark"] .ls-terminal {
  color: var(--color-text-secondary, #B5B3AE);
}

.ls-line{
  animation: ls-line-in 0.22s ease-out both;
  white-space: pre;
}

@keyframes ls-line-in{
  from{ opacity: 0; transform: translateX(-4px); filter: blur(2px); }
  to{ opacity: 1; transform: translateX(0); filter: blur(0); }
}

.ls-caret{
  color: var(--color-accent-link, #8FA8C9);
  margin-right: 2px;
}

.ls-cursor-line .ls-caret{ 
  color: var(--color-text-secondary, #5F5F5F);
}

.ls-blink{
  color: var(--color-accent-success, #8EA58C);
  animation: ls-blink 0.9s step-end infinite;
}

@keyframes ls-blink{
  0%, 49%{ opacity: 1; }
  50%, 100%{ opacity: 0; }
}

/* ---------- glitch-out transition ---------- */
.ls-glitch-bars{
  position: absolute; inset: 0;
  pointer-events: none;
  opacity: 0;
}

.ls-bar{
  position: absolute;
  left: 0; right: 0;
  height: 6%;
  background: var(--color-text-primary, #161616);
  opacity: 0;
  mix-blend-mode: difference;
}

[data-theme="dark"] .ls-bar {
  background: var(--color-text-primary, #F3F2EF);
}

.ls-glitching .ls-terminal,
.ls-glitching .ls-mark{
  animation: ls-rgb-split 0.42s steps(2, end) 3;
}

.ls-glitching .ls-glitch-bars{
  opacity: 1;
}

.ls-glitching .ls-bar:nth-child(1){ top: 12%;  animation: ls-bar-slide 0.5s linear 1; }
.ls-glitching .ls-bar:nth-child(2){ top: 34%;  animation: ls-bar-slide 0.5s linear 0.06s 1; }
.ls-glitching .ls-bar:nth-child(3){ top: 58%;  animation: ls-bar-slide 0.5s linear 0.12s 1; }
.ls-glitching .ls-bar:nth-child(4){ top: 77%;  animation: ls-bar-slide 0.5s linear 0.18s 1; }

@keyframes ls-bar-slide{
  0%{ opacity: 0; transform: translateX(-100%) scaleY(1); }
  10%{ opacity: 0.85; }
  50%{ opacity: 0.6; transform: translateX(0%); }
  90%{ opacity: 0.85; }
  100%{ opacity: 0; transform: translateX(100%); }
}

@keyframes ls-rgb-split{
  0%{ text-shadow: none; transform: translateX(0); }
  25%{ text-shadow: -2px 0 var(--color-accent-rose, #C99BA8), 2px 0 var(--color-accent-link, #8FA8C9); transform: translateX(-1px); }
  50%{ text-shadow: 2px 0 var(--color-accent-rose, #C99BA8), -2px 0 var(--color-accent-link, #8FA8C9); transform: translateX(1px); }
  75%{ text-shadow: -1px 0 var(--color-accent-rose, #C99BA8), 1px 0 var(--color-accent-link, #8FA8C9); transform: translateX(0); }
  100%{ text-shadow: none; transform: translateX(0); }
}

.ls-glitching{
  animation: ls-flash 0.42s steps(2, end) 3;
}

@keyframes ls-flash{
  0%, 100%{ background: var(--color-bg-primary, #FAFAFA); }
  50%{ background: var(--color-bg-surface, #FFFCF8); }
}

[data-theme="dark"] .ls-glitching {
  animation: ls-flash-dark 0.42s steps(2, end) 3;
}

@keyframes ls-flash-dark{
  0%, 100%{ background: var(--color-bg-primary, #0E0E0D); }
  50%{ background: var(--color-bg-surface, #171716); }
}

@media (prefers-reduced-motion: reduce){
  .ls-mark, .ls-blink, .ls-line, .ls-glitching *{
    animation: none !important;
  }
}
`;