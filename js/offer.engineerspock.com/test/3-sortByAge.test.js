import sortByAge from "../3-sortByAge.js";
import { describe, it } from "mocha";
import { expect } from "chai";

describe("sortByAge", function () {
	it("should correctly sort elements in ascending order of the age property", function () {
		expect(
			sortByAge([
				{ age: 14 },
				{ age: 30 },
				{ someUnneededProp: 23423, age: -120 },
				{ age: 10 },
			])
		).to.deep.equal([
			{ someUnneededProp: 23423, age: -120 },
			{ age: 10 },
			{ age: 14 },
			{ age: 30 },
		]);
		expect(sortByAge([{ age: 20 }])).to.deep.equal([{ age: 20 }]);
		expect(sortByAge([])).to.deep.equal([]);
	});
});
