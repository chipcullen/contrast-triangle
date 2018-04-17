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
    this.props.onChange(this.props.keyName, hex);
  }

  render() {
    const { defaultValue, label } = this.props;

    return (
      <div className="ColorInput">
        <label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder={defaultValue}
          />
          <input
            type="color"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder={defaultValue}
          />
          {label}
        </label>
      </div>
    );
  }
}

export default ColorInput;
