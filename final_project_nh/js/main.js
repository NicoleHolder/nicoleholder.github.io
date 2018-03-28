//Sticky nav on scroll
$( document ).ready(function() {
    console.log( "ready!" );
});
//When the user CLICKS on article
    //They are taken to the desired section of the page

$('.plant_article').on('click', function() {
  $('html, body').animate({
       scrollTop: $(".plant_section").offset().top -100
   }, 1000);
});
$('.animal_article').on('click', function() {
  $('html, body').animate({
       scrollTop: $(".animal_section").offset().top
  -100 }, 1000);
});
$('.other_article').on('click', function() {
  $('html, body').animate({
       scrollTop: $(".other_section").offset().top
  -100 }, 1000);
});


//Scrolling though the questions
$('#firstChild').addClass('active');
$('.first').on('click', function () {
  $('.panelContent-p1 h3').fadeOut('fast');
  $('.panelContent-p1 button').fadeOut('fast');
  $('#firstChild').animate({width: "0px"}, 2000);
  $('#secondChild').addClass('active');
});

$('.second').on('click', function () {
  $('.panelContent-p2 h3').fadeOut('fast');
  $('.panelContent-p2 button').fadeOut('fast');
  $('#secondChild').animate({width: "0px"}, 2000);
  $('#thirdChild').addClass('active');

});

$('.third').on('click', function () {
  $('.panelContent-p3 h3').fadeOut('fast');
  $('.panelContent-p3 button').fadeOut('fast');
  $('#thirdChild').animate({width: "0px"}, 2000);
  $('#forthChild').addClass('active');
});

$('.forth').on('click', function () {
  $('.panelContent-p4 h3').fadeOut('fast');
  $('.panelContent-p4 button').fadeOut('fast');
  $('#forthChild').animate({width: "0px"}, 2000);
  $('#fifthChild').addClass('active');
});

$('.fifth').on('click', function () {
  $('.panelContent-p5 h3').fadeOut('fast');
  $('.panelContent-p5 button').fadeOut('fast');
  $('#fifthChild').animate({width: "0px"}, 2000);
  $('#sixthChild').addClass('active');
});

$('.sixth').on('click', function () {
  $('.panelContent-p6 h3').fadeOut('fast');
  $('.panelContent-p6 button').fadeOut('fast');
  $('#sixthChild').animate({width: "0px"}, 2000);
  $('#seventhChild').addClass('active');
});

$('.seventh').on('click', function () {
  $('.panelContent-p7 h3').fadeOut('fast');
  $('.panelContent-p7 button').fadeOut('fast');
  $('#seventhChild').animate({width: "0px"}, 2000);
  $('#eighthChild').addClass('active');
});
$('.eighth').on('click', function () {
  $('.panelContent-p8 h3').fadeOut('fast');
  $('.panelContent-p8 button').fadeOut('fast');
  $('#eighthChild').animate({width: "0px"}, 2000);
  $ ('#accordion').fadeOut('slow');
  $('.results-p').addClass('show');
});
// $("#restart").on('click', function(){
//   $('#firstChild').addClass('active');
//
// });

$('#firstChildA').addClass('active');
$('.firstA').on('click', function () {
  $('.panelContent-a1 h3').fadeOut('fast');
  $('.panelContent-a1 button').fadeOut('fast');
  $('#firstChildA').animate({width: "0px"}, 2000);
  $('#secondChildA').addClass('active');
});

$('.secondA').on('click', function () {
  $('.panelContent-a2 h3').fadeOut('fast');
  $('.panelContent-a2 button').fadeOut('fast');
  $('#secondChildA').animate({width: "0px"}, 2000);
  $('#thirdChildA').addClass('active');

});

$('.thirdA').on('click', function () {
  $('.panelContent-a3 h3').fadeOut('fast');
  $('.panelContent-a3 button').fadeOut('fast');
  $('#thirdChildA').animate({width: "0px"}, 2000);
  $('#forthChildA').addClass('active');
});

