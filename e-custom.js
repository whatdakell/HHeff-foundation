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

jQuery(function($) {

	$(function() {

		//HASH_ANCHOR

		var hash = parseInt(location.hash.replace('#', ''), 10);

		if (window.location.pathname == '/') {
			var a = 0;
			$(window).scroll(function() {

				var oTop = $('#counter').offset().top - window.innerHeight;
				if (a == 0 && $(window).scrollTop() > oTop) {
					$('.counter-value').each(function() {
						var $this = $(this),
							countTo = $this.attr('data-count');
						$({
							countNum: $this.text()
						}).animate({
								countNum: countTo
							},

							{

								duration: 2000,
								easing: 'swing',
								step: function() {
									$this.text(Math.floor(this.countNum));
								},
								complete: function() {
									$this.text(this.countNum);
									//alert('finished');
								}

							});
					});
					a = 1;
				}

			});
		}
		if (window.location.hash) {

			if (window.location.pathname == "/our-programs/") {
				setTimeout(function() {
					if (typeof hash === 'number') {
						$('html, body').animate({
							scrollTop: $("#custom_o").offset().top
						}, 2000);
					}
				}, 150);
			}


			if (window.location.pathname == "/success-stories/") {
				console.log("that");
				var newhash = location.hash.split('')[1];
				$('.tile_click').removeClass('current');
				$('.tile_click').eq(parseInt(newhash, 10)).trigger('click');
				var d = $('.tab-content').get(newhash);

				$(d).removeClass('current');
				$(d).addClass('current');
				setTimeout(function() {

					$('html, body').animate({
						scrollTop: $(".tile_click").offset().top
					}, 2000);
				});
			}

		} else {
			console.log("abc");

		}


		//OWL

		$('.horizontal_slider').each(function() {
			$(this).appendTo('.owl-carousel').wrapAll("<div class='item' />");
		});

		$('.item').each(function(i) {
			$(this).attr('data-hash', i);
		});

		var owl = $('.owl-carousel');

		$('.owl-carousel').owlCarousel({
			items: 1,
			loop: true,
			center: true,
			margin: 0,
			URLhashListener: true,
			autoplay: true,
			autoplayTimeout: 2500,
			autoplayHoverPause: true,
			startPosition: 'URLHash'
		});

		function callback(e) {
			items = e.item.count;
			item = e.item.index;
		}

		function next() {
			owl.trigger('next.owl');
			console.log("next");
		}

		function prev() {
			owl.trigger('prev.owl');
			console.log("next");
		}



	});


});
