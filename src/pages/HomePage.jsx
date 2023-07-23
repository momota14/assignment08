import React, { useEffect, useState } from "react";

function HomePage() {
  const [items, setItems] = useState([]);
  let content;

  useEffect(() => {
    const getItems = localStorage.getItem("transactions");
    console.log(getItems);

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

  if (items.length === 0) {
    content = (
      <h1 className="text-lg text-center font-semibold mb-3 text-gray-600">
        No Items
      </h1>
    );
  } else if (items.length > 0) {
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
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center mt-14 pt-14">
      <div className="w-[400px] p-2 rounded-md shadow-md bg-white">
        <h1 className="text-2xl font-semibold mb-3">Transactions List</h1>
        {content}
      </div>
    </div>
  );
}

export default HomePage;
