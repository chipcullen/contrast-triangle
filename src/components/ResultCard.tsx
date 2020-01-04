import React from "react";
import { calculateContrast } from "../utils/calculate-contrast";
import ResultEmoji from "./ResultEmoji";

const ResultCard = (props: any) => {
  const { bgColor, textColor, linkColor, textDecoration, label } = props;
  // const textBgContrast = calculateContrast(textColor, bgColor);
  // const linkBgContrast = calculateContrast(linkColor, bgColor);
  // const textLinkContrast = calculateContrast(textColor, linkColor);

  const opacityStyle = () => {
    if (textDecoration === "underline") {
      return 0.5;
    } else {
      return 1;
    }
  };

  return (
    <div className="result-card" style={{ opacity: opacityStyle() }}>
      <p>{label}</p>
    </div>
  );
};

export default ResultCard;
