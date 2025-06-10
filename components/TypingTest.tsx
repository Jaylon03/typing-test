import { useEffect, useState } from "react";
import QuoteDisplay from "./QuoteDisplay";
import WPMDisplay from "./WPMDisplay";
import AccuracyDisplay from "./AccuracyDisplay";
import Timer from "./Timer";
import ResultsChart from "./ResultsChart";


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
    const [isRunning, setIsRunning] = useState(false);
    const [resetTrigger, setResetTrigger] = useState(false);
    const [results, setResults] = useState<{wpm: number; accuracy: number}[]>([]);
    const [showResults, setShowResults] = useState(false);
    const [isTimeUp, setIsTimeUp] = useState(false);


  

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(!isRunning) setIsRunning(true);
        setUserInput(e.target.value)
    }

    const handleTimeUp = () =>{
       setTimeout(() => {
         setIsRunning(false);
         setIsTimeUp(true)

       }, 0)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!isRunning && e.key === 'Enter') {
            resetTest();
        }
    };

    const resetTest = () =>{
        setUserInput("");
        setResetTrigger(prev => !prev);
        setIsRunning(false);
    }

    const calculateWPM = () => {
        const words = userInput.trim().split(/\s+/).length
        return Math.round((words / passedTime) * 60) || 0;

    };

    const calculateAccuracy = () => {
        let correct = 0;
        for (let i = 0; i < userInput.length; i++){
            if (userInput[i] === quote[i]) correct++;
        }

        return Math.round((correct / quote.length) * 100);
    };

    useEffect(() => {
        if (isTimeUp) {
            const wpm = calculateWPM();
            const accuracy = calculateAccuracy();
            const result = {wpm, accuracy};

            setResults(prev => [...prev, result]);
            setShowResults(true);
            setIsTimeUp(false); // reset for the next round
        }
    }, [isTimeUp]);

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
            
           <div className="flex items-baseline justify-center gap-8 mb-6">
            
            <Timer isRunning={isRunning} onTimeUp={handleTimeUp} resetTrigger={resetTrigger}/>
            <AccuracyDisplay quote={quote} userInput={userInput} />
            <WPMDisplay userInput={userInput} passedTime={ passedTime}/>
            

            </div> 

            <QuoteDisplay quote={quote} userInput={userInput} />

           <input 
                type="text"
                value={userInput}
                onChange={handleInput} 
                onKeyDown={handleKeyDown} 
                autoFocus
                className="border p-2 rounded text-lg w-140 text-center font-mono"
                spellCheck={false}
            />

            {showResults && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
                    <h2 className="text-2xl font-bold mb-2">Round Results</h2>
                    <p>WPM: {results[results.length - 1]?.wpm}</p>
                    <p>Accuracy: {results[results.length - 1]?.accuracy}%</p>

                    
                     <ResultsChart results={results} /> 

                    <button
                        onClick={() => {
                        setShowResults(false);
                        resetTest();
                        }}
                        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Close
                    </button>
                    </div>
                </div>
                )}


                
      

        </div>
    );


};

export default TypingTest