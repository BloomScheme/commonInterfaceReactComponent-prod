import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled, { css } from "styled-components";

type Props = {
  path: string;
  formatter?: (item: string) => string;
  onClick?: (path: string) => void;
};

const Wrapper = styled.div`
  width: 100%;
`;

const A = styled.a`
  :hover {
    background-color: #fafbff;
  }
`;

const BreadCrumbs: React.FC<Props> = (props) => {
  const { path, onClick, formatter } = props;

  const items = ["/", ...path.split("/").filter((item) => item != "")];

  const getIndexPath = (index: number) => {
    const result: string[] = [];
    for (let itemIndex = 0; itemIndex < index + 1; itemIndex++) {
      const item = items[itemIndex];
      result.push(item);
    }

    let path = result.join("/");
    if (path == "") {
      path = "/";
    }
    return path.replace(/\/+/gim, "/");
  };

  return (
    <Wrapper>
      {items.map((item, index) => {
        return (
          <span key={index}>
            <A
              onClick={() => {
                onClick && onClick(getIndexPath(index));
              }}
            >
              {formatter ? formatter(item) : item}
            </A>
            {index != items.length - 1 ? " > " : null}
          </span>
        );
      })}
    </Wrapper>
  );
};

export default BreadCrumbs;
