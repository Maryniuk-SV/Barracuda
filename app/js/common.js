(function($) {
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
})(jQuery);




var slides = document.querySelectorAll('#slides .slider__item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);


function nextSlide() {
	goToSlide(currentSlide+1);
}

function previousSlide() {
	goToSlide(currentSlide-1);
}

function goToSlide(n) {
	slides[currentSlide].className = 'slider__item';
	currentSlide = (n+slides.length)%slides.length;
	slides[currentSlide].className = 'slider__item showing';
}


var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow() {
	pauseButton.innerHTML = 'Play';
	playing = false;
	clearInterval(slideInterval);
}

function playSlideshow() {
	pauseButton.innerHTML = 'Pause';
	playing = true;
	slideInterval = setInterval(nextSlide,2000);
}

pauseButton.onclick = function() {
	if(playing) {
		pauseSlideshow();
	} else {
		playSlideshow();
	}
};


var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function() {
	pauseSlideshow();
	nextSlide();
};
previous.onclick = function() {
	pauseSlideshow();
	previousSlide();
};