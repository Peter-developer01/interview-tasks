import getBiggestNumber from "../9-getBiggestNumber.js";
import { describe, it } from "mocha";
import { expect } from "chai";

describe("getBiggestNumber", function () {
	it("should correctly get the biggest number from an array", function () {
		expect(getBiggestNumber([45, 23, 5, 67, 23, 56, 34, 67, 79, 23])).to.equal(
			79
		);
		expect(getBiggestNumber([230])).to.equal(230);
		expect(getBiggestNumber([1, 2])).to.equal(2);
		expect(getBiggestNumber([2, 1])).to.equal(2);
		expect(getBiggestNumber([])).to.equal(undefined);
	});
});
