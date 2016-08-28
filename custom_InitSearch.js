
/* ----------------------------------------------- */
/* ------------ Init Custom Portal Search ------------ */
/* ----------------------------------------------- */
// v6.0.RTM
// Contributors: William Udovich, Joivan Hedrick, Geoff Ross, Stefan Henseler
/* Description: Adds advanced search functionality to the main search of the portal, GetProjectionByCriteria style.*/

$(document).ready(function () {

	//Get a reference of the search input text box
		var searchInput = $("input[name=searchText]");

	//Add ID for css formating of the result list
		searchInput.attr('id', 'searchText');

	// Add Software Asset Search Type
		$(".navbar__search--dropdown ul").append('<li><a href="#SoftwareAsset" id="SoftwareAssetSearchType">Software Asset</a></li>');
	// Add Hardware Asset Search Type
		$(".navbar__search--dropdown ul").append('<li><a href="#HardwareAsset" id="HardwareAssetSearchType">Hardware Asset</a></li>');
	// Add Hardware Asset Search Type
		$(".navbar__search--dropdown ul").append('<li><a href="#User" id="UserSearchType">User</a></li>');

   
	//Add Custom toggle event handling
		$(".dropdown-menu").on("click", "li", function(event){

				var searchType = event.target.hash;

				// If Autocomplete already exists destroy, just do clean everything up... IT Monkey would love it!!
				if (!searchInput.data("kendoAutoComplete"))	 {					
						customSearchLib.disableCustomHeaderSearch(searchInput);
				}

				switch (searchType) {
					case "#SoftwareAsset":
			
						customSearchSoftwareAsset.initSearch(searchInput);	
						// Update Search Param and Concept
						var currentURL = window.location.href;
						var searchParam = $("input[name=search_param]"); //the hidden field which holds the search type id
						var searchConcept = $("span[id=search_concept]"); //the span field which displays the search type value      
						searchParam.val("SoftwareAsset");
						searchConcept.html('Software Asset');    	
						break;	
					case "#HardwareAsset":					

						customSearchHardwareAsset.initSearch(searchInput);							
						// Update Search Param and Concept
						var currentURL = window.location.href;
						var searchParam = $("input[name=search_param]"); //the hidden field which holds the search type id
						var searchConcept = $("span[id=search_concept]"); //the span field which displays the search type value      
						searchParam.val("HardwareAsset");
						searchConcept.html('Hardware Asset');     
						break;	
					case "#User":
						customSearchUser.initSearch(searchInput);							
						// Update Search Param and Concept
						var currentURL = window.location.href;
						var searchParam = $("input[name=search_param]"); //the hidden field which holds the search type id
						var searchConcept = $("span[id=search_concept]"); //the span field which displays the search type value      
						searchParam.val("User");
						searchConcept.html('User');     
						break;	


					default:
							
						break;
						}
		});

		init(searchInput);

		function init (searchInput) {

				if (session.user.AssetManager === 1) {

					customSearchHardwareAsset.initSearch(searchInput);						
					// set Hardware Asset search as default if user is hardware asset manager
					var currentURL = window.location.href;
					var searchParam = $("input[name=search_param]"); //the hidden field which holds the search type id
					var searchConcept = $("span[id=search_concept]"); //the span field which displays the search type value      
					searchParam.val("HardwareAsset");
					searchConcept.html('Hardware Asset');    
	
				}
				 

		};

		
});