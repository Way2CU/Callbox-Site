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

	// Testimonials Home Page Clients Said

		if ($('div.testimonial').length > 0) {
			Caracal.testimonial_pages = new PageControl('div.testimonials_container', 'div.testimonial')
				.setInterval(10000)
				.setWrapAround(true)
				.setPauseOnHover(true)
				.attachNextControl($('div.testimonials_container a.arrow.next'))
				.attachPreviousControl($('div.testimonials_container a.arrow.previous'));
		}

}

$(on_site_load);
