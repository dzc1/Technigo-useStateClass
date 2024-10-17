import { useState } from "react";

export const QuestionOne = ({ title, number }) => {
  const content = {
    context:
      "In React, there are two main approaches for handling CSS: storing them alongside components or in a centralized folder. Each method has its pros and cons.",
    bulletpoints: [
      {
        id: 1,
        title: "Why store CSS with components?",
        point:
          "Keeping CSS files with their components can improve modularity and make it easier to manage component-specific styles.",
      },
      {
        id: 2,
        title: "Why store CSS in a global folder?",
        point:
          "Centralizing CSS in a global folder can simplify sharing styles across components and reduce duplication, but it can also lead to large and hard-to-maintain stylesheets.",
      },
      {
        id: 3,
        title:
          "Recommended: Use Global CSS for structure and Component-level CSS for specifics",
        point:
          "As a best practice, especially in larger applications, it's ideal to separate concerns by using global CSS for your app's structural elements, such as layouts, typography, and general utility classes. These global styles ensure a consistent look and feel across your entire app. On the other hand, for specific components that have unique styles (such as a custom button or card component), create individual CSS files or use CSS Modules. This allows you to encapsulate component-specific styles, avoiding conflicts with global styles and ensuring that component-level changes don’t inadvertently affect other parts of your application.",
      },
    ],
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
        </>
      </details>
    </div>
  );
};
