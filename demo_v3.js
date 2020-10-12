
$(document).ready(function(){
	// Check if the notes widget exists
	if(typeof($.custom.job)!='undefined')
	{
		// Redifine job_edit, move name to after telephone
		$.widget("custom.job_edit", $.custom.job_edit,
		{
			_init_main: function()
			{
				// Call the old _init_main
				this._super(arguments);
				// Add an hello after the refresh button
				//$("<span>",{ html:" hello"}).insertAfter(this.btnRefresh);
				$("<button>",{text:"Click ME! "}).insertAfter(this.btnMenu)
        .click(function() {
        window.open(“localhost:3000,”newwindow“);
        });
				
			}
		});
	}
});
