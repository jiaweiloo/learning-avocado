import React, { useRef } from "react";
import { Exercise } from "../../types/general";
import SidebarItem from "./SidebarItem";
import "./styles.css";

interface props {
  exercises: Exercise[];
  setActiveStep: any;
  activeLvl: number;
}

const Sidebar: React.FC<props> = ({ exercises, setActiveStep, activeLvl }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      style={{
        minWidth: "220px",
        maxWidth: "220px",
        minHeight: "100vh",
        maxHeight: "100vh",
      }}
    >
      <div style={{ padding: "15px" }}>
        <span className="subTitle">
          The {exercises.length}-Day Mindfullness Challenge{" "}
        </span>
      </div>
      <div style={{ padding: "15px" }}>
        <span className="">
          Progress: {((activeLvl + 1) / exercises.length) * 100} %{" "}
        </span>
      </div>

      <div style={{ padding: "15px" }}>
        {exercises.map((exercise) => (
          <SidebarItem exercise={exercise} setActiveStep={setActiveStep} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
