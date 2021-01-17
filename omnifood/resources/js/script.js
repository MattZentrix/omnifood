/*jslint browser: true*/
/*global $, jQuery*/
/*global document, jQuery*/


$(document).ready(function () {
	
	/* For the sticky navigation */
	'use strict';
	$('.js--section-features').waypoint(function (direction) {
		if (direction === "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
		offset: '60px;'
	});


	
	/* Scroll on buttons */
	$('.js--scroll-to-plans').click(function () {
		$('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
	});
	$('.js--scroll-to-start').click(function () {
		$('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
	});
	
	/* Navigation scroll */
	$(function () {
		$('a[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});


	/* Animations on scroll */
	$('.js--waypoint1').waypoint(function (direction) {
		$('.js--waypoint1').addClass('animated fadeIn');
	}, {
		offset: '70%'
	});

	$('.js--waypoint2').waypoint(function (direction) {
		$('.js--waypoint2').addClass('animated fadeInUp');
	}, {
		offset: '70%'
	});	
	
	$('.js--waypoint3').waypoint(function (direction) {
		$('.js--waypoint3').addClass('animated fadeIn');
	}, {
		offset: '70%'
	});	
	
	$('.js--waypoint4').waypoint(function (direction) {
		$('.js--waypoint4').addClass('animated pulse');
	}, {
		offset: '70%'
	});		
});







	



