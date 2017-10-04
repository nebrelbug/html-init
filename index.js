#! /usr/bin/env node
const fse = require('fs-extra');

console.log(process.argv);
console.log("directory? " + process.cwd());

var basicHTML = `
<!DOCTYPE html>
  <html>
    <head>
      <title>Title</title>
    </head>
    <body>
    </body>
  </html>
`;

const file = process.cwd() + "/" + process.argv[2];
// With Promises:
fse.outputFile(file, basicHTML)
.then(() => fse.readFile(file, 'utf8'))
.then(data => {
  console.log(data) // => hello!
})
.catch(err => {
  console.error(err)
})
