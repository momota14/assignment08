import IncomeForm from "../components/IncomeForm";

const IncomePage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold mb-3">Income Page</h1>
      <IncomeForm />
    </div>
  );
};

export default IncomePage;
