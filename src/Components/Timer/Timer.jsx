"use client";
import "./Timer.css";
import { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(120);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsTimerRunning(false);
    }
  }, [seconds]);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };
  return (
    <>
      {isTimerRunning && (
        <div className="mr_op">
          <div className="div_block_181447s502">
            <img
              className="timer_logo"
              src="https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/intensive/fixed-banner-stopwatch.svg"
            />
            <div className="text_block_9s8">
              Free Slot Ends in {formatTime(seconds)}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
