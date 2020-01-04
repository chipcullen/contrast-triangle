import React from "react";
import "./App.css";

import ReactQueryParams from "react-query-params";

import ColorInput from "./components/ColorInput";
import PreviewParagraph from "./components/PreviewParagraph";
import Results from "./components/Results";
import ResultCard from "./components/ResultCard";
import UnderlineControl from "./components/UnderlineControl";
import { colorTranslate } from "./utils/color-translate";
import { checkYourSelfBeforeYouHexYourself } from "./utils/check-yourself-before-you-hex-yourself";

import {
  ASSUMED_BACKGROUND_COLOR,
  BGCOLOR,
  TEXTCOLOR,
  LINKCOLOR
} from "./Constants";

class App extends ReactQueryParams {
  constructor(props) {
    super(props);
    this.state = {
      textDecoration: "none"
    };

    const colorKeys = [BGCOLOR, TEXTCOLOR, LINKCOLOR];
    const colorDefaults = ["#ffffff", "hsl(0, 0%, 0%)", "rgba(0, 0, 255, 1)"];

    colorKeys.forEach((colorKey, i) => {
      let translatedColor;
      // if there are query parameters, use those
      if (this.queryParams[colorKey]) {
        translatedColor = colorTranslate(
          colorKey,
          decodeURIComponent(this.queryParams[colorKey]),
          this.state[BGCOLOR] && this.state[BGCOLOR].rgb
            ? this.state[BGCOLOR].rgb
            : ASSUMED_BACKGROUND_COLOR
        );

        this.state[colorKey] = translatedColor;
      } else {
        // use defaults
        translatedColor = colorTranslate(
          colorKey,
          colorDefaults[i],
          ASSUMED_BACKGROUND_COLOR
        );
      }

      this.state[colorKey] = translatedColor;
    });
  }

  handleColorChange = (keyName, color) => {
    this.setQueryParams({
      [keyName]: color.replace(/%/g, "%25").replace("#", "%23")
    });

    const translatedColor = colorTranslate(
      keyName,
      color,
      this.state[BGCOLOR].rgb
    );

    this.setState({
      [keyName]: translatedColor
    });

    if (keyName === BGCOLOR) {
      [TEXTCOLOR, LINKCOLOR].forEach(colorKey => {
        const colorState = this.state[colorKey];
        if (colorState.alpha) {
          const retranslatedColor = colorTranslate(
            colorState,
            colorState.userValue,
            this.state[BGCOLOR].rgb
          );

          this.setState({
            [colorKey]: retranslatedColor
          });
        }
      });
    }
  };

  handleUnderlineChange = value => {
    const underlineState = value ? "underline" : "none";
    this.setState({ textDecoration: underlineState });
  };

  render() {
    return (
      <div
        className="App"
        style={{
          backgroundColor: checkYourSelfBeforeYouHexYourself(
            this.state[BGCOLOR].userValue
          )
        }}
      >
        <PreviewParagraph
          textColor={checkYourSelfBeforeYouHexYourself(
            this.state[TEXTCOLOR].userValue
          )}
          linkColor={checkYourSelfBeforeYouHexYourself(
            this.state[LINKCOLOR].userValue
          )}
          textDecoration={this.state.textDecoration}
        />

        <div className="colorInputs">
          <ColorInput
            defaultValue={this.state[BGCOLOR].userValue}
            label="Background Color"
            keyName={BGCOLOR}
            onChange={this.handleColorChange}
            hex={this.state[BGCOLOR].hex}
          />
          <ColorInput
            defaultValue={this.state[TEXTCOLOR].userValue}
            label="Text Color"
            keyName={TEXTCOLOR}
            onChange={this.handleColorChange}
            hex={this.state[TEXTCOLOR].hex}
          />
          <ColorInput
            defaultValue={this.state[LINKCOLOR].userValue}
            label="Link Color"
            keyName={LINKCOLOR}
            onChange={this.handleColorChange}
            hex={this.state[LINKCOLOR].hex}
          />
        </div>

        <UnderlineControl
          textDecoration={this.state.textDecoration}
          onChange={this.handleUnderlineChange}
        />

        <Results
          textColor={this.state[TEXTCOLOR].rgb}
          linkColor={this.state[LINKCOLOR].rgb}
          bgColor={this.state[BGCOLOR].rgb}
          textDecoration={this.state.textDecoration}
        />

        {/* <ResultCard
          label="Text:Background"
          textDecoration={this.state.textDecoration}
        /> */}
      </div>
    );
  }
}

export default App;
