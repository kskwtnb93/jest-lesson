import { ShoppingList } from "./practice";

describe("ShoppingList", () => {
  let shoppingList: ShoppingList;

  // ShoppingListクラスの新しいインスタンスを生成
  beforeEach(() => {
    shoppingList = new ShoppingList();
  });

  describe("addItem", () => {
    // 演習１
    it("アイテムをリストに追加する", () => {
      shoppingList.addItem("apple");
      expect(shoppingList.list).toEqual(["apple"]);
    });
  });

  describe("removeItem", () => {
    // 演習２
    it("アイテムをリストから削除する", () => {
      shoppingList.addItem("apple");
      shoppingList.removeItem("apple");
      expect(shoppingList.list).not.toContain("apple");
    });

    // 演習３
    it("リストに存在しない場合はエラー", () => {
      expect(() => shoppingList.removeItem("banana")).toThrow(
        "アイテム: banana は存在しません"
      );
    });
  });
});
