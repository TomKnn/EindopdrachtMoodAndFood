////////////////////////////////// NAVIGATE ENTRIES FROM HERE //////////////////////////////////
// IMPORT recipe Array
import {recipeByPreferenceResults} from "./javascript/fetchApiData/getRecipeByPreference";
import axios from "axios";

(async()=>{
    const recipeArray = await recipeByPreferenceResults;
    console.log(recipeArray);
})();
// Provided array

// import getRecipeByCard

// zet de standaard waarde op 0 om zeker te zijn dat currentItem de eerste waarde van de array is
let defaultIndex = recipeArray[0];

// zet currentIndex op defaultIndex zodat currentIndex vanaf 0 begint te tellen
let currentIndex = defaultIndex;

// creëer referentie naar HTML element, zodat deze in de DOM geïnjecteerd kan worden
const currentItem = document.getElementById( "current-item" );

// Injecteer de standaard index in de lijst en in de DOM
//currentItem.innerText = `${ recipeArray[defaultIndex] }`;

// Deze functie verandert de currentIndex naar gelang de richting die geselecteerd wordt door een klik op de volgende/volgende button:
//      - VORIGE verlaagt de waarde van currentIndex met -1
//      - VOLGENDE verhoogt de waarde van currentIndex met +1

async function getRecipeByCard(currentIndex) {
    try {
        const result = await axios.get(`https://api.spoonacular.com/recipes/${currentIndex}/card?apiKey=c8b8bc2e8c04457083d6d5ed821d386e`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        const recipe = result.data;

        const image = document.createElement('p')
        // const title = document.createElement('h3')

        //title.innerHTML =  `<h3>${recipe.results[5].title}</h3>`
        currentItem.innerHTML = `
    <img class="test" src="${recipe.url}"/>
    `
        // // container.appendChild(title)
        container.appendChild(image)

    } catch (e) {
        console.error(e);
    }
}

function adjustCurrentIndex(direction) {
    // Verlaag currentIndex met 1 als direction (richting) is VORIGE
    if ( direction === "previous" ) {
        getRecipeByCard(currentIndex -=1)
        // currentIndex -= 1;
    }
    // Verhoog currentIndex met 1 als direction is VOLGENDE
    if ( direction === "next" ) {
        getRecipeByCard(currentIndex +=1)
        // currentIndex += 1;
    }
    // Creëer attribuut 'disabled' (uitgeschakeld) als currentIndex 0 is of lager
    if ( currentIndex <= 0 ) {
        buttonPrevious.setAttribute( "disabled", true );
    }
    // Creëer attribuut 'disabled'(uitgeschakeld) op VORIGE button als currentIndex boven 0 is
    if ( currentIndex > 0 ) {
        buttonPrevious.removeAttribute( "disabled", true );
    }
    // Creëer attribuut 'disabled'(uitgeschakeld) op VOLGENDE button als currentIndex 0 is of lager
    if ( currentIndex >= array.length - 1 ) {
        buttonNext.setAttribute( "disabled", true );
    }
    // Verwijder attribuut 'disabled' op de VOLGENDE button als de currentIndex op het einde van de array is
    if ( currentIndex < array.length - 1 ) {
        buttonNext.removeAttribute( "disabled", true );
    }

    // Pas de currentIndex aan de nieuwe waarde
    currentItem.innerText = `${ array[currentIndex] }`;

}

// Creëer een referentie naar het HTML element, zodat de VORIGE button uitgevoerd kan worden met een klik
const buttonPrevious = document.getElementById( "btn-previous" );

// Event listener welke de 'adjustCurrentIndex' function uitvoert als op de VORIGE button wordt geklikt
buttonPrevious.addEventListener( "click", ( e ) => {

    // Voorkom dat het formulier wordt ververst voordat het wordt ingediend
    e.preventDefault();

    // Functie wordt uitgevoerd en gezet op VORIGE
    adjustCurrentIndex( "previous" );

} );

// Schakel de VORIGE button als standaard
buttonPrevious.setAttribute( "disabled", true );

// Creëer een referentie naar het HTML element, zodat de VOLGENDE button uitgevoerd kan worden met een klik
const buttonNext = document.getElementById( "btn-next" );

// Eventlistener die 'adjustCurrentIndex' uitvoert als op de VOLGENDE button wordt geklikt
buttonNext.addEventListener( "click", ( e ) => {

    // Voorkom dat het formulier wordt ververst voordat het wordt ingediend
    e.preventDefault();

    // Functie wordt uitgevoerd en gezet op VOLGENDE
    adjustCurrentIndex( "next" );

} );