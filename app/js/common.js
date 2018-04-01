$(document).ready(function(){
	$(function() {
		$('input, select').styler({
			selectPlaceholder: "Вид діяльності",
		});
		$( "#ui-datepicker-div" ).cssClip({"z-index": 10});
		$( "#datepicker" ).datepicker();
		$( "#anim" ).on( "change", function() {
			$( "#datepicker" ).datepicker( "option", "showAnim", $( this ).val() );
			$( "#datepicker" ).datepicker( "option", "dateFormat", $( this ).val() );
		});
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.to__top').addClass('to__top--active');
		}else {
			$('.to__top').removeClass('to__top--active');
		}
	});
	$('.to__top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

	$('.owl-carousel').owlCarousel({
		loop: true,
		autoplay: true,
		dots: false,
		margin: 50,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:1
			},
			768:{
				items:2,
				margin: 20
			},
			992:{
				items:3
			},
			1200:{
				items:4
			}
		}
	});
});


// var slides = document.querySelectorAll('#slides .slider__item');
// var currentSlide = 0;
// var slideInterval = setInterval(nextSlide,2000);


// function nextSlide() {
// 	goToSlide(currentSlide+1);
// }

// function previousSlide() {
// 	goToSlide(currentSlide-1);
// }

// function goToSlide(n) {
// 	slides[currentSlide].className = 'slider__item';
// 	currentSlide = (n+slides.length)%slides.length;
// 	slides[currentSlide].className = 'slider__item showing';
// }


// var playing = true;
// var pauseButton = document.getElementById('pause');

// function pauseSlideshow() {
// 	pauseButton.innerHTML = 'Play';
// 	playing = false;
// 	clearInterval(slideInterval);
// }

// function playSlideshow() {
// 	pauseButton.innerHTML = 'Pause';
// 	playing = true;
// 	slideInterval = setInterval(nextSlide,2000);
// }

// pauseButton.onclick = function() {
// 	if(playing) {
// 		pauseSlideshow();
// 	} else {
// 		playSlideshow();
// 	}
// };


// var next = document.getElementById('next');
// var previous = document.getElementById('previous');

// next.onclick = function() {
// 	pauseSlideshow();
// 	nextSlide();
// };
// previous.onclick = function() {
// 	pauseSlideshow();
// 	previousSlide();
// };