import * as React from "react";
import { Component } from "react";

import styled, { css } from "styled-components";

import useNumberState from "../../../Hooks/useNumberState";
import useTextState from "../../../Hooks/useTextState";

type Props = {
  value?: Value;
  defaultValue?: Value;
  width?: number | string;
  inputType?: "number" | "text" | "password";
  onChange?: (value: string | number) => void;
  noEdit?: boolean;
  step?: number;
  style?: React.CSSProperties;
};

const defaults = {
  width: 150,
};

/**
 * 変数を使いたい場合、変数のジェネレータを用意する
 * ex:
 *  const calcDiameter = (props:Props) => props.height + props.pad
 */
// const InputBox = styled.div<Props>``;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
`;

const Wrapper = styled.div<{ width: number | string }>`
  width: ${(props) => {
    if (typeof props.width == "string") {
      return props.width;
    }

    return "" + props.width + "px";
  }};
  display: inline-block;
`;

const InputBox: React.FC<Props> = (props) => {
  const {
    value,
    defaultValue,
    width = defaults.width,
    inputType = "text",
    onChange,
    noEdit,
    step,
    style,
  } = props;

  const [stateValue, setStateValue] = React.useState(
    value || defaultValue || ""
  );

  return (
    <Wrapper width={width}>
      {noEdit ? (
        value
      ) : (
        <Input
          type={inputType}
          defaultValue={defaultValue}
          value={value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            onChange && onChange(event.target.value);
          }}
          step={step}
          style={style}
        />
      )}
    </Wrapper>
  );
};

export default InputBox;
