const sillyname = require('sillyname');
const packageA = require('package-a');
const packageB = require('package-b');
console.log(`Main App and ${sillyname()}`);
console.log(packageA);
console.log(packageB);