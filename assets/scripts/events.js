window.onload = function () {
 $("#click-events-test").bind("mouseover mousedown mouseup click dblclick", function (event) {
  console.log(event.type, event.currentTarget);
 });
 $("#form-events-test").bind("blur focus keypress", function (event) {
  console.log(event.type, event.currentTarget, event.keyCode, event.which);
 });
}