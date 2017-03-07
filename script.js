$(document).ready(function(){

	// ********** START "STUCK" NAV **********

	$(window).scroll(function(e){


		var navd = $("nav").position().top //how far nav is from top of doc

		var st = $(window).scrollTop() //how far the page has been scrolled

		// $("footer h5").html(st+" "+navd) //let's me see the values

		if(st >= navd){
			var backupnavd = navd
			$("nav").addClass("stuck")
		}
		
		if(backupnavd == st){
			$("nav").removeClass("stuck")
		}

	});

	// ********** START SMOOTH SCROLL **********

		$("nav a").click(function(e){
		e.preventDefault();
		// stop the normal behavior when a link is clicked
		var thehref = $(this).attr("href");
		// based on the link clicked, where do they want to go?
			// ie, if they click "about" goes to "#about"
		var thedistance = $(thehref).offset().top
		var headerheight = $("nav").outerHeight(); // outerHeight() includes padding, height() does not.
		
		if($("nav").hasClass("stuck")){
			var newdistance = thedistance - headerheight
		}  // determines if the nav has a class of "stuck" and gives directions
		else{
			var newdistance = thedistance - headerheight * 2 - 35
		} // if the nav does not have a class of stuck do this
		
		// figure out how far target is from the top of the page.
		$("html,body").animate({
			scrollTop:newdistance - 25 // -25 allows for the margin
		},1500);
		// tell the window to scroll to that point
			// make sure it is animated so it's smooth	
				// ,5000 = scroll time, can be any number but must be preceeded by a ","" in that position
	});

	// ********** START WORD FADE  **********

	(function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote);
    }
    
    showNextQuote();
    
	})();

	// ********** START BURGER MENU **********

	// if($(window).width() < 768){
	// 	$("body").addClass("mob");
	// }

	// $(window).resize(function(){
	// 	if($(window).width() < 768){
	// 		$("body").addClass("mob");
	// 	}
	// 	else{
	// 		$("body").removeClass("mob");
	// 		$("nav").show();
	// 	}
	// });
	
	// $("#burger").click(function(){
	// 	$("nav").slideToggle();
	// 	$(this).toggleClass("fa-bars");
	// 	$(this).toggleClass("fa-times");
	// });		




});