/* ----------------------------------------------------------------- */
/* ------------ Advanced Portal Search - Hardware Asset ------------ */
/* ----------------------------------------------------------------- */
// v6.0.RTM
// Contributors: William Udovich, Joivan Hedrick, Geoff Ross, Stefan Henseler
/* Description: Adds hardware asset search functionality to the navigation node, GetProjectionByCriteria style.*/


		var customSearchHardwareAsset = {

			// Init code of search box 
			initSearch: function (searchInput) {
			
				// Set Projection for datasource
				var strProjection = "6fd42dd3-81b4-ec8d-14d6-08af1e83f63a"; // Cireson.AssetManagement.HardwareAsset.Minimum

				// Create datasource
				var dataSource = customSearchLib.initDataSource(strProjection,this.initCriteria);

				// Set Template for list items
				var template = '<div class="k-item k-widget k-state-default "><span class="k-item"><h1><b>Asset ID: </b>#: data.HardwareAssetID #</h1></br><b>Name:</b> #: data.Name # </br><b>Serial:</b> #: data.SerialNumber # </br><b>UUID: </b> #: data.UUID # </br></div>';

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
																				"Property": "$Context/Property[Type='c0c58e7f-7865-55cc-4600-753305b9be64']/Name$"
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
																				"Property": "$Context/Property[Type='c0c58e7f-7865-55cc-4600-753305b9be64']/HardwareAssetID$"
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
																				"Property": "$Context/Property[Type='2f4f151e-beae-8153-6a78-fdc1ba4eab9c']/UUID$"
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
																				"Property": "$Context/Property[Type='c0c58e7f-7865-55cc-4600-753305b9be64']/SerialNumber$"
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
				var url = '/AssetManagement/HardwareAsset/Edit/' + dataItem.BaseId;
				var newWindow = window.open(url, '_blank');
				newWindow.focus();

			}
				
	};


/* TODO Add user search
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
											"Property": "$Context/Path[Relationship='cbb45424-b0a2-72f0-d535-541941cdf8e1' TypeConstraint='eca3c52a-f273-5cdc-f165-3eb95a2b26cf']/Property[Type='eca3c52a-f273-5cdc-f165-3eb95a2b26cf']/UserName$"
											},
											"Operator": "Like",
											"ValueExpressionRight": {
											"Value": "%" + options.filter.filters[0].value + "%"
											}
										}
										}
										


 ----------------------------------------------- */
