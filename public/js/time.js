function updateDateTime() {
    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleString();
  }
  // Update the date and time immediately and then set an interval to update every second
  updateDateTime();
  setInterval(updateDateTime, 1000);
  