import { useState } from "react";
import "./App.css";
import { StepMessage } from "./StepMessage";

const message = [
  "Learn React 🥶",
  "Apply for jobs 💥",
  "Invest your new income 👍",
];

export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>pass in... </p>
      </StepMessage>
    </div>
  );
}

function Steps() {
  const [step, setstep] = useState(1);
  const [IsOpen, setIsOpen] = useState(true);

  function handlePrev() {
    step > 1 ? setstep((s) => s - 1) : setstep((s) => s);
  }

  function handleNext() {
    step < 3 ? setstep((s) => s + 1) : setstep((s) => s);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!IsOpen)}>
        &times;
      </button>
      {IsOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <StepMessage step={step}>{message[step - 1]}</StepMessage>

          <div className="buttons">
            <Button bgColor={"#7950f2"} textColor={"#fff"} onClick={handlePrev}>
              <span>👈</span> Previous
            </Button>

            <Button bgColor={"#7950f2"} textColor={"#fff"} onClick={handleNext}>
              {step === 3 ? "Finish" : "Next"} <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
