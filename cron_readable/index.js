const cronParser = require("cron-parser");
const cronstrue = require("cronstrue");

const expression = "* * * * * *";

// Validate expression first
let isCronValid = true;
try {
  cronParser.parseExpression(expression);
} catch (e) {
  isCronValid = false;
}

// If valid, then pass into cRonstrue
if (isCronValid) {
  console.log(cronstrue.toString("* * * * *"));
}
if (isCronValid) {
  console.log(cronstrue.toString("0 23 ? * MON-FRI"));
}
if (isCronValid) {
  console.log(cronstrue.toString("0 23 * * *", { verbose: true }));
}
if (isCronValid) {
  console.log(cronstrue.toString("23 12 * * SUN#2"));
}
if (isCronValid) {
  console.log(
    cronstrue.toString("23 14 * * SUN#2", { use24HourTimeFormat: true })
  );
}
if (isCronValid) {
  console.log(
    cronstrue.toString("* * * ? * 2-6/2", { dayOfWeekStartIndexZero: false })
  );
}
if (isCronValid) {
  console.log(cronstrue.toString("* * * 6-8 *", { monthStartIndexZero: true }));
}
