// toThrow
import { divide, ZeroDivisorError } from "./divide";

it("0で割るとエラーが発生する", () => {
  // エラーのテストの場合は関数を無名関数でラップする
  // マッチャーの.toThrow()が呼ばれる前にJestがエラーで止まってしまうため
  expect(() => divide(10, 0)).toThrow();
  expect(() => divide(10, 0)).toThrow("0で割ることはできません");
  expect(() => divide(10, 0)).toThrow(ZeroDivisorError);
});
