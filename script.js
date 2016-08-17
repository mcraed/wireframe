$(document).ready(function(){
	console.log('working');

	$('.art-cont').hide();
	$('.event-cont').hide();
	$('#vtvTab').css('background', '#000');
	$('#vtvTab').css('color', '#fff');

	function changeTo(tab){
		$('.mca-cont').hide();
		$('.mca-navitem').css('background', '#fff');
		$('.mca-navitem').css('color', '#000');
		$('.' + tab).show();
		$('#' + tab).css('background', '#000');
		$('#' + tab).css('color', '#fff');
	};

	$('.mca-navitem').click(function(){
		var tab = String(this.id);
		changeTo(tab);
	});

});	