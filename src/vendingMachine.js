import React from "react";
import useVendingMachine from "./hooks/useVendingMachine";
import "./VendingMachine.css";

const VendingMachine = () => {
  const handleClick = useVendingMachine();
  return (
    <div className="vending-machine-container">
      <img className="vending-machine-image"
        src="https://pepsigvl.com/wp-content/uploads/2016/12/3B-Pepsi-HVV-1.jpg"
        alt="Vending Machine"
      />
      <div className="button-container">
        <button className="pepsi" onClick={() => handleClick("/pepsi")}>Pepsi</button>
        <button className="mountain-dew" onClick={() => handleClick("/mountain-dew")}>
          Mountain Dew
        </button>
        <button className="dasani" onClick={() => handleClick("/dasani")}>Dasani</button>
      </div>
    </div>
  );
};

export default VendingMachine;