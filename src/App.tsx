import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Exercise from "./pages/Exercise";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/exercise" element={<Exercise />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
