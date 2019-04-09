import React from "react";

const ResultEmoji = props => {
  const { contrast, min, warn } = props;

  let emoji = `❌`;

  if (contrast >= min) {
    emoji = `✅`;
  } else if (warn && contrast >= warn) {
    emoji = `⚠️`;
  }

  return <span className="ResultEmoji">{emoji}</span>;
};

export default ResultEmoji;
