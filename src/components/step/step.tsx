import React, { useRef } from "react";
import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";
import "./step.css";

interface props {
  todo: string;
  //   setTodo: React.Dispatch<React.SetStateAction<string>>;
  //   handleAdd: (e: React.FormEvent) => void;
}

function handleComplete() {
  console.log("complete clicked");
}

const Step: React.FC<props> = ({ todo }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="main_body">
      Day 1: TEST
      <div>
        <YoutubeEmbed embedId="9P6rdqiybaw"></YoutubeEmbed>
      </div>
      <div>
        <span className="tips_box">
          Complete a 'One Complete Cycle of Breath' practice before a meeting or
          spending time with someone today.
        </span>
      </div>
      <div>
        <button className="input_submit" onClick={handleComplete}>
          Mark lesson complete
        </button>
      </div>
    </div>
  );
};

export default Step;
