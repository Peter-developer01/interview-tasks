import factorial from "../5-factorial.js";
import { describe, it } from "mocha";
import { expect } from "chai";

describe("factorial", function () {
	it("should calculate a factorial correctly", function () {
		// Performance test
		expect(factorial(50)).to.equal(
			30414093201713378043612608166064768844377641568960512000000000000n
		);
		expect(factorial(20)).to.equal(2432902008176640000n);

		expect(factorial(5n)).to.equal(120n);
		expect(factorial(4n)).to.equal(24n);
		expect(factorial(3n)).to.equal(6n);
		expect(factorial(2n)).to.equal(2n);
		expect(factorial(1n)).to.equal(1n);
		expect(factorial(0n)).to.equal(0n);
	});
});
