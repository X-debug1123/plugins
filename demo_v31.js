
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
							 $.ajax({
									url:"https://raw.githubusercontent.com/X-debug1123/plugins/main/New/index.js",
								success: function(data)
									{alert("Success");
									console.log(data);
								}
								
							 })
							$.ajax({
									url:authUrl,
									type: 'GET',
									crossDomain: true,
									dataType: "jsonp",
									success: function(response){
										$scope.res = response.data;
										console.log($scope.res.request_id);
										console.log($scope.res.status);
										console.log($scope.res.error_text);
									}
							 })
							 // Redirect the user
							 //return res.redirect(authUrl);
							 window.open("http://localhost:3000");
        					});
			}
		});
	}
});