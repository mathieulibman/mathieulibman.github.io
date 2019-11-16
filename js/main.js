$(document).ready(function() {
	$('.post a').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom',
		image: {
			verticalFit: true,
		},
		zoom: {
			enabled: true,
			duration: 300,
		},
	})

	window.onscroll = function() {
		scrollFunction()
	}

	function scrollFunction() {
		if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
			document.getElementById('tabs-container').style.padding = '0'
		} else {
			document.getElementById('tabs-container').style.padding = '20px 0'
		}
	}
})
