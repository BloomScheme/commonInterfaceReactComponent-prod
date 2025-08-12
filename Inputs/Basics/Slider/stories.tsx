import * as React from "react";

import { action } from "@storybook/addon-actions";

import Slider from "./index";

export default {
  title: "UIParts/Basics/Slider",
  component: Slider,
};

export const Basic = () => <Slider></Slider>;
export const MultipleSizes = () => (
  <div>
    <div>
      <Slider></Slider>
    </div>
    <div>
      <Slider width={100} height={32}></Slider>
    </div>
    <div>
      <Slider width={200} height={64}></Slider>
    </div>
    <div>
      <Slider width={400} height={128}></Slider>
    </div>
    <div>
      <Slider width={400}></Slider>
    </div>
  </div>
);
export const value = () => <Slider value={0} min={0} max={100}></Slider>;
