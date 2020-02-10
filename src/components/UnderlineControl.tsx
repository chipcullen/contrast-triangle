import React, { useState, useEffect } from "react";

type UnderlineControlProps = {
  onChange: Function;
};

const UnderlineControl: React.FC<UnderlineControlProps> = props => {
  const [checked, setChecked] = useState(false);

  const { onChange } = props;

  useEffect(() => {
    onChange(checked);
  }, [onChange, checked]);

  return (
    <div className="underline-control">
      <h2>Show underlines:</h2>
      <button
        role="switch"
        aria-checked={checked}
        onClick={() => setChecked(!checked)}
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
