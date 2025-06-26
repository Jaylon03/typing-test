

type WPMDisplayProp = {
    userInput:string;

    passedTime: number;
}



export default function WPMDisplay({userInput, passedTime}: WPMDisplayProp) {
    const wordCount = userInput.trim().split(/\s+/).length;
    const minutes = passedTime / 60;
    const wpm =  Math.round(wordCount / minutes);



    return (
        <div className="text center mt-4">
            <p className="text-xl font-bold">WPM: {wpm}</p>
        </div>

    );
}