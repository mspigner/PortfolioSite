// when the page loads, nav to fill screen
$(document).ready(function(){
	// // Remove uls and  line
	$('#Content, #Line, #Title-Load2').addClass('Closed');
	// // Expand Nav to Fill Screen
	$('body').addClass('PageLoad');
	$('#nav-bar').addClass('load');
	$('#Title-Load').addClass('Open');
	// Show text - thinker - for 1 second
	$('.Thinker').delay(500).queue(function(){
		$(this).addClass('fade-In');
	});
	$('.Designer').delay(1500).queue(function(){
		$(this).addClass('fade-In');
	});
	// $('.Developer').delay(2500).queue(function(){
	// 	$(this).addClass('fade-In');
	// });
	$('.Strategist').delay(2500).queue(function(){
		$(this).addClass('fade-In');
	});
	$('body').delay(5000).queue(function(){
		$('body').removeClass('PageLoad', 'slow');
		$('header').animate(
			{height: "112px", opacity:0.6}, 
			"slow");
		$('#Content, #Line, #Title-Load2').removeClass('Closed');
		$('#nav-bar').removeClass('load');
	});
	// $('#Content, #Line, #Title-Load2').delay(1000).queue(function(){
	// 	$(this).removeClass('Closed');
	// 	$('header').animate({up:50%}, "slow", 200);
	// });
});

function addFadeIn(){
	$(this).addClass('fade-In');
}

var slideToPosition = $('body').position();
// $('header').animate({top:"+" + slideToPos.top},200);
// when user scrolls 
	// Add class Shrink to Nav (shrink nav, change text and background color)
	// Fix to top  of the screen

// when user hovers over Work Image or Icon
	// change mouse cursor to hand
// when the user clicks on Work Image or Icon
	// Close all open divs
	// Slide down (Slide Toggle) Work div
	// Add Open class to Work Image
	// Add Open Class to Work Text 
// wwhen user clicks on project
	// Hide Work Div 
	// Display corresponding project page

// when user hovers over Resume Image or Icon
	// change mouse cursor to hand
// when user clicks on Resume Image or Icon
	// Close all open Divs
	// Clear Open class from all images
	// Clear open class from all text
	// Slide Down (Slide Toggle) Resume Div
	// Add Open class to Resume Image
	// Add Open class to Resuem Text

// when user clicks View Resume PDF text
	// Open PDF in separate page

// when user hovers over About Image or Icon
	// change mouse cursor to hand
// when user clicks on About Image or Icon
	// close all open Divs
	// Clear Open class from all images
	// Clear Open class from all text
	// slide down (slide toggle) About Div
	// Add Open class to Resume Image
	// Add Open class to Resume Text

// when user hovers over Email Address
	// change mouse cursor to hand
// when user clicks Email Address in footer
	// Open email in user's email program

// $('li.Work-Icon').children('p').on('click', function (){
 
// 	$('.Work').slideToggle();
// 	// OpenDiv ();
// });

// $('#Line').height($(document).height());
$('#Work-Icon').children('p','img').on('click', function (){
	// $('.Resume').slideUp();
	// $('.About').slideUp();
	$('.Work').slideToggle(400);

});

$('#Resume-Icon').on('click', function (){
	// $('.Work').slideUp();
	// $('.About').slideUp();
	$('.Resume').slideToggle(400);
});

$('#About-Icon').on('click', function
	(){
	$('.Resume').slideUp();
	$('Work').slideUp();
	$('.About').slideToggle(400);
});


// when the user clicks on the section-text class
$('.Section-Text').on('click',function (){
	// Hide Icon image (class Section-Icon)
	// Hide Section text (class Section-Title)
	$(this).addClass('Closed').delay(2000);
	$('#Line').addClass('Closed').delay(2000);
	$('ul, li').addClass('Collapse').delay(2000);
});

$('.Section h1').on('click', function (){
	$('.Section-Text').removeClass('Closed');
	$('#Line').removeClass('Closed', 2000);
	$('ul, li').removeClass('Collapse', 2000);
	$('.Section').slideUp(400);
	$('.Section-Div-Title').hide();
});
	































