
import React, { useState } from 'react';
import Header from './Header';
import Keyboard from './Keyboard';
import AboutUs from './AboutUs';
import Footer from './Footer';
import './App.css';

const App = () => {
    const [showAbout, setShowAbout] = useState(false);

    const toggleAbout = () => {
        setShowAbout(!showAbout);
    };

    const keyboardModel = "KB-X1000";
    const productOverview = "The KB-X1000 is a high-performance mechanical keyboard designed for gamers, professionals, and everyday users who demand precision and comfort. It features customizable RGB backlighting, durable mechanical switches, and programmable keys to enhance your typing and gaming experience.";
    
    const specifications = {
        "Switch Type": "Cherry MX Red (Mechanical)",
        "Key Layout": "Full-size (104 keys)",
        "Backlighting": "RGB with customizable colors",
        "Connectivity": "Wired (USB 2.0)",
        "Dimensions": "440 mm x 135 mm x 35 mm",
        "Weight": "1.2 kg",
        "Cable Length": "1.8 meters",
        "Additional Features": "Anti-ghosting, N-key rollover, dedicated media controls"
    };

    const keyFeatures = [
        "Customizable RGB Backlighting: Personalize the keyboard’s illumination with a wide range of colors and lighting effects.",
        "Mechanical Switches: Cherry MX Red switches for a responsive and smooth typing experience.",
        "Programmable Keys: Assign macros and custom functions to any key with the included software.",
        "Anti-Ghosting & N-Key Rollover: Ensure accurate keypress registration during intense gaming sessions.",
        "Dedicated Media Controls: Easily control music and videos with dedicated media keys."
    ];

    const setupInstructions = {
        unboxing: [
            "Carefully remove the keyboard and accessories from the box."
        ],
        connecting: [
            "Plug the USB cable into an available USB port on your computer.",
            "The keyboard should be automatically recognized and ready for use. No additional drivers are required."
        ]
    };

    const softwareInstallation = [
        "Download the configuration software from the manufacturer’s website if you wish to customize key functions or lighting.",
        "Follow the on-screen instructions to install the software."
    ];

    const keycapRemoval = [
        "Use the included keycap removal tool to gently pry off keycaps for cleaning or replacement.",
        "Replace keycaps by aligning them over the switch and pressing down until they click into place."
    ];

    const usageInstructions = {
        basicTyping: [
            "Simply start typing; the keyboard is pre-configured with standard key mappings."
        ],
        customizingBacklighting: [
            "Press Fn + F9 to cycle through preset lighting effects.",
            "Use the configuration software to create custom lighting profiles."
        ],
        programmingKeys: [
            "Open the configuration software.",
            "Select the key you want to program.",
            "Assign a macro or function and save your changes."
        ],
        mediaControls: [
            "Use the dedicated media keys (Play/Pause, Volume Up/Down, Mute) for easy media control."
        ]
    };

    const troubleshooting = [
        "Ensure the USB connection is secure.",
        "Try connecting the keyboard to a different USB port.",
        "Restart your computer if necessary.",
        "Check if the backlight is disabled or set to a minimal brightness level.",
        "Verify that the configuration software is properly installed.",
        "Confirm that no physical obstructions are affecting the key.",
        "Test the key in different applications to determine if the issue is software-related."
    ];

    const maintenance = {
        cleaning: [
            "Disconnect the keyboard from the computer.",
            "Use a soft, dry cloth to clean the surface.",
            "For deeper cleaning, carefully remove keycaps and use compressed air to remove debris."
        ],
        storage: [
            "Store the keyboard in a cool, dry place.",
            "Avoid exposure to liquids or extreme temperatures."
        ]
    };

    const warrantyAndSupport = [
        "Warranty Period: 2 years from the date of purchase.",
        "Customer Support: For assistance, contact customer support via the manufacturer’s website or call the support hotline at 1-800-555-1234.",
        "Manufacturer’s Website: www.keyboardcompany.com",
        "Customer Support Email: support@keyboardcompany.com",
        "Support Hotline: 1-800-555-1234"
    ];

    return (
      <div className="app-container">
          <Header onAboutClick={toggleAbout} />
          <h1>Keyboard Documentation</h1>
          {showAbout && <AboutUs />}
          <Keyboard 
              model={keyboardModel} 
              overview={productOverview} 
              specs={specifications} 
              features={keyFeatures} 
              setup={setupInstructions} 
              software={softwareInstallation} 
              keycapRemoval={keycapRemoval} 
              usage={usageInstructions} 
              troubleshooting={troubleshooting} 
              maintenance={maintenance} 
              warranty={warrantyAndSupport} 
          />
          <Footer />
      </div>
    );
    };
    
    export default App;
