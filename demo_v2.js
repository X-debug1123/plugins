  
/*!
 * This is a demonstartion of how to interface with HireHop widgets
 * This code will insert the word Hello after the refresh button on
 * the notes widget.
 * 
 * For notes we don't need to wait for the document to be ready using
 * $(document).ready(function(){, as it is loaded before this plugin,
 * but it is necessary to do this for other JavaScript widgets that
 * are loaded afterwards.
*/
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
				$("<button>",{text:"Click ME! "}).insertAfter(this.btnMenu);
				
			}
		});
	}
});
