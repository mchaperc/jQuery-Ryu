$('document').ready(function () {
	$('.ryu-logo').fadeIn(3500, function () {
		$(this).fadeOut(500, function () {
			$('.brought').fadeIn(3500, function () {
				$(this).fadeOut(500, function () {
					$('.jquery-logo').fadeIn(3500, function () {
						$(this).fadeOut(500, function () {
							$('.instructions').fadeIn(3500)
						})
					})
				})
			})
		})
	});
	$('.ryu').on('mouseenter', function () {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.on('mouseleave', function () {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.on('mousedown', function () {
		playHadouken();
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate({'left': '950px'}, 
			500,
			function () {
				$(this).hide();
				$(this).css('left', '425px');
			});
	})
	.on('mouseup', function () {
		$('.ryu-still').show();
		$('.ryu-throwing').hide();
	});
	 $(document).keydown(function(e) {
 	 	var code = e.keyCode;
 		if(code == 88) {
 	     	$('.ryu-ready').hide();
 	     	$('.ryu-still').hide();
 	     	$('.ryu-throwing').hide();
 		    $('.ryu-cool').show();
 	    }   
 	})
	.keyup(function(e) {
		var code = e.keyCode;
    	if (code == 88) {
      	$('.ryu-cool').hide();
      	$('.ryu-still').show();
    	}
    }
  	);
  	$('.instructions').on('click', function () {
  		$('.commands').fadeToggle();
  	});
});

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

//Button Functionality
