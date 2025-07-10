// src/pages/ControlPanel.tsx
import { Link } from "react-router-dom";

export default function ControlPanel() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-xl">Control Panel (в разработке)</h1>
      <Link to="/dashboard" className="text-blue-600 hover:underline">
        Назад в Dashboard
      </Link>
    </div>
  );
}