import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled, { css } from "styled-components";

export type SortingType = undefined | "byLetter"

type Props = {
  pathList: string[];
  currentPath: string;
  formatter?: (item: string) => string;
  onClick?: (path: string) => void;
  sort?: SortingType
};

const ItemWrapper = styled.div`
  :hover {
    background-color: #fafbff;
  }
`;

const NoItems = styled.div`
  color: lightgray;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const PathListViewer: React.FC<Props> = (props) => {
  const { pathList, currentPath, formatter, onClick, sort } = props;

  const unifyStringArray = (array: string[]) => {
    const temp = {};
    array.forEach((item) => {
      (temp as any)[item] = true;
    });
    return Object.keys(temp);
  };

  const inScopePathList = pathList.filter(
    (path) => path.search(currentPath) != -1
  );

  const inScopeItems = unifyStringArray(
    inScopePathList
      .map((path) => {
        const relativePath = path.replace(
          `${currentPath}/`.replace(/\/+/gim, "/"),
          ""
        );
        const inScopeItem = relativePath.split("/")[0];
        return inScopeItem;
      })
      .filter((item) => item != undefined && item != "")
  );
  
  switch (sort) {
    case "byLetter":{
      inScopeItems.sort((a, b) => {
        let valueA = formatter ? formatter(a) : a
        let valueB = formatter ? formatter(b) : b
        return valueA > valueB ? 1 : -1;
      })
      break;
    }
    default:
      break;
  }

  return (
    <Wrapper>
      {inScopeItems.length > 0 ? (
        inScopeItems.map((item, index) => {
          return (
            <ItemWrapper key={index}>
              <a
                onClick={() => {
                  onClick &&
                    onClick(`${currentPath}/${item}`.replace(/\/+/gim, "/"));
                }}
              >
                <div>{formatter ? formatter(item) : item}</div>
              </a>
            </ItemWrapper>
          );
        })
      ) : (
        <NoItems>no items</NoItems>
      )}
    </Wrapper>
  );
};

export default PathListViewer;
