import * as React from "react";
import { Component } from "react";

import { action } from "@storybook/addon-actions";

import InputSlider from "./index";

export default {
  title: "UIParts/Assembled/InputSlider",
  component: InputSlider,
};

export const Basic = () => <InputSlider value={10}></InputSlider>;

export const Action = () => <InputSlider value={50}></InputSlider>;
