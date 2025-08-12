import * as React from "react";
import { Component } from "react";

type Props = {
  style?: React.CSSProperties;
  className?: string;
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
  children?: React.ReactNode;
};

class FullBlock extends Component<Props, any> {
  render = () => {
    const { children, style, className, width, height, minWidth, minHeight } =
      this.props;
    // const {  } = this.state;

    return (
      <div
        style={{
          ...style,
          width: width || "100%",
          height: height || "100%",
          minWidth,
          minHeight,
          display: "block",
        }}
        className={className}
      >
        {children}
      </div>
    );
  };
}

export default FullBlock;
