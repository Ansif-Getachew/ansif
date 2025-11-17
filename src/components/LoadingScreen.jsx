import React, { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "< Hello World />";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            // increment first so the first character appears on the first tick
            index++;
            setText(fullText.substring(0, index));

            // when we've shown the full text, stop and call onComplete once
            if (index >= fullText.length) {
                clearInterval(interval);
                if (typeof onComplete === "function") {
                    setTimeout(() => {
                        onComplete();
                    }, 1000);
                }
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-5 text-4xl font-mono font-bold">
                {text}
                <span className="ml-1 animate-blink">|</span>
            </div>

            <div className="w-[200px] h-[2px] bg-gray-600 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
            </div>
        </div>
    );
};