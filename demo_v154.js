$(document).ready(function(){
	// //Check if the notes widget exists
	// if(typeof($.custom.notes)!='undefined')
	// {
	// 	// Redifine job_edit, move name to after telephone
	// 	$.widget("custom.notes", $.custom.notes,
	// 	{
	// 		_init_main: function()
	// 		{
	// 			// Call the old _init_main
	// 			this._super(arguments);
	// 			// Add an hello after the refresh button
	// 			//$("<span>",{ html:" hello"}).insertAfter(this.btnRefresh);
	// 			var a = this;
	// 			$("<button>",{text:"Click ME! "}).insertAfter(this.btnRefresh)
	// 			.click(function() {
    //         				 console.log('hi');
	// 						 var c = a.grid.jqGrid("getGridParam", "selrow");
	// 						 var noteElm= document.getElementById(c);
	// 						 noteElm.style.color="#c94c4c";
	// 						 console.log(c);
	// 						 var d= a.grid.find("#" + c + " .jqg_note").text();
	// 						 console.log(d);
	// 						//  var list="/frames/items_to_supply_list.php";
	// 						//  window.open("http://localhost:3000");
	// 						const dataStr=`note: ${d} `;
	// 						var result=$.ajax({
	// 							type: "POST",
	// 							// data: JSON.parse({note: d}),
	// 							data:{note: d, job: job_data},
	// 							dataType:"json",
	// 							// contentType: 'application/json',
	// 							url: "http://localhost:5000/api/notes",
	// 							success: function(res){
	// 								 alert("Posted: " + res.note);
	// 							}
	// 							});
							
	// 						console.log(result);
	// 						// get availability 
	// 						$.ajax({
	// 							url: "/php_functions/availability_list.php",
	// 							type: "POST",
	// 							data: {
	// 								// "date": $("#dummy").data("custom.availability").alt_start_date.val(),
	// 								// "head": $("#dummy").data("custom.availability").current_cat_id,
	// 								// "title": $.trim($("#dummy").data("custom.availability").name_search.val()),
	// 								// "depot": $("#dummy").data("custom.availability").depot.val(),
	// 								// "hidden": $("#dummy").data("custom.availability").showHidden[0].checked ? 1 : 0,
	// 								// "shortages": $("#dummy").data("custom.availability").shortagesOnly[0].checked ? 1 : 0,
	// 								// "late": $("#dummy").data("custom.availability").lateOnly[0].checked ? 1 : 0,
	// 								// "virtual": $("#dummy").data("custom.availability").showVirtual[0].checked ? 1 : 0,
	// 								// "cutoff": $("#dummy").data("custom.availability").cutoff.val(),
	// 								// "page": $("#dummy").data("custom.availability").page + 1,
	// 								"rows": 25,
	// 								"cols": 14,
	// 								"local": moment().format('YYYY-MM-DD H:mm:ss'),
	// 								"job": 1
	// 							},
	// 							success: function(data) {
	// 								if (typeof (data.error) != "undefined")
	// 									error_message(isNaN(parseInt(data.error)) ? data.error : lang.error[data.error]);
	// 								else {
	// 									console.log(data);
	// 								}
	// 							},
	// 							error: function(jqXHR, textStatus, errorThrown) {
	// 								that.loading = false;
	// 								error_message(lang.error[1] + " (" + errorThrown + ").");
	// 							}
	// 						});
	// 						const now= new Date;
	// 						const now_format=moment(now).format('YYYY-MM-DD HH:mm:ss');
	// 						//job_items
	// 						console.log("start items per job...");
	// 						$.ajax({
	// 							url: "/frames/items_to_supply_list.php",
	// 							type: "POST",
	// 							data: {
	// 								id: job_data.ID,
	// 								job: job_data.ID,
	// 								fix: 0,
	// 								c: "",
	// 								grp: "",
	// 								local: now_format
	// 							},
	// 							success: function(data) {
	// 								if (typeof (data.error) != "undefined")
	// 									error_message(isNaN(parseInt(data.error)) ? data.error : lang.error[data.error]);
	// 								else {
	// 									console.log(data);
	// 								}
	// 							},
	// 							error: function(jqXHR, textStatus, errorThrown) {
	// 								that.loading = false;
	// 								error_message(lang.error[1] + " (" + errorThrown + ").");
	// 							}
	// 						});
	// 						console.log("start shortage...");
	// 						//check shortage
	// 						$.ajax({
	// 							url: "/php_functions/job_check_shortage.php",
	// 							data: {
	// 								job: job_data.ID
	// 							},
	// 							dataType: "json",
	// 							type: "get",
	// 							success: function(a) {
	// 								if (typeof (a.result) != "undefined" && a.result == 1) {
	// 									console.log(a);
	// 									console.log(a.toString());
	// 								}
	// 							},
	// 							error: function(a, c, b) {}
	// 						})
	// 						// //tested working create job
	// 						// console.log("start to create job");
	// 						// const params ={
	// 						// 	priority_confirm: 0,
	// 						// 	id_main: 0,
	// 						// 	proj: 0,
	// 						// 	created: "2020-10-23 13:36",
	// 						// 	client_id: "",
	// 						// 	inv_address:"" ,
	// 						// 	name: "xinyue",
	// 						// 	company: "",
	// 						// 	address: "",
	// 						// 	telephone: "",
	// 						// 	mobile: "",
	// 						// 	email: "",
	// 						// 	type: "",
	// 						// 	venue: "",
	// 						// 	venue_address:"", 
	// 						// 	venue_telephone: "",
	// 						// 	deliver: 0,
	// 						// 	collect: 0,
	// 						// 	duration_days: 3,
	// 						// 	duration_hrs: 23,
	// 						// 	details: "",
	// 						// 	client_ref: "",
	// 						// 	default_disc: 0,
	// 						// 	price_group: 0,
	// 						// 	job_name: "from js2",
	// 						// 	depot: 1,
	// 						// 	duration_scheme: "7dayw",
	// 						// 	calc_late_fees: 0,
	// 						// 	allow_early_returns: 0,
	// 						// 	out: "2020-10-23 12:00:00",
	// 						// 	start: "2020-10-23 12:00:00",
	// 						// 	end: "2020-10-24 12:00:00",
	// 						// 	to: "2020-10-24 12:00:00",
	// 						// 	new_job_data: 0
	// 						// };
	// 						// $.ajax({
	// 						// 	url: "/php_functions/job_save.php",
	// 						// 	type: "POST",
	// 						// 	dataType: 'json',
	// 						// 	data: params,
	// 						// 	success: function(data) {
	// 						// 		console.log(data);
	// 						// 		if (typeof (data.error) != "undefined") {
	// 						// 			var jobs_list = "";
	// 						// 			if (typeof (data.jobs) != "undefined")
	// 						// 				$.each(data.jobs, function(i, v) {
	// 						// 					jobs_list += (jobs_list == "" ? "" : ", ") + '<a href="/job.php?id=' + v + '"' + (user["NEW_TABS"] == 1 ? ' target="_blank"' : "") + ">" + v + "</a>";
	// 						// 				})
	// 						// 			if (data.error == 160) {
	// 						// 				confirm_message(lang.error[160] + "<br><b>" + jobs_list + "</b>", function() {
	// 						// 					that.priority_confirm.val(1);
	// 						// 					that.save_job_form();
	// 						// 				});
	// 						// 			} else {
	// 						// 				error_message(isNaN(parseInt(data.error)) ? data.error : lang.error[data.error]) + (jobs_list == "" ? "" : "<br><b>" + jobs_list + "</b>");
	// 						// 				if (typeof (newWindow) != "undefined")
	// 						// 					newWindow.close();
	// 						// 			}
	// 						// 		} else {
	// 						// 				console.log(data)
	// 						// 		}
	// 						// 	},
	// 						// 	error: function(jqXHR, textStatus, errorThrown) {
	// 						// 		if (typeof (newWindow) != "undefined")
	// 						// 			newWindow.close();
	// 						// 		error_message(lang.error[1] + " (" + errorThrown + ").");
	// 						// 	}
	// 						// });

	// 						console.log("end");
	

    //     					});
	// 		}
	// 	});
	// }

	if(typeof($.custom.subcontractors)!='undefined')
	{
		$.widget("custom.subcontractors", $.custom.subcontractors,
		{
			_init_main: function()
			{
			console.log("hi!!!!!!!");
			// console.log($.extend({}, this.fields.data("fields")));
			}
		});
	}

	if(typeof($.custom.job_edit)!='undefined')
	{
		// Redifine job_edit, move name to after telephone
		$.widget("custom.job_edit", $.custom.job_edit,
		{
			_init_main: function()
			{
				// Call the old _init_main
			this._super(arguments);
			console.log("job_edit");
			console.log( this.get_save_params());
			var params = this.get_save_params();
			params["new_job_data"] = !this.options.open_new_job_window ? 1 : 0;
			console.log(params);
			// console.log($.extend({}, this.fields.data("fields")));
			}
		});
	}


	if (typeof(depots)!="undefined" && depots.length>1)
	{
		//Get all Depots from depots array and put them in the dep object
		var deptDropDown = $('<select>')
		//Watch for the depot box to change and update the users depot then reload the page
		.on('change', function () {
			$("#saving_dialog").dialog("open");
			$.ajax({
				url: "/modules/settings/users_save.php",
				type: "POST",
				dataType: 'json',
				data: {"EMAIL":user.EMAIL,"NAME":user.NAME,"DEFAULT_DEPOT":this.value},
				success: function (data) {
					if (typeof (data["error"]) != "undefined")
						error_message(isNaN(parseInt(data["error"])) ? data["error"] : lang.error[data["error"]]);
					else
						location.reload();
				},
				error: function (jqXHR, textStatus, errorThrown) {
					error_message(lang.error[1] + " (" + errorThrown + ").");
				}
			});
		});
		// Fill it with depots
		for (var i = 0; i < depots.length; i++) {
			$('<option>', { value: depots[i].ID, text: depots[i].DEPOT }).appendTo(deptDropDown).prop("selected", depots[i].ID==user.DEFAULT_DEPOT);
		}
		// Insert the select in place of the depot label
		$("#header_depot").replaceWith(deptDropDown);
	}
    
    // Job data header
    if (typeof(doc_type)!="undefined" && doc_type==1)
	{
		var css = '\
		.job_header{\
			position:absolute;\
			display:inline-block;\
			font-size:0.9em;\
			top:0;\
			width:auto;\
			left:' + (intval($("#comp_logo").width())+20) + 'px;\
			background-color:#' + job_data.COLOUR + ';\
			z-index:1;\
        }\
		.job_header_table{\
            border-collapse:collapse;\
        }\
        .job_header_table tr{\
            padding:0;\
        }\
		.job_header_table td{\
            padding:0 4px 0 4px;\
			white-space: nowrap;\
			text-align:left;\
        }';
        var style = document.createElement('style');

        style.type = 'text/css';
        if (style.styleSheet)
            style.styleSheet.cssText = css;
        else
            style.appendChild(document.createTextNode(css));
		document.head.appendChild(style);
		lang["jobTxt"] ="I call it different name"; 
		var job_header = $('<div>', { class:"job_header ui-corner-all"}).insertAfter($("#comp_logo").parent());
		var table = $('<table>', { class:"job_header_table"}).appendTo(job_header);
		var tr = $("<tr>").appendTo(table);
		$('<td class="label">'+lang.jobTxt+':</td>').appendTo(tr);
		$('<td><span class="data_cell" data-field="ID"></span>  -  <span class="data_cell"  data-field="JOB_NAME"></span><td>').appendTo(tr);
		
		tr = $("<tr>").appendTo(table);
		tr.append('<td class="label">'+lang.companyTxt+':</td>');
		tr.append('<td class="data_cell" data-field="COMPANY"></td>');
		
		tr = $("<tr>").appendTo(table);
		tr.append('<td class="label">' + lang.outdateTxt + ':</td>');
		tr.append('<td><time class="data_cell data_date" data-field="OUT_DATE"></time> @ <time class="data_cell" data-field="OUT_DATE"></time></td>');
		
		tr = $("<tr>").appendTo(table);
		tr.append('<td class="label">' + lang.retdateTxt + ':</td>');
		tr.append('<td><time class="data_cell data_date" data-field="RETURN_DATE"></time> @ <time class="data_cell" data-field="RETURN_DATE"></time></td>');
		$("#comp_logo").one("load", function() { job_header.css("left", (intval($("#comp_logo").width())+20) + "px"); });
    }


});
