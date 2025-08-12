import * as React from "react";
import { Component } from "react";

import styled, { css } from "styled-components";
import InputLabel from "../../../Labels/InputLabel";
import InputBox from "../../Basics/InputBox";

type BaseProps = {
  label: string;
  value?: string | number;
  defaultValue?: string | number;
  labelWidth?: string | number;
  valueWidth?: string | number;
  childWidth?: string | number;
  inputType?: "number" | "text" | "password";
  step?: number;
  noEdit?: boolean;
  children?: React.ReactNode;
  labelStyle?: React.CSSProperties;
  valueStyle?: React.CSSProperties;
};

type Props = BaseProps & {
  onChange?: (value: string | number) => void;
};

const defaults = {
  labelWidth: 150,
  valueWidth: 150,
  childWidth: 50,
};

const numberToPx = (value: number | string) => {
  if (Number.isFinite(value)) {
    return `${value}px`;
  }
  return value;
};

const calcWrapperWidth = (props: BaseProps) => {
  const data = { ...defaults, ...props };
  const { labelWidth, valueWidth, childWidth } = data;
  return `calc(${numberToPx(labelWidth)} + ${numberToPx(
    valueWidth
  )} + ${numberToPx(childWidth)})`;
};

const Wrapper = styled.div<BaseProps>`
  width: ${(props) => calcWrapperWidth(props)};

  /* dbg */
  /* border: 1px solid yellow; */
`;

const ValueView = styled.div`
  display: inline-block;
  word-break: break-all;
`;

const ChildrenWrapper = styled.div`
  display: inline-block;
`;

const LabeledInput = (props: Props) => {
  const {
    label,
    labelWidth,
    valueWidth = defaults.valueWidth,
    inputType = "text",
    onChange,
    value,
    defaultValue,
    noEdit,
    children,
    step,
    labelStyle,
    valueStyle,
  } = props;
  const baseProps = { ...props, onChange: undefined };

  return (
    <Wrapper {...baseProps}>
      <InputLabel width={labelWidth || defaults.labelWidth} style={labelStyle}>
        {label}:
      </InputLabel>
      {noEdit ? (
        <ValueView style={{ ...valueStyle, width: valueWidth }}>
          {value}
        </ValueView>
      ) : (
        <InputBox
          defaultValue={defaultValue}
          value={value}
          inputType={inputType}
          onChange={onChange}
          width={valueWidth}
          step={step}
          style={valueStyle}
        />
      )}
      {children && <ChildrenWrapper>{children}</ChildrenWrapper>}
    </Wrapper>
  );
};

export default LabeledInput;
