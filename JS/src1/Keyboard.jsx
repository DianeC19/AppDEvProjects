
import React from 'react';
import keyboardImage from './assets/2.jpg'; 

const Keyboard = ({ model, overview, specs, features, setup, software, keycapRemoval, usage, troubleshooting, maintenance, warranty }) => {
    return (
        <div className="keyboard-container">
            <h1>{model}</h1>
            <img src={keyboardImage} alt={`${model}`} className="keyboard-image" /> {}
            <p>{overview}</p>

            <h2>Specifications</h2>
            <ul>
                {Object.entries(specs).map(([key, value]) => (
                    <li key={key}>
                        <strong>{key}:</strong> {value}
                    </li>
                ))}
            </ul>

            <h2>Key Features</h2>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>

            <h2>Setup Instructions</h2>
            <h3>Unboxing:</h3>
            <ul>
                {setup.unboxing.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <h3>Connecting the Keyboard:</h3>
            <ul>
                {setup.connecting.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>

            <h2>Software Installation (Optional)</h2>
            <ul>
                {software.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>

            <h2>Keycap Removal and Replacement</h2>
            <ul>
                {keycapRemoval.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>

            <h2>Using the Keyboard</h2>
            <h3>Basic Typing:</h3>
            <ul>
                {usage.basicTyping.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <h3>Customizing Backlighting:</h3>
            <ul>
                {usage.customizingBacklighting.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <h3>Programming Keys:</h3>
            <ul>
                {usage.programmingKeys.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <h3>Using Media Controls:</h3>
            <ul>
                {usage.mediaControls.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>

            <h2>Troubleshooting</h2>
            <ul>
                {troubleshooting.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>

            <h2>Maintenance and Care</h2>
            <h3>Cleaning:</h3>
            <ul>
                {maintenance.cleaning.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
            <h3>Storage:</h3>
            <ul>
                {maintenance.storage.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>

            <h2>Warranty and Support</h2>
            <ul>
                {warranty.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p>Thank you for choosing the KB-X1000. We hope you enjoy your new keyboard! Type Safe!</p>
        </div>
    );
};

export default Keyboard;