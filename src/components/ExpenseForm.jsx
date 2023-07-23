import { useState } from "react";
import Input from "./Input";

const ExpenseForm = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., send data to backend or update state
    console.log("Expense Form Submitted:", amount, description);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 shadow w-[400px] rounded-md"
    >
      <Input
        label="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="number"
      />
      <Input
        label="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="btn btn-sm btn-primary mt-3" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
