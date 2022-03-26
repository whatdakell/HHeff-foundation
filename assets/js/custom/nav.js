jQuery(function($) {

	$(function() {

		//responsive_toggle

		if ($(window).width() <= 630) {

			$('.advisory_board_text').appendTo('.et_pb_toggle_content');
			$('.advisory_board_title').appendTo('.et_pb_toggle_title');
		}


		$("button").click(function() {
			$("input:text").val("Glenn Quagmire");

		});




		//POP_UP_BUTTON

		$(".no_row").each(function(i) {
			$(this).attr('data-id', i);
		});
		$(".popup").each(function(i) {

			$(this).removeClass('.et_pb_row');
			$(this).addClass("item" + i);

		});

		$(".popup").wrapInner("<div class='new_wrap' />");

		$(".no_row").click(function() {
			$('.popup').removeClass('.et_pb_row');
			console.log(this);
			var item_id = $(this).attr('data-id');
			console.log(item_id);

			$('.item' + item_id).show();
		});

		$(".popup .close").on("click", function() {
			$(".popup").hide();
		});

		//tile_click

		$('.tile_click').each(function(i) {
			$(this).attr('data-tab', i);
		});

		$('.tab-content').each(function(i) {
			$(this).attr('data-tab', i);
			// $(this).attr('id', i);
			$(this).appendTo('.testing_click');
		});




		$('.tile_click').click(function() {
			$('.tab-content').removeClass('current');
			var tab_id = $(this).attr('data-tab');
			// var tab_id = $(this).attr('id');
			$('.tile_click').removeClass('current');
			var d = $('.tab-content').get(tab_id);
			console.log(d);
			$(d).removeClass('current');
			// window.location.hash = d;
			$(d).addClass('current');
			$(this).addClass('current');

		});


		//SCROLL_funcs
		$('#recurring').click(function(event) {
			console.log("f");
			$('span.arrow_down').addClass("down");
			if ($('span.arrow_down').hasClass("down")) {
				console.log("f");
				$(this).removeClass("down");
			}
		});
		$('li#move_down').click(function(event) {
			console.log("2hel");
			$('html, body').animate({
				scrollTop: $('#theneed_caro').offset().top
			}, 1000);
			// event.preventDefault();
		});
		$('#AZ').click(function(event) {
			$('html, body').animate({
				scrollTop: $('#Ariz').offset().top
			}, 1000);
			event.preventDefault();
		});
		$('#NV').click(function(event) {
			$('html, body').animate({
				scrollTop: $('#Neveda').offset().top
			}, 1000);
			event.preventDefault();
		});
		$('#DENVER').click(function(event) {
			$('html, body').animate({
				scrollTop: $('#Denver').offset().top
			}, 1000);
			event.preventDefault();
		});
		$('#IN').click(function(event) {
			$('html, body').animate({
				scrollTop: $('#Indi').offset().top
			}, 1000);
			event.preventDefault();
		});
		$('#NE').click(function(event) {
			$('html, body').animate({
				scrollTop: $('#Mass').offset().top
			}, 1000);
			event.preventDefault();
		});
		$('#NYC').click(function(event) {
			$('html, body').animate({
				scrollTop: $('#Newyork').offset().top
			}, 1000);
			event.preventDefault();
		});
		$('#FL').click(function(event) {
			$('html, body').animate({
				scrollTop: $('#Flord').offset().top
			}, 1000);
			event.preventDefault();
		});
	});
});
