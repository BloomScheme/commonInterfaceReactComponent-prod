import * as React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import styled, { css } from "styled-components";

export type ComponentSize = {
  width: number;
  height: number;
};

type Props = {
  style?: React.CSSProperties;
  onSizeChanged?: (size?: ComponentSize) => void;
  children?: React.ReactNode;
};

const Wrapper = styled.div`
  box-sizing: border-box;
  margin:0px;
  padding:0px;
  vertical-align: top;
`;

const SizeGetter: React.FC<Props> = ({ children, style, onSizeChanged }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const callOnSizeChanged = () => {
    const size = ref.current
      ? { width: ref.current.offsetWidth, height: ref.current.offsetHeight }
      : undefined;
    onSizeChanged && onSizeChanged(size);
  };

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      callOnSizeChanged();
    });
  }, []);

  React.useEffect(() => {
    callOnSizeChanged();
  }, [ref.current?.offsetWidth, ref.current?.offsetHeight]);

  return (
    <Wrapper ref={ref} style={style}>
      {children}
    </Wrapper>
  );
};

export default SizeGetter;
