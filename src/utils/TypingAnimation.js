import React, { useState, useEffect } from "react";

const TypingAnimation = ({ text, delay }) => {
  const [displayText, setDisplayText] = useState("");
  // const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeoutId;

    const updateDisplayText = (index) => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        timeoutId = setTimeout(() => updateDisplayText(index + 1), delay);
      }
    };

    updateDisplayText(0);

    return () => clearTimeout(timeoutId);
  }, [text, delay]);

  return <div>{displayText}</div>;
};

export default TypingAnimation;
