import * as React from "react";
import { Component } from "react";

import styled, { css } from "styled-components";

type BaseProps = {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  width?: number;
  height?: number;
};

type InnerProps = BaseProps & {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type Props = BaseProps & {
  onChange?: (value: number) => void;
};

const calcTrackThickness = (props: BaseProps) => (props.height || 24) / 4;
const calcThumbDiameter = (props: BaseProps) => (props.height || 24) - 4;

//   https://freefielder.jp/blog/2018/09/css-input-range-crossbrowser.html
const SliderMain = styled.input.attrs({ type: "range" })<InnerProps>`
  -webkit-appearance: none;
  margin: 0;
  width: 100%;
  height: 100%;

  :focus {
    outline: none;
  }

  /* WebKit・Blink向け 溝のスタイル */
  ::-webkit-slider-runnable-track {
    width: ${(props) => props.width};
    height: ${(props) => calcTrackThickness(props)}px;
    cursor: pointer;
    animate: 0.2s;
    background: #cccccc;
    border-radius: ${(props) => calcTrackThickness(props)}px;
  }

  /* WebKit・Blink向け つまみのスタイル */
  ::-webkit-slider-thumb {
    /* box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; */
    border: 1px solid #cccccc;
    height: ${(props) => calcThumbDiameter(props)}px;
    width: ${(props) => calcThumbDiameter(props)}px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    /* 以下は つまみの縦位置調整 */
    /* (つまみの高さ - トラックの高さ) / 2 。つまみの高さは border を含む */
    margin-top: -${(props) => (calcThumbDiameter(props) - calcTrackThickness(props)) / 2}px;
  }

  /* 何故か上の margin-top 指定が Edge に効いてしまうので、Edge向けに設定をリセット */
  @supports (-ms-ime-align: auto) {
    ::-webkit-slider-thumb {
      margin-top: 0 !important;
    }
  }

  /* WebKit・Blink向け focus時のスタイル */
  :focus::-webkit-slider-runnable-track {
    background: #999999;
  }
`;

const Wrapper = styled.div<BaseProps>`
  display: inline-block;

  vertical-align: middle;

  width: ${(props) => props.width || 200}px;
  height: ${(props) => props.height || 24}px;
  margin: 5px;
`;

const Slider: React.FC<Props> = (props) => {
  const { onChange } = props;
  const baseProps = { ...props, onChange: undefined };

  return (
    <Wrapper {...baseProps}>
      <SliderMain
        {...props}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const value = parseFloat(e.target.value);
          onChange && onChange(value);
        }}
      ></SliderMain>
    </Wrapper>
  );
};

export default Slider;
