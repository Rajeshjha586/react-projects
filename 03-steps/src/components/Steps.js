import React, { useState } from "react";
import Button from "./Button";
import StepMessage from "./StepMessage";
import { messages } from "./messages";

export default function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePreviousClick = () => {
    if (step > 1) setStep((currStep) => currStep - 1);
  };

  const handleNextClick = () => {
    if (step < 3) setStep((currStep) => currStep + 1);
  };

  return (
    <>
      <button
        className="close"
        onClick={() => setIsOpen((isCurrOpen) => !isCurrOpen)}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePreviousClick}
            >
              <span>👈</span> Previous
            </Button>

            <Button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNextClick}
            >
              <span>👉</span> Next
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
