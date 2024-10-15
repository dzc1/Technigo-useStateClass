/**
 * This component demonstrates how to use the useState hook to manage the state of a lightbulb being turned on or off.
 * The purpose is to teach students how to toggle a boolean state and conditionally apply CSS classes based on that state.
 * It also introduces handling user events (like clicking) to trigger state updates.
 */

import { useState } from "react";
import "./index.css"; // Importing CSS for styling the lightbulb

// Component: LightBulb
export const LightBulb = () => {
  // Initialize the state for whether the lightbulb is on or off, default is "off" (false)
  const [on, setOn] = useState(false);

  // Function to toggle the on/off state of the lightbulb
  const toggleLight = () => {
    // Set the new state by flipping the previous state (true to false, or false to true)
    setOn((previousStateOn) => !previousStateOn);

    // Log the current state and action for debugging purposes
    console.log(on);
    console.log("Clicked");
  };

  return (
    <div className="lightbulb-container">
      {/* 
        The lightbulb div changes class based on the 'on' state.
        When clicked, the toggleLight function is called to change its state.
        The className will be "lightbulb on" if the state is true, or "lightbulb off" if the state is false.
      */}
      <div className={`lightbulb ${on ? "on" : "off"}`} onClick={toggleLight}>
        <div className="bulb"></div>
      </div>
    </div>
  );
};

/**
 * Summary:
 * This component shows how to use the useState hook to manage the lightbulb's "on" or "off" state.
 * The component responds to user clicks, toggling the boolean state and applying the appropriate CSS class for visual feedback.
 * It demonstrates how to work with state, event handling, and conditional rendering with CSS in React.
 */
