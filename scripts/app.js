var markdown = require('markdown').markdown;

$(function(){
	var $ta = $('.left textarea'),
		$content = $('#html-show');
	$ta.on('keyup', function(ev) {
		console.log('keyup', ev.keyCode);
		$content.empty().append(markdown.toHTML($ta.val()));
	});
});