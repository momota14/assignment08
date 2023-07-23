import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import IncomePage from "./pages/IncomePage";
import ExpensePage from "./pages/ExpensePage";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/income" element={<IncomePage />} />
        <Route path="/expense" element={<ExpensePage />} />
      </Routes>
    </Router>
  );
};

export default App;
