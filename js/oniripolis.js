$.ajaxChimp.translations = {
    'fr': {
        'submit': 'Enregistrement en cours…',
        0: 'Nous vous avons envoyé un email de confirmation',
        1: 'Veuillez entrer une adresse email',
        2: 'Une adresse email doit contenir un seul @',
        3: 'La partie domaine de l\'adresse email n\'est pas valide (la partie après le @:)',
        4: 'La partie nom d\'utilisateur de l\'adresse email n\'est pas valide (la partie avant le signe @:)',
        5: 'Cette adresse email ne semble pas valide'
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
			$('#signup label.sr-only').removeClass('sr-only');
			if (resp.result == 'error') {
				$('#signup .form-group.required').addClass('has-error');
			} else {
				$('#signup .form-group').removeClass('has-error').addClass('has-success');
				$("#signup").modal("hide");
				$("#confirm").modal("show");
			}
		},
		language: 'fr'
	});
	
	if (window.location.hash == "#signup") {
		$("#signup").modal("show");
	} if (window.location.hash == "#confirm") {
		$("#confirm").modal("show");
	} else if (window.location.hash == "#welcome") {
		$("#welcome").modal("show");
	} else if (window.location.hash == "#updated") {
		$("#updated").modal("show");
	} else if (window.location.hash == "#goodbye") {
		$("#goodbye").modal("show");
	}


	
});
