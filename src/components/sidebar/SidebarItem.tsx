import React, { useRef } from "react";
import { Exercise } from "../../types/general";
import "./styles.css";

interface props {
  exercise: Exercise;
  setActiveStep: any;
}

const SidebarItem: React.FC<props> = ({ exercise, setActiveStep }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const changeLevel = () => {
    setActiveStep(exercise.id);
    console.log(exercise.id + " clicked!");
  };
  return (
    <div className="subItem" onClick={changeLevel}>
      {exercise.title}
    </div>
  );
};

export default SidebarItem;
