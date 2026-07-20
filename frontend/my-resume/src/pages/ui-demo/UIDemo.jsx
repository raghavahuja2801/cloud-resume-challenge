// src/pages/UIDemo.jsx
import './UIDemo.css';

const UIDemo = ({ isDark, toggleTheme }) => {
  return (
    <div className="ui-demo">
      <div className="demo-header">
        <h1>🎨 Design System</h1>
        <p>UI Component Showcase</p>
      </div>

      {/* ===== COLOR PALETTE ===== */}
      <section className="demo-section">
        <h2>Colors</h2>
        
        <h3>Background Colors</h3>
        <div className="color-grid">
          <div className="color-swatch">
            <div className="swatch bg-primary"></div>
            <span>Primary</span>
            <span className="var-name">--color-bg-primary</span>
          </div>
          <div className="color-swatch">
            <div className="swatch bg-surface"></div>
            <span>Surface</span>
            <span className="var-name">--color-bg-surface</span>
          </div>
          <div className="color-swatch">
            <div className="swatch bg-elevated"></div>
            <span>Elevated</span>
            <span className="var-name">--color-bg-elevated</span>
          </div>
        </div>

        <h3>Text Colors</h3>
        <div className="color-grid">
          <div className="color-swatch">
            <div className="swatch text-primary"></div>
            <span>Primary Text</span>
            <span className="var-name">--color-text-primary</span>
          </div>
          <div className="color-swatch">
            <div className="swatch text-secondary"></div>
            <span>Secondary Text</span>
            <span className="var-name">--color-text-secondary</span>
          </div>
        </div>

        <h3>Accent Palette</h3>
        <div className="color-grid">
          <div className="color-swatch">
            <div className="swatch accent-sage"></div>
            <span>Sage</span>
            <span className="hex">#8EA58C</span>
          </div>
          <div className="color-swatch">
            <div className="swatch accent-dusty-blue"></div>
            <span>Dusty Blue</span>
            <span className="hex">#8FA8C9</span>
          </div>
          <div className="color-swatch">
            <div className="swatch accent-lavender"></div>
            <span>Lavender</span>
            <span className="hex">#A69BC8</span>
          </div>
          <div className="color-swatch">
            <div className="swatch accent-terracotta"></div>
            <span>Terracotta</span>
            <span className="hex">#C79273</span>
          </div>
          <div className="color-swatch">
            <div className="swatch accent-amber"></div>
            <span>Amber</span>
            <span className="hex">#D4B96E</span>
          </div>
          <div className="color-swatch">
            <div className="swatch accent-rose"></div>
            <span>Rose</span>
            <span className="hex">#C99BA8</span>
          </div>
        </div>

        <h3>Semantic Accents</h3>
        <div className="color-grid">
          <div className="color-swatch">
            <div className="swatch accent-success"></div>
            <span>Success (Sage)</span>
            <span className="var-name">--color-accent-success</span>
          </div>
          <div className="color-swatch">
            <div className="swatch accent-link"></div>
            <span>Link (Dusty Blue)</span>
            <span className="var-name">--color-accent-link</span>
          </div>
          <div className="color-swatch">
            <div className="swatch accent-button"></div>
            <span>Button (Lavender)</span>
            <span className="var-name">--color-accent-button</span>
          </div>
          <div className="color-swatch">
            <div className="swatch accent-award"></div>
            <span>Award (Amber)</span>
            <span className="var-name">--color-accent-award</span>
          </div>
        </div>
      </section>

      {/* ===== TYPOGRAPHY ===== */}
      <section className="demo-section">
        <h2>Typography</h2>
        
        <div className="typography-demo">
          <h1 className="heading">Heading 1 — Geist</h1>
          <h2 className="heading">Heading 2 — Geist</h2>
          <h3 className="heading">Heading 3 — Geist</h3>
          <h4 className="heading">Heading 4 — Geist</h4>
          
          <p className="body-text">
            Body text — Inter. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          
          <p className="body-text text-secondary">
            Secondary text — Inter. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          
          <code className="code-block">
            const greeting = "Hello, World!"; // JetBrains Mono
          </code>
          
          <div className="font-info">
            <p><strong>Heading:</strong> Geist</p>
            <p><strong>Body:</strong> Inter</p>
            <p><strong>Code:</strong> JetBrains Mono</p>
          </div>
        </div>
      </section>

      {/* ===== COMPONENTS ===== */}
      <section className="demo-section">
        <h2>Components</h2>

        <h3>Buttons</h3>
        <div className="button-grid">
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-success">Success (Sage)</button>
          <button className="btn btn-link">Link (Dusty Blue)</button>
          <button className="btn btn-award">Award (Amber)</button>
        </div>

        <h3>Cards</h3>
        <div className="card-grid">
          <div className="card">
            <h3 className="card-title">Standard Card</h3>
            <p className="card-text">This is a standard card with surface background.</p>
            <button className="btn btn-primary">Action</button>
          </div>
          
          <div className="card card-elevated">
            <h3 className="card-title">Elevated Card</h3>
            <p className="card-text">This card has elevated background with shadow.</p>
            <button className="btn btn-secondary">Action</button>
          </div>
          
          <div className="card card-accent">
            <h3 className="card-title">Accent Card</h3>
            <p className="card-text">Card with lavender accent border.</p>
            <button className="btn btn-success">Action</button>
          </div>
        </div>

        <h3>Badges</h3>
        <div className="badge-grid">
          <span className="badge badge-success">✓ Success</span>
          <span className="badge badge-award">🏆 Award</span>
          <span className="badge badge-link">🔗 Link</span>
          <span className="badge badge-primary">New</span>
          <span className="badge badge-outline">Beta</span>
        </div>

        <h3>Inputs</h3>
        <div className="input-grid">
          <input type="text" placeholder="Default input" className="input" />
          <input type="text" placeholder="Focused input" className="input input-focus" />
          <textarea placeholder="Textarea" className="input" rows="3"></textarea>
        </div>

        <h3>Links</h3>
        <div className="link-grid">
          <a href="#" className="link">Default Link (Dusty Blue)</a>
          <a href="#" className="link link-hover">Hover me</a>
          <a href="#" className="link link-visited">Visited Link</a>
        </div>
      </section>
    </div>
  );
};

export default UIDemo;