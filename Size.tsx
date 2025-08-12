import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled, { css } from "styled-components";

type Props = {
  onResize: (width: number, height: number) => void;
  children?: React.ReactNode;
};

const Size: React.FC<Props> = (props) => {
  const { children, onResize } = props;

  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      ref.current &&
        onResize(ref.current.offsetWidth, ref.current.offsetHeight);
    });
    window.dispatchEvent(new Event("resize"));
  }, [ref.current]);

  return <div ref={ref}>{children}</div>;
};

export default Size;
