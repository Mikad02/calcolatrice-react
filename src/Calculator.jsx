import { NumButton } from "./Buttons/NumButton";
import { ResultButton } from "./Buttons/ResultButton";
import { Display } from "./Display";
import { useState } from "react";
import { OperationButtons } from "./Buttons/OperationButtons";

export function Calculator() {
    const [textToDisplay, setTextToDisplay] = useState("")
    const [operation, setOperation] = useState()
    const [numbers, setNumbers] = useState([])
    

    return (
    <section className="flex justify-center">
      <div className="bg-white bg-opacity-10 w-1/2 text-white grid grid-cols-4 grid-rows-6">
        <Display info={textToDisplay}/>
        <OperationButtons />

        <NumButton props={7}/>
        <NumButton props={8}/>
        <NumButton props={9}/>
        <ResultButton props={"="}/>
        <NumButton props={4}/>
        <NumButton props={5}/>
        <NumButton props={6}/>

        <NumButton props={1}/>
        <NumButton props={2}/>
        <NumButton props={3}/>

        <NumButton props={0}/>

        {/* Cambiare tipo di questi ultimi due bottoni */}
        {/* <Button props={"DELETE"} />
        <Button props={"AC"} /> */}
        
      </div>
    </section>
  );
}
