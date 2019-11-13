import React, { useState, useEffect } from "react";

const UnderlineControl = (props: any) => {
  const [checked, setChecked] = useState(false);

  const { onChange } = props;

  useEffect(() => {
    onChange(checked);
  }, [onChange, checked]);

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
