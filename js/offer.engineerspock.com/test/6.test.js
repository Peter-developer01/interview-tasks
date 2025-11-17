import vowelCount from "../6.js";
import { describe, it } from "mocha";
import { expect } from "chai";

describe("vowelCount", function () {
	it("should count vowels correctly", function () {
		expect(vowelCount("should count vowels correctly")).to.equal(8);
		expect(
			vowelCount("должен правильно подсчитать количество гласных букв")
		).to.equal(15);
		expect(
			vowelCount(
				"should count vowels correctly должен правильно подсчитать количество гласных букв"
			)
		).to.equal(8 + 15);
		expect(vowelCount("aeiouуеыаёоэяиюAEIOUУЕЫАЁОЭЯИЮ")).to.equal(
			"aeiouуеыаёоэяию".length * 2
		);
		expect(vowelCount("Ths sntnc cntns n vwls")).to.equal(0);
		expect(vowelCount("")).to.equal(0);
	});
});
