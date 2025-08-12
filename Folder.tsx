import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled, { css } from "styled-components";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { Pad } from "./Debugging";
import InlineBlock from "./InlineBlock";

type Props = {
  title: React.ReactNode;
  children?: React.ReactNode;
};

const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
`;

const Folder: React.FC<Props> = ({ title, children }) => {
  const [componentState, setComponentState] = React.useState({ open: true });

  React.useEffect(() => {}, []);

  return (
    <Wrapper>
      <div
        onClick={() => {
          setComponentState({ open: !componentState.open });
        }}
      >
        {componentState.open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
        <InlineBlock>{title}</InlineBlock>
      </div>
      {componentState.open && <Pad>{children}</Pad>}
    </Wrapper>
  );
};

export default Folder;
