const os = require("os");
const path = require("path");

console.log(os.type());
console.log(os.hostname());
console.log(os.platform());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));

const pathValue = path.parse(__filename);

console.log(pathValue);

Object.keys(pathValue).forEach((key) =>
  console.log(key + " : " + pathValue[key])
);

const math = require("./math");
console.log(math.add(2, 3));

const { add, subtract, multiply, divide } = require("./math");
console.log(add(10, 3));
console.log(subtract(10, 3));
console.log(multiply(10, 3));
console.log(divide(10, 3));
