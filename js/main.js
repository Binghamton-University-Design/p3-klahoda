/* javascript */

$(document).ready(function() {

console.log('hello');

$('#slider-inner').slick({
    infinite: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });

$( ".close-icon" ).click(function() {
  $( this ).parent().fadeToggle( "slow", "linear" );
  event.preventDefault();
  event.stopPropagation();
});

$( ".bird" ).click(function() {
  $( ".bird-overlay" ).fadeToggle( "slow", "linear" );
  event.preventDefault();
  event.stopPropagation();
});

});