import React, { Component } from "react";
import { typeOfColor } from "../utils/type-of-color";

class ColorInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const color = event.target.value;
    this.setState({ value: color });

    if (typeOfColor(color) !== undefined) {
      this.props.onChange(this.props.keyName, color);
    }
  }

  render() {
    const { defaultValue, hex, label } = this.props;

    return (
      <div className="ColorInput">
        <label>
          {label}
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder={defaultValue}
          />
          <input
            type="color"
            value={hex}
            onChange={this.handleChange}
            placeholder={defaultValue}
          />
        </label>
      </div>
    );
  }
}

export default ColorInput;
