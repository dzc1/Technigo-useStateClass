/**
 * This component is used to collect and update the user's name in a multi-step form.
 * It demonstrates how to handle form inputs in React using the useState hook indirectly (from a parent component).
 * The Name component receives the current name value and an update function as props, and updates the form data whenever the user types.
 * This file is intended to help students understand how to pass down state and functions in React, while keeping the input's state in sync.
 */

import { handleInputChange } from "../../utils/dataChange"; // Import the utility function

export const Name = ({ value, updateFormData }) => {
  // Function to handle user input and update the form's name field
  const handleNameChange = (e) => {
    // Call updateFormData to update the "name" field with the input's current value
    updateFormData("name", e.target.value);
  };

  // // Use the handleInputChange utility function with "age" as the field name
  // const handleAgeChange = handleInputChange("age", updateFormData);

  return (
    <div className="border-box">
      {/* Label for the name input field */}
      <label>Name:</label>

      {/* Input field to capture the user's name, with the value controlled by the "value" prop */}
      {/* The onChange event triggers the handleNameChange function to update the form data */}
      <input type="text" value={value} onChange={handleNameChange} />
    </div>

    // WITH UTIL FUNCTION
    //   <div className="border-box">
    //   <label>Age:</label>
    //   <input type="text" value={value} onChange={handleAgeChange} />
    // </div>
  );
};

/**
 * Summary:
 * This component displays an input field for the user's name, and as the user types, the handleNameChange function
 * updates the form's state by calling the updateFormData function. This helps students understand controlled components in React.
 * It also demonstrates how props are used to pass both values and functions between parent and child components.
 */
