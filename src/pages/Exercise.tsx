import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Step from "../components/step/step";
import { Exercise } from "../types/general";
import { useLocalStorage } from "../utils/general-utils";
import "./Exercise.css";

function App() {
  var exercises: Exercise[] = [
    {
      id: 0,
      title: "Day 1: One Complete Cycle of Breath",
      videoEmbedId: "IUOVQZK2D8k",
      extraNotes:
        "Let's begin by taking a moment just to settle your body in a comfortable position. " +
        "It can be standing, sitting, or lying down, just inviting a sense of ease and relaxation in the body, " +
        "feeling comfortable, with the intention to bring awareness and alertness to the physical sensations of your body.",
      reflectionQues: "",
    },
    {
      id: 1,
      title: "Day 2: Design a table",
      videoEmbedId: "5FR-iZNWbiU",
      extraNotes:
        " I designed a sturdy connection for furniture. Designed in rhino 3d with grasshopper plugin. Printed in Carbon fiber and PLA.",
      reflectionQues: "",
    },
    {
      id: 2,
      title: "Day 3: Finance",
      videoEmbedId: "8xzINLykprA",
      extraNotes: "How complex our financial systems are?",
      reflectionQues: "",
    },
    {
      id: 3,
      title: "Day 4: Day 4",
      videoEmbedId: "B9XGUpQZY38",
      extraNotes: "How does the economy really work?",
      reflectionQues: "",
    },
  ];

  const [activeExercise, setActiveExe] = useState(exercises[0]);
  const [activeLvl, setActiveLvl] = useLocalStorage("activeLvl", 0);

  useEffect(() => {
    const activeLvl = JSON.parse(localStorage.getItem("activeLvl") || "0");
    if (activeLvl) {
      setActiveStep(activeLvl);
      console.log("activeLvl: " + activeLvl);
    }
  }, []);

  const setActiveStep = (level: number) => {
    if (level >= exercises.length) {
      console.log("activeStep not changing");
      return;
    }
    setActiveLvl(level);
    setActiveExe(exercises[level]);

    console.log("localStorage: " + activeLvl);
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
