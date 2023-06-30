import React, { useState } from 'react'
import "../App.css";
export default function Previewer() {
    const [isFirstDivVisible, setIsFirstDivVisible] = useState(true);
    const [isSecondDivVisible, setIsSecondDivVisible] = useState(true);
    const [isFirstDivExpanded, setIsFirstDivExpanded] = useState(false);
    const [isSecondDivExpanded, setIsSecondDivExpanded] = useState(false);
  
    const toggleFirstDiv = () => {
        if (!isFirstDivExpanded) {
          setIsFirstDivVisible(true);
          setIsSecondDivVisible(false);
        } else {
          setIsFirstDivVisible(true);
          setIsSecondDivVisible(true);
        }
        setIsFirstDivExpanded(!isFirstDivExpanded);
        setIsSecondDivExpanded(false);
      };
  
      const toggleSecondDiv = () => {
        if (!isSecondDivExpanded) {
          setIsSecondDivVisible(true);
          setIsFirstDivVisible(false);
        } else {
          setIsFirstDivVisible(true);
          setIsSecondDivVisible(true);
        }
        setIsSecondDivExpanded(!isSecondDivExpanded);
        setIsFirstDivExpanded(false);
      };
    const firstDivStyle = {
      
        width: isFirstDivExpanded ? '80vh' : '600px',
        height: isFirstDivExpanded ? '95vh' : '300px',
        backgroundColor: 'lightblue',
        margin: '2px 70px 10px',
        display: isFirstDivVisible ? 'block' : 'none',
        cursor: 'pointer',
        
      };
    
      const secondDivStyle = {
        width: isSecondDivExpanded ? '100vh' : '80vh',
        height: isSecondDivExpanded ? '95vh' : '65vh',
        backgroundColor: 'lightgreen',
        margin: '10px',
        display: isSecondDivVisible ? 'block' : 'none',
        cursor: 'pointer',
      };
      return (
        <div>
          <div style={firstDivStyle} id='firstbx'>
            <button onClick={toggleFirstDiv}>Toggle First Div</button>
          </div>
          <div style={secondDivStyle} id="secondbx">
            <button onClick={toggleSecondDiv}>Toggle Second Div</button>
          </div>
        </div>
      );
}
