import React, { Component } from 'react';

class PreviewParagraph extends Component {
  render() {
    return (
      <p className="preview-paragraph" style={{ color: this.props.textColor }}>
        Donec ante. Sed at velit.
        <a href="" style={{ color: this.props.linkColor }}>
          Vestibulum at purus at urna porttitor sodales
        </a>. Nullam pulvinar, urna interdum eleifend sodales, eros est tempus
        quam, quis ultricies nibh elit vitae urna. Donec pretium arcu at quam.
        Quisque tristique,{' '}
        <a href="" style={{ color: this.props.linkColor }}>
          lacus id tempor blandit
        </a>, quam massa imperdiet lorem, porta fermentum quam ante ac tortor.
        Curabitur mauris lectus, dapibus ut, ornare sit amet, vulputate sit
        amet, erat.
      </p>
    );
  }
}

export default PreviewParagraph;
