import React, { useState } from 'react';

const quotes = [
    "The purpose of our lives is to be happy.",
    "Life is what happens when you're busy making other plans.",
    "Get busy living or get busy dying.",
    "Believe you can and you're halfway there.",
    "No Pressure No Diamonds.",
    "Ang lahat ay may dahilan.",
    "Wag ng Ipilit ang mga Bagay na Hindi Pwede.",
    "Life is short, Pakabusog lang tayo.",
    "Kaya mo yan!",
];

const randomColor = ['A', 'B', 'C', 'D', 'E', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export default function QuotePicker() {
    const [color, setColor] = useState("#FFFFFF");
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [previousQuotes, setPreviousQuotes] = useState([]);

    function getRandomNumber() {
        return Math.floor(Math.random() * randomColor.length);
    }

    function getRandomColor() {
        let hex = "#";
        for (let i = 0; i < 6; i++) {
            hex += randomColor[getRandomNumber()];
        }
        return hex;
    }

    function randomQuoteChange() {
        setPreviousQuotes([...previousQuotes, quotes[currentQuoteIndex]]);
        
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * quotes.length);
        } while (randomIndex === currentQuoteIndex);

        setCurrentQuoteIndex(randomIndex);
        setColor(getRandomColor());
    }

    function showPreviousQuote() {
        if (previousQuotes.length > 0) {
            const lastPreviousQuote = previousQuotes[previousQuotes.length - 1];
            setPreviousQuotes(previousQuotes.slice(0, -1));
            setCurrentQuoteIndex(quotes.indexOf(lastPreviousQuote));
            setColor(getRandomColor());
        }
    }

    function showNextQuote() {
        setPreviousQuotes([...previousQuotes, quotes[currentQuoteIndex]]);

        const nextIndex = (currentQuoteIndex + 1) % quotes.length; 
        setCurrentQuoteIndex(nextIndex);
        
    }

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return (
        <>
            <div className="color-picker-container">
                <h1>Quote Generator</h1>
                <div className="color-display" style={{ backgroundColor: color }}>
                    <p style={{ color: '#000' }}>{quotes[currentQuoteIndex]}</p>
                </div>

                <label>Select Quote bgcolor:</label>
                <input type="color" value={color} onChange={handleColorChange} />

                <button className="randomize" onClick={randomQuoteChange}>Random Quote</button>
                <button className="randomize" onClick={showPreviousQuote} disabled={previousQuotes.length === 0}>Previous Quote</button>
                <button className="randomize" onClick={showNextQuote}>Next Quote</button>
            </div>
        </>
    );
}