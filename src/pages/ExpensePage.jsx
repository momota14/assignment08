import ExpenseForm from "../components/ExpenseForm";

const ExpensePage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold mb-3">Expense Page</h1>
      <ExpenseForm />
    </div>
  );
};

export default ExpensePage;
