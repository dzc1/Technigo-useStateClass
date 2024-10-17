/**
 * This component is used to collect and update the user's age in a multi-step form.
 * It demonstrates how to handle form inputs in React using the useState hook indirectly (from a parent component).
 * The Age component receives the current age value and an update function as props, and updates the form data whenever the user inputs a number.
 * This file helps students understand how controlled components work and how to pass down state and functions between components in React.
 */

import { handleInputChange } from "../../utils/dataChange"; // Import the utility function

export const Age = ({ updateFormData, value }) => {
  // Function to handle user input and update the form's age field
  const handleAgeChange = (e) => {
    // Call updateFormData to update the "age" field with the input's current value
    updateFormData("age", e.target.value);
  };

  // // Use the handleInputChange utility function with "age" as the field name
  // const handleAgeChange = handleInputChange("age", updateFormData);

  return (
    <div className="border-box">
      {/* Label for the age input field */}
      <label>Age:</label>

      {/* Input field to capture the user's age, with the value controlled by the "value" prop */}
      {/* The onChange event triggers the handleAgeChange function to update the form data */}
      <input type="number" value={value} onChange={handleAgeChange} />
    </div>

    // WITH UTIL FUNCTION
    //   <div className="border-box">
    //   <label>Age:</label>
    //   <input type="number" value={value} onChange={handleAgeChange} />
    // </div>
  );
};

/**
 * Summary:
 * This component provides an input field for the user's age and updates the form state through the handleAgeChange function as the user types.
 * The component receives both the current age value and the update function as props, making it a good example of controlled inputs and props usage in React.
 */
