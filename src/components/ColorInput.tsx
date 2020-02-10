import React, { useState, useEffect } from "react";
import { typeOfColor } from "../utils/type-of-color";

type ColorInputProps = {
  defaultValue: string;
  hex: string;
  label: string;
  keyName: string;
  className: string;
  onChange: Function;
};

const ColorInput: React.FC<ColorInputProps> = props => {
  const { defaultValue, hex, label, keyName, className, onChange } = props;

  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    if (typeOfColor(value) !== undefined) {
      onChange(keyName, value);
    }
  }, [keyName, onChange, value]);

  return (
    <div className={`color-input ${className}`}>
      <label>
        <span>{label}</span>
        <span className="color-input__inputs-wrapper">
          <input
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={defaultValue}
            title={`Enter ${label} as a string`}
          />
          <input
            type="color"
            value={hex}
            onChange={e => setValue(e.target.value)}
            placeholder={defaultValue}
            title={`Enter ${label} with a color picker`}
          />
        </span>
      </label>
    </div>
  );
};

export default ColorInput;
