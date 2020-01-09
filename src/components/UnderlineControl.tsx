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
      <label>
        Show underlines
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      </label>
    </div>
  );
};

export default UnderlineControl;
