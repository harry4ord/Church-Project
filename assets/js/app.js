var clock;
$(document).ready(function () {
    if ($(".preloader-wrap").length) {
        $('.preloader-wrap').delay(1000).fadeOut('slow');
    }
    
    var currentDate = new Date();
        
    var targetDate = new Date('2019-11-10');
    var diff = targetDate.getTime() / 1000 - currentDate.getTime() / 1000;
    clock = $('.clock').FlipClock( diff, {
        clockFace: 'HourlyCounter',
        countdown: true
    });


});


//			var clock;
//
//			$(document).ready(function() {
//
//				// Grab the current date
//				var currentDate = new Date();
//
//				// Set some date in the future. In this case, it's always Jan 1
//				var futureDate  = new Date(currentDate.getFullYear() + 1, 0, 1);
//
//				// Calculate the difference in seconds between the future and current date
//				var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
//
//				// Instantiate a coutdown FlipClock
//				clock = $('.clock').FlipClock(diff, {
//					clockFace: 'DailyCounter',
//					countdown: true
//				});
//			});
		