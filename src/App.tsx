import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Step from "./components/step/step";
import { Exercise } from "./types/general";

function App() {
  var exercises: Exercise[] = [
    {
      id: 0,
      title: "Day 1: One Complete Cycle of Breath",
      videoEmbedId: "FJDVKeh7RJI",
      extraNotes: "test nmotes",
    },
    {
      id: 1,
      title: "Day 2: Design a table",
      videoEmbedId: "5FR-iZNWbiU",
      extraNotes:
        " I designed a sturdy connection for furniture. Designed in rhino 3d with grasshopper plugin. Printed in Carbon fiber and PLA.",
    },
    {
      id: 2,
      title: "Day 3: Finance",
      videoEmbedId: "8xzINLykprA",
      extraNotes: "How complex our financial systems are?",
    },
    {
      id: 3,
      title: "Day 4: Day 4",
      videoEmbedId: "B9XGUpQZY38",
      extraNotes: "How does the economy really work?",
    },
  ];

  const [activeExercise, setActiveExe] = useState(exercises[0]);
  const [activeLvl, setActiveLvl] = useState(0);

  const setActiveStep = (level: number) => {
    if (level >= exercises.length) {
      console.log("cancel")
      return;
    }
    setActiveLvl(level);
    setActiveExe(exercises[level]);
  };

  return (
    <div className="App">
      <Sidebar
        exercises={exercises}
        setActiveStep={setActiveStep}
        activeLvl={activeLvl}
      ></Sidebar>
      <Step
        activeExercise={activeExercise}
        setActiveStep={setActiveStep}
        activeLvl={activeLvl}
      ></Step>
    </div>
  );
}

export default App;
