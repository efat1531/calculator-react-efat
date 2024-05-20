import React from "react";
import { evaluate } from "mathjs";

let prevValue = 0;
let calculationValue = "";

const Button = ({ button, displayValue, setDisplayValue }) => {
  const setDisplayValueofCalculation = (value) => {
    if (value.length > 21) {
      value = "..." + value.slice(-18);
    }
    setDisplayValue(value);
  };

  const isOperator = (val) => [".", "/", "*", "+", "-"].includes(val);
  const buttonClick = (e) => {
    const value = e.target.innerText;

    if (value === "AC") {
      resetDisplay();
    } else if (value === "DEL") {
      handleDelete();
    } else if (displayValue === "Error" || displayValue === "Infinity") {
      return;
    } else if (value === "=") {
      handleEquals();
    } else if (
      isOperator(value) &&
      isOperator(displayValue[displayValue.length - 1]) &&
      value !== "."
    ) {
      handleOperator(value);
    } else {
      handleNumber(value);
    }
  };

  const handleDelete = () => {
    if (
      displayValue.length === 1 ||
      ["Error", "Infinity"].includes(displayValue) ||
      displayValue === prevValue.toString()
    ) {
      resetDisplay();
    } else if (displayValue !== "0") {
      calculationValue = calculationValue.slice(0, -1);
      setDisplayValueofCalculation(displayValue.slice(0, -1));
    }
  };

  const handleEquals = () => {
    try {
      console.log("calculationValue", calculationValue);
      const result = evaluate(calculationValue);
      if (isNaN(result)) {
        calculationValue = "0";
        setDisplayValueofCalculation("Error");
      } else {
        calculationValue = result;
        prevValue = result;
        setDisplayValueofCalculation(result.toString());
      }
    } catch (error) {
      calculationValue = "0";
      setDisplayValueofCalculation("Error");
    }
  };

  const handleOperator = (value) => {
    calculationValue = calculationValue.slice(0, -1) + value;
    setDisplayValueofCalculation(displayValue.slice(0, -1) + value);
  };

  const handleNumber = (value) => {
    if (displayValue === "0" && !isOperator(value)) {
      calculationValue = value;
      setDisplayValueofCalculation(value);
    } else if (displayValue === "0" && value === "-") {
      calculationValue = value;
      setDisplayValueofCalculation(value);
    } else {
      calculationValue += value;
      setDisplayValueofCalculation(displayValue + value);
    }
  };

  const resetDisplay = () => {
    setDisplayValueofCalculation("0");
    calculationValue = "0";
  };

  return (
    <button onClick={(e) => buttonClick(e)} className={button.class}>
      {button.name}
    </button>
  );
};

export default Button;
