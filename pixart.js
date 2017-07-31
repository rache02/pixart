
$("#set-color").click(function(event) {
  event.preventDefault();
  $(".brush").css("background-color", $("#color-field").val())
})

$(document).ready(function() {
  for (var i = 0; i < 20; i++) {
    var square = $("<div>").addClass("square")
    $('body').append(square)
  }

})

// $("body").click(function() {
//
// })
