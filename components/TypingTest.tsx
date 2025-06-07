import { useEffect, useState } from "react";
import QuoteDisplay from "./QuoteDisplay";

    const quotes = [
        "First quote to type.",
        "Another one to practice with.",
        "Typing tests are fun and useful.",
        "Almost done, one more to go!"
    ];


const TypingTest = () => {
    const [quoteIndex, setQuoteIndex] = useState(0);
    const [userInput, setUserInput] = useState("");
    const quote = quotes[quoteIndex];

    useEffect(() => {
        if (userInput === quote) {
            setTimeout(() => {
                const nextIndex = (quoteIndex + 1) % quotes.length;
                setQuoteIndex(nextIndex);
                setUserInput("");
            }, 200);
        }

    }, [userInput, quote, quoteIndex]);


    return (
        <div className="flex flex-col items-center gap-4 max-w-xl mx-auto">
            <QuoteDisplay quote={quote} userInput={userInput} />

            <input 
                type="text"
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                autoFocus
                className="border p-2 rounded text-lg w-140 font-mono"
                spellCheck={false}

            />
      
      

        </div>
    );


};

export default TypingTest