import React, { Component } from 'react';

class PreviewParagraph extends Component {
  render() {
    return (
      <p className="preview-paragraph" style={{ color: this.props.textColor }}>
        Removing underlines from links in HTML text presents an accessibility
        challenge. In order for a design to be{' '}
        <a
          href="https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast"
          style={{ color: this.props.linkColor }}
        >
          considered accessible
        </a>, there is now a three-sided design contraint - or what I call "The
        Contrast Triangle". Your text, links and background colors must now{' '}
        <strong>all have sufficient contrast from each other</strong>.{' '}
        <a
          href="https://www.w3.org/TR/2008/NOTE-WCAG20-TECHS-20081211/G183"
          style={{ color: this.props.linkColor }}
        >
          Links must have a contrast ratio of 3:1 from their surrounding text.
        </a>{' '}
        This is so that colorblind users can tell what pieces of text are links.
        By not using underlines, a design has to rely on contrast alone to
        achieve this. Even the default blue link color in browsers doesn't meet
        this contrast level.{' '}
        <a
          href="https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast"
          style={{ color: this.props.linkColor }}
        >
          Both the text and links have to have a contrast ratio of 4.5:1, or 3:1
          if it's large scale text.
        </a>
      </p>
    );
  }
}

export default PreviewParagraph;
