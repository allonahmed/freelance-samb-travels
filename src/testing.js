var addDays = require("date-fns/addDays");

const dates = [];
for (let i = 1; i < 750; i += 1) {
  dates.push(addDays(new Date(), i).toLocaleDateString());
}

console.log("Insert INTO room_count (id, date, count)\n VALUES ");
for (let i = 0; i < dates.length; i += 1) {
  console.log(`(${i}, "${dates[i]}", 0)`);
  if (i + 1 < dates.length) {
    console.log(",");
  }
}
