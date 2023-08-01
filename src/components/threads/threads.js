import React, { useContext } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import copy from "copy-to-clipboard";
import ThreadContext from "../context/threadsContext";
import "./threads.css";

function Threads(props) {
  const { threads, setThreads } = useContext(ThreadContext);
  const threadLength = threads.length === 0;

  const copyToClipboard = (thread, index) => {
    copy(thread);
    const updatedThreads = threads.map((t, i) =>
      index === i ? { ...t, isCopied: true } : t
    );
    setThreads(updatedThreads);
  };

  return (
    <div className="section-2">
      <div className="list-header">
        <h1 className={threadLength ? "block" : "no-block"}>Tweets/Threads</h1>
      </div>
      <ul className="major-container">
        {threads.map((thread, index) => (
          <li key={index} className="threads-container">
            <p>{`${thread.text} (${index + 1}/${threads.length})`}</p>
            <div className="button-wrapper">
              <button
                type="button"
                className="copyButton"
                onClick={() =>
                  copyToClipboard(
                    `${thread.text}(${index + 1}/${threads.length})`,
                    index
                  )
                }
              >
                <MdOutlineContentCopy size={20} color="lightseagreen" />
              </button>
              {thread.isCopied && <p className="copy-text">Copied</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Threads;
