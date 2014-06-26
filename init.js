(function () {
	var j = document.createElement('script');
	var s = document.createElement('script');

	j.src = chrome.extension.getURL('zepto-1.1.3-extended.min.js');
	s.src = chrome.extension.getURL('reactions.js');

	j.onload = function() {
		(document.head||document.documentElement).appendChild(s);
	};	

	(document.head||document.documentElement).appendChild(j);
})()