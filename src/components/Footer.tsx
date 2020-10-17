import React from "react";

type FooterProps = {
  textColor: string;
  linkColor: string;
  underline: boolean;
};

const Footer: React.FC<FooterProps> = props => {
  const { textColor, linkColor, underline } = props;

  const textDecoration = underline ? `underline` : `none`;

  return (
    <footer style={{ color: textColor }}>
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://chipcullen.com"
        style={{
          color: linkColor,
          textDecoration: textDecoration
        }}>
          chip cullen</a> |{" "}
        <a href="https://chipcullen.com/the-contrast-triangle/"
        style={{
          color: linkColor,
          textDecoration: textDecoration
        }}>
          explanatory blog post
        </a>{" "}
        |{" "}
        <a href="https://github.com/chipcullen/contrast-triangle"
        style={{
          color: linkColor,
          textDecoration: textDecoration
        }}>
          this project on github
        </a>{" "}
        |{" "}
        <a href="https://twitter.com/chipcullen"
        style={{
          color: linkColor,
          textDecoration: textDecoration
        }}>
          i'm occasionally on twitter
        </a>
      </footer>
  );
};

export default Footer;
