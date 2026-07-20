import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ isDark, onClick }) {
  return (
    <button className="theme-toggle" onClick={onClick}>
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}