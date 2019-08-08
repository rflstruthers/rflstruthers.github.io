/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function showDropdown() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

//Close the dropdown menu if the user clicks outside of it
function hideDropdown() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav responsive") {
        x.className = "topnav";
      } else {
        x.className = "topnav";
      }
}


//Skills Slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

//changes slide
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


//Finds button clicked and opens appropriate modal
var btn = document.getElementsByClassName("img-container");
for (var i = 0; i < btn.length; i++) {
  var thisBtn = btn[i];
  thisBtn.addEventListener("click", function(){
    var modal = document.getElementById(this.dataset.modal);
    modal.style.display = "block";
}, false);}

//Close modal
$(document).ready(function(){
    $(".close").click(function(){
      $(".modal").hide();
    });
});