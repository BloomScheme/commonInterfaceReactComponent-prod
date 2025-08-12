import * as React from "react";
import { Component } from "react";

type Props = {
  wrapperRef?: (r: HTMLDivElement) => void;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
};

class Wrapper extends Component<Props, any> {
  render = () => {
    const { children, style, className } = this.props;
    // const {  } = this.state;

    return (
      <div
        style={style}
        className={className}
        ref={r => {
          if (this.props.wrapperRef) {
            if (r) {
              this.props.wrapperRef(r);
            }
          }
        }}
      >
        {children}
      </div>
    );
  };
}

export default Wrapper;
