import React from "react";

function Input({ label, value, onChange, type = "text" }) {
  return (
    <div className="my-2">
      <label className="capitalize">{label}: </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded-md"
        placeholder={label}
        required
      />
    </div>
  );
}

export default Input;
