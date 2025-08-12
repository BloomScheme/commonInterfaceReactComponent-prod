import * as React from "react";

import styled, { css } from "styled-components";
import AlertDialog from "./AlertDialog";
import AlignRight from "./AlignRight";
import RoundButton from "./Buttons/RoundButton";
import Switch from "./Buttons/Switch";

type Props = {};

const CommonInterfaceTest: React.FC<Props> = ({}) => {
  return (
    <div>
      <div>
        <RoundButton>Test</RoundButton>
        <Switch />
        <AlertDialog />
      </div>
      <AlignRight>
        <RoundButton>Test</RoundButton>
        <Switch />
        <AlertDialog />
      </AlignRight>
    </div>
  );
};

export default CommonInterfaceTest;
