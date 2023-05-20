import React from "react";
import useVendingMachine from "./hooks/useVendingMachine";
import './Dasani.css';

const Dasani = () => {
  const handleClick = useVendingMachine();
  return (
    <div>
      <img
        src="https://images.heb.com/is/image/HEBGrocery/000145469"
        alt="Dasani"
      />
      <button onClick={() => handleClick("/")}>Vending Machine</button>
    </div>
  );
};

export default Dasani;