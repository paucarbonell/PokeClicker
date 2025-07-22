import { Routes, Route } from "react-router";
import "./App.css";
import Game from "./pages/Game";
import Fight from "./pages/Fight";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Game />} />
      <Route path="/fight" element={<Fight />} />
    </Routes>
  );
}
