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
});

// $('.eighth').on('click', function () {
// $('#thirdChild').animate({width: "44px"}, 300);
// $('#forthChild').addClass('active');
// });


// var activePanel = $('#accordion div.panel:first');
// var nextPanel = $(activePanel).next();
// $(activePanel).addClass('active');
//
// $('.button').on('click', function(event){
//     // if( $(this).parent().is('active') ){
//
//   $(activePanel).animate({width: "44px"}, 2000);
//   $(nextPanel).animate({width: "775px"}, 2000);
//   $('#accordion .panel').removeClass('active');
//   // $(activePanel).removeClass('active');
//   $(nextPanel).addClass('active');
//     });
  //   $('button').on('click', function(event){
  //       // if( $(this).is('.active') ){
  //
  //     $(activePanel).animate({width: "44px"}, 2000);
  //     $(nextPanel).next().animate({width: "775px"}, 2000);
  // $('#accordion .panel').removeClass('active');
  //     $(nextPanel).addClass('active');
  //       });
  // this = activePanel;
 // $('button').on('click', function(event){
 //     // if( ! $(this).is('.active') ){
 //   $(activePanel).animate({width: "44px"}, 2000);
 //   $(nextPanel).animate({width: "775px"}, 2000);
 //   $('#accordion .panel').removeClass('active');
 //   $(nextPanel).addClass('active');

// $('button').on('click', function(e){
// $(activePanel).removeClass('active');
// $(activePanel).addClass('complete');
// $(this).parent().next('panel').addClass('active');
// activePanel = this;
// });

// $('button').on('click', function() {
// $(activePanel).animate({width: "44px"}, 300);
// $('#accordion div.panel:first').next().addClass('active');
//
// $('button.second').on('click', function() {
// $(activePanel).animate({width: "44px"}, 300);
// $('#thirdChild').addClass('active');
// });
// });

// $('#first').on('click', function(){
//   $('#accordion div.panel:first').removeClass('active');
//   $('#panelContent-p2').addClass('active');
// });
//        var currentIndex = $(this).parent().next('panel').index();
//        if(currentIndex != -1) { // just checks if its the last
//            $(this).parent().next('panel').trigger('click');
//        } else {
//            $('').trigger('click');
//        }
// console.log(currentIndex);
//    });


    //When button is clicked in active pannel, log the answer,
    //remove the active class and add active class to next panel

//         var activePanel = $("#accordion div.panel:first");
//
// // $('button').on('click', function(){
// //   $('activePanel').removeClass('active');
// //   $("#accordion div.panel:next").addClass('active');
// //
// // });


// After urser CLICKS button, delay then switch to new panel
