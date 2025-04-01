import { describe, it, expect } from "vitest";
import JSES6 from "../../views/JSES6.vue";

// 測試方式npx vitest --testNamePattern="processAPIVersionData 測試"
describe("processAPIVersionData 測試", () => {
  it("應該格式化並返回正確的字串", () => {
    // 測資
    const input = [
      {
        name: "API1",
        version: "1.1.0",
      },
    ];
    // 測試
    const expectedResult = `一共呼叫1隻API結果:<br/>名稱:API1,版本1.1.0,JSON:{"name":"API1","version":"1.1.0"}。<br/>`;
    const result = JSES6.setup().processAPIVersionData(input);

    // 檢查預期資料結果
    expect(result).toBe(expectedResult);
  });
});
