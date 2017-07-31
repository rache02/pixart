
$("#set-color").click(function(event) {
  event.preventDefault();
  $(".brush").css("background-color", $("#color-field").val())
})
