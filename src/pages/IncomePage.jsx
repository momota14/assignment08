import { useEffect, useState } from "react";
import IncomeForm from "../components/IncomeForm";

const IncomePage = () => {
  const [items, setItems] = useState([]);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  let content;

  const type = "income";

   const handleSubmit = (e) => {
     e.preventDefault();

     const getItem = localStorage.getItem("transactions");

     if (getItem === null) {
       const jsonData = { id: 1, amount: Number(amount), description, type };
       localStorage.setItem("transactions", JSON.stringify([jsonData]));
       setItems([jsonData]);
     } else {
       const parseItem = JSON.parse(getItem);
       const last = parseItem[parseItem.length - 1];
       const jsonData = {
         id: last.id + 1,
         amount: Number(amount),
         description,
         type,
       };

       localStorage.setItem(
         "transactions",
         JSON.stringify([...JSON.parse(getItem), jsonData])
       );
       setItems([...items, jsonData]);
     }
     setAmount("");
     setDescription("");
   };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    if (newItems.length === 0) {
      localStorage.removeItem("transactions");
    } else {
      localStorage.setItem("transactions", JSON.stringify(newItems));
    }

    setItems(newItems);
  };

  useEffect(() => {
    const getItems = localStorage.getItem("transactions");
    console.log(getItems);

    if (getItems !== null) {
      setItems(JSON.parse(getItems));
    } else {
      setItems([]);
    }
  }, []);

  const filteredItem = items.filter((item) => item.type === "income");

  if (filteredItem.length === 0) {
    content = (
      <h1 className="text-lg text-center font-semibold mb-3 text-gray-600">
        No Items
      </h1>
    );
  } else if (filteredItem.length > 0) {
    content = filteredItem.map((item, idx) => {
      const { amount, description, type, id } = item || {};
      //   console.log(type);
      return (
        <div
          key={idx}
          className={`${
            type === "expense" ? "bg-red-500" : "bg-green-500"
          } mb-2 p-2 rounded-md flex justify-between text-white`}
        >
          <div>{description}</div>
          <div className="flex">
            ${amount}
            <button className="ml-2" onClick={() => removeItem(id)}>
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center mt-14 pt-14 mx-4">
      <h1 className="text-xl font-semibold mb-3">Income Page</h1>
      <IncomeForm
        amount={amount}
        description={description}
        handleSubmit={handleSubmit}
        setAmount={setAmount}
        setDescription={setDescription}
      />

      <div className="w-full sm:w-[400px] p-2 rounded-md shadow-md bg-white mt-2">
        <h1 className="text-2xl font-semibold mb-3">Income List</h1>
        {content}
      </div>
    </div>
  );
};

export default IncomePage;
