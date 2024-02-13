import axios from "axios";

import Users from "./practice";

jest.mock("axios");
const mockAxios = jest.mocked(axios);

describe("Users", () => {
  // モック化したAxiosのgetメソッドの初期化
  // 各テストでmockAxios.getの実装や戻り値を変更した場合でも、他のテストが実行される前に初期状態に戻すことができる
  beforeEach(() => {
    mockAxios.get.mockClear();
  });

  it("ユーザーを取得できる", async () => {
    const users = [{ name: "Taro" }, { name: "Hanako" }];
    const res = { data: users };
    mockAxios.get.mockResolvedValue(res); // mockAxios.getの戻り値にresを設定する

    const result = await Users.all();
    expect(result).toEqual(users);
    expect(mockAxios.get).toHaveBeenCalledWith("/users.json");
  });
});
