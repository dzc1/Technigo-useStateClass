import { useState } from "react";

export const QuestionFour = ({ title, number, sendInputToParent }) => {
  const content = {
    context:
      "In React, it’s important to understand the concept of mutations when working with state. By avoiding direct mutations and ensuring immutability, you can maintain predictable state changes and ensure React optimally re-renders your components.",
    bulletpoints: [
      {
        id: 1,
        title: "What is a mutation?",
        point:
          "A mutation occurs when you directly change (mutate) an object or array. For example, if you modify the contents of an array or object without creating a copy of it, you are mutating the original data structure. This can lead to unintended side effects in your app.",
      },
      {
        id: 2,
        title: "Why avoid direct mutations?",
        point:
          "In React, state must remain immutable. This means that you should never directly modify the state object or array. Instead, you create a new version of the state with the updated data. Direct mutations can cause unexpected behavior because React relies on detecting changes in state to know when to re-render components. If the state is mutated directly, React might not detect the change and fail to update the UI correctly.",
      },
      {
        id: 3,
        title: "Ensuring Immutability with the Spread Operator",
        point:
          "The spread operator (`...`) allows you to create a shallow copy of an array or object, ensuring that the original data is not modified. This is crucial for maintaining immutability in React. By using the spread operator, you avoid directly mutating the state and instead return a new array or object with the updated values. This guarantees that React can properly track changes and re-render components as needed.",
      },
    ],
  };

  const [inputValue, setInputValue] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setTypingTimeout(
      setTimeout(() => {
        sendInputToParent(event.target.value);
      }, 1000)
    );
  };

  return (
    <div className="question-outer-container">
      <details>
        <summary>
          {number} - {title}
        </summary>
        <>
          <p>{content.context}</p>
          {content.bulletpoints.map((bulletPoint) => (
            <ul key={bulletPoint.id}>
              <h4>{bulletPoint.title}</h4>
              <li>{bulletPoint.point}</li>
            </ul>
          ))}

          <label htmlFor="inputValue">Test the spread operator:</label>
          <input
            id="inputValue"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type something..."
          />
        </>
      </details>
    </div>
  );
};

// What is a mutation?
// A mutation refers to directly altering or modifying an existing object or array. For instance, adding, removing, or changing the contents of an array or object without creating a copy leads to a direct mutation.
// Example: Directly adding an item to an array via array.push(item) modifies the original array.
// Why avoid direct mutations?
// React relies on detecting changes in state to know when to re-render components. When you directly mutate state (such as modifying an array or object in place), React may not realize that the state has changed. This can lead to your UI not updating as expected.
// Immutability is the principle of never modifying an existing object or array but instead creating a new version with the desired changes. This way, React can detect the change and properly re-render your components.
// How does immutability improve React's performance?
// React uses a process called reconciliation to determine what parts of the UI need to be updated. By keeping state immutable, React can quickly compare the new state with the old state (because the references change), improving performance and ensuring predictable behavior.
// How to ensure immutability using the spread operator:
// To avoid directly modifying state, use the spread operator (...). This operator allows you to create a shallow copy of an array or object, meaning that the copy will have all the same values but will be a new reference in memory.
// For arrays: [...existingArray, newItem]
// For objects: { ...existingObject, newProperty: value }
// This approach ensures that you’re not mutating the original data, and you’re adhering to React’s immutable state principle.

//Example of Mutation vs. Immutability:

// Mutation (direct modification):

const itemsOne = ["apple", "banana"];
itemsOne.push("orange"); // Directly modifies the original array
console.log(itemsOne);

//Immutability (using spread operator):

const items = ["apple", "banana"];
const newItems = [...items, "orange"]; // Creates a new array with 'orange' added
console.log(items);
console.log(newItems);
console.log(items);

//By ensuring immutability, you prevent unintended side effects and ensure React can correctly track changes to your state.
