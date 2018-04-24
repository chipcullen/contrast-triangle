import React, { Component } from 'react';
import './App.css';

import ColorInput from './components/ColorInput';
import PreviewParagraph from './components/PreviewParagraph';
import Results from './components/Results';
import UnderlineControl from './components/UnderlineControl';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: '#ffffff',
      textColor: '#000000',
      linkColor: '#0000ff',
      textDecoration: 'none'
    };
  }

  handleColorChange = (keyName, hex) => {
    this.setState({ [keyName]: hex });
  };

  handleUnderlineChange = (value) => {
    const underlineState = value ? 'underline' : 'none';
    this.setState({ textDecoration: underlineState });
  };

  render() {
    return (
      <div className="App" style={{ backgroundColor: this.state.bgColor }}>
        <PreviewParagraph
          textColor={this.state.textColor}
          linkColor={this.state.linkColor}
          textDecoration={this.state.textDecoration}
        />

        <div className="colorInputs">
          <ColorInput
            defaultValue={this.state.bgColor}
            label="Background Color"
            keyName="bgColor"
            onChange={this.handleColorChange}
          />
          <ColorInput
            defaultValue={this.state.textColor}
            label="Text Color"
            keyName="textColor"
            onChange={this.handleColorChange}
          />
          <ColorInput
            defaultValue={this.state.linkColor}
            label="Link Color"
            keyName="linkColor"
            onChange={this.handleColorChange}
          />
        </div>

        <UnderlineControl
          textDecoration={this.state.textDecoration}
          onChange={this.handleUnderlineChange}
        />

        <Results
          textColor={this.state.textColor}
          linkColor={this.state.linkColor}
          bgColor={this.state.bgColor}
          textDecoration={this.state.textDecoration}
        />
      </div>
    );
  }
}

export default App;
