// src/Calculator.js

import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleButtonClick = (value) => {
        setInput((prevInput) => prevInput + value);
    };

    const clearInput = () => {
        setInput("");
        setResult("");
    };

    const calculateResult = () => {
        try {
            setResult(eval(input).toString());
        } catch (error) {
            setResult("Error");
        }
    };

    const handleBackspace = () => {
        setInput(input.slice(0, -1));
    };

    return (
        <div className="calculator-container">

            <div class="First">
                <div className="result-display">
                    <div className="input">{input}</div>
                </div>
                <div className="output-display">{result}</div>
            </div>
            
            <div className="buttons">
                <div className="button-row">
                    <button className="transparent-button" onClick={() => handleButtonClick("7")}>7</button>
                    <button className="transparent-button" onClick={() => handleButtonClick("8")}>8</button>
                    <button className="transparent-button" onClick={() => handleButtonClick("9")}>9</button>
                    <button className="transparent-button" onClick={handleBackspace}>←</button>
                    
                </div>
                <div className="button-row">
                    <button className="transparent-button" onClick={() => handleButtonClick("4")}>4</button>
                    <button className="transparent-button" onClick={() => handleButtonClick("5")}>5</button>
                    <button className="transparent-button" onClick={() => handleButtonClick("6")}>6</button>
                    <button className="transparent-button" onClick={() => handleButtonClick("/")}>/</button>
                </div>
                <div className="button-row">
                    <button className="transparent-button" onClick={() => handleButtonClick("1")}>1</button>
                    <button className="transparent-button" onClick={() => handleButtonClick("2")}>2</button>
                    <button className="transparent-button" onClick={() => handleButtonClick("3")}>3</button>
                    <button className="transparent-button" onClick={() => handleButtonClick("*")}>*</button>
                </div>
                <div className="button-row">
                    <button className="transparent-button" onClick={() => handleButtonClick("0")}>0</button>
                    <button className="transparent-button" onClick={() => handleButtonClick(".")}>.</button>
                    <button className="transparent-button" onClick={calculateResult}>=</button>
                    <button className="transparent-button" onClick={() => handleButtonClick("-")}>-</button>
                </div>
                <div className="button-row">
                    <button className="transparent-button" onClick={clearInput}>C</button>
                    <button className="transparent-button" onClick={() => handleButtonClick("+")}>+</button>
                </div>
            </div>
            
            
        </div>
    );
};

export default Calculator;
