import isAnagram from "../8-isAnagram.js";
import { describe, it } from "mocha";
import { expect } from "chai";

describe("isAnagram", function () {
	it("should correctly detect whether str1 is an anagram of str2", function () {
		expect(isAnagram("anagram", "manager")).to.equal(false);
		expect(isAnagram("vain", "Ivan")).to.equal(true);
		expect(isAnagram("program", "margorp")).to.equal(true);
		expect(isAnagram("country", "city")).to.equal(false);
		// I chose true for empty strings, because an empty string, in fact, has all the characters of an empty string.
		expect(isAnagram("", "")).to.equal(true);
	});
});
