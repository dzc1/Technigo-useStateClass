export const QuestionBoiler = ({ title, number }) => {
  const content = {
    context:
      "In React, the App component is usually the root component where your entire application starts. It's typically the parent of all other components. A Parent Component is one that holds and controls other components, called Child Components. You mostly work with parent and child components to build your application, structuring them in a way that parent components hold and manage child components.",
    bulletpoints: [
      {
        id: 1,
        title: "If you think about it!",
        point:
          "This component is a child of the QuestionDistributive component and it's also the grandChild of the App root component of this short app",
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
          <>
            {content.bulletpoints.map((bulletPoint, index, array) => {
              console.log(array); // This will log the entire array for each iteration
              return (
                <ul key={bulletPoint.id}>
                  <h4>{bulletPoint.title}</h4>
                  <li>{bulletPoint.point}</li>
                </ul>
              );
            })}
          </>
        </>
      </details>
    </div>
  );
};
