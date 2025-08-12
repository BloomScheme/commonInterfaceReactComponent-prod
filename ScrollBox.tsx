import * as React from "react";
import { Component } from "react";

type Props = {
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

class ScrollBox extends Component<Props, any> {
  render = () => {
    const { children, style = {} } = this.props;
    // const {  } = this.state;

    return (
      <div
        style={{
          ...style,
          width: "100%",
          height: "100%",
          overflow: "auto"
        }}
      >
        {children}
      </div>
    );
  };
}

export default ScrollBox;
