import React, { useRef } from "react";
import { Exercise } from "../../types/general";
import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";
import "./step.css";

interface props {
  activeExercise: Exercise;
  //   setTodo: React.Dispatch<React.SetStateAction<string>>;
  setActiveStep: any;
  activeLvl: number;
}

const Step: React.FC<props> = ({
  activeExercise,
  setActiveStep,
  activeLvl,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleComplete = () => {
    setActiveStep(activeLvl + 1);
  };

  return (
    <div className="main_body">
      <div>{activeExercise.title}</div>
      <div>
        <YoutubeEmbed embedId={activeExercise.videoEmbedId}></YoutubeEmbed>
      </div>
      <div>
        <div className="tips_box">
          <span className="green_title">Summary:</span> <br />
          {activeExercise.extraNotes}
        </div>
      </div>
      <div>
        <div className="tips_box">
          <span className="green_title">Reflection Questions:</span>
          <br />
          {activeExercise.reflectionQues}
        </div>
      </div>
      <div>
        <button className="input_submit" onClick={handleComplete}>
          Mark lesson complete
        </button>
      </div>
      <br />
    </div>
  );
};

export default Step;
