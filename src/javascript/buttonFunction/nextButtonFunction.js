////////////////////////////////// NAVIGATE ENTRIES FROM HERE //////////////////////////////////
// IMPORT recipe Array
import {recipeByPreferenceResults} from "./javascript/fetchApiData/getRecipeByPreference";
(async()=>{
    const recipeArray = await recipeByPreferenceResults;
    console.log(recipeArray);
})();
// Provided array

// import getRecipeByCard

// zet de standaard waarde op 0 om zeker te zijn dat currentItem de eerste waarde van de array is
let defaultIndex = 0;

// zet currentIndex op defaultIndex zodat currentIndex vanaf 0 begint te tellen
let currentIndex = defaultIndex;

// creëer referentie naar HTML element, zodat deze in de DOM geïnjecteerd kan worden
const currentItem = document.getElementById( "current-item" );

// Inject the default index into the array and inject in the DOM
currentItem.innerText = `${ recipeArray[defaultIndex] }`;

// Function adjusts the currentIndex by the direction (will run only on click):
//      - PREVIOUS will decrease the value,
//      - NEXT will increase the value
function adjustCurrentIndex(direction) {
    // Decrease currentIndex with 1 when direction is PREVIOUS
    if ( direction === "previous" ) {
        currentIndex -= 1;
    }
    // Increase currentIndex with 1 when direction is NEXT
    if ( direction === "next" ) {
        currentIndex += 1;
    }
    // Create attribute 'disabled' to PREVIOUS button when currentIndex is 0 or lower
    if ( currentIndex <= 0 ) {
        buttonPrevious.setAttribute( "disabled", true );
    }
    // Remove attribute 'disabled' to PREVIOUS button when currentIndex is above 0
    if ( currentIndex > 0 ) {
        buttonPrevious.removeAttribute( "disabled", true );
    }
    // Create attribute 'disabled' to NEXT button when currentIndex is 0 or lower
    if ( currentIndex >= array.length - 1 ) {
        buttonNext.setAttribute( "disabled", true );
    }
    // Remove attribute 'disabled' to NEXT button when currentIndex is at the end of the array
    if ( currentIndex < array.length - 1 ) {
        buttonNext.removeAttribute( "disabled", true );
    }

    // Adjust currentIndex with the new value
    currentItem.innerText = `${ array[currentIndex] }`;

}

// Create reference to HTML element, so PREVIOUS button can be executed on click
const buttonPrevious = document.getElementById( "btn-previous" );

// Event listener that will execute 'adjustCurrentIndex' function when PREVIOUS button is clicked
buttonPrevious.addEventListener( "click", ( e ) => {

    // Prevent form from being refreshed before submitted
    e.preventDefault();

    // Function will run and direction is set to PREVIOUS
    adjustCurrentIndex( "previous" );

} );

// Disable PREVIOUS button as default
buttonPrevious.setAttribute( "disabled", true );

// Create reference to HTML element, so NEXT button can be executed on click
const buttonNext = document.getElementById( "btn-next" );

// Event listener that will execute 'adjustCurrentIndex' function when NEXT button is clicked
buttonNext.addEventListener( "click", ( e ) => {

    // Prevent form from being refreshed before submitted
    e.preventDefault();

    // Function will run and direction is set to NEXT
    adjustCurrentIndex( "next" );

} );