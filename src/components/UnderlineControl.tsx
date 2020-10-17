import React, { useState } from "react";

type UnderlineControlProps = {
  onChange: Function;
  underline: boolean;
};

const UnderlineControl: React.FC<UnderlineControlProps> = props => {
  const { onChange, underline } = props;
  const [checked, setChecked] = useState(underline);

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
