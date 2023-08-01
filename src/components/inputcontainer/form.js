import React, { useState, useContext } from "react";
import Generate from "../controller/generate.js";
import ThreadContext from "../context/threadsContext";
import "./form.css";

function FormContainer() {
  const [userInput, setUserInput] = useState("");
  const [maxLimit, setMaxLimit] = useState(272);
  const { setThreads } = useContext(ThreadContext);

  return (
    <div className="form-container">
      <div className="section-1">
        <h1 className="heading"> Provide Your Text</h1>
        <div className="button-container">
          <div>
            <input
              type="radio"
              id="twitter"
              name="media"
              value={270}
              onChange={(event) => setMaxLimit(event.target.value)}
              defaultChecked
            />
            <label htmlFor="twitter" className="radioLabel">
              Twitter
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="threads"
              className="radio"
              name="media"
              value={492}
              onChange={(event) => setMaxLimit(event.target.value)}
            />
            <label htmlFor="threads" className="radioLabel">
              Threads
            </label>
          </div>
        </div>
        <textarea
          rows="30"
          cols="50"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter your text here..."
          className="textarea-container"
        />
      </div>
      <div className="button-container">
        <button
          type="button"
          className="button-class"
          onClick={() => setUserInput("")}
        >
          Clear
        </button>
        <Generate
          userInput={userInput}
          maxLimit={maxLimit}
          setThreads={setThreads}
        />
      </div>
    </div>
  );
}

export default FormContainer;
