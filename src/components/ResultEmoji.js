import React, { Component } from 'react';

class ResultEmoji extends Component {
  render() {
    const { contrast, min, warn } = this.props;

    let emoji = `❌`;

    if (contrast >= min) {
      emoji = `✅`;
    } else if (warn && contrast >= warn) {
      emoji = `⚠️`;
    }

    return <span className="ResultEmoji">{emoji}</span>;
  }
}

export default ResultEmoji;
