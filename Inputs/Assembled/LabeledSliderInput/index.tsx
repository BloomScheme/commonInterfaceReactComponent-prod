import * as React from "react";
import { Component } from "react";

import styled, { css } from "styled-components";

import useNumberState from "../../../Hooks/useNumberState";
import InputSlider from "../InputSlider";
import InputLabel from "../../../Labels/InputLabel";

type Props = {
  label: string;
  labelWidth?: number;
  defaultValue?: number;
  value?: number;
  valueWidth?: number;
  onChange?: ValueCallback;
};

const StyledComponent = styled.div<{ width: number }>`
  display: inline-block;
  width: ${(props) => props.width}px;

  /* background-color: yellow; */
`;

const InputSliderWrapper = styled.div`
  display: inline-block;
  margin:0px;
  padding:0px;
  /* background-color: red; */
`;

const LabeledSliderInput: React.FC<Props> = (props) => {
  const {
    label,
    defaultValue,
    onChange,
    labelWidth = 150,
    valueWidth = 200,
  } = props;
  const { value, setNumber } = useNumberState(defaultValue || 0);

  return (
    <StyledComponent width={labelWidth + valueWidth}>
      <InputLabel width={labelWidth}>{label}:</InputLabel>
      <InputSliderWrapper>
        <InputSlider
          width={valueWidth}
          onChange={(value) => {
            setNumber(value);
            onChange && onChange(value);
          }}
          value={value}
        ></InputSlider>
      </InputSliderWrapper>
    </StyledComponent>
  );
};

export default LabeledSliderInput;
