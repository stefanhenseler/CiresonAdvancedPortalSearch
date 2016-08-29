
// This helps with loading scripts and debugging
var loadScript = function (path) {
    var result = $.Deferred(),
        script = document.createElement("script");
    script.async = "async";
    script.type = "text/javascript";
    script.src = path;
    script.onload = script.onreadystatechange = function(_, isAbort) {
        if (!script.readyState || /loaded|complete/.test(script.readyState)) {
            if (isAbort)
                result.reject();
            else
                result.resolve();
        }
    };
    script.onerror = function () { result.reject(); };
    $("head")[0].appendChild(script);
    return result.promise();
};

// Start - Advanced Portal Search App

	//Load Search Common Functions (lib)
		loadScript("/CustomSpace/custom_SearchLib.js");

	// Load Search Extensions
		loadScript("/CustomSpace/custom_SoftwareAssetSearch.js");
		loadScript("/CustomSpace/custom_HardwareAssetSearch.js");
		loadScript("/CustomSpace/custom_UserSearch.js");

	// Initialize Advanced Portal Search code
		loadScript("/CustomSpace/custom_InitSearch.js");

// End - Advanced Portal Search App
