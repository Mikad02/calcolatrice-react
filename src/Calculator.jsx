import { Display } from "./Display";
import { useState } from "react";
import { Button } from "./Buttons/Button";
// import { OperationButtons } from "./Buttons/OperationButtons";

export function Calculator() {
  const [textToDisplay, setTextToDisplay] = useState("");
  const [operation, setOperation] = useState("");
  const [numbers, setNumbers] = useState([]);

  function showText(text) {
    var num = parseInt(text);
    setNumbers([...numbers, { num }]);
    setTextToDisplay(textToDisplay + text);
  }
  function setOp(val) {
    setOperation(val);
    setTextToDisplay(textToDisplay + val);
  }

  function calculateResult(a) {
    var result = 0;
    var num1 = numbers[0].num;
    var num2 = numbers[1].num;
    switch (operation) {
      case "+":
        result = num1 + num2
        break;
      case "-":
        result = num1 - num2
        break;
      case "/":
        result = num1 / num2
        break;
      case "x":
        result = num1 * num2
        break;
      default:
        console.error("invalid operation")
        alert("invalid operation")
        break;
    }
    setTextToDisplay(result);
  }

  function clearAll(){
    setOperation("");
    setNumbers([]);
    setTextToDisplay("");
  }

  return (
    <section className="flex justify-center">
      <div className="bg-white bg-opacity-10 w-1/2 text-white grid grid-cols-4 grid-rows-6">
        <Display info={textToDisplay} />
        <Button val={"+"} func={setOp} />
        <Button val={"-"} func={setOp} />
        <Button val={"x"} func={setOp} />
        <Button val={"/"} func={setOp} />

        <Button val={"1"} func={showText} />
        <Button val={"2"} func={showText} />
        <Button val={"3"} func={showText} />
        <Button val={"4"} func={showText} />
        <Button val={"5"} func={showText} />
        <Button val={"6"} func={showText} />
        <Button val={"7"} func={showText} />
        <Button val={"8"} func={showText} />
        <Button val={"9"} func={showText} />
        <Button val={"0"} func={showText} />

        <Button val={"="} func={calculateResult} />

        <Button val={"CANC"} func={clearAll}/>
      </div>
    </section>
  );
}
