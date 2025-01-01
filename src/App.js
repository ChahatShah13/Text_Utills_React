import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
function App() {
  return (
    <>
      <Navbar title="TextUtill" about="About"/>
      {/* <Alert/> */}
      <div className="container my-3">
        <TextForm title="Enter Your Text"/> 
      </div>
    </>
  );
}

export default App;
