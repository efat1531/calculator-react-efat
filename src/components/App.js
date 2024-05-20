import Button from "./Button";
import Display from "./Display";

import React from "react";
import { useState } from "react";

const buttonsObj = [
  { class: "btnGroup-1", name: "AC" },
  { class: "btnGroup-1", name: "DEL" },
  { class: "btnGroup-2", name: "." },
  { class: "btnGroup-2", name: "/" },
  { class: "", name: "7" },
  { class: "", name: "8" },
  { class: "", name: "9" },
  { class: "btnGroup-2", name: "*" },
  { class: "", name: "4" },
  { class: "", name: "5" },
  { class: "", name: "6" },
  { class: "btnGroup-2", name: "-" },
  { class: "", name: "1" },
  { class: "", name: "2" },
  { class: "", name: "3" },
  { class: "btnGroup-2", name: "+" },
  { class: "btnGroup-3", name: "0" },
  { class: "btnGroup-3", name: "00" },
  { class: "span-two-columns btnGroup-4", name: "=" },
];

const App = () => {
  const [displayValue, setDisplayValue] = useState("0");
  return (
    <section className="main">
      <div className="section-container">
        <div className="calculator">
          <Display displayValue={displayValue} />
          <div id="buttons">
            {buttonsObj.map((button, index) => {
              return (
                <Button
                  key={index}
                  button={button}
                  displayValue={displayValue}
                  setDisplayValue={setDisplayValue}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
