/**
 * This component is used to collect and update the user's email in a multi-step form.
 * It demonstrates how to handle form inputs in React using the useState hook indirectly (from a parent component).
 * The Email component receives the current email value and an update function as props, and updates the form data whenever the user types in their email.
 * This file helps students understand controlled components and how to manage form data through props in React.
 */

export const Email = ({ updateFormData, value }) => {
  // Function to handle user input and update the form's email field
  const handleEmailChange = (e) => {
    // Call updateFormData to update the "email" field with the input's current value
    updateFormData("email", e.target.value);
  };

  return (
    <div className="border-box">
      {/* Label for the email input field */}
      <label>Email:</label>

      {/* Input field to capture the user's email, with the value controlled by the "value" prop */}
      {/* The onChange event triggers the handleEmailChange function to update the form data */}
      <input type="email" value={value} onChange={handleEmailChange} />
    </div>
  );
};

/**
 * Summary:
 * This component provides an input field for the user's email and updates the form state through the handleEmailChange function when the user types.
 * The component demonstrates how to handle controlled inputs in React and pass values and functions between parent and child components using props.
 */