$('.forthA').on('click', function () {
  $('.panelContent-a4 h3').fadeOut('fast');
  $('.panelContent-a4 button').fadeOut('fast');
  $('#forthChildA').animate({width: "0px"}, 2000);
  $('#fifthChildA').addClass('active');
});

$('.fifthA').on('click', function () {
  $('.panelContent-a5 h3').fadeOut('fast');
  $('.panelContent-a5 button').fadeOut('fast');
  $('#fifthChildA').animate({width: "0px"}, 2000);
  $('#sixthChildA').addClass('active');
});

$('.sixthA').on('click', function () {
  $('.panelContent-a6 h3').fadeOut('fast');
  $('.panelContent-a6 button').fadeOut('fast');
  $('#sixthChildA').animate({width: "0px"}, 2000);
  $('#seventhChildA').addClass('active');
});

$('.seventhA').on('click', function () {
  $('.panelContent-a7 h3').fadeOut('fast');
  $('.panelContent-a7 button').fadeOut('fast');
  $('#seventhChildA').animate({width: "0px"}, 2000);
  $('#eighthChildA').addClass('active');
});
$('.eighthA').on('click', function () {
  $('.panelContent-a8 h3').fadeOut('fast');
  $('.panelContent-a8 button').fadeOut('fast');
  $('#eighthChildA').animate({width: "0px"}, 2000);
  $ ('#accordionA').fadeOut('slow');
  $('.results-a').addClass('show');
});
//////////////

$('#firsto-child').addClass('active');
$('.firsto').on('click', function () {
  $('.panelcontent-o1 h3').fadeOut('fast');
  $('.panelcontent-o1 button').fadeOut('fast');
  $('#firsto-child').animate({width: "0px"}, 2000);
  $('#secondo-child').addClass('active');
});

$('.secondo').on('click', function () {
  $('.panelcontent-o2 h3').fadeOut('fast');
  $('.panelcontent-o2 button').fadeOut('fast');
  $('#secondo-child').animate({width: "0px"}, 2000);
  $('#thirdo-child').addClass('active');

});

$('.thirdo').on('click', function () {
  $('.panelcontent-o3 h3').fadeOut('fast');
  $('.panelcontent-o3 button').fadeOut('fast');
  $('#thirdo-child').animate({width: "0px"}, 2000);
  $('#fortho-child').addClass('active');
});

$('.fortho').on('click', function () {
  $('.panelcontent-o4 h3').fadeOut('fast');
  $('.panelcontent-o4 button').fadeOut('fast');
  $('#fortho-child').animate({width: "0px"}, 2000);
  $('#fiftho-child').addClass('active');
});

$('.fiftho').on('click', function () {
  $('.panelcontent-o5 h3').fadeOut('fast');
  $('.panelcontent-o5 button').fadeOut('fast');
  $('#fiftho-child').animate({width: "0px"}, 2000);
  $('#sixtho-child').addClass('active');
});

$('.sixtho').on('click', function () {
  $('.panelcontent-o6 h3').fadeOut('fast');
  $('.panelcontent-o6 button').fadeOut('fast');
  $('#sixtho-child').animate({width: "0px"}, 2000);
  $('#seventho-child').addClass('active');
});

$('.seventho').on('click', function () {
  $('.panelcontent-o7 h3').fadeOut('fast');
  $('.panelcontent-o7 button').fadeOut('fast');
  $('#seventho-child').animate({width: "0px"}, 2000);
  $('#eightho-child').addClass('active');
});
$('.eightho').on('click', function () {
  $('.panelcontent-o8 h3').fadeOut('fast');
  $('.panelcontent-o8 button').fadeOut('fast');
  $('#eightho-child').animate({width: "0px"}, 2000);
  $ ('#accordiono').fadeOut('slow');
  $('.results-o').addClass('show');
});


$('form').on('submit',function(event){
   event.preventDefault();
   var name = $('#name').val();
   alert(name);
   var email = $('#email').val();
   alert(email);

});




// After urser CLICKS button, delay then switch to new panel
