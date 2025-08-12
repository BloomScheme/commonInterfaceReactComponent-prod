import * as React from "react";
import styled, { css } from "styled-components";
import InputLabel from "../Labels/InputLabel";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
`;

export const Box = styled.div`
  display: block;
  /* border: 1px solid black; */
  box-shadow: 0px 0px 1px 0px;
  max-width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.01);
`;

export const InlineBox = styled(Box)`
  display: inline-inline-block;
  ${(props: { width?: number }) => {
    const { width } = props;

    if (width) {
      return "width:" + width + ";";
    }
    return "";
  }}
`;

export const CodeView = styled.pre`
  width: 100%;
  height: 100%;
  font-size: 16px;
`;

export const CodeBox: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <Box>
      <CodeView>{props.children}</CodeView>
    </Box>
  );
};

// export const JSONView: React.FC<{ json: Object }> = (props) => {
//   return <CodeView>{JSON.stringify(props.json, null, 2)}</CodeView>;
// };

const TypeView = styled.div`
  display: inline-block;
  font-size: small;
  background: #eee;
  /* padding: 2px; */
  color: black;
  margin-left: 5px;
`;

const ValueView = styled.div`
  display: inline-block;
  margin-left: 5px;
  box-shadow: 0px 0px 1px 0px;
  /* padding: 5px;
  margin: 5px; */
  color: ${(props: { color?: string }) => {
    if (props.color) {
      return props.color;
    }

    return "black";
  }};
`;

const InnerObjectBox = styled(Box)`
  display: inline-block;
`;

export const ObjectViewer: React.FC<{ object: Object }> = (props) => {
  const { object } = props;

  return (
    <InnerObjectBox>
      {Object.keys(object)
        .sort()
        .map((key) => {
          const value = (object as any)[key];
          const valueType = typeof value;
          let valueView = <div key={key}></div>;
          switch (valueType) {
            case "object": {
              if (value === null) {
                valueView = (
                  <ValueView color="gray" key={key}>
                    null<TypeView>null</TypeView>
                  </ValueView>
                );
                break;
              }

              valueView = <ObjectViewer object={value} key={key} />;
              break;
            }
            case "undefined": {
              valueView = (
                <ValueView color="gray" key={key}>
                  undefined<TypeView>undefined</TypeView>
                </ValueView>
              );
              break;
            }
            case "string":
              valueView = (
                <ValueView color="Chocolate" key={key}>
                  {value}
                  <TypeView>string</TypeView>
                </ValueView>
              );
              break;
            case "number":
              valueView = (
                <ValueView color="DarkGreen" key={key}>
                  {value}
                  <TypeView>number</TypeView>
                </ValueView>
              );
              break;
            case "boolean":
              if (value) {
                valueView = (
                  <ValueView color="red" key={key}>
                    true
                    <TypeView>boolean</TypeView>
                  </ValueView>
                );
              } else {
                valueView = (
                  <ValueView color="blue" key={key}>
                    false
                    <TypeView>boolean</TypeView>
                  </ValueView>
                );
              }

              break;
            default:
              valueView = (
                <ValueView key={key}>
                  {value}
                  <TypeView>{valueType}</TypeView>
                </ValueView>
              );
              break;
          }

          return (
            <div key={key}>
              <InputLabel width={100}>{key}:</InputLabel>
              {valueView}
            </div>
          );
        })}
    </InnerObjectBox>
  );
};

export const ObjectBox: React.FC<{ object: Object | null | undefined }> = (
  props
) => {
  return (
    <Box style={{ color: "blue" }}>
      <ObjectViewer object={props.object || {}} />
    </Box>
  );
};

export const JSONViewer: React.FC<{ json: Object }> = (props) => {
  return <CodeView>{JSON.stringify(props.json, null, 2)}</CodeView>;
};

export const JSONBox: React.FC<{ json: Object }> = (props) => {
  return (
    <Box style={{ color: "blue" }}>
      <JSONViewer json={props.json} />
    </Box>
  );
};

export const Pad = styled.div`
  padding: 10px;
`;

export const SuccessMessage = styled.div`
  color: green;
  font-size: small;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: small;
`;
