import React, { useState, useRef, useEffect } from "react";
import logo from "./note.png";
import "./App.css";

function App() {
  const [showTextBox, setShowTextBox] = useState(false);
  const inputRef = useRef(null);
  const textBoxRef = useRef(null);

  function speak() {
    const text = inputRef.current.value;
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  }

  function handleButtonClick() {
    setShowTextBox(true);
  }

  function handleClickOutside(event) {
    if (textBoxRef.current && !textBoxRef.current.contains(event.target)) {
      setShowTextBox(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="container">
      <nav>
        <img
          src={logo}
          className="logo"
          height="40px"
          width="40px"
          alt="note-pic"
        />
        <button className="button" onClick={handleButtonClick}>
          Read Speech
        </button>
      </nav>
      <h1 className={`heading ${showTextBox ? "blur" : ""}`}>Notes</h1>
      {showTextBox && (
        <div className="textBox" ref={textBoxRef}>
          <textarea id="input" ref={inputRef} defaultValue="Notes"></textarea>
          <div className="spkbtn">
            <button className="spk_btn" onClick={speak}>Speak</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
