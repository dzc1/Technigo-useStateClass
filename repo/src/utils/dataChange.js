// Utility function to handle input changes for any form field
export const handleInputChange = (fieldName, updateFormData) => (e) => {
  updateFormData(fieldName, e.target.value);
};
