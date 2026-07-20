// src/components/InfraAnimation.jsx
export default function InfraAnimation() {
  return (
    <div className="infra-stage">
      <svg viewBox="0 0 400 340">
        {/* base edges */}
        <path className="edge" d="M 80,80 L 80,140" />
        <path className="edge" d="M 80,170 C 80,200 50,200 50,220" />
        <path className="edge" d="M 80,170 C 80,200 180,200 180,220" />
        <path className="edge" d="M 80,170 C 80,200 300,200 300,220" />
        <path className="edge" d="M 180,255 L 180,300" />
        <path className="edge" d="M 300,255 L 300,300" />

        {/* animated flow overlay */}
        <path className="flow" d="M 80,80 L 80,140" />
        <path className="flow" d="M 80,170 C 80,200 50,200 50,220" />
        <path className="flow" d="M 80,170 C 80,200 180,200 180,220" />
        <path className="flow" d="M 80,170 C 80,200 300,200 300,220" />
        <path className="flow" d="M 180,255 L 180,300" />
        <path className="flow" d="M 300,255 L 300,300" />

        {/* traveling packets */}
        <circle className="dot dot-a" r="2.8" />
        <circle className="dot dot-b" r="2.8" />
        <circle className="dot dot-c" r="2.8" />
        <circle className="dot dot-d" r="2.8" />
        <circle className="dot dot-e" r="2.8" />
        <circle className="dot dot-f" r="2.8" />

        {/* client */}
        <g className="n1">
          <circle className="pulse" cx="80" cy="60" r="18" />
          <rect className="node-box active" x="35" y="42" width="90" height="38" />
          <text className="node-label" x="48" y="60">client</text>
          <text className="node-sub" x="48" y="72">https request</text>
        </g>

        {/* gateway */}
        <g className="n2">
          <circle className="pulse" cx="80" cy="160" r="18" />
          <rect className="node-box active" x="25" y="142" width="110" height="38" />
          <text className="node-label" x="39" y="160">api gateway</text>
          <text className="node-sub" x="39" y="172">auth · rate-limit</text>
        </g>

        {/* three services */}
        <g className="n3">
          <circle className="pulse" cx="50" cy="240" r="15" />
          <rect className="node-box" x="15" y="222" width="70" height="36" />
          <text className="node-label" x="25" y="240">compute</text>
          <text className="node-sub" x="25" y="252">k8s pods</text>
        </g>

        <g className="n4">
          <circle className="pulse" cx="180" cy="240" r="15" />
          <rect className="node-box" x="145" y="222" width="70" height="36" />
          <text className="node-label" x="156" y="240">ml model</text>
          <text className="node-sub" x="156" y="252">inference</text>
        </g>

        <g className="n5">
          <circle className="pulse" cx="300" cy="240" r="15" />
          <rect className="node-box" x="265" y="222" width="70" height="36" />
          <text className="node-label" x="276" y="240">cache</text>
          <text className="node-sub" x="276" y="252">redis</text>
        </g>

        {/* downstream storage */}
        <rect className="node-box" x="145" y="300" width="70" height="36" />
        <text className="node-label" x="155" y="318">vector db</text>
        <text className="node-sub" x="155" y="330">embeddings</text>

        <rect className="node-box" x="265" y="300" width="70" height="36" />
        <text className="node-label" x="278" y="318">postgres</text>
        <text className="node-sub" x="276" y="330">durable store</text>
      </svg>

      <style>{`
        .infra-stage {
          width: 100%;
          max-width: 400px;
          margin: 0;
        }
        .infra-stage svg {
          width: 100%;
          height: auto;
          overflow: visible;
          font-family: 'Courier New', ui-monospace, monospace;
        }

        /* ----- NODE BOXES ----- */
        .infra-stage .node-box {
          fill: var(--color-bg-surface, #FFFCF8);
          stroke: var(--color-border-primary, #DDD9D2);
          stroke-width: 1.2;
          rx: 6;
          transition: all 0.3s ease;
        }
        .infra-stage .node-box.active {
          stroke: var(--color-accent-lavender, #A69BC8);
          stroke-width: 1.5;
        }
        
        [data-theme="dark"] .infra-stage .node-box {
          fill: var(--color-bg-surface, #171716);
          stroke: var(--color-border-primary, #30302F);
        }
        [data-theme="dark"] .infra-stage .node-box.active {
          stroke: var(--color-accent-lavender, #A69BC8);
        }

        /* ----- TEXT STYLES ----- */
        .infra-stage .node-label {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: 10px;
          fill: var(--color-text-primary, #161616);
          font-weight: 500;
        }
        .infra-stage .node-sub {
          font-family: 'Courier New', monospace;
          font-size: 7.5px;
          fill: var(--color-accent-link, #8FA8C9);
          letter-spacing: 0.3px;
        }
        
        [data-theme="dark"] .infra-stage .node-label {
          fill: var(--color-text-primary, #F3F2EF);
        }
        [data-theme="dark"] .infra-stage .node-sub {
          fill: var(--color-accent-link, #8FA8C9);
        }

        /* ----- EDGES ----- */
        .infra-stage .edge {
          fill: none;
          stroke: var(--color-border-primary, #DDD9D2);
          stroke-width: 1.2;
        }
        [data-theme="dark"] .infra-stage .edge {
          stroke: var(--color-border-primary, #30302F);
        }

        /* ----- FLOW LINES ----- */
        .infra-stage .flow {
          fill: none;
          stroke: var(--color-accent-lavender, #A69BC8);
          stroke-width: 1.2;
          stroke-dasharray: 4 8;
          animation: infra-dash 1.4s linear infinite;
          opacity: 0.8;
        }
        @keyframes infra-dash {
          to { stroke-dashoffset: -120; }
        }

        /* ----- PULSE ANIMATION ----- */
        .infra-stage .pulse {
          fill: none;
          stroke: var(--color-accent-lavender, #A69BC8);
          stroke-width: 1.5;
          opacity: 0;
          transform-origin: center;
          transform-box: fill-box;
        }
        .infra-stage .n1 .pulse { animation: infra-pulse 2.8s ease-out infinite; }
        .infra-stage .n2 .pulse { animation: infra-pulse 2.8s ease-out infinite 0.5s; }
        .infra-stage .n3 .pulse { animation: infra-pulse 2.8s ease-out infinite 1.0s; }
        .infra-stage .n4 .pulse { animation: infra-pulse 2.8s ease-out infinite 1.5s; }
        .infra-stage .n5 .pulse { animation: infra-pulse 2.8s ease-out infinite 2.0s; }

        @keyframes infra-pulse {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        /* ----- TRAVELING DOTS ----- */
        .infra-stage .dot {
          fill: var(--color-accent-lavender, #A69BC8);
        }
        .infra-stage .dot-a { offset-path: path('M 80,80 L 80,140'); animation: infra-run 1.6s linear infinite; }
        .infra-stage .dot-b { offset-path: path('M 80,170 C 80,200 50,200 50,220'); animation: infra-run 2.0s linear infinite; }
        .infra-stage .dot-c { offset-path: path('M 80,170 C 80,200 180,200 180,220'); animation: infra-run 2.2s linear infinite 0.3s; }
        .infra-stage .dot-d { offset-path: path('M 80,170 C 80,200 300,200 300,220'); animation: infra-run 2.5s linear infinite 0.6s; }
        .infra-stage .dot-e { offset-path: path('M 180,255 L 180,300'); animation: infra-run 1.4s linear infinite 0.2s; }
        .infra-stage .dot-f { offset-path: path('M 300,255 L 300,300'); animation: infra-run 1.7s linear infinite 0.7s; }

        @keyframes infra-run {
          0% { offset-distance: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }

        /* ----- REDUCED MOTION ----- */
        @media (prefers-reduced-motion: reduce) {
          .infra-stage .flow,
          .infra-stage .pulse,
          .infra-stage [class*="dot-"] {
            animation: none !important;
          }
        }

        /* ----- RESPONSIVE ----- */
        @media (max-width: 768px) {
          .infra-stage {
            max-width: 340px;
          }
          .infra-stage .node-label {
            font-size: 9px;
          }
          .infra-stage .node-sub {
            font-size: 7px;
          }
        }

        @media (max-width: 480px) {
          .infra-stage {
            max-width: 280px;
          }
          .infra-stage .node-label {
            font-size: 8px;
          }
          .infra-stage .node-sub {
            font-size: 6px;
          }
          .infra-stage .node-box {
            rx: 4;
          }
          .infra-stage .dot {
            r: 2.2;
          }
        }
      `}</style>
    </div>
  );
}