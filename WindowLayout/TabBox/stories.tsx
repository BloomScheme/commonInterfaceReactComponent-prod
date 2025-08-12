import * as React from "react";
import { Component } from "react";

import { action } from "@storybook/addon-actions";

import TabBox from "./index";
import styled from "styled-components";

export default {
  title: "UIParts/Tab/TabBox",
  component: TabBox,
};

const Wrapper = styled.div`
  width: 200px;
  height: 480px;
  border: 1px solid black;
`;

export const Basic = () => (
  <Wrapper>
    <TabBox
      tabs={[
        {
          title: "test1",
          content: <div>asdlfjkalsdfj</div>,
        },
        {
          title: "test1",
          content: (
            <pre>
              独自の型定義をコンパイルする。

              tscに独自の型定義ファイルの場所を教えてあげる必要がある。

              tsconfig.jsonに以下を追記する。
            </pre>
          ),
        },
        {
          title: "test3",
          content: (
            <div>
              Reactで画像を表示させる方法 create-react-app<br />
              で環境を作ったReactアプリの場合、Reactで画像をコンポーネントに表示するには、画像ファイルを<br />
              import することで Javascript から参照することができます。<br />
              例えば、以下の例はロゴ画像を表示するヘッダーです。内部で動いているWebpackがモジュールとして組み込んでくれるため、このようにJavascriptから参照できるという仕組みです。<br />
            </div>
          ),
        },
        {
          title: "test4",
          content: <div>asdlfjkalsdfj</div>,
        },
        {
          title: "test4",
          content: <div>asdlfjkalsdfj</div>,
        },
        {
          title: "test4",
          content: <div>asdlfjkalsdfj</div>,
        },
        {
          title: "test4",
          content: <div>asdlfjkalsdfj</div>,
        },
      ]}
    />
  </Wrapper>
);
