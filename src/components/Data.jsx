/**
 * This component demonstrates how to use the useState hook to manage different types of state in React.
 * It covers primitive data types, arrays, objects, and even functions as state.
 * The component also shows how to update and manipulate these states through user interactions like button clicks.
 * This file is designed to help students understand the basics of local state management with useState.
 */

import { useState } from "react";

// Component: Data
export const Data = () => {
  // Primitive Data Types
  // Initialize count state with a default value of 0
  const [count, setCount] = useState(0);

  // ----
  // ----
  // Initialize text state with a default value of an empty string
  const [text, setText] = useState("");

  // ----
  // ----
  // Initialize visibility state with a default boolean value of false
  const [isVisible, setIsVisible] = useState(false);

  // ----
  // ----
  // Arrays

  // Initialize an array state with a default empty array
  const [items, setItems] = useState([]);

  // ----
  // ----
  // Objects

  // Initialize user state as an object with default properties name and age
  const [user, setUser] = useState({ name: "", age: 0 });

  // ----
  // ----
  // Complex Data Structures

  // Initialize users state with an array of user objects
  const [users, setUsers] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
  ]);

  // ----
  // ----
  // Functions

  // Function to increment the count state by 1
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Function to append "Hello" to the text state
  const handleAppendText = () => {
    setText(text + " Hello");
  };

  // Function to toggle the visibility state between true and false
  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // Function to add a new item to the items array
  const handleAddItem = () => {
    const currentDate = new Date();
    setItems([...items, `New item - ${currentDate.toLocaleString()} `]);
  };

  // Function to set the user's name to "John"
  const handleSetUserName = () => {
    setUser({ ...user, name: "John" });
  };

  // Function to set the user's age to 30
  const handleSetUserAge = () => {
    setUser({ ...user, age: 30 });
  };

  // Function to add a new user to the users array
  // const handleAddUser = () => {
  //   setUsers([...users, { name: "Charlie", age: 35 }]);
  // };

  const handleAddUser = () => {
    // Prompting the user to enter a new name for the user
    const newName = prompt("Please enter the new user's name:");
    // Prompting the user to enter a new age for the user
    const newAge = prompt("Please enter the new user's age:");
    // Checking if both name and age are provided before adding to the users array
    if (newName && newAge) {
      // Adding the new user to the users array. Age is converted from string to a number using parseInt()
      setUsers([...users, { name: newName, age: parseInt(newAge, 10) }]);
    } else {
      // Alerting the user if they didn't provide both name and age
      alert("Both name and age are required!");
    }
  };

  // Function to Fire
  // 1. Initialize `callback` state with a default function
  //    The default function logs "Default function" to the console
  //    This is like pressing a button to get today's weather when you first set up your weather station
  const [callback, setCallback] = useState(() =>
    console.log("Default function")
  );

  // 2. Function to update the `callback` state with a new function
  //    The new function logs "Updated function" to the console
  //    This is like calling someone at the weather station to update the button's action,
  //    so next time you press it, it gives you tomorrow's weather forecast instead of today's
  const handleUpdateCallback = () => {
    // Example 1: Log a message to the console
    setCallback(() => console.log("Updated function"));
    // Example 2: Trigger an alert with a custom message
    //setCallback(() => alert("This is an alert!"));
    // Example 3: Change the background color of the page
    //setCallback(() => (document.body.style.backgroundColor = "#bada55"));
    // Example 4: Update an element's inner HTML
    // setCallback(() => {
    //   const element = document.getElementById("myElement");
    //   if (element) {
    //     element.innerHTML = "Content updated by callback!";
    //   }
    // });
    // Example 5: Fetch data from an API (e.g., a placeholder API)
    // setCallback(() => {
    //   fetch("https://jsonplaceholder.typicode.com/posts/1")
    //     .then((response) => response.json())
    //     .then((data) => console.log("Fetched data:", data))
    //     .catch((error) => console.error("Error fetching data:", error));
    // });
    // Example 6: Log the current date and time
    // setCallback(() => {
    //   const currentDate = new Date();
    //   console.log("Current date and time:", currentDate.toLocaleString());
    // });
  };

  return (
    <div>
      {/* Number - Display and update count */}
      <div className="border-box">
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
      </div>

      {/* String - Display and update text */}
      <div className="border-box">
        <p>Text: {text}</p>
        <button onClick={handleAppendText}>Append "Hello"</button>
      </div>

      {/* Boolean - Display and toggle visibility */}
      <div className="border-box">
        <p>Visibility: {isVisible ? "Visible" : "Not Visible"}</p>
        <button onClick={handleToggleVisibility}>Toggle Visibility</button>
      </div>

      {/* Arrays - Display and add items */}
      <div className="border-box">
        <h2>List of Items</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={handleAddItem}>Add Item</button>
      </div>

      {/* Objects - Display and update user info */}
      <div className="border-box">
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <button onClick={handleSetUserName}>Set Name to "John"</button>
        <button onClick={handleSetUserAge}>Set Age to 30</button>
      </div>

      {/* Complex Data Structures - Display and add users */}
      <div className="border-box">
        <h2>User List</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name} - {user.age}
            </li>
          ))}
        </ul>
        <button onClick={handleAddUser}>Add new User to list"</button>
      </div>

      {/* Functions - update callback */}
      <div>
        <button onClick={handleUpdateCallback}>Update Callback</button>
        <div id="myElement">Old content...</div>
      </div>
    </div>
  );
};

/**
 * Summary:
 * This component is a demonstration of how the useState hook can manage different types of state:
 * - Primitives like numbers, strings, and booleans
 * - Arrays and objects
 * - Functions as state
 * The code also shows how to separate logic (like handlers) from the return statement to improve readability and structure.
 */
