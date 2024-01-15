import Button from "../components/Button";
import { useEffect, useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber(number + 1);
  }

  function decrement() {
    setNumber(number - 1);
  }

  function changementBord() {
    console.log("rendu");
  }

  useEffect(changementBord);

  return (
    <div>
      <h3 className="d-flex text-center">Counter</h3>
      <div className="d-flex justify-content-center">
        <Button
          onClick={decrement}
          name="Decrement"
          className="btn-danger mx-5"
        />
        <h4 className="mx-5">{number}</h4>
        <Button
          onClick={increment}
          name="Increment"
          className="btn-success mx-5"
        />
      </div>
    </div>
  );
}

export default Counter;
