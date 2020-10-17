import React from "react";
import { calculateContrast } from "../utils/calculate-contrast";
import ResultEmoji from "./ResultEmoji";

type ResultsProps = {
  bgColor: Array<number>;
  textColor: Array<number>;
  linkColor: Array<number>;
  underline: boolean;
};

const Results: React.FC<ResultsProps> = props => {
  const { bgColor, textColor, linkColor, underline } = props;
  const textBgContrast = calculateContrast(textColor, bgColor);
  const linkBgContrast = calculateContrast(linkColor, bgColor);
  const textLinkContrast = calculateContrast(textColor, linkColor);

  const strikeStyle = underline ? `line-through` : `none`;

  return (
    <ul className="Results">
      <li title="Minimum need: 3 for large text, 4.5 for normal">
        <ResultEmoji contrast={textBgContrast} min={4.5} warn={3} /> Text :
        Background contrast is {textBgContrast}
        <small>(Needed: 3 for large text, 4.5 for normal)</small>
      </li>
      <li>
        <ResultEmoji contrast={linkBgContrast} min={4.5} warn={3} /> Link :
        Background contrast is {linkBgContrast}
        <small>(Needed: 3 for large text, 4.5 for normal)</small>
      </li>
      <li
        style={{
          textDecoration: strikeStyle
        }}
      >
        <ResultEmoji contrast={textLinkContrast} min={3} /> Text : Link contrast
        is {textLinkContrast}
        <small>(Needed: 3 if underlines are absent)</small>
      </li>
    </ul>
  );
};

export default Results;
