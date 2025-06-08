
import { useEffect, useState } from "react";

interface TimerProps {
    isRunning: boolean;
    onTimeUp: () => void;
    resetTrigger: boolean;
}

const Timer = ({isRunning, onTimeUp, resetTrigger}: TimerProps) =>{
    const [timeLeft, setTimeLeft] = useState(60);

    useEffect(() =>{
        setTimeLeft(60);



    }, [resetTrigger]);


    useEffect(() => {
        if (!isRunning || timeLeft <= 0) return;

        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev === 1) {
                    clearInterval(interval);
                    onTimeUp
                }
                return prev - 1
            });

        }, 1000);
        
        return () => clearInterval(interval);
    }, [isRunning, timeLeft]);


    return (
        <div className="text-xl font-bold">
            Time: {timeLeft}s

        </div>

    )
}

export default Timer


