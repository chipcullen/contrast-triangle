import React from "react";
import "./App.scss";

import ReactQueryParams from "react-query-params";

import ColorInput from "./components/ColorInput";
import PreviewParagraph from "./components/PreviewParagraph";
import Results from "./components/Results";
import ResultCard from "./components/ResultCard";
import UnderlineControl from "./components/UnderlineControl";
import { colorTranslate } from "./utils/color-translate";
import { checkYourSelfBeforeYouHexYourself } from "./utils/check-yourself-before-you-hex-yourself";

import { ReactComponent as Logo } from "./contrast-triangle-logo.svg";

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
        className="app"
        style={{
          backgroundColor: checkYourSelfBeforeYouHexYourself(
            this.state[BGCOLOR].userValue
          )
        }}
      >
        <div className="app__inner">
          <header>
            <h1 className="logo">
              <Logo />
            </h1>
          </header>
          <PreviewParagraph
            textColor={checkYourSelfBeforeYouHexYourself(
              this.state[TEXTCOLOR].userValue
            )}
            linkColor={checkYourSelfBeforeYouHexYourself(
              this.state[LINKCOLOR].userValue
            )}
            textDecoration={this.state.textDecoration}
          />

          <div className="controls">
            <ColorInput
              defaultValue={this.state[TEXTCOLOR].userValue}
              label="Text"
              keyName={TEXTCOLOR}
              onChange={this.handleColorChange}
              hex={this.state[TEXTCOLOR].hex}
              className="color-input--text"
            />
            <ColorInput
              defaultValue={this.state[LINKCOLOR].userValue}
              label="Link"
              keyName={LINKCOLOR}
              onChange={this.handleColorChange}
              hex={this.state[LINKCOLOR].hex}
              className="color-input--link"
            />
            <ColorInput
              defaultValue={this.state[BGCOLOR].userValue}
              label="Background"
              keyName={BGCOLOR}
              onChange={this.handleColorChange}
              hex={this.state[BGCOLOR].hex}
              className="color-input--bg"
            />
            <UnderlineControl
              textDecoration={this.state.textDecoration}
              onChange={this.handleUnderlineChange}
            />
            <ResultCard
              label1="Link"
              label2="Text"
              color1={this.state[LINKCOLOR].rgb}
              color2={this.state[TEXTCOLOR].rgb}
              min={3}
              textDecoration={this.state.textDecoration}
              className="result-card--link-text"
            />
            <ResultCard
              label1="Background"
              label2="Text"
              color1={this.state[TEXTCOLOR].rgb}
              color2={this.state[BGCOLOR].rgb}
              min={4.5}
              warn={3}
              className="result-card--bg-text"
            />

            <ResultCard
              label1="Background"
              label2="Link"
              color1={this.state[LINKCOLOR].rgb}
              color2={this.state[BGCOLOR].rgb}
              min={4.5}
              warn={3}
              className="result-card--bg-link"
            />
          </div>

          <Results
            textColor={this.state[TEXTCOLOR].rgb}
            linkColor={this.state[LINKCOLOR].rgb}
            bgColor={this.state[BGCOLOR].rgb}
            textDecoration={this.state.textDecoration}
          />
        </div>
      </div>
    );
  }
}

export default App;
