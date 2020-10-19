var slideTeamIndex = 1;
showSlidesTeam(slideTeamIndex);

function plusSlides(n) {
  showSlidesTeam(slideTeamIndex += n);
}

function currentSlideTeam(n) {
  showSlidesTeam(slideTeamIndex = n);
}

function showSlidesTeam(n) {
  var i;
  var slideTeam = document.getElementsByClassName("slide-team");
  var btnTeam = document.getElementsByClassName("btn-team");
  if (n > slideTeam.length) {slideTeamIndex = 1}    
  if (n < 1) {slideTeamIndex = slideTeam.length}
  for (i = 0; i < slideTeam.length; i++) {
      slideTeam[i].style.display = "none";  
  }
  for (i = 0; i < btnTeam.length; i++) {
      btnTeam[i].className = btnTeam[i].className.replace(" active", "");
  }
  slideTeam[slideTeamIndex-1].style.display = "block";  
  btnTeam[slideTeamIndex-1].className += " active";
}



var slideTestimonialsIndex = 1;
showSlidesTestimonials(slideTestimonialsIndex);

function plusSlides(n) {
  showSlidesTestimonials(slideTestimonialsIndex += n);
}

function currentSlideTestimonials(n) {
  showSlidesTestimonials(slideTestimonialsIndex = n);
}

function showSlidesTestimonials(n) {
  var i;
  var slideTestimonials = document.getElementsByClassName("slide-testimonials");
  var btnTestimonials = document.getElementsByClassName("btn-testimonials");
  if (n > slideTestimonials.length) {slideTestimonialsIndex = 1}    
  if (n < 1) {slideTestimonialsIndex = slideTestimonials.length}
  for (i = 0; i < slideTestimonials.length; i++) {
      slideTestimonials[i].style.display = "none";  
  }
  for (i = 0; i < btnTestimonials.length; i++) {
      btnTestimonials[i].className = btnTestimonials[i].className.replace(" active", "");
  }
  slideTestimonials[slideTestimonialsIndex-1].style.display = "block";  
  btnTestimonials[slideTestimonialsIndex-1].className += " active";
}