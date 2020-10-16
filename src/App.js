import React, { useState } from "react";
import "./App.scss";

import ColorInput from "./components/ColorInput";
import PreviewParagraph from "./components/PreviewParagraph";
import Results from "./components/Results";
import ResultCard from "./components/ResultCard";
import UnderlineControl from "./components/UnderlineControl";
import Footer from "./components/Footer";
import { colorTranslate } from "./utils/color-translate";
import { checkYourSelfBeforeYouHexYourself } from "./utils/check-yourself-before-you-hex-yourself";
import { useQueryString } from "./utils/useQueryString";

import { ReactComponent as Logo } from "./contrast-triangle-logo.svg";

import {
  ASSUMED_BACKGROUND_COLOR,
  DEFAULTBGCOLOR,
  DEFAULTTEXTCOLOR,
  DEFAULTLINKCOLOR,
} from "./Constants";

const App = () => {
  const [textDecoration, setTextDecoration] = useState(`none`);
  const [bgColorQp, setBgColorQp] = useQueryString(`bgColor`);
  const [textColorQp, setTextColorQp] = useQueryString(`textColor`);
  const [linkColorQp, setLinkColorQp] = useQueryString(`linkColor`);

  // We need to set up background color state first
  const bgColorInitState = colorTranslate(
    // if the query parameter exists, use that, if not use default
    bgColorQp ? bgColorQp : DEFAULTBGCOLOR,
    ASSUMED_BACKGROUND_COLOR,
    true
  )
  const [bgColor, setBgColor] = useState(bgColorInitState);

  // we use this a lot
  const bgRgb = bgColor.rgb;

  // Then use background color state when initing the other colors
  const textColorInitState = colorTranslate(
    // if the query parameter exists, use that, if not use default
    textColorQp ? textColorQp : DEFAULTTEXTCOLOR,
    bgRgb
  )
  const [textColor, setTextColor] = useState(textColorInitState);

  const linkColorInitState = colorTranslate(
    // if the query parameter exists, use that, if not use default
    linkColorQp ? linkColorQp : DEFAULTLINKCOLOR,
    bgRgb
  )
  const [linkColor, setLinkColor] = useState(linkColorInitState);

  const handleTextColorChange = (color) => {
    if (color !== textColor.userValue) {
      setTextColor(colorTranslate(color, bgRgb));
      setTextColorQp(color);
    }
  }

  const handleLinkColorChange = (color) => {
    if (color !== linkColor.userValue) {
      setLinkColor(colorTranslate(color, bgRgb));
      setLinkColorQp(color);
    }
  }

  const handleBgColorChange = (color) => {
    if (color !== bgColor.userValue) {
      // first set the background color
      setBgColor(colorTranslate(color, bgRgb, true));
      setBgColorQp(color);

      // then re-translate the text and link colors
      // if they have alpha values
      if (textColor.alpha) {
        setTextColor(colorTranslate(textColor.userValue, bgRgb));
      }

      if (linkColor.alpha) {
        setLinkColor(colorTranslate(linkColor.userValue, bgRgb));
      }
    }
  }

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
              onChange={handleTextColorChange}
              hex={textColor.hex}
              className="color-input--text"
            />
          <ColorInput
              defaultValue={linkColor.userValue}
              label="Link"
              onChange={handleLinkColorChange}
              hex={linkColor.hex}
              className="color-input--link"
            />
          <ColorInput
              defaultValue={bgColor.userValue}
              label="Background"
              onChange={handleBgColorChange}
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

      <Footer
        textColor={checkYourSelfBeforeYouHexYourself(
          textColor.userValue
        )}
        linkColor={checkYourSelfBeforeYouHexYourself(
          linkColor.userValue
        )}
        textDecoration={textDecoration}
      />
    </div>
  )
}

export default App;
