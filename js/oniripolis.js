$(document).ready(function() {
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
	
});
