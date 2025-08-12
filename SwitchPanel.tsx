import * as React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import styled, { css } from "styled-components";

type Props = {
  components: { label: string; component: React.ReactNode }[];
  ActiveButtonComponent?: React.FC;
  InactiveButtonComponent?: React.FC;
};

const ActiveButton = styled.button`
  border: 1px solid black;
  background-color: white;
  color: black;
`;

const InactiveButton = styled.button`
  border: 1px solid black;
  background-color: gray;
  color: white;
`;

const SwitchPanel: React.FC<Props> = ({
  components,
  ActiveButtonComponent = ActiveButton,
  InactiveButtonComponent = InactiveButton,
}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div>
      <div>
        {components.map((data, index) => {
          const setActive = () => {
            setActiveIndex(index);
          };
          if (index == activeIndex) {
            return (
              <ActiveButton key={index} onClick={setActive}>{data.label}</ActiveButton>
            );
          } else {
            return (
              <InactiveButton key={index} onClick={setActive}>{data.label}</InactiveButton>
            );
          }
        })}
      </div>
      <div>{components[activeIndex].component}</div>
    </div>
  );
};

export default SwitchPanel;
