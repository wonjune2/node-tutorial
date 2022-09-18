const exec = require("child_process").exec;

const process = exec("dir");

process.stdout.on("data", function (data) {
  console.log(data.toString());
});

process.stderr.on("data", function (data) {
  console.log.error(data.toString());
});
