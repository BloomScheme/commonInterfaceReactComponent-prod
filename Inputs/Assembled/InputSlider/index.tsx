import * as React from "react";
import { Component } from "react";

import styled, { css } from "styled-components";
import Slider from "../../Basics/Slider";
import InputBox from "../../Basics/InputBox";

type Props = {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  width?: number;
  height?: number;
  onChange?: (value: number) => void;
};

const InputSliderMain: React.FC<Props> = (props) => {
  const { value } = props;

  return (
    <div>
      <Slider {...props} height={16} width={(props.width||100) - 60 - 10} value={value}></Slider>
      <InputBox {...props} width={60} inputType="number" value={value}></InputBox>
    </div>
  );
};

class StateComponent extends Component<Props, { value: number }> {
  constructor(props: Props) {
    super(props);

    const { value = 0 } = props;

    this.state = {
      value,
    };
  }

  render = () => {
    // const {  } = this.props;
    const { value } = this.state;
    return (
      <InputSliderMain
        {...this.props}
        value={value}
        onChange={(value: number) => {
          this.setState({ value });
        }}
      />
    );
  };
}

const InputSlider = StateComponent;

export default InputSlider;
