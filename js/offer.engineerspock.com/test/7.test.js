import addOneToNumbers from "../7.js";
import { describe, it } from "mocha";
import { expect } from "chai";

describe("addOneToNumbers", function () {
	it("should add 1 to all the numbers in an array", function () {
		expect(addOneToNumbers([1, 2, 3, 4, 5])).to.deep.equal([2, 3, 4, 5, 6]);
		expect(addOneToNumbers([34, 3453, 232341, 6745, 232])).to.deep.equal([
			35, 3454, 232342, 6746, 233,
		]);
		expect(
			addOneToNumbers([-1, -2, -3, -4, -5, 6, -7].reverse())
		).to.deep.equal([+0, -1, -2, -3, -4, 7, -6].reverse());
		expect(addOneToNumbers([])).to.deep.equal([]);
	});
});
