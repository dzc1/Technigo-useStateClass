import { useState } from "react";

export const QuestionTwo = ({ title, number }) => {
  const content = {
    context:
      "In React, different types of brackets and symbols serve specific purposes: () for function calls, {} for JSX expressions or object literals, and [] for arrays or destructuring. Understanding these symbols helps you write more effective and maintainable code.",
    bulletpoints: [
      {
        id: 1,
        title: "Parentheses ()",
        point:
          "Parentheses are primarily used to invoke functions or group expressions. In React, this includes calling a functional component and grouping JSX returned from that function.",
      },
      {
        id: 2,
        title: "Curly Braces {} in JSX",
        point:
          "Curly braces are used in JSX to insert JavaScript expressions. For example, you can use them to dynamically render variables or execute expressions inside your JSX. Below the `return` statement in functional components, curly braces allow you to embed JavaScript logic within your JSX markup.",
      },
      {
        id: 3,
        title: "Square Brackets []",
        point:
          "Square brackets are typically used for arrays or destructuring. In React, you often use them when managing array data or using the `useState` hook to destructure the state and setState values.",
      },
      {
        id: 4,
        title: "setFormData((previous) => ({ ...previous, [field]: value }));",
        point:
          "The setFormData() function is used to update specific fields in a formData state object without overwriting the entire object. Inside the function, we use the spread operator (...previous) to create a copy of the current state, ensuring that all existing fields remain unchanged. Then, we update only the targeted field using computed property syntax ([field]: value), where field is the name of the form field and value is its new value. This approach ensures immutability, meaning we don't directly modify the original state but instead return a new object, allowing React to properly detect changes and re-render components.",
      },
    ],
  };

  let rapperName = "Tupac";

  return (
    <div className="question-outer-container">
      <details>
        <summary>
          {number} - {title} - {rapperName} - {2 + 5 / 2}
        </summary>
        <>
          <p>{content.context}</p>
          {content.bulletpoints.map((bulletPoint) => (
            <ul key={bulletPoint.id}>
              <h4>{bulletPoint.title}</h4>
              <li>{bulletPoint.point}</li>
            </ul>
          ))}
        </>
      </details>
    </div>
  );
};
