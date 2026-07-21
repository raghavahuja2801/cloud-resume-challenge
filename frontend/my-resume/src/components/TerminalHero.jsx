import { useEffect, useState } from "react";
import './TerminalHero.css';

// Real Cloud Resume Challenge pipeline steps
const SEQUENCE = [
  {
    cmd: 'git commit -m "update resume site"',
    output: "[main a1b2c3d] update resume site — 3 files changed",
  },
  {
    cmd: "git push origin main",
    output: "main -> main   done",
  },
  {
    cmd: "npm run build",
    output: "Compiled successfully in 2.4s",
  },
  {
    cmd: "pytest tests/",
    output: "5 passed in 1.2s",
  },
  {
    cmd: "terraform plan",
    output: "Plan: 2 to add, 1 to change, 0 to destroy.",
  },
  {
    cmd: "terraform apply",
    output: "Apply complete. Resources: 28 added.",
  },
  {
    cmd: "aws s3 sync ./dist s3://raghav-resume-site --delete",
    output: "upload: dist/index.html to s3://raghav-resume-site/index.html",
  },
  {
    cmd: "aws cloudfront create-invalidation --distribution-id ABCD123",
    output: "Invalidation batch created.",
  },
  {
    cmd: "curl https://api.raghavahuja.dev/visitors",
    output: '{ "count": 1042 }',
  },
];

const TYPE_SPEED = 30;
const HOLD_AFTER_OUTPUT = 2000;
const MAX_HISTORY_DESKTOP = 3;
const MAX_HISTORY_MOBILE = 2;

function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);
  return matches;
}

export default function TerminalHero() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const maxHistory = isMobile ? MAX_HISTORY_MOBILE : MAX_HISTORY_DESKTOP;
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const current = SEQUENCE[step];
    const timeouts = [];

    if (typed.length < current.cmd.length) {
      timeouts.push(
        setTimeout(() => {
          setTyped(current.cmd.slice(0, typed.length + 1));
        }, TYPE_SPEED)
      );
    } else if (!showOutput) {
      timeouts.push(setTimeout(() => setShowOutput(true), 250));
    } else {
      timeouts.push(
        setTimeout(() => {
          setHistory((h) => [...h, current].slice(-maxHistory));
          setTyped("");
          setShowOutput(false);
          setStep((s) => (s + 1) % SEQUENCE.length);
        }, HOLD_AFTER_OUTPUT)
      );
    }

    return () => timeouts.forEach(clearTimeout);
  }, [typed, showOutput, step, maxHistory]);

  return (
    <div className="term-card">
      <div className="term-bar">
        <span className="term-dot term-dot--red" />
        <span className="term-dot term-dot--yellow" />
        <span className="term-dot term-dot--green" />
        <span className="term-label">bash</span>
      </div>

      <div className="term-body">
        {history.map((line, i) => (
          <div key={i} className="term-line">
            <div>
              <span className="term-prompt">$</span>{" "}
              <span className="term-cmd">{line.cmd}</span>
            </div>
            <div className="term-output">{line.output}</div>
          </div>
        ))}

        {/* Always rendered to reserve height — current typing line */}
        <div className="term-line term-line--current">
          <div>
            <span className="term-prompt">$</span>{" "}
            <span className="term-cmd">{typed}</span>
            <span className="term-cursor">▌</span>
          </div>
          <div className={showOutput ? "term-output" : "term-output term-output-placeholder"}>
            {showOutput ? SEQUENCE[step].output : "\u00A0"}
          </div>
        </div>
      </div>
    </div>
  );
}