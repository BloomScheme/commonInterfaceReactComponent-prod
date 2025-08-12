# Separation Usage

```react
import {Container, Content} from "./commonInterfaceReactComponent/Separation";

const component: React.FC<Props> = (props) => {
    return (
        <Container vertical>
          <Content size="asis">
            <div>vertical separation</div>
          </Content>
          <Content size="auto">
            <Container horizontal>
              <Content size="60%">
                  <div>horizontal separation</div>
              </Content>
              <Content size="auto">
                  <div>horizontal separation</div>
              </Content>
            </Container>
          </Content>
        </Container>
    )
}
```

## Components

### Container

分割方向を定義する。

```typescript
type Props = {
  horizontal?: boolean;
  vertical?: boolean;
  style?: React.CSSProperties;
  className?: string;
};
```

### Content

```typescript
type Props = {
  size: string | "auto" | "asis";
};
```

#### sizeに指定できる値

##### auto

自動でサイズを調整する。他の`Content`のサイズ決定後、余ったサイズが割り当てられる。
複数`auto`がある場合、等分割される。

##### asis

中身の要素のサイズをそのまま反映する。

##### [number]%

`Container`エリア内の相対値での指定。

##### [number]px

ピクセル絶対値での指定。