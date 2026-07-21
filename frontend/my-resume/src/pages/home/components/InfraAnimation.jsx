// src/pages/home/components/InfraAnimation.jsx
import './InfraAnimation.css';

export default function InfraAnimation() {
  return (
    <div className="infra-stage">
      <svg viewBox="0 0 400 380" fill="none">
        
        {/* ================================================
           EDGES (base connection lines between nodes)
           ================================================ */}
        
        {/* Client → CDN */}
        <path className="edge" d="M 80,90 L 80,140" />
        
        {/* CDN → API Gateway */}
        <path className="edge" d="M 80,170 C 80,220 200,220 200,180" />
        
        {/* API Gateway → Message Queue */}
        <path className="edge" d="M 200,200 L 200,260" />
        
        {/* Message Queue → DB */}
        <path className="edge" d="M 240,320 C 280,320 320,300 320,270" />
        
        {/* Message Queue → AI */}
        <path className="edge" d="M 160,320 C 120,320 80,300 80,270" />
        
        {/* AI → DB (feedback loop) */}
        <path className="edge" d="M 80,250 C 120,220 200,220 320,250" />

        
        {/* ================================================
           ANIMATED FLOW LINES
           ================================================ */}
        
        <path className="flow" d="M 80,90 L 80,140" />
        <path className="flow-variant" d="M 80,170 C 80,220 200,220 200,180" />
        <path className="flow" d="M 200,200 L 200,260" />
        <path className="flow-variant" d="M 240,320 C 280,320 320,300 320,270" />
        <path className="flow" d="M 160,320 C 120,320 80,300 80,270" />
        <path className="flow-variant" d="M 80,250 C 120,220 200,220 320,250" />

        
        {/* ================================================
           TRAVELING DATA PACKETS
           ================================================ */}
        
        <circle className="dot dot-a1" r="3" />
        <circle className="dot dot-a2" r="2.5" />
        <circle className="dot dot-b1" r="3" />
        <circle className="dot dot-b2" r="2.5" />
        <circle className="dot dot-c1" r="3" />
        <circle className="dot dot-c2" r="2.5" />
        <circle className="dot dot-d1" r="3" />
        <circle className="dot dot-d2" r="2.5" />
        <circle className="dot dot-e1" r="3" />
        <circle className="dot dot-e2" r="2.5" />
        <circle className="dot dot-f1" r="2.5" />

        
        {/* ================================================
           NODE 1: CLIENT (You — the student)
           ================================================ */}
        <g className="n-client">
          <circle className="pulse-ring" cx="80" cy="70" r="16" />
          <rect className="node-box client" x="35" y="52" width="90" height="38" rx="8" />
          <text className="node-label" x="45" y="73">me</text>
          <text className="node-sub" x="45" y="84">student · engineer</text>
        </g>

        
        {/* ================================================
           NODE 2: CDN (Knowledge intake)
           ================================================ */}
        <g className="n-cdn">
          <circle className="pulse-ring" cx="80" cy="160" r="14" />
          <rect className="node-box" x="30" y="142" width="100" height="36" rx="8" />
          <text className="node-label" x="44" y="160">cdn</text>
          <text className="node-sub" x="44" y="171">lectures · study</text>
        </g>

        
        {/* ================================================
           NODE 3: API GATEWAY (Daily decisions & planning)
           ================================================ */}
        <g className="n-gateway">
          <circle className="pulse-ring" cx="200" cy="190" r="14" />
          <rect className="node-box" x="150" y="172" width="100" height="36" rx="8" />
          <text className="node-label" x="165" y="190">api gateway</text>
          <text className="node-sub" x="165" y="201">decisions · planning</text>
        </g>

        
        {/* ================================================
           NODE 4: MESSAGE QUEUE (Backlog — tasks, deadlines)
           ================================================ */}
        <g className="n-queue">
          <circle className="pulse-ring" cx="200" cy="280" r="14" />
          <rect className="node-box" x="150" y="262" width="100" height="36" rx="8" />
          <text className="node-label" x="160" y="280">message queue</text>
          <text className="node-sub" x="160" y="291">backlog · deadlines</text>
        </g>

        
        {/* ================================================
           NODE 5: DATABASE (Storage — notes, grades, memory)
           ================================================ */}
        <g className="n-db">
          <circle className="pulse-ring" cx="320" cy="280" r="14" />
          <rect className="node-box" x="275" y="262" width="90" height="36" rx="8" />
          <text className="node-label" x="284" y="280">database</text>
          <text className="node-sub" x="284" y="291">notes · grades</text>
        </g>

        
        {/* ================================================
           NODE 6: AI (Growth — insights, learning)
           ================================================ */}
        <g className="n-ai">
          <circle className="pulse-ring" cx="80" cy="280" r="14" />
          <rect className="node-box" x="35" y="262" width="90" height="36" rx="8" />
          <text className="node-label" x="44" y="280">ai</text>
          <text className="node-sub" x="44" y="291">growth · insights</text>
        </g>

      </svg>
    </div>
  );
}