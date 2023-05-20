import React from "react";
import useVendingMachine from "./hooks/useVendingMachine";
import './Pepsi.css';

const Pepsi = () => {
    const handleClick = useVendingMachine();
  return (
    <div>
      <img
        src="https://www.meijer.com/content/dam/meijer/product/0001/20/0000/12/0001200000129_1_A1C1_0600.png"
        alt="Pepsi"
      />
      <button onClick={() => handleClick("/")}>VendingMachine</button>
    </div>
  );
};

export default Pepsi;