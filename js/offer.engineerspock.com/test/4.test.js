import getUniqueItems from "../4.js";
import { describe, it } from "mocha";
import { expect } from "chai";

describe("getUniqueItems", function () {
	it("should return only items that only exist in one array", function () {
		const arr1 = [1, 2, 3, 5];
		const arr2 = [1, 2, 3, 4, 5, 6];
		expect(getUniqueItems(arr1, arr2)).to.deep.equal([4, 6]);
		// Changing order of arguments should not change the result
		expect(getUniqueItems(arr2, arr1)).to.deep.equal([4, 6]);
		expect(getUniqueItems(arr2, arr2)).to.deep.equal([]);
		expect(getUniqueItems([], [])).to.deep.equal([]);
	});
});
