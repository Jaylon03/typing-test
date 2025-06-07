import { useState } from "react";
import QuoteDisplay from "./QuoteDisplay";

const TypingTest = () => {
    const [quote] = useState("Type this sentence exactly. ")
    const [userInput, setUserInput] = useState("");


    return (
        <div className="flex flex-col items-center gap-4 max-w-xl mx-auto">
            <QuoteDisplay quote={quote} userInput={userInput} />

            <input 
                type="text"
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                autoFocus
                className="border p-2 rounded text-lg w-full font-mono"
                spellCheck={false}

            />
      
      

        </div>
    );


};

export default TypingTest