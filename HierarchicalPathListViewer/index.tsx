import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled, { css } from "styled-components";
import BreadCrumbs from "./BreadCrumbs";
import PathListViewer, { SortingType } from "./PathListViewer";

type Props = {
  pathList: string[];
  currentPath: string;
  formatter?: (item: string) => string;
  onClick?: (path: string) => void;
  sort?: SortingType;
};

const HR = styled.hr`
  height: 1px;
  background: lightgray;
  border: none;
  outline: none;
`;

const BreadCrumbsWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: inline-block;
  overflow-y: auto;
  box-sizing: border-box;
`;

const PathListWrapper = styled.div`
  padding-left: 15px;
  display: inline-block;
  width: 100%;
  height: calc(100% - 100px);
  overflow-y: auto;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

// currentPathは外部で保持・設定する。
const HierarchicalPathListViewer: React.FC<Props> = (props) => {
  const { pathList, currentPath, onClick, formatter, sort } = props;

  return (
    <Wrapper>
      <BreadCrumbsWrapper>
        <BreadCrumbs
          path={currentPath}
          onClick={onClick}
          formatter={formatter}
        />
      </BreadCrumbsWrapper>
      <HR />
      <PathListWrapper>
        <PathListViewer
          pathList={pathList}
          currentPath={currentPath}
          onClick={onClick}
          formatter={formatter}
          sort={sort}
        />
      </PathListWrapper>
    </Wrapper>
  );
};

export default HierarchicalPathListViewer;
