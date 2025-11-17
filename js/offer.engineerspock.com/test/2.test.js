import reverseString from "../2.js";
import { describe, it } from "mocha";
import { expect } from "chai";

describe("reverseString", function () {
	it("should reverse a string correctly", function () {
		expect(reverseString("Peter")).to.equal("reteP");
		expect(reverseString("season")).to.equal("nosaes");
		expect(reverseString("natan")).to.equal("natan");
		expect(reverseString("")).to.equal("");
	});
});
