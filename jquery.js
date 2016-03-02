$(document).ready(function() {

// Opaque effect on hover
  
  $(".review-image").mouseenter(function() {
    $(this).css("opacity", "0.5");
  });
  
  $(".review-image").mouseleave(function() {
    $(this).css("opacity", "1.0");
  });
});
