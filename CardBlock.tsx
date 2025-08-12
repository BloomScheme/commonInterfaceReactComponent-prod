import * as React from "react";
import { Component } from "react";

import styled, { css } from "styled-components";

type Props = {
  style?: React.CSSProperties;
  width?: string;
  height?: string;
  display?: "inline-block" | "block";
  children?: React.ReactNode;
};

const borderRadius = 5;

const Wrapper = styled.div<{ display: string; width: string; height: string }>`
  background-color: white;
  display: ${(props) => props.display};
  box-sizing: border-box;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.25);
  /* border:1px solid #e0e0e0; */
  width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  border-radius: ${borderRadius}px;
  margin: 5px;
`;

const Main = styled.div`
  padding: 5px;
  vertical-align: top;
  /* display: inline-block; */
  width: 100%;
  box-sizing: border-box;
  border-radius: ${borderRadius}px;
`;

class CardBlock extends Component<Props, any> {
  render = () => {
    const {
      children,
      style,
      width = "unset",
      height = "20px",
      display = "inline-block",
    } = this.props;
    // const {  } = this.state;

    return (
      <Wrapper
        width={width}
        height={height}
        display={display}
        style={{ ...style }}
      >
        <Main> {children}</Main>
      </Wrapper>
    );
  };
}

export default CardBlock;
