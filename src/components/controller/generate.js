import { React } from "react";
import "./generate.css";

function Generate({ userInput, maxLimit, setThreads }) {
  const generatedThreads = () => {
    const words = userInput.split(" ");
    const maxLength = maxLimit; // Maximum length of a tweet

    let currentThread = "";
    const generatedThreads = [];

    for (const word of words) {
      if (currentThread.length + word.length + 1 <= maxLength) {
        currentThread += (currentThread.length > 0 ? " " : "") + word;
      } else {
        generatedThreads.push({ text: currentThread, isCopied: false });
        currentThread = word;
      }
    }

    if (currentThread.length > 0) {
      generatedThreads.push({ text: currentThread, isCopied: false });
    }

    setThreads(generatedThreads);
  };

  return (
    <button
      type="button"
      onClick={generatedThreads} // Call the function directly, no need for () =>
      className="button-class"
    >
      Submit
    </button>
  );
}

export default Generate;
