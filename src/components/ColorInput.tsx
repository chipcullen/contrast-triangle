import React, { useState, useEffect } from "react";
import { typeOfColor } from "../utils/type-of-color";

type ColorInputProps = {
  defaultValue: string;
  hex: string;
  label: string;
  keyName: string;
  onChange: Function;
};

const ColorInput: React.FC<ColorInputProps> = props => {
  const { defaultValue, hex, label, keyName, onChange } = props;

  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    if (typeOfColor(value) !== undefined) {
      onChange(keyName, value);
    }
  }, [keyName, onChange, value]);

  return (
    <div className="ColorInput">
      <label>
        <span>{label}</span>
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
