import { useState } from "react";
import { QuestionOne } from "./questions/QuestionOne";
import { QuestionTwo } from "./questions/QuestionTwo";
import { QuestionThree } from "./questions/QuestionThree";
import { QuestionFour } from "./questions/QuestionFour";

// This component is responsible for rendering a list of questions using the Question components.
// It also manages state for child components and passes data between parent and child components.

export const QuestionDistributive = () => {
  // Define an array of question objects, where each question has an id, title, and context.
  // These objects will be used to render individual question components later.
  const questions = [
    {
      id: 1,
      title:
        "What is the best practice for the CSS files in React: storing them with their components, or in a separate folder for styles?",
      context:
        "In React, should we organize CSS files within the component folders for a more modular approach, or store them in a separate global folder for easier management?",
    },
    {
      id: 2,
      title:
        "I have trouble understanding when and why to use () {} [] in React",
      context:
        "The question explores the usage of different brackets and symbols in React for various purposes, such as object destructuring, array spread, and function invocation.",
    },
    {
      id: 3,
      title:
        "When creating a radio button, why not use the name attribute in the input?",
      context:
        "This question relates to form control in React. It seeks to explore why the 'name' attribute is usually important in managing radio buttons in a form but sometimes omitted.",
    },
    {
      id: 4,
      title:
        "Why should we use the spread operator when adding items to an array in state, rather than modifying the original array?",
      context:
        "The student is asking about the spread operator and its benefits when updating arrays in React state. This prevents direct mutation of the state.",
    },
  ];

  // useState is a React hook used to manage local state in functional components.
  // childData and setChildData: These manage state for handling data coming from a child component.
  // Initially, childData is an empty string.
  const [childData, setChildData] = useState("");

  // childInputData and setChildInputData: These manage state specifically for input data from a child component.
  // This data will be updated when the child component passes the input back to the parent component.
  const [childInputData, setChildInputData] = useState("");

  // handleChildInput is a function that will be passed to a child component (QuestionFour).
  // The child component will use this function to send its input back to the parent.
  // When this function is called, it updates the parent state with the child's input data,
  // and an alert is shown with the received data.
  const handleChildInput = (data) => {
    // Update the state with the data received from the child component.
    setChildInputData(data);

    // Show an alert with the received data from the child.
    alert(`Received from child: ${data}`);

    // Log the updated child input data to the console (after it has been updated in state).
    // However, this log may show the old state value due to React's asynchronous state updates.
    console.log(childInputData);
  };

  return (
    <>
      {/* Display the current value of childInputData in an <h4> element.
          This value will be updated whenever the child component sends input data. */}
      <h4>Data from Question Input: {childInputData}</h4>

      {/* Render the first question using the QuestionOne component. */}
      <QuestionOne title={questions[0].title} number={questions[0].id} />

      {/* Render the second question using the QuestionTwo component. */}
      <QuestionTwo title={questions[1].title} number={questions[1].id} />

      {/* Render the third question using the QuestionThree component. */}
      <QuestionThree title={questions[2].title} number={questions[2].id} />

      {/* Render the fourth question using the QuestionFour component.
          Pass the handleChildInput function as a prop named sendInputToParent to the child.
          This allows QuestionFour to send input data back to the parent. */}
      <QuestionFour
        title={questions[3].title}
        number={questions[3].id}
        sendInputToParent={handleChildInput} // This prop is used to send input data back to the parent
      />
    </>
  );
};
