
const authUrl =
'https://app.hubspot.com/oauth/authorize' +
`?client_id=${encodeURIComponent(CLIENT_ID)}` +
`&scope=${encodeURIComponent(SCOPES)}` +
`&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;

// Redirect the user
return res.redirect(authUrl);

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
							 window.open("http://localhost:3000");
        					});
			}
		});
	}
});
