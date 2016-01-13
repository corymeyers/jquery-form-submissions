//madlibs excercise

$(document).ready(function() {
  $('#blanks form').submit(function(event) {
    var firstfieldInput = $("input#firstfield").val();
    var secondfieldInput = $("input#secondfield").val();
    var thirdfieldInput = $("input#thirdfield").val();
    $('.firstfield').text(firstfieldInput);
    $('.secondfield').append(secondfieldInput);
    $('.thirdfield').text(thirdfieldInput);

    $('#story').show();

    event.preventDefault();
  });



//CAPS exercise

  $('#capsblank form').submit(function(event) {
    var fieldInput = $("input#field").val();

    //  $('.field').toUpperCase(fieldInput);

    $(".field").toUpperCase().text(fieldInput);


    $('#capsized').show();
    event.preventDefault();
  });


//background button changer
$(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });
});

$(function() {
  $("button#orange").click(function() {
    $("body").removeClass();
    $("body").addClass("orange-background");
  });
});

$(function() {
  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });
});











});
