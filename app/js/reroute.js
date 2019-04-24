// 12:00 am on April 28th
// May 5th 11:59pm.
var date = new Date().getTime();

if (date > 1556424000000 && date < 1557115199000) {
  window.location = location.origin + "/location/";
} else {
  window.location = location.origin + "/closed/";
}
