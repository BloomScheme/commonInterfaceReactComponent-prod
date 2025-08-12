import "jest";
import { getObjectPropertyWithPath, setObjectPropertyWithPath } from "./utils";

describe("utils", () => {
  test("setObjectPropertyWithPath object", () => {
    const obj = {};
    setObjectPropertyWithPath(obj, "asdf/askdk/asdf", "test");
    console.log(`obj`, obj);
    expect((obj as any)["asdf"]["askdk"]["asdf"]).toBe("test");
  });

  test("setObjectPropertyWithPath array", () => {
    const obj = {};
    setObjectPropertyWithPath(obj, "asdf/askdk/asdf[5]", "test");
    console.log(`obj`, obj);
    expect((obj as any)["asdf"]["askdk"]["asdf"][5]).toBe("test");
  });

  test("getObjectPropertyWithPath object", () => {
    const path = "asdf/qwer/zxcv";
    const data = "qweiurio";

    const obj = {};
    setObjectPropertyWithPath(obj, path, data);
    expect(getObjectPropertyWithPath(obj, path)).toBe(data);
  });

  test("getObjectPropertyWithPath array", () => {
    const path = "asdf/qwer/zxcv[5]";
    const data = "qweiurio";

    const obj = {};
    setObjectPropertyWithPath(obj, path, data);
    console.log(`obj`, obj);
    expect(getObjectPropertyWithPath(obj, path)).toBe(data);
  });

});
