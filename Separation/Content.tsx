import * as React from "react";
import { Component } from "react";
import Container from "./Container";

type Props = {
  size: string | "auto" | "asis";
  __index?: number;
  __parent?: Container;
  __width?: number;
  __height?: number;
  children?: React.ReactNode;
};

class Content extends Component<Props, any> {
  private holder: HTMLDivElement | null;

  public setSize = (width: number, height: number) => {
    this.setState({ width, height });
  };

  private registerSize = () => {
    const { __parent, __index, size } = this.props;

    if (__parent != undefined && __index != undefined) {
      __parent.register(this, __index);

      if (size == "asis" && this.holder) {
        __parent.regiserSize(
          __index,
          this.holder.clientWidth,
          this.holder.clientHeight
        );
      }
    }
  };

  componentDidMount = () => {
    this.registerSize();
  };

  render = () => {
    const { children, __width, __height } = this.props;
    // const { } = this.state;

    return (
      <div
        ref={(r) => (this.holder = r)}
        style={{
          width: __width,
          height: __height,
          margin: "0px",
          padding: "0px",
          letterSpacing: "normal",
          whiteSpace: "normal",
          display: "inline-block",
          overflow: "hidden",
          verticalAlign: "top",
          position: "relative",
        }}
      >
        {children}
      </div>
    );
  };
}

export default Content;
