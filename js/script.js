// header > nav
// ==================================================
$(function(){
  $('#nav-btn').on('click',function(){
      $(this).toggleClass('-active');
      $('#nav').toggleClass('-active');
  });
});

// scroll
// ==================================================
$(function(){
  $('a[href^="#"]').click(function() {
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

// ScrollReveal
// ==================================================
$(function(){
  //  common
  ScrollReveal().reveal('.cmn-title', {
    duration: 1000,
    viewFactor: 0.2,
    origin: 'top',
    distance: '20px',
    reset: true
  });
  // concept
  ScrollReveal().reveal('#concept-safe', {
    duration: 1000,
    viewFactor: 0.2,
    origin: 'left',
    distance: '50px',
    reset: true
  });
  ScrollReveal().reveal('#concept-quality', {
    duration: 1200,
    viewFactor: 0.2,
    origin: 'left',
    distance: '50px',
    reset: true
  });
  ScrollReveal().reveal('#concept-cost', {
    duration: 1400,
    viewFactor: 0.2,
    origin: 'left',
    distance: '50px',
    reset: true
  });
  // service
  ScrollReveal().reveal('#service-coding', {
    duration: 1000,
    viewFactor: 0.2,
    origin: 'right',
    distance: '50px',
    reset: true
  });
  ScrollReveal().reveal('#service-design', {
    duration: 1200,
    viewFactor: 0.2,
    origin: 'right',
    distance: '50px',
    reset: true
  });
  ScrollReveal().reveal('#service-wordpress', {
    duration: 1400,
    viewFactor: 0.2,
    origin: 'right',
    distance: '50px',
    reset: true
  });
  // flow
  ScrollReveal().reveal('#step1', {
    duration: 1000,
    viewFactor: 0.2,
    origin: 'left',
    distance: '50px',
    reset: true
  });
  ScrollReveal().reveal('#step2', {
    duration: 1200,
    viewFactor: 0.2,
    origin: 'left',
    distance: '50px',
    reset: true
  });
  ScrollReveal().reveal('#step3', {
    duration: 1400,
    viewFactor: 0.2,
    origin: 'left',
    distance: '50px',
    reset: true
  });
  ScrollReveal().reveal('#step4', {
    duration: 1600,
    viewFactor: 0.2,
    origin: 'left',
    distance: '50px',
    reset: true
  });
});
