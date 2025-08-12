import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled, { css } from "styled-components";

type Props = {
  items: string[];
  currentItem?: string;
  onClick?: (item: string) => void;
};

const ItemWrapper = styled.div<{ isCurrent?: boolean }>`
  :hover {
    background-color: #fafbff;
  }
  background-color: ${({ isCurrent }) => (isCurrent ? "#f0faff" : "white")};
`;

const Wrapper = styled.div`
  width:100%;
  height:100%;
`

const StringItemListViewer: React.FC<Props> = (props) => {
  const { items, currentItem, onClick } = props;

  return (
    <Wrapper>
      {items.map((item, index) => {
        return (
          <ItemWrapper
            key={index}
            onClick={() => {
              onClick && onClick(item);
            }}
            isCurrent={item == currentItem}
          >
            {item}
          </ItemWrapper>
        );
      })}
    </Wrapper>
  );
};

export default StringItemListViewer;
