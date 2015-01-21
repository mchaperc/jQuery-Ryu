$('document').ready(function () {
	$('.ryu-still, .ryu-ready, .ryu-throwing').on('mouseenter', function () {
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
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate({'left': '950px'}, 
			500,
			function () {
				$(this).hide();
				$(this).css('left', '425px');
			});
	})
	.on('mouseup', function () {
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
	})
});

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}