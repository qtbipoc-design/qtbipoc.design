console.debug('Main Loaded');

const homepageHeroCarouselId = "homepage-hero-carousel";
let carouselItemsToDelete = [];

function updateHomepageHeroCarousel() {
	console.debug("carousel_panel_next_event", carousel_panel_next_event);


	if (carousel_panel_next_event == false) {
	document.querySelectorAll(`#${homepageHeroCarouselId} .flickity-slider .cell`).forEach(function(el, i) {
// 		console.debug("running index", i);
		if (el.contains(document.getElementById("carousel_panel_next_event"))) { 
			console.debug(i, el);
			carouselItemsToDelete.push(i);
		}
	});
	}


	console.debug("Carousel Items to Delete", carouselItemsToDelete);
	
	// Wait to execute code.
	setTimeout(() => {
		let flkty = Flickity.data(`#${homepageHeroCarouselId} .nectar-flickity`);
		
		let flktyCellsOriginalCount = flkty.cells.length;
		console.debug("Homepage Hero Carousel cells count", flktyCellsOriginalCount);
		
		if (carousel_panel_next_event == true) {
			/* Do nothing, keep carousel as it */
		} else if (carousel_panel_next_event == false && flktyCellsOriginalCount > 1) {
			/* If there are no events, but there is at least one special slide/cell, remove the standard event cell only */
		
			// Taken from: https://stackoverflow.com/questions/61687656/flickity-how-can-i-remove-last-cell 
			carouselItemsToDelete.forEach(function(el, i) {
				flkty.remove(flkty.cells[carouselItemsToDelete[i]].element);
			});
		} else {
			/* The only slide was the standard event, and there aren't events coming up, hide entire carousel row */
			document.querySelector(`#${homepageHeroCarouselId}`).style.display = "none";
		}
	}, 1000);
}

document.addEventListener("DOMContentLoaded", function (event) {
  let homepageHeroCarousel = document.querySelector(`#${ homepageHeroCarouselId }`);
  
  if (homepageHeroCarousel && typeof carousel_panel_next_event != "undefined") {
		updateHomepageHeroCarousel();
	}
}); // End content loaded
	