import React, { Component } from 'react';
import './App.css';

import ColorInput from './components/ColorInput';
import PreviewParagraph from './components/PreviewParagraph';
import Results from './components/Results';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: '#ffffff',
      textColor: '#000000',
      linkColor: '#0000ff'
    };
  }

  handleColorChange = (keyName, hex) => {
    this.setState({ [keyName]: hex });
  };

  render() {
    return (
      <div className="App" style={{ backgroundColor: this.state.bgColor }}>
        <PreviewParagraph
          textColor={this.state.textColor}
          linkColor={this.state.linkColor}
        />
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

        <Results
          textColor={this.state.textColor}
          linkColor={this.state.linkColor}
          bgColor={this.state.bgColor}
        />
      </div>
    );
  }
}

export default App;
