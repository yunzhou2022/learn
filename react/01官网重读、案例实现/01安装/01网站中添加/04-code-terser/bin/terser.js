#!/usr/local/bin/node
const fs = require("fs");
const path = require("path");
const [_, __, filename] = process.argv;

const cmdPath = process.cwd();

const filePathAndName = cmdPath + "/" + filename + ".js";
const outPutfilePathAndName = "./" + filename + ".min.js";

require("child_process").exec(
  `npx terser -c -m -o ${outPutfilePathAndName} -- ${filePathAndName}`,
  console.log,
);
