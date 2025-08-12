// オブジェクトの内容をアップデートするにはどうしたらいいか
// ファイル構造、名前がついた階層構造なのでやりやすい
// でも、オブジェクトであっても階層ごとにプロパティ名があるわけで、、それだったらパスアクセスできるのでは。

const primitiveTypeNames = [
  "undefined",
  "boolean",
  "number",
  "bigint",
  "string",
  "symbol",
  "function",
];

export const isPrimitive = (object: any) =>
  primitiveTypeNames.includes(typeof object);

export const isArray = (object: any) => Array.isArray(object);

export const isObject = (object: any) =>
  !isPrimitive(object) && !isArray(object);

export const getObjectPropertyWithPath = (
  object: any,
  propertyPath: string
) => {
  const pathItems = propertyPath.split("/");
  let pointer = object;

  for (let index = 0; index < pathItems.length; index++) {
    if (pathItems[index].includes("[")) {
      const subItems = pathItems[index].split("[");
      const pathItem = subItems[0];
      const itemIndex = Number(subItems[1].replace("]", ""));

      pointer = pointer[pathItem][itemIndex];
    } else {
      const pathItem = pathItems[index];
      pointer = pointer[pathItem];
    }

    if (isPrimitive(pointer)) {
      return pointer;
    }

    if (pointer == undefined || pointer == null) {
      return pointer;
    }
  }
};

export const setObjectPropertyWithPath = (
  object: any,
  propertyPath: string,
  data: any,
  initialDataGenerator: () => any & {} = () => {}
) => {
  const pathItems = propertyPath.split("/");
  let pointer = object;

  for (let index = 0; index < pathItems.length; index++) {
    const pathItem = pathItems[index];

    if (index == pathItems.length - 1) {
      if (pathItem.includes("[")) {
        const subItems = pathItem.split("[");
        const paramName = subItems[0];
        const itemIndex = Number(subItems[1].replace("]", ""));

        if (pointer[paramName] == undefined) {
          pointer[paramName] = [];
        }

        pointer[paramName][itemIndex] = data;
      } else {
        pointer[pathItem] = data;
      }

      return;
    }

    if (pointer[pathItem] == undefined || pointer[pathItem] == null) {
      pointer[pathItem.replace(/\[.*\]/gim, "")] = initialDataGenerator();
      pointer = pointer[pathItem];
      continue;
    }

    pointer = pointer[pathItem];
  }
};

export class Property<T> {
  constructor(public type: string, public data: T) {}
}

export class PropertyObject {
  constructor(
    public data: any = null,
    public properties: Property<any>[] = []
  ) {}

  addProperty = (type: string, data: any) => {
    const property = { type, data };
    this.properties.push(property);
    return property;
  };

  setData = (data: any) => {
    this.data = data;
  };

  setDataWithPath = (propertyPath: string, data: any) => {
    setObjectPropertyWithPath(
      this,
      propertyPath,
      data,
      () => new PropertyObject()
    );
  };

  getDataWithPath = (propertyPath: string) => {
    return getObjectPropertyWithPath(this, propertyPath);
  };
}


// 大変すぎて現実的じゃないのでもっと簡単にする
// オブジェクトで指定できるようにしたい

// こういう感じ
// const holder = {
//   prop1:"string",
//   childrenA:"children",
//   childrenB:"children",
//   holderB:"holderB"
// }

// const root = holder
