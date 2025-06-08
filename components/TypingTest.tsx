import { useEffect, useState } from "react";
import QuoteDisplay from "./QuoteDisplay";
import WPMDisplay from "./WPMDisplay";
import AccuracyDisplay from "./AccuracyDisplay";

    const quotes = [
  "The quick brown fox jumps over the lazy dog. It’s a sentence often used to showcase fonts and test typing skills. Despite being short, it includes every letter of the alphabet.",
  
  "Typing is a skill that improves with time and consistency. Just like learning a musical instrument, repetition and focus are key to getting better. Take it slow and stay relaxed.",
  
  "Discipline is choosing between what you want now and what you want most. Building small habits every day can lead to massive results over time. Stay consistent and trust the process.",
  
  "Technology continues to evolve at a rapid pace, shaping the way we work, communicate, and live. It’s essential to stay adaptable and curious in an ever-changing digital world.",
  
  "Sometimes, the best way to learn is by doing. Mistakes are not failures — they’re proof that you’re trying. So keep typing, keep improving, and celebrate small wins along the way."
];



const TypingTest = () => {
    const [quoteIndex, setQuoteIndex] = useState(0);
    const [userInput, setUserInput] = useState("");
    const quote = quotes[quoteIndex];
    const [passedTime, setPassedTime] = useState(0)
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setPassedTime(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
        }, [isRunning]);

    useEffect(() => {
        if (userInput.length === quote.length) {
            setTimeout(() => {
                const nextIndex = (quoteIndex + 1) % quotes.length;
                setQuoteIndex(nextIndex);
                setUserInput("");
            }, 200);
        }

    }, [userInput, quote, quoteIndex]);


    return (
        <div className="flex flex-col items-center gap-4 max-w-xl mx-auto">

            <AccuracyDisplay quote={quote} userInput={userInput} />
            <WPMDisplay userInput={userInput} passedTime={ passedTime}/>
            <QuoteDisplay quote={quote} userInput={userInput} />
            
            <input 
                type="text"
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                autoFocus
                className="border p-2 rounded text-lg w-140 text-center font-mono"
                spellCheck={false}

            />
      
      

        </div>
    );


};

export default TypingTest