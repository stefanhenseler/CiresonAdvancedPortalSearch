/* ----------------------------------------------------------------- */
/* ------------ Advanced Portal Search - User ---------------------- */
/* ----------------------------------------------------------------- */
// v6.0.RTM
// Contributors: William Udovich, Joivan Hedrick, Geoff Ross, Stefan Henseler
/* Description: Adds user search functionality to the main search of the portal, GetProjectionByCriteria style.*/

		var customSearchUser = {

			// Init code of search box 
			initSearch: function (searchInput) {
			
				// Set Projection for datasource
				var strProjection = "490ab845-b14c-1d91-c39f-bb9e8a350933"; 

				// Create datasource
				var dataSource = customSearchLib.initDataSource(strProjection,this.initCriteria);

				// Set Template for list items
				var template = '<div class="k-item k-widget k-state-default "><span class="k-item"><h1><b></b>#: data.DisplayName #</h1></br><b>UserName:</b> #: data.UserName # </br><b>Last Name:</b> #: data.LastName # </br><b>First Name: </b> #: data.FirstName # </br><b>Department: </b>#: data.Department #</span></div>';

				// enableCustomSearch
				customSearchLib.enableCustomSearch(searchInput, template, this.onSelect, dataSource) ;
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
																				"Property": "$Context/Property[Type='eca3c52a-f273-5cdc-f165-3eb95a2b26cf']/UserName$"
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
																				"Property": "$Context/Property[Type='eca3c52a-f273-5cdc-f165-3eb95a2b26cf']/DisplayName$"
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
																				"Property": "$Context/Property[Type='eca3c52a-f273-5cdc-f165-3eb95a2b26cf']/LastName$"
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
																				"Property": "$Context/Property[Type='eca3c52a-f273-5cdc-f165-3eb95a2b26cf']/FirstName$"
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
				var url = '/user/UserRelatedInfoById/' + dataItem.BaseId;
				var newWindow = window.open(url, '_blank');
				newWindow.focus();

			}
				
	};

