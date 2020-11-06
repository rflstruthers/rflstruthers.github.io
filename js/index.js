
$(document).ready(function(){
  $("#open-nav").click(function(){
    document.getElementById("small-nav").style.width = "100%";
  });
});

$(document).ready(function(){
  $(".nav-links").click(function(){
    document.getElementById("small-nav").style.width = "0";
  });
});



// Get the modal
// var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// function open() {
//   modal.style.display = "block";
// }

// function close() {
//   for (var i = 0; i < span.length; i++) {
//     modal.style.display = "none";
// }
  
// }

// $('#open').click(function (e) {
//   open();
// });

// $('.colse').click(function (e) {
//   close();
// });




$(".work-container").on("click", function() {
  var modal = $(this).data("modal");
  $(modal).show();
  $('#big-nav,#small-nav,#open-nav').click( function(e) {
    $(".modal").hide();
  });
});

$(".modal").on("click", function(e) {
  var className = e.target.className;
  if(className === "modal" || className === "close"){
    $(this).closest(".modal").hide();
  }
});