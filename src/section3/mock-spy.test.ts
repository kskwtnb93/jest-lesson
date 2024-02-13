import { Calculator } from "./mock-spy";

// スパイ: モック関数ではなく実際の関数を呼び出してテストしたい時

it("sumメソッドが呼び出される", () => {
  const calculator = new Calculator();
  const sumSpy = jest.spyOn(calculator, "sum"); // メソッドは文字列でspyOnに渡す
  const result = calculator.sum(1, 2);
  expect(result).toBe(3);
  expect(sumSpy).toHaveBeenCalledTimes(1);
  expect(sumSpy).toHaveBeenCalledWith(1, 2);

  sumSpy.mockRestore(); // 最後にスパイを解除する（推奨）
});
