import React from "react";

type ResultEmojiProps = {
  contrast: number;
  min: number;
  warn?: number;
};

const ResultEmoji: React.FC<ResultEmojiProps> = props => {
  const { contrast, min, warn } = props;

  let emoji = `❌`;

  if (contrast >= min) {
    emoji = `✅`;
  } else if (warn && contrast >= warn) {
    emoji = `⚠️`;
  }

  let helptext = `Need ${min}:1 to pass`;

  if (warn) {
    helptext += `, or ${warn}:1 at large sizes`;
  }

  return (
    <span className="ResultEmoji" title={helptext}>
      {emoji}
    </span>
  );
};

export default ResultEmoji;
