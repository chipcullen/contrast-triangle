import React from "react";
import { calculateContrast } from "../utils/calculate-contrast";
import ResultEmoji from "./ResultEmoji";

type ResultCardProps = {
  color1: Array<number>;
  color2: Array<number>;
  min: number;
  warn?: number;
  textDecoration?: string;
  label1: string;
  label2: string;
  className: string;
};

const ResultCard: React.FC<ResultCardProps> = props => {
  const {
    color1,
    color2,
    min,
    warn,
    textDecoration,
    label1,
    label2,
    className
  } = props;

  const contrast = calculateContrast(color1, color2);

  const opacityStyle = () => {
    if (textDecoration === "underline") {
      return 0.2;
    } else {
      return 1;
    }
  };

  return (
    <div
      className={`result-card-wrapper ${className}`}
      style={{ opacity: opacityStyle() }}
    >
      <div className="result-card">
        <h2>
          {label1}:<span>{label2}</span>
        </h2>

        <p>{contrast}:1</p>

        <ResultEmoji contrast={contrast} min={min} warn={warn} />
      </div>
    </div>
  );
};

export default ResultCard;
