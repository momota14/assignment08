import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import IncomePage from "./pages/IncomePage";
import ExpensePage from "./pages/ExpensePage";

const App = () => {
  return (
    <Router>
      <div className="navbar bg-base-100 shadow-sm justify-center fixed">
        <Link className="btn btn-ghost normal-case text-xl" to="/income">
          Income
        </Link>

        <Link className="btn btn-ghost normal-case text-xl" to="/expense">
          Expense
        </Link>
      </div>

      <Routes>
        <Route path="/income" element={<IncomePage />} />
        <Route path="/expense" element={<ExpensePage />} />
      </Routes>
    </Router>
  );
};

export default App;
