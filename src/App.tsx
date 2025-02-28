import React from "react";
import "./App.css";
import Counter from "./Counter";
import RevealAnswer from "./RevealAnswer";
import ChangeType from "./ChangeType";
import StartAttempt from "./StartAttempt";
import TwoDice from "./TwoDice"; // Add this if TwoDice is implemented
import CycleHoliday from "./CycleHoliday"; // Add this if CycleHoliday is implemented

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>State Management Task</h1>
      <h2>Counter Component</h2>
      <Counter />
      <h2>Reveal Answer Component</h2>
      <RevealAnswer />
      <h2>Change Type Component</h2>
      <ChangeType />
      <h2>Start Attempt Component</h2>
      <StartAttempt />
      <h2>Two Dice Component</h2>
      <TwoDice />
      <h2>Cycle Holiday Component</h2>
      <CycleHoliday />
    </div>
  );
}

export default App;
