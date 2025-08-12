import * as React from "react";
import { Component } from "react";
import styled, { css } from "styled-components";

type Props = {
  style?: React.CSSProperties;
  className?: string;
  width?: string;
  height?: string;
  display?: string;
  children?: React.ReactNode;
};

const Wrapper = styled.div<{
  width: string;
  height: string;
  display: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: ${(props) => props.display};
  vertical-align: top;
  box-sizing: border-box;
  // padding: 2px;
`;

const Content = styled.div`
  text-align: left;
  margin: 0px;
  padding: 0px;
  /* border: 1px solid blue; */
  display: inline-block;
`;

class InlineBlock extends Component<Props, any> {
  render = () => {
    const {
      children,
      style,
      className,
      width = "unset",
      height = "unset",
      display = "inline-block",
    } = this.props;
    // const {  } = this.state;
    return (
      <Wrapper
        width={width}
        height={height}
        display={display}
        style={{ ...style }}
        className={className}
      >
        <Content>{children}</Content>
      </Wrapper>
    );
  };
}

export default InlineBlock;
