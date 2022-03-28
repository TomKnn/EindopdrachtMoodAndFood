import axios from 'axios';
console.log("Hoera, hij doet het!");

const jezus = document.getElementById("Jzs");
const hitler = document.getElementById("Htlr");
const robot = document.getElementById("Rbt");
const zigeunerKid = document.getElementById("Zkd");

// If (jezus){
//     const result = await axios.get ()
// }



async function fetchImage() {
    try {
        const result = await axios.get('https://api.spoonacular.com/recipes/findByNutrients?minCarbs=10&maxCarbs=50&number=2');
        const recipe = result.data;

        // sorteer de huidige data array op de populatie-property van elk land
        recipe.find((image) => {
            return image;
        });

        // geef de gesorteerde data array mee aan de functie die de elementen op de pagina injecteert
        createImage(recipe);

    } catch (e) {
        console.error(e);
    }
}

fetchImage();

function createImage(recipe) {
    // sla de referentie op naar ons 'anker' element, de <ul> met id country-list
    const imageBox = document.getElementById('kader');

    // OPTIE 1
    createImage().innerHTML = recipe.find((image) => {
        return `
      <li>
        <img src="${image.image}" class="image" />
      </li>
    `;
    }).join('');

    // OPTIE 2 (dit had overigens ook gekunt met een for-loop!)
    // countries.map((country) => {
    //   // maak een li-element aan
    //   const countryElement = document.createElement('li');
    //
    //   // stop er een afbeelding, span en p in
    //   countryElement.innerHTML = `
    //     <img src="${country.flag}" alt="Vlag van ${country.name}" class="flag" />
    //     <span class="${getRegionClass(country.region)}">${country.name}</span>
    //     <p class="population">Has a population of ${country.population} people</p>
    //   `;
    //
    //   // voeg het list-element toe aan het ul-element
    //   countryList.appendChild(countryElement);
    // });
}