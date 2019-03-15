import React, { Component } from "react";
import "./App.css";

import ColorInput from "./components/ColorInput";
import PreviewParagraph from "./components/PreviewParagraph";
import Results from "./components/Results";
import UnderlineControl from "./components/UnderlineControl";
import { colorTranslate } from "./utils/color-translate";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: {
        userValue: "#ffffff",
        hex: "#ffffff",
        rgb: [255, 255, 255],
        type: "hex6",
        alpha: false
      },
      textColor: {
        userValue: "#000000",
        hex: "#000000",
        rgb: [0, 0, 0],
        type: "hex6",
        alpha: false
      },
      linkColor: {
        userValue: "#0000ff",
        hex: "#0000ff",
        rgb: [0, 0, 255],
        type: "hex6",
        alpha: false
      },
      textDecoration: "none"
    };
  }

  handleColorChange = (keyName, color) => {
    const translatedColor = colorTranslate(
      keyName,
      color,
      this.state.bgColor.rgb
    );

    this.setState({
      [keyName]: translatedColor
    });
  };

  handleUnderlineChange = value => {
    const underlineState = value ? "underline" : "none";
    this.setState({ textDecoration: underlineState });
  };

  render() {
    return (
      <div
        className="App"
        style={{ backgroundColor: this.state.bgColor.userValue }}
      >
        <PreviewParagraph
          textColor={this.state.textColor.userValue}
          linkColor={this.state.linkColor.userValue}
          textDecoration={this.state.textDecoration}
        />

        <div className="colorInputs">
          <ColorInput
            defaultValue={this.state.bgColor.userValue}
            label="Background Color"
            keyName="bgColor"
            onChange={this.handleColorChange}
            hex={this.state.bgColor.hex}
          />
          <ColorInput
            defaultValue={this.state.textColor.userValue}
            label="Text Color"
            keyName="textColor"
            onChange={this.handleColorChange}
            hex={this.state.textColor.hex}
          />
          <ColorInput
            defaultValue={this.state.linkColor.userValue}
            label="Link Color"
            keyName="linkColor"
            onChange={this.handleColorChange}
            hex={this.state.linkColor.hex}
          />
        </div>

        <UnderlineControl
          textDecoration={this.state.textDecoration}
          onChange={this.handleUnderlineChange}
        />

        <Results
          textColor={this.state.textColor.rgb}
          linkColor={this.state.linkColor.rgb}
          bgColor={this.state.bgColor.rgb}
          textDecoration={this.state.textDecoration}
        />
      </div>
    );
  }
}

export default App;
