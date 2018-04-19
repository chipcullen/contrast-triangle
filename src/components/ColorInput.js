import React, { Component } from 'react';

class ColorInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.defaultValue };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const hex = event.target.value;
    this.setState({ value: hex });

    if (hex.length === 7) {
      this.props.onChange(this.props.keyName, hex);
    }
  }

  render() {
    const { defaultValue, label } = this.props;

    let colorInputValue = `#ffffff`;

    if (this.state.value.length === 7) {
      colorInputValue = this.state.value;
    }

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
            value={colorInputValue}
            onChange={this.handleChange}
            placeholder={defaultValue}
          />
        </label>
      </div>
    );
  }
}

export default ColorInput;
