/**
 * This component represents a multi-step form that collects user information such as name, age, email,
 * favorite band, album, and artist. It uses React's useState hook to manage form data and track the current step.
 * The form has validation for each step to ensure the user enters valid data before moving to the next step.
 * Once submitted, the form data is displayed, and the user can choose to reset the form and start over.
 * This component demonstrates step-by-step form handling with React state management.
 */

import { useState } from "react";
import { Age } from "./Age";
import { Album } from "./Album";
import { Artist } from "./Artist";
import { Band } from "./Band";
import { Email } from "./Email";
import { Name } from "./Name";

// Component: MultiStepForm
export const MultiStepForm = () => {
  // State to store form data for each field (name, age, email, favorite band, album, artist)
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    favoriteBand: "",
    favoriteAlbum: "",
    favoriteArtist: "",
  });

  // ---
  // ---

  // State to track whether the form has been submitted
  const [formSubmitted, setFormSubmitted] = useState(false);

  // ---
  // ---

  // State to track the current step (1 through 6)
  const [currentStep, setCurrentStep] = useState(1);

  // ---
  // ---

  // Function to update form data based on the provided field (key) and value
  const updateFormData = (field, value) => {
    // Update the specific field of formData while preserving other fields
    setFormData((previous) => ({ ...previous, [field]: value }));
  };
  // 1. This function takes in two arguments: 'field' (the form field that needs to be updated) and 'value' (the new value for that field).
  // 2. It uses the setFormData function to update the state of formData.
  // 3. The spread operator (...previous) keeps all the existing fields in formData unchanged.
  // 4. The specific field, passed as 'field', is updated with the new 'value' provided.
  // 5. This ensures that only the targeted field is updated while preserving the rest of the form data.

  // ---
  // ---

  // Function to move to the next step in the form, with validation at each step
  // Function to move to the next step in the form, with validation at each step
  const nextStep = () => {
    if (currentStep < 6) {
      // Validate the current step's data before proceeding
      switch (currentStep) {
        case 1:
          // If the name field is not empty, go to the next step, otherwise show an alert
          if (formData.name.trim() !== "") setCurrentStep(currentStep + 1);
          else alert("Please enter your name");
          break;
        case 2:
          // If the age field is not empty, go to the next step, otherwise show an alert
          if (formData.age.trim() !== "") setCurrentStep(currentStep + 1);
          else alert("Please enter your age");
          break;
        case 3:
          // If the email field is not empty, go to the next step, otherwise show an alert
          if (formData.email.trim() !== "") setCurrentStep(currentStep + 1);
          else alert("Please enter your email");
          break;
        case 4:
          // If the favoriteBand field is not empty, go to the next step, otherwise show an alert
          if (formData.favoriteBand.trim() !== "")
            setCurrentStep(currentStep + 1);
          else alert("Please select your favorite band");
          break;
        case 5:
          // If the favoriteAlbum field is not empty, go to the next step, otherwise show an alert
          if (formData.favoriteAlbum.trim() !== "")
            setCurrentStep(currentStep + 1);
          else alert("Please select your favorite album");
          break;
        default:
          // If none of the above, proceed to the next step automatically
          setCurrentStep(currentStep + 1);
      }
    }
  };

  // ---
  // ---

  // Function to move back to the previous step in the form
  // "If the currentStep is greater than 1, meaning we're not on the first step,
  // go ahead and set the currentStep to one step less than what it is now.
  // Basically, subtract 1 from currentStep, so we move back one step."
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // Function to submit the form, log the form data, and display it
  const submitForm = () => {
    console.log(formData);
    setFormSubmitted(true); // Set form as submitted
    // Format the form data for displaying in the alert
    const formattedData = `
    Name: ${formData.name}
    Age: ${formData.age}
    Email: ${formData.email}
    Favorite Band: ${formData.favoriteBand}
    Favorite Album: ${formData.favoriteAlbum}
    Favorite Artist: ${formData.favoriteArtist}
  `;
    alert(formattedData); // Display the formatted data in an alert
  };

  // ---
  // ---

  // Function to reset the form data and start the process over
  const startOver = () => {
    // Clear the form data and reset to the first step
    setFormData({
      name: "",
      age: "",
      email: "",
      favoriteBand: "",
      favoriteAlbum: "",
      favoriteArtist: "",
    });
    setFormSubmitted(false); // Reset form submission state
    setCurrentStep(1); // Reset to the first step
  };

  return (
    <div>
      {formSubmitted ? (
        <h2>Thanks for Voting!</h2>
      ) : (
        <h2>2024 - Music Awards Voting Form</h2>
      )}

      {/* Render the Name component on step 1 */}
      {currentStep === 1 && (
        <Name value={formData.name} updateFormData={updateFormData} />
      )}
      {/* Render the Age component on step 2 */}
      {currentStep === 2 && (
        <Age value={formData.age} updateFormData={updateFormData} />
      )}
      {/* Render the Email component on step 3 */}
      {currentStep === 3 && (
        <Email value={formData.email} updateFormData={updateFormData} />
      )}
      {/* Render the Band component on step 4 */}
      {currentStep === 4 && (
        <Band value={formData.favoriteBand} updateFormData={updateFormData} />
      )}
      {/* Render the Album component on step 5 */}
      {currentStep === 5 && (
        <Album value={formData.favoriteAlbum} updateFormData={updateFormData} />
      )}
      {/* Render the Artist component on step 6 */}
      {!formSubmitted && currentStep === 6 && (
        <Artist
          value={formData.favoriteArtist}
          updateFormData={updateFormData}
        />
      )}
      {/* Navigation buttons for moving between steps */}
      {!formSubmitted && (
        <div className="cta-box">
          {/* Show "Back" button if not on the first step */}
          {currentStep > 1 && <button onClick={prevStep}>Back</button>}
          {/* Show "Next" button or "Submit" button depending on the step */}
          {currentStep < 6 ? (
            <button onClick={nextStep}>Next</button>
          ) : (
            <button onClick={submitForm}>Submit Form</button>
          )}
        </div>
      )}

      {/* Display the form data after submission */}
      {formSubmitted && (
        <div className="border-box">
          <h3>Voting Information</h3>
          <p>Name: {formData.name}</p>
          <p>Age: {formData.age}</p>
          <p>Email: {formData.email}</p>
          <p>Favorite Band: {formData.favoriteBand}</p>
          <p>Favorite Album: {formData.favoriteAlbum}</p>
          <p>Favorite Artist: {formData.favoriteArtist}</p>
          {/* Button to reset the form and start over */}
          <button onClick={startOver}>Start Over</button>
        </div>
      )}
    </div>
  );
};

/**
 * Summary:
 * This multi-step form demonstrates how to manage complex form data across multiple steps with React's useState hook.
 * It validates input at each step and conditionally renders different components based on the current step.
 * The form collects user information and, upon submission, displays the data. The user can reset the form and start over.
 * This component is useful for teaching how to manage multi-step forms, form validation, and state management.
 */
