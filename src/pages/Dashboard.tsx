// src/pages/Dashboard.tsx
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-xl">Dashboard (в разработке)</h1>
      <Link to="/device/1" className="text-blue-600 hover:underline">
        Перейти к устройству №1
      </Link>
    </div>
  );
}