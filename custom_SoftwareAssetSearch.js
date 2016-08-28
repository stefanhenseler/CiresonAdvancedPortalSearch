/* ----------------------------------------------------------------- */
/* ------------ Advanced Portal Search - Software Asset ------------ */
/* ----------------------------------------------------------------- */
// v6.0.RTM
// Contributors: William Udovich, Joivan Hedrick, Geoff Ross, Stefan Henseler
/* Description: Adds software asset search functionality to the navigation node, GetProjectionByCriteria style.*/




	var customSearchSoftwareAsset = {

		// Init code of search box 
		initSearch: function (searchInput) {	

			// Set Projection for datasource
			var strProjection = "18b3df46-1859-11e8-960e-ced408d50695"; // Cireson.AssetManagement.SoftwareAsset.Minimum

			// Create datasource
			var dataSource = customSearchLib.initDataSource(strProjection,this.initCriteria);

			// Set Template for list items
			var template = '<div class="k-item k-widget k-state-default "><span class="k-item"><h1><b>Asset ID: </b>#: data.SoftwareAssetID #</h1></br><b>Name:</b> #: data.Name # </br><b>Version:</b> #: data.Version # </br></div>';

			// enableCustomSearch
			customSearchLib.enableCustomSearch(searchInput, template, this.onSelect, dataSource);

		},

		// Criteria init code
		initCriteria: function (options) {
				
				
					var strJsonCriteria =	{
								"Base": {
									"Expression": {
										"And": {
	
											"Expression": [
	
												{
													"SimpleExpression": {
														"ValueExpressionLeft": {
															"Property": "$Context/Property[Type='62f0be9f-ecea-e73c-f00d-3dd78a7422fc']/ObjectStatus$"
														},
														"Operator": "NotEqual",
														"ValueExpressionRight": {
															"Value": "{47101e64-237f-12c8-e3f5-ec5a665412fb}"
														}
													}
												},
												{
													"Or": {
														"Expression": [
	
															{
																"SimpleExpression": {
																	"ValueExpressionLeft": {
																		"Property": "$Context/Property[Type='81e3da4f-e41c-311e-5b05-3ca779d030db']/Name$"
																	},
																	"Operator": "Like",
																	"ValueExpressionRight": {
																		"Value": "%" + options.filter.filters[0].value + "%"
																	}
																}
															},
															{
																"SimpleExpression": {
																	"ValueExpressionLeft": {
																		"GenericProperty": "DisplayName"
																	},
																	"Operator": "Like",
																	"ValueExpressionRight": {
																		"Value": "%" + options.filter.filters[0].value + "%"
																	}
																}
															},
															{
																"SimpleExpression": {
																	"ValueExpressionLeft": {
																		"Property": "$Context/Property[Type='81e3da4f-e41c-311e-5b05-3ca779d030db']/SoftwareAssetID$"
																	},
																	"Operator": "Like",
																	"ValueExpressionRight": {
																		"Value": "%" + options.filter.filters[0].value + "%"
																	}
																}
															},
															{
																"SimpleExpression": {
																	"ValueExpressionLeft": {
																		"Property": "$Context/Property[Type='81e3da4f-e41c-311e-5b05-3ca779d030db']/Version$"
																	},
																	"Operator": "Like",
																	"ValueExpressionRight": {
																		"Value": "%" + options.filter.filters[0].value + "%"
																	}
																}
															},
															{
																"SimpleExpression": {
																	"ValueExpressionLeft": {
																		"Property": "$Context/Property[Type='81e3da4f-e41c-311e-5b05-3ca779d030db']/Manufacturer$"
																	},
																	"Operator": "Like",
																	"ValueExpressionRight": {
																		"Value": "%" + options.filter.filters[0].value + "%"
																	}
																}
															}
															
															
														]
													}
												}
											]
										}
									}
	
								}
							}

							return strJsonCriteria;

		},
	

		onSelect: function (event,dataItem) {
 
			// Use the selected item or its text
			var url = '/AssetManagement/SoftwareAsset/Edit/' + dataItem.BaseId;
			var newWindow = window.open(url, '_blank');
			newWindow.focus();

		}
	};
