import React from "react";

const button = ({ label, type, onClick }) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className="bg-gradient-to-b from-principal to-terciary rounded-lg hover:from-terciary hover:to-principal p-5 flex justify-center w-full text-white cursor-pointer"
      >
        {label}
      </button>
    </div>
  );
};

export default button;
