import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled, { css } from "styled-components";

const color = "#212121;";
const cssCode = `
    // color: ${color};
    font-family: sans-serif;
`;
const H1 = styled.h1`
  ${cssCode}
`;
const H2 = styled.h2`
  ${cssCode}
`;
const H3 = styled.h3`
  ${cssCode}
`;
const H4 = styled.h4`
  ${cssCode}
`;
const H5 = styled.h5`
  ${cssCode}
`;
const H6 = styled.h6`
  ${cssCode}
`;

type Props = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children?: React.ReactNode;
};

const Heading: React.FC<Props> = ({ level = 1, children }) => {
  switch (level) {
    case 1:
      return <H1>{children}</H1>;
    case 2:
      return <H2>{children}</H2>;
    case 3:
      return <H3>{children}</H3>;
    case 4:
      return <H4>{children}</H4>;
    case 5:
      return <H5>{children}</H5>;
    case 6:
      return <H6>{children}</H6>;

    default:
      return <H1>{children}</H1>;
  }
};

export default Heading;
