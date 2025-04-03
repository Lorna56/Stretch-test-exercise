import { describe, it } from "mocha";
import { assert } from "chai";
import {calculateTax} from '../taxCalculator.js';
describe("Tax Calculation", () => {
    it("Should return 0 for earnings below 12000", () => {
      assert.strictEqual(calculateTax(11000), 0);
    });
    it("Should return 20% tax for earnings between 12000 and 36000", () => {
        assert.strictEqual(calculateTax(20000), 1600);
      });
      it("Should return 40% tax for earnings above 36000", () => {
        assert.strictEqual(calculateTax(40000), 6400);
      });
      it("Should return 0 tax for exactly 12000 earnings", () => {
        assert.strictEqual(calculateTax(12000), 0);
      });
});