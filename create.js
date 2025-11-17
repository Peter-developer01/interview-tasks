#!/usr/bin/env node
/* create.js */
/* A command-line tool to create the task solution and test file and bootstrap them with appropriate content */

import minimist from "minimist";
import fs from "node:fs";
import fse from "fs-extra";

// Get an object with the CLI arguments. I use minimist because it's easy to use
const args = minimist(process.argv.slice(2));
const { lang, dir, name, fn, testDir = "test" } = args;
if ([lang, dir, name, fn].some((arg) => typeof arg === "undefined"))
	throw new Error("The following parameters are required: lang, dir, name, fn");

const destDir = `${lang}/${dir}`;
const files = [
	`${destDir}/${name}.${lang}`,
	`${destDir}/${testDir}/${name}.test.${lang}`,
];

console.log(`Creating the files at ${files.join(" and ")} at 2 seconds`);
files.forEach((file) => {
	if (fs.existsSync(file)) {
		console.warn(`Warning: ${file} already exists, will rewrite it`);
	}
});
console.log("Press CTRL+C to abort");
await wait(2000);

const [solutionFile, testFile] = files;
const solutionContent = `// ${name}. 
function ${fn}() {
    // TODO
}

export default ${fn};
`;
const testContent = `import ${fn} from "../${name}.js";
import { describe, it } from "mocha";
import { expect } from "chai";

describe("${fn}", function () {
    it("TODO", function () {
        // TODO
    });
});
`;
if (lang === "js") {
	await fse.outputFile(solutionFile, solutionContent);
	await fse.outputFile(testFile, testContent);
} else {
	await fse.outputFile(solutionFile, "");
	await fse.outputFile(testFile, "");
}
console.log(`Successfully created ${files.join(" and ")}`);

function wait(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}
