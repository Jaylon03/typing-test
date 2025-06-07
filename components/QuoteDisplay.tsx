type QuoteDisplayProps = {
    quote: string;
    userInput: string;
}

const QuoteDisplay = ({quote, userInput}: QuoteDisplayProps) => {
    return (
        <p className="text-lg font-mono">
      {quote.split("").map((char, idx) => {
        const typedChar = userInput[idx];
        let color = "text-gray-500";

        if (typedChar != null) {
          color = typedChar === char ? "text-green-500" : "text-red-500";
        }

        return (
          <span key={idx} className={color}>
            {char}
          </span>
        );
      })}
    </p>

    )
}

export default QuoteDisplay