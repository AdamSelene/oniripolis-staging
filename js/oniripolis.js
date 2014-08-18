$.ajaxChimp.translations = {
    'fr': {
        'submit': 'Enregistrement en cours...',
        0: 'Nous vous avons envoyé un e-mail de confirmation',
        1: 'S\'il vous plaît entrer une valeur',
        2: 'Une adresse e-mail doit contenir un seul @',
        3: 'La partie domaine de l\'adresse e-mail n\'est pas valide (la partie après le @:)',
        4: 'La partie nom d\'utilisateur de l\'adresse email n\'est pas valide (la partie avant le signe @:)',
        5: 'Cette adresse e-mail semble faux ou non valides. S\'il vous plaît entrer une adresse email valide'
    }
};

$(document).ready(function() {

    $('#main-navbar a[href="' + this.location.pathname.substr(this.location.pathname.lastIndexOf('/')+1) + '"]').parent().addClass('active');

	$('.caption-excerpt .btn').click(
		function(e) {
		    var caption = $(this).parents('.carousel-caption');
			$('.caption-excerpt', caption).fadeOut();
			$(caption).animate(
				{'width': '70%'},
				function() {
					$('.collapse', caption).collapse();
				}
			);
		}
	);
	
    $("#signup").on('shown.bs.modal', function() {
        $(this).find("#signup-email").focus();
    });
	
	
	$('#mc-form').ajaxChimp({
		url: 'http://oniripolis.us3.list-manage.com/subscribe/post?u=6d11ff66b50d743170407d548&amp;id=77ab1d1f01',
		callback: function(resp) {
			if (resp.result == 'error') {
				$('#signup .form-group').addClass('has-error');
			} else {
				$('#signup .form-group').removeClass('has-error').addClass('has-success');
			}
		},
		language: 'fr'
	});

	
});
