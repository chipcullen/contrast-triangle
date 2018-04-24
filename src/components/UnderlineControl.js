import React, { Component } from 'react';

class UnderlineControl extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const checked = this.state.checked ? false : true;
    this.setState({ checked: checked });
    this.props.onChange(checked);
  }

  render() {
    // const { defaultValue, label } = this.props;

    return (
      <div className="UnderlineControl">
        <label>
          Show underlines
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}

export default UnderlineControl;
