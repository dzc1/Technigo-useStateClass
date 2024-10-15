/**
 * This variation of the LightBulb component demonstrates how to use an empty array to manage state
 * and toggle the lightbulb on and off based on the array's length.
 * If the array is empty, the light is "off"; if the array has any item, the light is "on".
 * This version teaches students how to leverage array length as a simple state mechanism.
 */

import { useState } from "react";
import "./index.css"; // Importing CSS for styling the lightbulb

// Component: LightBulbArray
export const LightBulbArray = () => {
  // Initialize the state as an empty array
  const [toggleArray, setToggleArray] = useState([]);

  // Function to toggle the array's state: Add an item if the array is empty, or clear it if it has an item
  const toggleLight = () => {
    // Check the array length to determine if we should turn the light on (add item) or off (clear array)
    setToggleArray((prevArray) => (prevArray.length === 0 ? ["lightOn"] : []));

    // Log the current array for debugging
    console.log(toggleArray);
    console.log("Clicked");
  };

  return (
    <div className="lightbulb-container">
      {/* 
        The lightbulb div changes class based on whether the array is empty or not.
        If the array has an item, the class is "on", otherwise it is "off".
      */}
      <div
        className={`lightbulb ${toggleArray.length > 0 ? "on" : "off"}`}
        onClick={toggleLight}
      >
        <div className="bulb"></div>
      </div>
    </div>
  );
};

/**
 * Summary:
 * This component shows how to use an empty array to manage the lightbulb's "on" or "off" state.
 * The array is either empty (light is off) or contains an item (light is on), with the toggleLight function
 * adding or removing the item. This variation teaches how to use array length as a simple control mechanism for state.
 */
