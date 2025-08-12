import * as React from "react";
import { Component } from "react";

type Props = {
  style?: React.CSSProperties;
  className?: string;
  width?: string;
  height?: string;
  children?: React.ReactNode;
};

class Block extends Component<Props, any> {
  render = () => {
    const { children, style, className, width, height } = this.props;
    // const {  } = this.state;

    return (
      <div
        style={{ ...style, width, height, display: "block" }}
        className={className}
      >
        {children}
      </div>
    );
  };
}

export default Block;
