// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Dashboard from "@/pages/Dashboard";
import ControlPanel from "@/pages/ControlPanel";
import PrivateRoute from "@/components/PrivateRoute";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/device/:id"
          element={
            <PrivateRoute>
              <ControlPanel />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
