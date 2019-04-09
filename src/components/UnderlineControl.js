import React, { useState, useEffect } from "react";

const UnderlineControl = props => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    props.onChange(checked);
  }, [checked]);

  return (
    <div className="UnderlineControl">
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
