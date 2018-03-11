//CLICK me menu is hidden
//Menu slides down when the nav button is clicked
$('#openDropdown').on('click', function () {
  $('#dropdownMenu').slideToggle('300');
});
//FAQs question 2 is hidden
$('#question2').on('click', function() {
  $('#answer2').slideDown(300);
  $('#answer1').slideUp(300);
});
//When question 2 is clicked it slides up over answer for question one and reveals answer
$('#question1').on('click', function() {
  $('#answer1').slideDown(300);
  $('#answer2').slideUp(300);
});
//Show only yellow circles when button is pressed
$('#showYellowCircles').on('click', function() {
  $('.blue').hide();
  $('.yellow').show();
});
//Show only blue circles when button is pressed
$('#showBlueCircles').on('click', function() {
  $('.yellow').hide();
  $('.blue').show();
});
