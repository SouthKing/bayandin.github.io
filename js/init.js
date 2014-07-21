/*
	Aerial 1.0 by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

// Skel.
	skel.init({
		resetCSS: true,
		prefix: 'css/style',
		grid: { range: '*', lockViewport: true, viewport: 'minimal-ui' },
		breakpoints: {
			'wide': { range: '-1680' },
			'normal': { range: '-1280' },
			'mobile': { range: '-640' },
			'mobilep': { range: '-360' }
		}
	});

// Events (JS).

	// Remove "loading" class once the page has fully loaded.
		window.onload = function() {
			document.body.className = '';
		}

	// Prevent scrolling on touch.
		window.ontouchmove = function() {
			return false;
		}

	// Fix scroll position on orientation change.
		window.onorientationchange = function() {
			document.body.scrollTop = 0;
		}
