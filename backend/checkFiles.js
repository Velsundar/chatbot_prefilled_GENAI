const fs = require("fs");
const path = require("path");

const pathsToCheck = [
  path.join(__dirname, "utils"),
  path.join(__dirname, "middleware")
];

pathsToCheck.forEach(dir => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(`Error reading directory ${dir}:`, err);
    } else {
      console.log(`Contents of ${dir}:`, files);
    }
  });
});
