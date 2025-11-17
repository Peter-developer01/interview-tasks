import getOnlyNamedObjects from "../10-getOnlyNamedObjects.js";
import { describe, it } from "mocha";
import { expect } from "chai";

describe("getOnlyNamedObjects", function () {
	it("should return only named objects", function () {
		expect(
			getOnlyNamedObjects([
				{ name: "Engineer Spock", unrelatedProperty: 20 },
				{ name: "Peter", notAname: "01" },
				{ noName: "someProp" },
				{},
			])
		).to.deep.equal([
			{ name: "Engineer Spock", unrelatedProperty: 20 },
			{ name: "Peter", notAname: "01" },
		]);
		expect(getOnlyNamedObjects([{ Name: "I am not lowercase" }])).to.deep.equal(
			[]
		);
		expect(getOnlyNamedObjects([{}])).to.deep.equal([]);
		expect(getOnlyNamedObjects([])).to.deep.equal([]);
	});
});
