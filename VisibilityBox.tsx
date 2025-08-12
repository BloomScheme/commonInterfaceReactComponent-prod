import * as React from "react";

import styled, { css } from "styled-components";

type Props = {
  children: React.ReactNode;
  hidden?: boolean;
  display?: "block" | "inline-block" | "inline" | "flex" | "none";
  waitOneFrame?: boolean;
  style?: React.CSSProperties;
};

const VisibilityBox: React.FC<Props> = ({
  children,
  hidden,
  display,
  waitOneFrame,
  style,
}) => {
  const [hiddenState, setHiddenState] = React.useState(
    waitOneFrame ? true : hidden
  );

  React.useEffect(() => {
    if (waitOneFrame) {
      setHiddenState(hidden || false);
    }
  }, [waitOneFrame]);

  React.useEffect(() => {
    if (!waitOneFrame) {
      setHiddenState(hidden || false);
    }
  }, [hidden]);

  return (
    <div
      style={{
        visibility: hiddenState ? "hidden" : "visible",
        // opacity: hiddenState ? 0 : 1,
        display,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default VisibilityBox;
