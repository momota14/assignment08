import React, { useEffect, useState } from "react";

function HomePage() {
  const [items, setItems] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  let content;

  useEffect(() => {
    const getItems = localStorage.getItem("transactions");

    if (getItems !== null) {
      setItems(JSON.parse(getItems));
    } else {
      setItems([]);
    }
  }, []);

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    if (newItems.length === 0) {
      localStorage.removeItem("transactions");
    } else {
      localStorage.setItem("transactions", JSON.stringify(newItems));
    }

    setItems(newItems);
  };

  if (items?.length === 0) {
    content = (
      <h1 className="text-lg text-center font-semibold mb-3 text-gray-600">
        No Items
      </h1>
    );
  } else if (items?.length > 0) {
    content = items.map((item, idx) => {
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
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      );
    });
  }

  // const filteredExpense = items.filter((item) => item.type === "income");

  useEffect(() => {
    const filteredIncome = items?.filter((item) => item.type === "income");
    console.log(filteredIncome);
    (() => {
      if (filteredIncome?.length > 1) {
        const totalPriceInc = filteredIncome.reduce((acc, item) => {
          return acc + item.amount;
        }, 0);
        setTotalIncome(totalPriceInc);
      } else if (filteredIncome?.length === 1) {
        setTotalIncome(filteredIncome[0].amount);
      } else {
        setTotalIncome(0);
      }
    })();
  }, [items]);

  useEffect(() => {
    const filteredExpense = items?.filter((item) => item.type === "expense");
    (() => {
      if (filteredExpense?.length > 1) {
        const totalPrice = filteredExpense.reduce((acc, item) => {
          return acc + item.amount;
        }, 0);
        setTotalExpense(totalPrice);
      } else if (filteredExpense?.length === 1) {
        setTotalExpense(filteredExpense[0].amount);
      } else {
        setTotalExpense(0);
      }
    })();
    console.log(totalIncome);
    // console.log(totalIncome)
  }, [items]);

  useEffect(() => {
    setSubTotal(totalIncome - totalExpense);
  }, [totalExpense, totalIncome]);

  return (
    <div className="h-screen flex flex-col items-center justify-center mt-14 pt-14 mx-4">
      <div className="w-full sm:w-[400px] ">
        <div className="p-2 rounded-md shadow-md bg-white">
          <h1 className="text-2xl font-semibold mb-3">Transactions List</h1>
          {content}
        </div>

        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-2 mt-3">
          <div className="w-full sm:w-1/2 shadow-md p-3 bg-white rounded-md">
            <div className="text-center font-semibold text-xl">
              Total Income:
            </div>
            <div className="text-center font-semibold text-green-500">
              ${totalIncome}
            </div>
          </div>

          <div className="w-full sm:w-1/2 shadow-md p-3 bg-white rounded-md">
            <div className="text-center font-semibold text-xl">
              Total Expense:
            </div>
            <div className="text-center font-semibold text-red-500">
              ${totalExpense}
            </div>
          </div>
        </div>
        <div className="w-full p-3 bg-white text-center rounded-md shadow-md mt-3">
          <div className="text-xl font-semibold">Total Amount:</div>
          <div
            className={`${
              subTotal >= 0 ? "text-green-500" : "text-red-500"
            } font-semibold text-xl`}
          >
            ${subTotal}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
