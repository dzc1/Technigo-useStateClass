import { useState } from "react";

export const QuestionThree = ({ title, number }) => {
  const content = {
    context:
      "In React, the 'name' attribute is crucial for grouping radio buttons. Without it, the browser won't understand that the options are part of the same group.",
    bulletpoints: [
      {
        id: 1,
        title: "Purpose of the 'name' attribute",
        point:
          "The 'name' attribute groups radio buttons together, ensuring only one can be selected within the group.",
      },
      {
        id: 2,
        title: "What happens without it?",
        point:
          "Without the 'name' attribute, the form allows multiple selections, which can lead to unexpected behavior.",
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
