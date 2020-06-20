document.addEventListener("DOMContentLoaded", function (event) {
  let greets = "Good Morning";
  let seasong = "Stay Safe!";

  let date = new Date(),
    day = date.getDate(),
    month = date.getMonth() + 1,
    hours = date.getHours();

  // Time greetings
  if (hours > 12 && hours < 17) {
    greets = "Good Afternoon";
  } else if (hours >= 17 && hours < 24) {
    greets = "Good Evening";
  } else {
    greets = "Good Morning";
  }

  // Seasonal Greetings
  if (month == 12) {
    if (day >= 24 && day <= 26) {
      seasong = "Merry Christmas";
    } else if (day == 31) {
      seasong = "Happy New Year";
    }
  } else if (month == 1) {
    if (day == 1) {
      seasong = "Happy New Year";
    }
  }

  document.getElementById("greetings").innerHTML = `${greets}`;
  document.getElementById("seasons").innerHTML = `${seasong}`;
});
