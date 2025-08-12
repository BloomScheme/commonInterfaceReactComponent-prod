import * as React from "react";
import { Component } from "react";

import styled, { css } from "styled-components";

import useNumberState from "../../../Hooks/useNumberState";
import useTextState from "../../../Hooks/useTextState";

type Props = {
  value?: Value;
  defaultValue?: Value;
  width?: string;
  height?: string;
  onChange?: (value: string) => void;
  noEdit?: boolean;
};

/**
 * 変数を使いたい場合、変数のジェネレータを用意する
 * ex:
 *  const calcDiameter = (props:Props) => props.height + props.pad
 */
// const InputBox = styled.div<Props>``;

const Textarea = styled.textarea<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-sizing: border-box;
  margin: 0px;
`;

const Preview = styled.pre<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-sizing: border-box;
  margin: 0px;
`;

const Wrapper = styled.div<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: inline-block;
  box-sizing: border-box;
  padding: 0px;
`;

const InputArea: React.FC<Props> = (props) => {
  const {
    value,
    defaultValue,
    width = "300px",
    height = "200px",
    onChange,
    noEdit,
  } = props;

  const [stateValue, setStateValue] = React.useState(
    value || defaultValue || ""
  );

  return (
    <Wrapper width={width} height={height}>
      {noEdit ? (
        <Preview width={width} height={height}>
          {value}
        </Preview>
      ) : (
        <Textarea
          width={width}
          height={height}
          defaultValue={defaultValue}
          value={value}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            onChange && onChange(event.target.value);
          }}
        />
      )}
    </Wrapper>
  );
};

export default InputArea;
