// Write your pseudo code here! HAPPY CODING! :)
//WHEN hamburger is clicked
  //the sidebar slides in from the left
  $('.hamburger').on('click', function(){
    $('.sidebar').addClass('active');
  });
  //WHEN X is clicked
    //Hide sidebar
  $('.close').on('click', function() {
    $('.sidebar').removeClass('active');
  });
