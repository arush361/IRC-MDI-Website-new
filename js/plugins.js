// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

$(function() {
    // FIX INPUT TYPE=DATE IN FF AND IE
    webshims.setOptions('forms-ext', {types: 'date'});
    webshims.polyfill('forms forms-ext');

	// COLORBOX
	$(".iframe").colorbox({iframe:true, width:430, height:260});

	// ALLOW FOR ELASTIC TEXTBOXES
	$('.stretchme').elastic();	
	$( document ).tooltip({
		content: function() {
			return $(this).attr('title');
		}
	});
	// Vertical scroller
	// http://risq.github.io/jquery-advanced-news-ticker/index.html
});

function dbSearch() {
	var searchTxt = $("#gsearch").val();
	// console.log('### ' + searchTxt);
	$.ajax({
		method: "POST",
		url: "/dbSearch.php",
		data: { dp: searchTxt }
	});
}
	
function rotate() {
    $('#next').click();
}

$( "#togform" ).click(function() {
  $( "#theform" ).toggle( "slow", function() {
    // Animation complete.
  });
});