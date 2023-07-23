import Input from "./Input";

const ExpenseForm = ({
  amount,
  description,
  handleSubmit,
  setAmount,
  setDescription,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 shadow w-full sm:w-[400px] rounded-md"
    >
      <Input
        label="amount"
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
