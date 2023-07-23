import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm justify-center fixed top-0">
      <Link className="btn btn-ghost normal-case text-xl" to="/">
        Home
      </Link>
      <Link className="btn btn-ghost normal-case text-xl" to="/income">
        Income
      </Link>
      <Link className="btn btn-ghost normal-case text-xl" to="/expense">
        Expense
      </Link>
    </div>
  );
}

export default Navbar;
