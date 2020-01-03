window.onload = function () {
 $("#click-events-test").bind("mouseover mousedown mouseup click dblclick blur focus submit", function (event) {
  console.log(event.type, event.currentTarget);
 });
 $("#form-events-test").bind("blur focus submit keypress keydown keyup", function (event) {
  console.log(event.type, event.key, event.keyCode, event);
 });
}