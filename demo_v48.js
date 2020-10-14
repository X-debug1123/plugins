
$(document).ready(function(){
	// Check if the notes widget exists
	if(typeof($.custom.notes)!='undefined')
	{
		// Redifine job_edit, move name to after telephone
		$.widget("custom.notes", $.custom.notes,
		{
			_init_main: function()
			{
				// Call the old _init_main
				this._super(arguments);
				// Add an hello after the refresh button
				//$("<span>",{ html:" hello"}).insertAfter(this.btnRefresh);
				var a = this;
				$("<button>",{text:"Click ME! "}).insertAfter(this.btnRefresh)
				.click(function() {
            				 console.log('hi');
							 var c = a.grid.jqGrid("getGridParam", "selrow");
							 console.log(c);
							 var d= a.grid.find("#" + c + " .jqg_note").text();
							 console.log(d)
							 const authUrl =
							 'https://app.hubspot.com/oauth/authorize' +
							 `?client_id=${encodeURIComponent('f834e853-4632-441a-960c-66221926cdae')}` +
							 `&scope=${encodeURIComponent('automation')}` +
							 `&redirect_uri=${encodeURIComponent("https://myhirehop.com/home.php")}`;

							 //window.location.replace(authUrl);
							 (function($){
								$.deparam = $.deparam || function(uri){
								  if(uri === undefined){
									uri = window.location.search;
								  }
								  var queryString = {};
								  uri.replace(
									new RegExp(
									  "([^?=&]+)(=([^&#]*))?", "g"),
									  function($0, $1, $2, $3) { queryString[$1] = $3; }
									);
									return queryString;
								  };
							  })(jQuery);
							 console.log('hi again')
							 var searchQueryString = window.location.search;
							 if ( searchQueryString.charAt(0) === "?") {
							   searchQueryString = searchQueryString.substring(1);
							 }
							 console.log(searchQueryString)
							 var searchParameters = jQuery.deparam(searchQueryString);
							 console.log('hi again 1')
							 if ( "code" in searchParameters) {
							   // TODO: construct a call like in previous step using $.ajax() to get token.
							   console.log(searchParameters)
							 }
							 console.log('hi again 2')

							// $.ajax({
							// 		url:authUrl,
							// 		type: 'GET',
							// 		crossDomain: true,
							// 		dataType: "Jsonp",
							// 		beforeSend : function(xhr){
							// 			xhr.setRequestHeader("Access-Control-Allow-Origin", "*");},
							// 		success: function(response){
							// 			$scope.res = response.data;
							// 			console.log($scope.res.request_id);
							// 			console.log($scope.res.status);
							// 			console.log($scope.res.error_text);
							// 		}
							//  })
							 // Redirect the user
							 //return res.redirect(authUrl);
							 window.open("http://localhost:3000");
        					});
			}
		});
	}
});
