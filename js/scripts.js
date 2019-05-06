$(document).ready(function() {
  $("#design").click(function() {
    $(".img1").slideToggle();
    $("#par1").toggle();
  });

   $("#development").click(function() {
     $(".img2").slideToggle();
     $("#par2").toggle();
   });

   $(".product").click(function() {
     $("#img3").slideToggle();
     $("#par3").toggle();
   });
});
