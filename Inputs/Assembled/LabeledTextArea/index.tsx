import * as React from "react";
import { Component } from "react";

import styled, { css } from "styled-components";
import InputLabel from "../../../Labels/InputLabel";

type Props = {
  label: string;
  value?: string;
  labelWidth?: number;
  valueWidth?: number;
  valueHeight?: number;
  preview?: boolean;
  onChange?: (value: string) => void;
  labelStyle?: React.CSSProperties;
  valueStyle?: React.CSSProperties;
};

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: block;
`;

const Preview = styled.pre<{ valueWidth: number; valueHeight: number }>`
  display: inline-block;
  width: ${(props) => props.valueWidth}px;
  height: ${(props) => props.valueHeight}px;
  vertical-align: top;
  box-sizing: border-box;
  margin: 0px;
  padding: 3px;
  margin-bottom: 7px;
  overflow: auto;

  /* background-color: yellow; */
`;

const TextAreaWrapper = styled.div<{ valueWidth: number; valueHeight: number }>`
  display: inline-block;
  width: ${(props) => props.valueWidth}px;
  height: ${(props) => props.valueHeight}px;
  margin: 0px;
  padding: 0px;
`;

const StyledComponent = styled.div<{ labelWidth: number; valueWidth: number }>`
  width: ${(props) => props.labelWidth + props.valueWidth}px;

  /* background-color: green; */
`;

const LabeledTextArea: React.FC<Props> = (props) => {
  const {
    value,
    label,
    labelWidth = 150,
    valueWidth = 500,
    valueHeight = 100,
    preview,
    onChange,
    labelStyle,
    valueStyle,
  } = props;

  return (
    <StyledComponent
      {...{
        value,
        label,
        labelWidth,
        valueWidth,
        valueHeight,
        preview,
      }}
    >
      <InputLabel width={labelWidth} style={labelStyle}>
        {label}:
      </InputLabel>
      {preview ? (
        <Preview
          valueWidth={valueWidth}
          valueHeight={valueHeight}
          style={valueStyle}
        >
          {value}
        </Preview>
      ) : (
        <TextAreaWrapper valueWidth={valueWidth} valueHeight={valueHeight}>
          <StyledTextarea
            value={value}
            onChange={(e) => {
              onChange && onChange(e.target.value);
            }}
            style={valueStyle}
          ></StyledTextarea>
        </TextAreaWrapper>
      )}
    </StyledComponent>
  );
};

export default LabeledTextArea;
