import React, { useState } from "react";

type UnderlineControlProps = {
  onChange: Function;
  textDecoration: string;
};

const UnderlineControl: React.FC<UnderlineControlProps> = props => {
  const { onChange, textDecoration } = props;

  const initChecked = textDecoration === `underlines` ? true : false;

  const [checked, setChecked] = useState(initChecked);

  const handleClick = (checked: boolean) => {
    setChecked(!checked);
    onChange(!checked);
  }

  return (
    <div className="underline-control">
      <h2>Show underlines:</h2>
      <button
        role="switch"
        aria-checked={checked}
        onClick={() => handleClick(checked)}
        className="underline-control__toggle"
        aria-label={`Toggle underlines ${checked ? `Off` : `On`}`}
      >
        <span className="enabled">On</span>
        <span className="disabled">Off</span>
      </button>
    </div>
  );
};

export default UnderlineControl;
