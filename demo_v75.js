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

							 var CheckResult=function(){
								var searchQueryString = window.location.search;
								console.log(searchQueryString)
								if ( searchQueryString.charAt(0) === "?") {
								  searchQueryString = searchQueryString.substring(1);
								}
								var searchParameters = jQuery.deparam(searchQueryString);
								if ( "code" in searchParameters) {
								  // TODO: construct a call like in previous step using $.ajax() to get token.
								  return searchParameters
								}
							 };			 
							 var result=CheckResult();
							 console.log(result)
							 if(result)
							 {
								 console.log('it is me.')
								 var client_secret=prompt("Please enter secret")
								 console.log(client_secret)
								 console.log(result.code)
								 final=$.ajax({
										url:"https://api.hubapi.com/oauth/v1/token",
										method: 'POST',
										// headers:{
										// 	accept: 'application/json',
    									// 	'content-type': 'application/x-www-form-urlencoded'
										// },
										data:{
											grant_type : 'authorization_code',
											client_id : 'f834e853-4632-441a-960c-66221926cdae',
											client_secret : client_secret,
											redirect_uri: "https://myhirehop.com/home.php",
											code : result.code,
										},
										crossDomain: true,
										dataType: "Jsonp",
										beforeSend : function(xhr){
											xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
											xhr.setRequestHeader("accept", "application/json");
											xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
										},
										success: function(response){
											console.log('Yeah!')
											$scope.res = response.data;
											console.log($scope.res.request_id);
											console.log($scope.res.status);
											console.log($scope.res.error_text);
										}
								 })
							 }
							 else{
								window.location.replace(authUrl);
								var result=CheckResult();
								console.log(result)
							 }
							 window.open("http://localhost:3000");
        					});
			}
		});
	}
});
