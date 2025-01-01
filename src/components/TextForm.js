import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy=()=>{
    const text=document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value);
  }
  const [text, setText] = useState("");

  return (
    <>
      <div className="container py-4">
        <h1 className="text-center text-primary mb-4">{props.title}</h1>
        <div className="mb-3">
          <textarea
            className="form-control border border-primary"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="5"
            style={{
              backgroundColor: "#f8f9fa",
              borderRadius: "10px",
              padding: "15px",
            }}
          ></textarea>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-success mx-1 my-1"
            onClick={handleUpClick}
          >
            Convert to UpperCase
          </button>
          <button
            className="btn btn-danger mx-1 my-1"
            onClick={handleLoClick}
          >
            Convert to LowerCase
          </button>

          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleClearClick}
          >
            Clear Text
          </button>

          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleCopy}
          >
            Copy
          </button>
          
        </div>

        <div className="container my-4 p-3" style={{ border: "1px solid #ddd", borderRadius: "10px", backgroundColor: "#e9ecef" }}>
          <h2 className="text-info">Text Summary</h2>
          <p>
            <strong>{text.split(" ").filter((word) => word.length > 0).length}</strong> words and <strong>{text.length}</strong> characters
          </p>
          <p>
            <strong>{(0.008 * text.split(" ").filter((word) => word.length > 0).length).toFixed(2)}</strong> minutes to read
          </p>
        </div>

        <div className="container my-4 p-3" style={{ border: "1px solid #ddd", borderRadius: "10px", backgroundColor: "#fff3cd" }}>
          <h2 className="text-warning">Preview</h2>
          <p className="text-secondary" style={{ fontStyle: "italic" }}>
            {text.length > 0 ? text : "Nothing to preview!"}
          </p>
        </div>
      </div>
    </>
  );
}
