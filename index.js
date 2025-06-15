// const watch = document.getElementById("watch");

setInterval(function () {
  const clock = document.getElementById("watch");
  const arr = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "August",
    "September",
    "october",
    "november",
    "December",
  ];

  const date = new Date();
  const dat = date.getDate();
  const mounts = arr[date.getMonth()];
  const year = date.getFullYear();
  const hour = date.getHours();
  const mint = date.getMinutes();
  const second = date.getSeconds();
  const session = hour <= 11 ? " AM " : "PM";
  console.log(date);

  clock.innerHTML =
    dat +
    " " +
    mounts +
    " " +
    year +
    "<br>" +
    hour +
    " : " +
    mint +
    " : " +
    second +
    " " +
    session;
}, 1000);
