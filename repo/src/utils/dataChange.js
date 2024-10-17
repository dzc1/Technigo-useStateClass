// Utility function to handle input changes for any form field
// What: Centralizes input change logic for different form fields
// Why: It allows for cleaner and reusable code, reducing repetition in handling form input updates
// How: The function takes the field name and a state updater function, and updates the form state 
//      whenever an input change occurs, making it flexible for different fields.

export const handleInputChange = (fieldName, updateFormData) => (e) => {
  // Trigger the state update with the field name and new value
  updateFormData(fieldName, e.target.value);
};
