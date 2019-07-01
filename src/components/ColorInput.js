import React, { useState, useEffect } from "react";
import { typeOfColor } from "../utils/type-of-color";

const ColorInput = props => {
  const [value, setValue] = useState(props.defaultValue);

  const { defaultValue, hex, label, keyName, onChange } = props;

  useEffect(() => {
    if (typeOfColor(value) !== undefined) {
      onChange(keyName, value);
    }
  }, [keyName, onChange, value]);

  return (
    <div className="ColorInput">
      <label>
        {label}
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder={defaultValue}
        />
        <input
          type="color"
          value={hex}
          onChange={e => setValue(e.target.value)}
          placeholder={defaultValue}
        />
      </label>
    </div>
  );
};

export default ColorInput;
