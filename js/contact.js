
$('input').on('keypress', function(e) {
    return e.which !== 13;
});

$('#c-name').focus( function() {
	if(this.value == 'your name') 
		this.value='';
});

$('#c-email').focus( function() {
	if(this.value == 'your email') 
		this.value='';
});

$('#c-message').focus( function() {
	if(this.value == 'message') 
		this.value='';
});

$('#c-button').submit( function() {
	alert("yey");
	// var name = $('#c-name').value();
	// var email = $('#c-email').value();
	// var message = $('c-message').value();
	// alert(name + email + value + "");
});

var contact = function() {
	if( $('.contact').css('bottom') == "-500px")
		$('.contact').animate({bottom: '73px'}, 300);
	else
		$('.contact').animate({bottom: '-500px'}, 300);
}

