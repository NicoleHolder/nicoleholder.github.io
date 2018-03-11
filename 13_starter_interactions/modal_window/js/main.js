// Write your pseudo code here! HAPPY CODING!!
//WHEN showModal button is clicked
  //SHOW modal Window
  $('#showModal').on('click', function () {
    $('.modal-background').fadeIn('slow');
    $('.modal-content').fadeIn('slow');
  });
$('#close').on('click', function () {
  $('.modal-background').fadeOut('slow');
  $('.modal-content').fadeOut('slow');
});
