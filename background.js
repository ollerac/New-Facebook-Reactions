/**
 * Possible parameters for request:
 *  action: "xhttp" for a cross-origin HTTP request
 *  method: Default "GET"
 *  url   : required, but not validated
 *  data  : data to send in a POST request
 *
 * The callback function is called upon completion of the request 
 *
 * from: http://stackoverflow.com/questions/7699615/
 */
chrome.runtime.onMessage.addListener(function(request, sender, callback) {
    if (request.action == "xhttp") {
        var method = request.method ? request.method.toUpperCase() : 'GET';
        if (method == 'POST') {
			$.post('http://reactions.us/setReaction', request.data, function (response) {
				if (response.success) {
					callback(response);
				}
			})

        } else {
			$.get('http://reactions.us/getReactions', request.data, function (response) {
				if (response.success && response.data) {
					var reactions = response.data;

					if (callback) {
						callback(reactions);
					}
				}
			});
	    }

        return true; // prevents the callback from being called too early on return
    }
});