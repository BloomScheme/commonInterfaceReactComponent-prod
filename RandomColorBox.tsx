import * as React from "react";
import { Component } from "react";

type Props = {
  children?: React.ReactNode;
};

type State = {
  r: number;
  g: number;
  b: number;
};

class RandomColorBox extends Component<Props, any> {
  constructor(params: Props) {
    super(params);

    const rnd = () => parseInt(String(Math.random() * 255));

    this.state = {
      r: rnd(),
      g: rnd(),
      b: rnd()
    };
  }

  render = () => {
    const { children } = this.props;
    const { r, g, b } = this.state;

    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: "0px",
          margin: "0px",
          overflow: "auto",
          backgroundColor: `rgb(${r}, ${g}, ${b})`
        }}
      >
        {children}
      </div>
    );
  };
}

export default RandomColorBox;
