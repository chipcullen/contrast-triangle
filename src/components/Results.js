import React, { Component } from 'react';
import { calculateContrast } from '../utils/calculate-contrast';
import ResultEmoji from './ResultEmoji';

class Results extends Component {
  render() {
    const { bgColor, textColor, linkColor } = this.props;

    const textBgContrast = calculateContrast(textColor, bgColor);
    const linkBgContrast = calculateContrast(linkColor, bgColor);
    const textLinkContrast = calculateContrast(textColor, linkColor);

    return (
      <ul className="Results">
        <li>
          <ResultEmoji contrast={textBgContrast} min="5" />
          Text / Bg contrast is {textBgContrast}
        </li>
        <li>
          <ResultEmoji contrast={linkBgContrast} min="5" />
          Link / Bg contrast is {linkBgContrast}
        </li>
        <li>
          <ResultEmoji contrast={textLinkContrast} min="3" />
          Text / Link contrast is {textLinkContrast}
        </li>
      </ul>
    );
  }
}

export default Results;
