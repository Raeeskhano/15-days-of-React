import React, { useRef, useState } from "react";

const PasswordToggle = () => {
  const inputRef = useRef(null); // Reference for input field
  const [isVisible, setIsVisible] = useState(false); // Track visibility

  const togglePassword = () => {
    if (inputRef.current.type === "password") {
      inputRef.current.type = "text"; // Show password
      setIsVisible(true);
    } else {
      inputRef.current.type = "password"; // Hide password
      setIsVisible(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-extrabold">Ref Hook in React</h1>
      <input ref={inputRef} type="password" placeholder="Enter Password" />
      <button onClick={togglePassword}>
        {isVisible ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
};

export default PasswordToggle;
