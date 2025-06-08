interface AccuracyDisplayProps {
    userInput: string;
    quote: string
}

const AccuracyDisplay = ({userInput, quote}: AccuracyDisplayProps) => {
    const totalTyped = userInput.length;

    const correctChars = userInput.split("").filter((char, i) => char === quote[i]).length;

    const accuracy = totalTyped === 0
    ? 100
    : Math.round((correctChars / totalTyped) * 100)



    return (
    <div className="text-md text-gray-500 mb-2">
        Accuracy: <span className="font-bold">{accuracy}%</span>
    </div>
    );

}


export default AccuracyDisplay