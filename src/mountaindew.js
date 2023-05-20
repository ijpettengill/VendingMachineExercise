import React from "react";
import useVendingMachine from "./hooks/useVendingMachine";
import './MountainDew.css';

const MountainDew = () => {
  const handleClick = useVendingMachine();
  return (
    <div>
      <img
        src="https://target.scene7.com/is/image/Target/GUEST_a0ca8b92-b8ef-4f37-9903-f103ace02e6e?wid=488&hei=488&fmt=pjpeg"
        alt="Mountain Dew"
      />
      <button onClick={() => handleClick("/")}>VendingMachine</button>
    </div>
  );
};

export default MountainDew;