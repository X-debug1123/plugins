$(document).ready(function()
{
    // Need the basic fields and to make sure api version is 1 
    if(typeof(user)!="undefined" && typeof(hh_api_version)!="undefined" && hh_api_version<=1 && typeof(doc_type)!="undefined")
    {
        // Availability grid part number
        if(typeof($.custom.availability)!='undefined')
        {    
            $.widget("custom.availability", $.custom.availability,
            {
                get_row_name: function(r)
                {
                    return ($.trim(r["part_number"])==""?"":"["+r["part_number"]+"] ") + this._super(r);
                }
            });
        }
    }
});
