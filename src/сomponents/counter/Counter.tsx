import React, { useState } from "react";
import MyButton from "../myButton/MyButton";
import './counter.css'


export default function () {

     // * пример с счетчиком (числовое значение)
  const [count, setCount] = useState(0);
  const handleMinus = () => {
    setCount((prev) => prev - 1);
  };

  const handlePlus = () => {
    setCount((prev) => prev + 1);
  };

  console.log('render counter')
  return (
    <div className="counter">
      <MyButton func={handleMinus} text={"-"} />
      {/* <button onClick={handleMinus}>-</button> */}
      <span>{count}</span>
      <MyButton func={handlePlus} text={"+"} isDanger={false} />
      {/* <button onClick={handlePlus}>+</button> */}
    </div>
  );
}
