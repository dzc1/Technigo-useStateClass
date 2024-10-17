/**
 * This component demonstrates how to use the useState hook to manage the on/off status of a lightbulb.
 * It uses state to toggle the light between "on" and "off" when the user clicks on the lightbulb.
 * The purpose of this file is to teach intro students how to use the useState hook for managing simple state changes and handling events in React.
 */

import { useState } from "react";

// Component: LightBulbString
export const LightBullString = () => {
  // Initialize our lightbulb's status as "off" when the component first renders
  const [status, setStatus] = useState("off");

  // Function to toggle the lightbulb status between "on" and "off"
  const toggleLight = () => {
    // Set the new status by checking the previous status
    // If the status is "off", set it to "on". If it's "on", set it to "off".
    setStatus((previousStatus) => (previousStatus === "off" ? "on" : "off"));
  };

  return (
    <div className="lightbulb-container">
      {/* 
        The lightbulb div changes class based on the status (either "on" or "off"), 
        and it has an onClick event that calls the toggleLight function to change its status 
      */}
      <div className={`lightbulb ${status}`} onClick={toggleLight}>
        <div className="bulb"></div>
      </div>
    </div>
  );
};

/**
 * Summary:
 * This component showcases how to toggle a state using the useState hook in React.
 * The lightbulb's "on" or "off" status is stored in state, and the toggleLight function updates this state based on user interaction.
 * It's a simple example of how useState works to keep track of a component's local state and react to user events (in this case, clicking the lightbulb).
 */
