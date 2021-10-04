document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  //   console.log(rows);
  for (let i = 0; i < rows.length; i++) {
    const el = rows[i].trim().toLowerCase();
    const slice = el.split("_");
    console.log(
      `${(slice[0] + slice[1][0].toUpperCase() + slice[1].slice(1)).padEnd(
        20
      )} ${"🆗".repeat(i + 1)}`
    );
  }
  //   console.log(text);
});

const flights =
  "_Delayed_Departure;fao9665455485;txl55445855128;11:25+_Arrival;bru095587512187;fao45487424781;11:45+_Delayed_Arrival;hel5457788515;fao778964523654;12:05+_Departure;fao998567458;lis2235545568;12:30";

const getString = (str) => str.slice(0, 3).toUpperCase();

const flight = flights.split("+");
for (const fly of flight) {
  const [type, from, to, time] = fly.split(";");
  const output = `${type.startsWith("_Delayed") ? "🛑" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${getString(from)} to ${getString(to)} (${time.replace(
    ":",
    "h"
  )})`.padStart(45);
  console.log(output);
}
