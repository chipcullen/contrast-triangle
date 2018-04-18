import React, { Component } from 'react';

class ResultEmoji extends Component {
  render() {
    const { contrast, min } = this.props;

    let emoji = '❌';

    if (contrast >= min) {
      emoji = '✅';
    }

    return <span className="ResultEmoji">{emoji}</span>;
  }
}

export default ResultEmoji;
