$(document).ready(function () {
    if ($(".preloader-wrap").length) {
        $('.preloader-wrap').delay(1000).fadeOut('slow');
    }
    
    
    var clock = $('.clock').FlipClock({
        clockFace: 'HourlyCounter'
    });


});