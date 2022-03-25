/**
 * Gravity Wiz // Gravity Forms // Preview Image of File Upload
 *
 * Outputs an image preview for File Upload fields.
 * 
 * Based on: https://stackoverflow.com/questions/37880725/gravity-form-preview-of-image-upload
 */

( function( $ ) {  // Start jQuery
    
    // Update "123" to Form ID and "1" to File Upload Field ID in "#input_123_1".
    $( document ).on( "change","#input_3_57", function() {
	readURL( this );
    } );

$( "#input_3_57" ).ready( function() {
	readURL( this );
    } );
    
    function readURL( input ) {
    
	if ( input.files && input.files[0] ) {

	    var reader = new FileReader();
	   // $( '.member-photo' ).show();
    
	    reader.onload = function ( e ) {
		$( '.member-photo>img' ).attr( 'src', e.target.result );
	    }
    
	    reader.readAsDataURL( input.files[0] );

	}    
    
    }




// Preview color change
$( document ).on( "change","#input_3_24", function() { // 3_24 is highlight color select version 1
	updateDirectoryFormPreviewFrameColor( this );
    } );

$( document ).on( "change","#input_3_68 input", function() { // 3_68 is highlight color selector version 2
	updateDirectoryFormPreviewFrameColor( this );
    } );

/*
$( "#input_3_24" ).ready(function() { // 3_24 is highlight color select version 1
	updateDirectoryFormPreviewFrameColor( document.querySelector("#input_3_24") );
    } );


$( "#input_3_68" ).ready(function() { // 3_68 is highlight color selector version 2
	updateDirectoryFormPreviewFrameColor( document.querySelector("#input_3_68 input[checked]") ); // 3_68 is highlight color selector
    } );
*/

///// Directory Filter FAB /////

/*
$("#directoryFilterFab").ready(function () {
	directoryFilterFab_addEventListener();
	$("#directoryFilterFab a").removeAttr("href");
});
*/


///// Page Submenu ////

$(".wpb_row").ready(function() {
changeSubmenuLabel();
});



} )( jQuery ) // End jQuery



function updateDirectoryFormPreviewFrameColor( input ) {

	let highlightInput = input;

	let highlightColorStr = highlightInput.value.toLowerCase().replace(" ", "");
	let highlightColorVarStr = "var(--color-directory-highlight-" + highlightColorStr + ")";

	document.querySelector(".member-photo img").style.borderColor = highlightColorVarStr;
	document.querySelector(".member-photo img").style.boxShadow = "16px 16px 0px 0px " + highlightColorVarStr;


}




function directoryFilterFab_addEventListener() {
	document.querySelector("#directoryFilterFab a").addEventListener("click", function() {

		// Get directory filter panel state and use that as the definitive state in case the states get mixed up.
		var directoryFilterIsDisplayed = true;

		if (document.querySelector("#directoryFilterModuleRow").classList.contains("panel-closed")) {
		directoryFilterIsDisplayed = false;
		}

		// Change panel state
		toggleDirectoryFilterDisplay(directoryFilterIsDisplayed);

		// Update Fab styling
		toggleDirectoryFilterFabDisplay(directoryFilterIsDisplayed);

	}); // end addEventListener
} // end function




function toggleDirectoryFilterDisplay(directoryFilterIsDisplayed){
// If panel has "panel-closed" class, remove it. If it doesn't have it, add it.

	if (directoryFilterIsDisplayed) {
		document.querySelector("#directoryFilterModuleRow").classList.add("panel-closed");
	} else {
		document.querySelector("#directoryFilterModuleRow").classList.remove("panel-closed");
	} // end if

} // end function



function toggleDirectoryFilterFabDisplay(directoryFilterIsDisplayed){
	// If panel has "panel-closed" class, remove it. If it doesn't have it, add it.
	if (directoryFilterIsDisplayed) {
		document.querySelector("#directoryFilterFab").classList.add("panel-closed");
		document.querySelector("#directoryFilterFab a.nectar-button span").textContent = "Filters";
		document.querySelector("#directoryFilterFab a.nectar-button i").classList.add("fa-filter"); /* filter icon */
		document.querySelector("#directoryFilterFab a.nectar-button i").classList.remove("fa-times"); /* x icon */
	} else {
		document.querySelector("#directoryFilterFab").classList.remove("panel-closed");
		document.querySelector("#directoryFilterFab a.nectar-button span").textContent = "Close";
		document.querySelector("#directoryFilterFab a.nectar-button i").classList.add("fa-times"); /* x icon */
		document.querySelector("#directoryFilterFab a.nectar-button i").classList.remove("fa-filter"); /* filter icon */
	} // end if
} // end function




///////////// DIRECTORY AJAX DETECTION /////////



function sfAjaxStarted () {
	// Actions for when S&F search has started
	// ex. When the results content opacity is reduced
	//console.log("ajax start");
}

function sfAjaxFinished () {
	// Actions for when S&F search has ended
	// ex. When the results content opacity returns to 100%
	//console.log("ajax complete");
}


jQuery(document).ready(function($){
// From https://searchandfilter.com/documentation/faq/

//detects the start of an ajax request being made
$(document).on("sf:ajaxstart", ".searchandfilter", function(){
	sfAjaxStarted();
});

//detects when the ajax request has finished and the content has been updated
// - add scripts that apply to your results here
$(document).on("sf:ajaxfinish", ".searchandfilter", function(){
	sfAjaxFinished();
});

//an event fired when S&F is initialised and S&F scripts have been loaded
$(document).on("sf:init", ".searchandfilter", function(){
	console.log("S&F JS initialised");
});

//depending on where you add your JS, sometimes its necessary to wrap the above events in a function (as is standard practice):
(function ( $ ) {
	"use strict";
	
	$(document).on("sf:init", ".searchandfilter", function(){
		console.log("S&F JS initialised");
	});
}(jQuery));

});


///////////// END DIRECTORY AJAX DETECTION ////////////////

