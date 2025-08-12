import * as React from "react";
import { Component } from "react";
import Content from "./Content";

type Props = {
  horizontal?: boolean;
  vertical?: boolean;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
};

type State = {
  contents: { [key: number]: Content };
  contentSizes: { [key: number]: { width: number; height: number } };
  mountProgress: number;
  mountFilters: ("auto" | "asis" | "number" | "all")[];
};

class Container extends Component<Props, State> {
  public width = 0;
  public height = 0;

  private holder: HTMLDivElement | null;

  constructor(props: Props) {
    super(props);
    this.state = {
      contents: {},
      contentSizes: {},
      mountProgress: 0,
      mountFilters: [],
    };
  }

  componentDidMount = () => {
    window.addEventListener("resize", (e) => {
      this.startMount();
    });

    this.startMount();
  };

  public register = (instance: Content, index: number) => {
    const { contents } = this.state;

    this.setState({
      contents: {
        ...contents,
        [index]: instance,
      },
    });
  };

  public regiserSize = (index: number, width: number, height: number) => {
    const { contentSizes } = this.state;

    this.setState({
      contentSizes: {
        ...contentSizes,
        [index]: { width, height },
      },
    });
  };

  public startMount = () => {
    this.setState({
      contents: {},
      contentSizes: {},
      mountProgress: 1,
      mountFilters: [],
    });
  };

  private process = () => {
    const { vertical, horizontal } = this.props;

    const { mountProgress, contentSizes, mountFilters } = this.state;

    const splitee = vertical ? "height" : "width";
    const noneSplitee = vertical ? "width" : "height";

    const process: Function[] = [
      () => undefined, // 0 = do nothing.
      () => {
        if (!this.holder) {
          return;
        }

        // containerサイズ取得
        this.width = this.holder.clientWidth;
        this.height = this.holder.clientHeight;

        const spliteeSize = splitee == "width" ? this.width : this.height;
        const noneSpliteeSize = splitee == "width" ? this.height : this.width;

        // 子属性クロール
        const sizeOptions = this.getSizeOptions();

        // contentSizesの初期化
        Object.keys(sizeOptions).forEach((index) => {
          (contentSizes as any)[index] = {};
          (contentSizes as any)[index][noneSplitee] = noneSpliteeSize;
        });

        // %, pxの計算
        Object.keys(sizeOptions).forEach((index) => {
          const sizeOption = (sizeOptions as any)[index];

          if (/px$/gim.test(sizeOption)) {
            (contentSizes as any)[index][splitee] = parseInt(
              sizeOption.replace("px", "")
            );
          }

          if (/%$/gim.test(sizeOption)) {
            (contentSizes as any)[index][splitee] =
              (spliteeSize * parseFloat(sizeOption.replace("%", ""))) / 100;
          }
        });

        // asis, %, pxのマウント
        // プログレスすすめる
        this.setState({
          mountFilters: [...mountFilters, "asis", "number"],
          mountProgress: mountProgress + 1,
          contentSizes: { ...contentSizes },
        });
      },

      () => {
        // マウント待ち
        this.setState({
          mountProgress: mountProgress + 1,
        });
      },

      () => {
        // auto = 残りの領域計算
        let totalSize = 0;
        Object.keys(contentSizes).forEach((index) => {
          const size = (contentSizes as any)[index][splitee] | 0;
          totalSize += size;
        });

        const spliteeSize = splitee == "width" ? this.width : this.height;
        const noneSpliteeSize = splitee == "width" ? this.height : this.width;

        const sizeOptions = this.getSizeOptions();
        const autoCount = Object.keys(sizeOptions).filter(
          (index) => (sizeOptions as any)[index] == "auto"
        ).length;
        const autoSize = (spliteeSize - totalSize) / autoCount;

        Object.keys(sizeOptions).forEach((index) => {
          if ((sizeOptions as any)[index] == "auto") {
            (contentSizes as any)[index][splitee] = autoSize;
          }
        });

        this.setState({
          mountFilters: [...mountFilters, "auto"],
          mountProgress: mountProgress + 1,
          contentSizes: { ...contentSizes },
        });
      },

      () => {
        // 完了
        this.setState({
          mountProgress: 0,
        });
      },
    ];
    process[mountProgress] && process[mountProgress]();
  };

  private getSizeOptions = () => {
    const { children } = this.props;
    const sizes: { [index: number]: string } = {};
    React.Children.forEach(
      children,
      (child: React.ReactElement, index: number) => {
        const { size } = child.props;
        sizes[index] = size;
      }
    );

    return sizes;
  };

  private modifyChild = (child: React.ReactElement, index: number) => {
    const { contentSizes } = this.state;
    if (contentSizes[index]) {
      const { width, height } = contentSizes[index];

      return React.cloneElement<React.ReactNode>(child, {
        ...child.props,
        __width: width,
        __height: height,
        __parent: this,
        __index: index,
        key: index,
      });
    }
    return child;
  };

  private filterChildren = () => {
    const { children } = this.props;
    const { mountFilters } = this.state;

    return React.Children.map(
      children,
      (child: React.ReactElement, index: number) => {
        const { size } = child.props;
        if (mountFilters.find((item) => item == "all")) {
          return this.modifyChild(child, index);
        }

        if (mountFilters.find((item) => item == "number")) {
          if (/(px|%)$/gim.test(size)) {
            return this.modifyChild(child, index);
          }
        }

        if (mountFilters.find((item) => item == size)) {
          return this.modifyChild(child, index);
        }

        return null;
      }
    );
  };

  render = () => {
    const { style = {}, className, vertical } = this.props;
    const { contentSizes } = this.state;

    setTimeout(() => {
      this.process();
    }, 10);

    return (
      <div
        ref={(r) => (this.holder = r)}
        style={{
          width: "100%",
          height: "100%",
          margin: "0px",
          padding: "0px",
          letterSpacing: !vertical ? "-1em" : undefined,
          whiteSpace: !vertical ? "nowrap" : undefined,
          ...style,
        }}
        className={className}
      >
        {this.filterChildren()}
      </div>
    );
  };
}

export default Container;
