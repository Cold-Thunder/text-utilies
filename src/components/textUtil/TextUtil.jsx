import React, { useState, useEffect } from "react";
import "./textUtil.css";

const TextUtil = () => {
    const [text, setText] = useState('');
    const [dark, setDark] = useState(false);
    const [modes, setModes] = useState(false);
    const [darkText, setDarkText] = useState('Dark')

    const modesBtn =() =>{
        setModes(drk => !drk);
    }
    const handleColor = (e) =>{
        let bck = document.querySelector('body');
        bck.style.backgroundColor = `${e.target.value}`;
        bck.style.color = 'white'
    }
    const handleLeave = () =>{
        setModes(false);
    }
    const handleDark = () => {
        setDark(drk => !drk);
    }

    const handleUpper = () => {
        let txt = text.toUpperCase();
        setText(txt);
    }
    const handleLower = () => {
        let txt = text.toLowerCase();
        setText(txt);
    }

    const handleCapit = () =>{
        
    }

    const changeText = (e) => {
        setText(e.target.value);
    }
    const wordCounter = () => {
        if (text == null) {
            return 0;
        } else {
            return text.split(" ").length - 1;
        }
    }

    useEffect(() => {
        let util = document.querySelector('body');
        let txtArea = document.querySelector('.textArea');
        dark ? util.classList.add('dark') : util.classList.remove('dark');
        dark ? setDarkText('Light') : setDarkText('Dark');
        dark ? txtArea.classList.add('dark-text-area') : txtArea.classList.remove('dark-text-area');
    })

    return (
        <div className="text-utilite">
            <div className="nav-bar">
                <div className="dark-modes">
                    <div className="modes-btn">
                        <button className="dark-mode-btns" onClick={modesBtn}>Color Modes</button>
                    </div>
                    {
                        modes &&                    
                        <div className= "modes-color-btns" onMouseLeave={handleLeave}>
                            <button className="mode-color-btn" value="rgb(108,1,1)" onClick={handleColor} style={{backgroundColor: "rgb(108,1,1)"}}></button>
                            <button className="mode-color-btn" value="rgb(1,13,108)" onClick={handleColor} style={{backgroundColor: "rgb(1,13,108)"}}></button>
                            <button className="mode-color-btn" value="rgb(1,108,38)" onClick={handleColor} style={{backgroundColor: "rgb(1,108,38)"}}></button>
                            <button className="mode-color-btn" value="rgb(95,4,122)" onClick={handleColor} style={{backgroundColor: "rgb(95,4,122)"}}></button>
                            <button className="mode-color-btn" value="rgb(1,112,112)" onClick={handleColor} style={{backgroundColor: "rgb(1,112,112)"}}></button>
                            <button className="mode-color-btn" value="rgb(114,98,0)" onClick={handleColor} style={{backgroundColor: "rgb(114,98,0)"}}></button>
                        </div>
    
                    }
                </div>
                <div className="darkBtn">
                    <button onClick={handleDark}>{darkText}</button>
                </div>
            </div>
            <div className="text-util-sec">
                <h1>Text Editor</h1>
                <div className="text-section">
                    <div className="text-area">
                        <textarea className="textArea" value={text} onChange={changeText} placeholder="Enter some text..."></textarea>
                        <div className="counter">
                            <p className="words">{wordCounter()} words</p>
                            <p className="char">{text.split("").length} characters</p>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="textBtn" onClick={handleUpper}>Upper</button>
                        <button className="textBtn" onClick={handleLower}>Lower</button>
                        <button className="textBtn" onClick={handleCapit}>Cpitalize</button>
                    </div>
                </div>
                <div className="preview-section">
                    <div className="preview-heading">
                        <h2>Preview</h2>
                    </div>
                    <div className="preview">
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextUtil;