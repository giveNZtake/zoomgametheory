import React, { useContext } from "react";
import GameContext from "../context/GameContext";

const CurrencySelector = () => {
  const { currency, setCurrency } = useContext(GameContext);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="currency-selector">
      <label htmlFor="currency">Currency:</label>
      <select id="currency" value={currency} onChange={handleChange}>
        <option value="USD">USD</option>
        <option value="INR">INR</option>
      </select>
    </div>
  );
};

export default CurrencySelector;