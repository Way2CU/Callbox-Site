/**
 * Main JavaScript
 * Callbox
 *
 * Copyright (c) 2014. by Way2CU, http://way2cu.com
 * Authors: Mladen Mijatov
 */

var Caracal = Caracal || {};


function handle_window_scroll(event) {
	var scroll = $(this).scrollTop();

	if (scroll > 0 && !Caracal.header.hasClass('detached')) {
		Caracal.header.addClass('detached');

	} else if (scroll == 0 && Caracal.header.hasClass('detached')) {
		Caracal.header.removeClass('detached');
	}
}

function on_site_load() {
	Caracal.header = $('header');
	$(window).scroll(handle_window_scroll);

	// handle analytics event
	$('form').on('analytics-event', function(event, data) {
		if (!data.error)
			dataLayer.push({
            	'event':'leadSent'
            });
	});
}

$(on_site_load);
