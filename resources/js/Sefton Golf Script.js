$('.carousel').carousel({
    interval: 2500
})

$("body").addClass("loading");


// Learn More interactive buttons
$(".btn-learnmore").mouseover(function() {
    // $(this).css("-webkit-transition","all 0.8s ease")
    $(this).toggleClass("btn-learnmore-active")
    // $(this).removeClass(".btn-learnmore-inactive");

  })

$(".btn-learnmore").mouseout(function() {
    $(this).css("-webkit-transition","all 0.8s ease")

    $(this).toggleClass("btn-learnmore-active")

  })

$(".logo, .hp-banners, .contactinfoborder, .card").mouseover(function() {
    $(this).css("filter","");
    $(this).css("-webkit-transition","all 1.2s ease")
    $(this).css("transform","scale(1.15)")
  })

$(".logo, .contactinfoborder, .card").mouseout(function() {
    $(this).css("-webkit-transition","all 1.3s ease")
    $(this).css("transform","")
  })

$(".hp-banners").mouseout(function() {
    $(this).css("filter","grayscale(100%)")
    $(this).css("-webkit-filter","grayscale(100%)")
    $(this).css("-webkit-transition","all 1.2s ease")
    $(this).css("transform","")
  })

// Interactive Icons Transforms
$(".btn-icons, .bl-banner").mouseover(function() {
  $(this).css("background-color", "#cc2a68")
  $(this).css("-webkit-transition","all 0.5s ease")
  $(this).css("transform","scale(1.15)")
})

$(".btn-icons, .bl-banner").mouseout(function() {
  $(this).css("background-color", "");
  $(this).css("-webkit-transition","all 0.5s ease")
  $(this).css("transform","")
  // $(this).css("transform","scale(1.15)")
})

$("#tester").mouseover(function() {
  $(this).toggleClass("tester1")

})

$(".btn-pwp-contactus").click(function(){
  $(".alert").hide().show('alert');
});

var  slidetest =$(".bl-adult").css("display")


function clearslides() {
  if ($(".bl-lesson-screen").css("display")=="none") {
    $(".bl-lesson-screen").show('bl-lesson-screen');}
    $(".bl-adult").css("display","none");
    $(".bl-junior").css("display","none");
    $(".bl-playing").css("display","none");
    $(".bl-group").css("display","none");
    $(".bl-pwp").css("display","none");
    $(".bl-custom").css("display","none");
}

$(".btn-bl-adult").click(function() {

  clearslides();
  $(".bl-adult").hide().show('bl-adult');
})

$(".btn-bl-junior").click(function() {
  clearslides();
  $(".bl-junior").hide().show('bl-junior');
})

$(".btn-bl-playing").click(function() {
  clearslides();
  $(".bl-playing").hide().show('bl-playing');
})

$(".btn-bl-group").click(function() {
  clearslides();
  $(".bl-group").hide().show('bl-group');
})
$(".btn-bl-pwp").click(function() {
  clearslides();
  $(".bl-pwp").hide().show('bl-pwp');
})
$(".btn-bl-custom").click(function() {
  clearslides();
  $(".bl-custom").hide().show('bl-custom');
})


$(function () {
  $('[data-toggle="popover"]').popover()
})

$('.popover-dismiss').popover({
  trigger: 'focus'
})
