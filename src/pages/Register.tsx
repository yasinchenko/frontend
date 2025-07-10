// src/pages/Register.tsx
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Register (в разработке)</h1>
      <Link to="/login" className="text-blue-600 hover:underline">
        Already have an account? Login
      </Link>
    </div>
  );
}