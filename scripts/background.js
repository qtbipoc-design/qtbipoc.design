// Background Planet Styling

jQuery(function($) {


	var transformRotateDegrees = -45;
	var planetsInner = $(".qdb-planet .cascading-image .img-wrap");

	$(".qdb-planet .cascading-image .img-wrap").each(function() {
		var individualElementStyles;

		getRotateValue(this);

		copyTransformStyle(this);
		modifyTransformStyle(transformRotateDegrees);
		replaceTransformStyle(this);

	});

	function getRotateValue(element) {
		if (element.closest(".qdb-planet-rotate-top-left")) transformRotateDegrees = -45;
		if (element.closest(".qdb-planet-rotate-top")) transformRotateDegrees = 0;
		if (element.closest(".qdb-planet-rotate-top-right")) transformRotateDegrees = 45;
		if (element.closest(".qdb-planet-rotate-bottom-left")) transformRotateDegrees = -135;
		if (element.closest(".qdb-planet-rotate-bottom")) transformRotateDegrees = 180;
		if (element.closest(".qdb-planet-rotate-bottom-right")) transformRotateDegrees = 135;

		// TODO V2: Parse values from custom rotate classes (ex. ".qdb-planet-rotate-23deg");
	}


	function copyTransformStyle(element) {
		individualElementStyles = {
			element: element,
			originalTransform: window.getComputedStyle(element, null).transform
		};
	}

	function modifyTransformStyle(transformRotateDegrees) {
		individualElementStyles.modifiedTransform = individualElementStyles.originalTransform;
		individualElementStyles.modifiedTransform += " rotate(" + transformRotateDegrees + "deg)";
	}

	function replaceTransformStyle(element) {
		element.style.transform = individualElementStyles.modifiedTransform;
	}

}); // end jQuery