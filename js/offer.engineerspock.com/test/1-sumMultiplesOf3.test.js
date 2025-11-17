import sumMultiplesOf3 from "../1-sumMultiplesOf3.js";
import { describe, it } from "mocha";
import { expect } from "chai";

describe("sumMultiplesOf3", function () {
	it("should correctly sum multiples of 3", function () {
		expect(sumMultiplesOf3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.equal(18);
		expect(sumMultiplesOf3([-1, -2, -3, -5, -6, -8, -9])).to.equal(-18);
		expect(sumMultiplesOf3([0, 0, 0])).to.equal(0);
		expect(sumMultiplesOf3([])).to.equal(0);
	});
});
