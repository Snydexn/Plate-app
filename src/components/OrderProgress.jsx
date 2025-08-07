import React, { useState } from "react";

export default function OrderProgress() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { number: 1, label: "Shopping Cart" },
    { number: 2, label: "Checkout" },
    { number: 3, label: "Order Status" },
  ];

  return (
    <div className="flex justify-center items-center gap-2 mt-2 mb-6">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center gap-1">
          {/* Number circle */}
          <div className="w-5 h-5 rounded-full border border-[#1076BB] text-[#1076BB] text-[10px] font-bold flex items-center justify-center">
            {step.number}
          </div>

          {/* Clickable label */}
          <button
            onClick={() => setActiveStep(step.number)}
            className={`text-[9px] ${
              activeStep === step.number ? "font-bold" : "font-normal"
            } text-black focus:outline-none`}
          >
            {step.label}
          </button>

          {/* Connecting line */}
          {index < steps.length - 1 && (
            <div className="w-6 h-0.5 bg-black mx-1" />
          )}
        </div>
      ))}
    </div>
  );
}
