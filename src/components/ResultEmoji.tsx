import React from "react";

type ResultEmojiProps = {
  contrast: number;
  min: number;
  warn?: number;
};

const ResultEmoji = ({ contrast, min, warn }: ResultEmojiProps) => {
  // const { contrast, min, warn } = props;

  let emoji = `❌`;

  if (contrast >= min) {
    emoji = `✅`;
  } else if (warn && contrast >= warn) {
    emoji = `⚠️`;
  }

  return <span className="ResultEmoji">{emoji}</span>;
};

export default ResultEmoji;
