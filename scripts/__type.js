let docRoot = document.documentElement; // For RWD Type Scaling


function getNewMediaMatches() {
	// Get data to determine whether window current fits each media class
	return {
		mobile: window.matchMedia("(max-width: 689px)").matches,
		tablet: window.matchMedia("(min-width: 690px) and (max-width:999px)").matches,
		desktop: window.matchMedia("(min-width: 1000px) and (max-width:1299px)").matches,
		desktop_wide: window.matchMedia("(min-width: 1300px)").matches
	};
}

function isMediaClassChanged() {
	// Collect a new set of data to compare with
	let latestMediaMatches = getNewMediaMatches();

	// Compare with existing data
	// // If it's different, then the class is changed
	if (
		currentMediaMatches["mobile"] != latestMediaMatches["mobile"] ||
		currentMediaMatches["tablet"] != latestMediaMatches["tablet"] ||
		currentMediaMatches["desktop"] != latestMediaMatches["desktop"] ||
		currentMediaMatches["desktop_wide"] != latestMediaMatches["desktop_wide"]
	) {
		// console.log(currentMediaMatches["mobile"], currentMediaMatches["tablet"], currentMediaMatches["desktop"], currentMediaMatches["desktop_wide"]); // debug

		// Keep the current set updated
		currentMediaMatches = getNewMediaMatches();
		return true;
	}

	return false;
}

function setRootCssByMedia(elementsArray, mediaClass) {
	// RWD Type Scaling
	// Set the :root CSS properties based on the media class and the elements given. The properties should already be pre-written in actual style sheet.

	if (elementsArray.length == 0 || !mediaClass) {
		return;
	} // Stop function is there aren't any elements to update or if a mediaClass is not given

	for (element of elementsArray) {
		if (
			element == "super-heading" ||
			element == "h1" ||
			element == "h2" ||
			element == "h3" ||
			element == "h4" ||
			element == "h5" ||
			element == "h6" ||
			element == "paragraph"
		) {
			docRoot.style.setProperty(
				"--multiplier-font-size-" + element + "-current",
				"var(--multiplier-font-size-" + element + "-" + mediaClass + ")"
			);
		}
		// No other element types are written yet, if ever.
	}
}

function updateTypeScaling() {
	// RWD Type Scaling
	// Get the current media class, set the correct multiplier in CSS
	
	let elementsArray = ["super-heading","h1", "h2", "h3", "h4", "h5", "h6", "paragraph"];
	
	if (currentMediaMatches["mobile"]) {
		// console.log("mobile");
		setRootCssByMedia(elementsArray, "mobile");
	} else if (currentMediaMatches["tablet"]) {
		// console.log("tablet");
		setRootCssByMedia(elementsArray, "tablet");
	} else if (currentMediaMatches["desktop"]) {
		// console.log("desktop");
		setRootCssByMedia(elementsArray, "desktop");
	} else {
		// console.log("desktop_wide");
		setRootCssByMedia(elementsArray, "desktop-wide");
	}
}


function checkAndUpdateTypeScaling(){
	// RWD Type Scaling
	
	// console.log("Current width: " + window.innerWidth); // debug

	let mediaClassIsChanged = isMediaClassChanged();
	// console.log(mediaClassIsChanged + " " + window.innerWidth); // debug
	if (mediaClassIsChanged == false) {
		return;
	} // Only proceed if the mediaClass is changed.
	
	updateTypeScaling();

}

function turnOnRwdTypography(bool) {
	// RWD Type Scaling
	// One-change function to easily toggle the entire operation if necessary.

	if (bool == false) {
		return;
	}

	updateTypeScaling();
	window.addEventListener("resize", checkAndUpdateTypeScaling);
}

// Get an initial set of media data when the page loads.
let currentMediaMatches = getNewMediaMatches();

turnOnRwdTypography(true); // Setting this to true activates augmented responsive type scaling
