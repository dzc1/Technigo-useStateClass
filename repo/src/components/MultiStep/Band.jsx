/**
 * This component is used to collect and update the user's favorite band in a multi-step form.
 * It demonstrates how to handle select dropdowns in React using the useState hook indirectly (from a parent component).
 * The Band component receives the current favorite band value and an update function as props, and updates the form data when the user selects a band.
 * This file helps students understand how to manage dropdowns and controlled components using props in React.
 */

export const Band = ({ updateFormData, value }) => {
  // Function to handle the user's selection and update the form's favoriteBand field
  const handleFavoriteBandChange = (e) => {
    // Call updateFormData to update the "favoriteBand" field with the selected value
    updateFormData("favoriteBand", e.target.value);
  };

  return (
    <div className="border-box">
      {/* Label for the favorite band dropdown */}
      <label>Favorite Band:</label>

      {/* Dropdown to select the user's favorite band, controlled by the "value" prop */}
      {/* The onChange event triggers the handleFavoriteBandChange function to update the form data */}
      <select value={value} onChange={handleFavoriteBandChange}>
        <option value="">Select a Band</option>
        <option value="parcels">Parcels</option>
        <option value="gorillaz">Gorillaz</option>
        <option value="jungle">Jungle</option>
        <option value="dope-lemon">Dope Lemon</option>
      </select>
    </div>
  );
};

/**
 * Summary:
 * This component provides a dropdown for selecting the user's favorite band, and updates the form state when a selection is made.
 * The component demonstrates how to handle select inputs in React and pass values and functions between parent and child components using props.
 * It emphasizes controlled components, where the dropdown's value is controlled by the parent component's state.
 */
