import { describe, it } from "mocha";
import { assert } from "chai";
describe("Tax Calculation", () => {
    it("Should return 0 for earnings below 12000", () => {
      assert.strictEqual(calculateTax(11000), 0);
    });
});