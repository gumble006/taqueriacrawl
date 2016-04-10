$(document).ready(function(){

// initialize foundation
$(document).foundation();


//modal windows
var $postid = $('#postid').attr('data-internalid');

$('#addModal').click(function() {
	$addmodal = $('#Modal')
	$.ajax('/taquerias/new')
		.done(function(resp){
		$addmodal.html(resp).foundation('open');
		});
});

$('#loginlink').click(function() {
  var $loginmodal = $('#Modal');
  $.ajax('/login')
  .done(function(resp){
    $loginmodal.html(resp).foundation('open');
	});
});

$('#editlink').click(function() {
	var $editmodal = $('#Modal')
	$.ajax('/taquerias/' + $postid +'/edit')
	  .done(function(resp){
	    $editmodal.html(resp).foundation('open');
		});
});

$('#registerlink').click(function() {
	var $registermodal = $('#Modal2');
	$registermodal.foundation('open');
	
});

var $registermodal = $('#Modal2')
$.ajax('/register')
  .done(function(resp){
    $registermodal.html(resp);
	});


//Landing page - background change
	var bkgrd = $('div#bkgrd');
	var backgrounds = new Array(
	    'url(img/taqueria1.jpg)',
	  	'url(img/taqueria2.jpg)',
	  	'url(img/taqueria3.jpg)'
	);

	var current = 0;

	function nextBackground() {
	    current++;
	    current = current % backgrounds.length;
	    bkgrd.css('background-image', backgrounds[current]);
	}
	setInterval(nextBackground, 10000);

	bkgrd.css('background-image', backgrounds[0]);














});