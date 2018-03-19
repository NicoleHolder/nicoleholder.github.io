//Sticky nav on scroll
$( document ).ready(function() {
    console.log( "ready!" );
});
//When the user CLICKS on article
    //They are taken to the desired section of the page

$('.plant_article').on('click', function() {
  $('html, body').animate({
       scrollTop: $(".plant_section").offset().top
   }, 2000);
});
$('.animal_article').on('click', function() {
  $('html, body').animate({
       scrollTop: $(".animal_section").offset().top
   }, 2000);
});
$('.other_article').on('click', function() {
  $('html, body').animate({
       scrollTop: $(".other_section").offset().top
   }, 2000);
});
//Scrolling though the questions
$('#firstChild').addClass('active');
$('.first').on('click', function () {
  $('#firstChild').animate({width: "44px"}, 750);
// $('#firstChild').removeClass('active');
$('#secondChild').addClass('active');
});

$('.second').on('click', function () {
//$('#secondChild').removeClass('active');
$('#secondChild').animate({width: "44px"}, 750);
$('#thirdChild').addClass('active');
});

$('.third').on('click', function () {
$('#thirdChild').animate({width: "44px"}, 750);
$('#forthChild').addClass('active');
});

$('.forth').on('click', function () {
$('#forthChild').animate({width: "44px"}, 750);
$('#fifthChild').addClass('active');
});

$('.fifth').on('click', function () {
$('#fifthChild').animate({width: "44px"}, 750);
$('#sixthChild').addClass('active');
});

$('.sixth').on('click', function () {
$('#sixthChild').animate({width: "44px"}, 750);
$('#seventhChild').addClass('active');
});

$('.seventh').on('click', function () {
$('#seventhChild').animate({width: "44px"}, 750);
$('#eighthChild').addClass('active');
});

// $('.eighth').on('click', function () {
// $('#thirdChild').animate({width: "44px"}, 300);
// $('#forthChild').addClass('active');
// });

// var activePanel = $('#accordion div.panel:first');
// var nextPanel = $(activePanel).next();
// $(activePanel).addClass('active');
// $('button').on('click', function(e){
//     if( ! $(this).is('.active') ){
//   $(activePanel).animate({width: "44px"}, 300);
//   $(this).animate({width: "775px"}, 300);
//   $('#accordion .panel').removeClass('active');
//   $(this).addClass('active');
//   nextPanel = this;
//  };
// });
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
