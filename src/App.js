import React, { useState } from "react";
import "./App.scss";

import ColorInput from "./components/ColorInput";
import PreviewParagraph from "./components/PreviewParagraph";
import Results from "./components/Results";
import ResultCard from "./components/ResultCard";
import UnderlineControl from "./components/UnderlineControl";
import { colorTranslate } from "./utils/color-translate";
import { checkYourSelfBeforeYouHexYourself } from "./utils/check-yourself-before-you-hex-yourself";
import { useQueryString } from "./utils/useQueryString";

import { ReactComponent as Logo } from "./contrast-triangle-logo.svg";

import {
  ASSUMED_BACKGROUND_COLOR,
  BGCOLOR,
  TEXTCOLOR,
  LINKCOLOR
} from "./Constants";

// eslint-disable-next-line
class OldApp extends React.Component {
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




const App = () => {
  const colorKeys = [BGCOLOR, TEXTCOLOR, LINKCOLOR];
  const colorDefaults = ["#ffffff", "hsl(0, 0%, 0%)", "rgba(0, 0, 255, 1)"];

  const [textDecoration, setTextDecoration] = useState(`none`);
  const [bgColorQp, setBgColorQp] = useQueryString(`bgColor`);
  const [textColorQp, setTextColorQp] = useQueryString(`textColor`);
  const [linkColorQp, setLinkColorQp] = useQueryString(`linkColor`);

  const bgColorInitState = colorTranslate(
    BGCOLOR,
    bgColorQp ? bgColorQp : colorDefaults[0],
    ASSUMED_BACKGROUND_COLOR
  )

  const textColorInitState = colorTranslate(
    TEXTCOLOR,
    textColorQp ? textColorQp : colorDefaults[1],
    ASSUMED_BACKGROUND_COLOR
  )

  const linkColorInitState = colorTranslate(
    LINKCOLOR,
    linkColorQp ? linkColorQp : colorDefaults[2],
    ASSUMED_BACKGROUND_COLOR
  )

  const [bgColor, setBgColor] = useState(bgColorInitState);
  const [textColor, setTextColor] = useState(textColorInitState);
  const [linkColor, setLinkColor] = useState(linkColorInitState);

  colorKeys.forEach((colorKey, i) => {
      // let translatedColor;
      console.log(colorKey);
      // if there are query parameters, use those
      // if (this.queryParams[colorKey]) {
      //   translatedColor = colorTranslate(
      //     colorKey,
      //     decodeURIComponent(this.queryParams[colorKey]),
      //     this.state[BGCOLOR] && this.state[BGCOLOR].rgb
      //       ? this.state[BGCOLOR].rgb
      //       : ASSUMED_BACKGROUND_COLOR
      //   );

      //   this.state[colorKey] = translatedColor;
      // } else {
      //   // use defaults
      //   translatedColor = colorTranslate(
      //     colorKey,
      //     colorDefaults[i],
      //     ASSUMED_BACKGROUND_COLOR
      //   );
      // }

      // this.state[colorKey] = translatedColor;
    });

  const handleColorChange = (keyName, color) => {

    const translatedColor = colorTranslate(
      keyName,
      color,
      bgColor.rgb
    );

    if (keyName === TEXTCOLOR && color !== textColor.userValue) {
      setTextColor(translatedColor);
      setTextColorQp(color);
    }

    if (keyName === LINKCOLOR && color !== linkColor.userValue) {
      setLinkColor(translatedColor);
      setLinkColorQp(color);
    }

    if (keyName === BGCOLOR && color !== bgColor.userValue) {
      setBgColor(translatedColor);
      setBgColorQp(color);
    }

    // this.setQueryParams({
    //   [keyName]: color.replace(/%/g, "%25").replace("#", "%23")
    // });




    // if (keyName === BGCOLOR) {
    //   [TEXTCOLOR, LINKCOLOR].forEach(colorKey => {
    //     const colorState = this.state[colorKey];
    //     if (colorState.alpha) {
    //       const retranslatedColor = colorTranslate(
    //         colorState,
    //         colorState.userValue,
    //         this.state[BGCOLOR].rgb
    //       );

    //       this.setState({
    //         [colorKey]: retranslatedColor
    //       });
    //     }
    //   });
    // }
  };

  const handleUnderlineChange = checked => {
    const underlineState = checked ? `underline` : `none`;
    setTextDecoration(underlineState);
  };

  return (
    <div
    className="app"
      style={{
        backgroundColor: checkYourSelfBeforeYouHexYourself(
          bgColor.userValue
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
              textColor.userValue
            )}
            linkColor={checkYourSelfBeforeYouHexYourself(
              linkColor.userValue
            )}
            textDecoration={textDecoration}
          />
        <div className="controls">
          <ColorInput
              defaultValue={textColor.userValue}
              label="Text"
              keyName={TEXTCOLOR}
              onChange={handleColorChange}
              hex={textColor.hex}
              className="color-input--text"
            />
          <ColorInput
              defaultValue={linkColor.userValue}
              label="Link"
              keyName={LINKCOLOR}
              onChange={handleColorChange}
              hex={linkColor.hex}
              className="color-input--link"
            />
          <ColorInput
              defaultValue={bgColor.userValue}
              label="Background"
              keyName={BGCOLOR}
              onChange={handleColorChange}
              hex={bgColor.hex}
              className="color-input--bg"
            />
          <UnderlineControl
            onChange={handleUnderlineChange}
          />
          <ResultCard
            label1="Link"
            label2="Text"
            color1={linkColor.rgb}
            color2={textColor.rgb}
            min={3}
            textDecoration={textDecoration}
            className="result-card--link-text"
          />
          <ResultCard
            label1="Background"
            label2="Text"
            color1={textColor.rgb}
            color2={bgColor.rgb}
            min={4.5}
            warn={3}
            className="result-card--bg-text"
          />
          <ResultCard
            label1="Background"
            label2="Link"
            color1={linkColor.rgb}
            color2={bgColor.rgb}
            min={4.5}
            warn={3}
            className="result-card--bg-link"
          />
        </div>

        <Results
          textColor={textColor.rgb}
          linkColor={linkColor.rgb}
          bgColor={bgColor.rgb}
          textDecoration={textDecoration}
        />
      </div>

      <footer>
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://chipcullen.com">chip cullen</a> |{" "}
        <a href="https://chipcullen.com/the-contrast-triangle/">
          explanatory blog post
        </a>{" "}
        |{" "}
        <a href="https://github.com/chipcullen/contrast-triangle">
          this project on github
        </a>{" "}
        |{" "}
        <a href="https://twitter.com/chipcullen">
          i'm occasionally on twitter
        </a>
      </footer>
    </div>
  )
}

export default App;
