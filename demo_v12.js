
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
				$("<button>",{text:"Click ME! "}).insertAfter(this.btnRefresh)
				.click(function() {
            				 console.log('hi');
					import {getAllCompanies} from 'index.js';
        					});
			}
		});
	}
});
