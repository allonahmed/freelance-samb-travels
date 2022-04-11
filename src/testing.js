var addDays = require("date-fns/addDays");

const dates = [];
for (let i = 1; i < 750; i += 1) {
  dates.push(addDays(new Date(), i).toLocaleDateString());
}

console.log(
  "Insert INTO Dakar.dakar_availability (id, date, room1, room2, room3, room4, room5, room6, count)\n VALUES "
);
for (let i = 0; i < dates.length; i += 1) {
  console.log(`(${i}, "${dates[i]}", false,false,false,false,false,false, 0)`);
  if (i + 1 < dates.length) {
    console.log(",");
  }
}
