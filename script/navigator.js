$(document).ready(function() {

	/***************** Waypoints ******************/

	/* When user clicks the Icon */

	$('.nav-toggle').click(function() {        //SE DESPLAZA EN EL SCROLL SEGUN QUE MENU PULSAMOS
		$(this).toggleClass('active');
		$('.slidebar-nav').toggleClass('open');
		event.preventDefault();
	});
	/* When user clicks a link */
	$('.slidebar-nav li a').click(function() {
		$('.nav-toggle').toggleClass('active');
		$('.slidebar-nav').toggleClass('open');

	});

	/***************** Header BG Scroll ******************/   // SCROLL DEL NAVEGADOOOOOOOR!!! 

	$(function() {
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 20) {
				$('section.navigation').addClass('fixed');
				$('.slidebar-nav').css({
					"border-bottom": "none",
					"padding": "35px 0"
				});
				$('.slidebar-nav .member-actions').css({
					"top": "26px",
				});
				$('.slidebar-nav .navicon').css({
					"top": "34px",
				});
			} else {
				$('section.navigation').removeClass('fixed');
				$('.slidebar-nav').css({
					"border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
					"padding": "50px 0"
				});
				$('.slidebar-nav .member-actions').css({
					"top": "41px",
				});
				$('.slidebar-nav .navicon').css({
					"top": "48px",
				});
			}
		});
	});

	/***************** Smooth Scrolling ******************/     //ES TAMBIEN DEL HEADER
	
	$(function() {

		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 2000);
					return false;
				}
			}
		});

	});

});