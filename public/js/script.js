$(document).ready(function(){

// initialize foundation
$(document).foundation();


//modal windows
var $addmodal = $('#AddModal'),
	$loginmodal = $('#LoginModal'),
	$editmodal = $('#EditModal'),
	$postid = $('#postid').attr('data-internalid');

$('#addbutton').click(function() {
  $.ajax('/taquerias/new')
  .done(function(resp){
    $addmodal.html(resp);
	});
});

$('#loginlink').click(function() {
  $.ajax('/login')
  .done(function(resp){
    $loginmodal.html(resp);
	});
});

$('#editlink').click(function() {
   $.ajax('/taquerias/' + $postid +'/edit')
	  .done(function(resp){
	    $editmodal.html(resp);
		});
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