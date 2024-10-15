import { useState } from "react";
import { Data } from "./components/Data";
import { LightBulb } from "./components/Exercise/LightBulb";
import { LightBullString } from "./components/Exercise/LightBullString";
import { LightBulbArray } from "./components/Exercise/LightBulbArray";
import { MultiStepForm } from "./components/MultiStep/MultiStepForm";
import "./App.css";

function App() {
  return (
    <>
      {/* Data Comp*/}
      {/* <Data /> */}

      {/* Exercise */}
      {/* <LightBulb /> */}
      {/* <LightBullString /> */}
      {/* <LightBulbArray /> */}

      {/* Multi Step Form */}
      <MultiStepForm />
    </>
  );
}

export default App;
