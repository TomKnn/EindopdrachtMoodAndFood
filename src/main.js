// IMPORTEER VARIABELEN
import axios from 'axios';
const container = document.getElementById('result');
import {getRecipeByPreferenceAPI} from "./javascript/fetchApiData/getRecipeByPreference";


getRecipeByPreferenceAPI().then(ids => {
return ids;
  // console.log('IDS', ids);
})
const ids = [];
console.log(ids);

// const recipeIdArray = async function (){
//   const arr = await axios(recipeByPreferenceResults);
//   return arr.data.results.slice(0, 2).map(({id}) => id);
//     console.log(recipeIdArray());
// }

// (async()=> {
//   const arr = await recipeByPreferenceResults;
//   const recipeArray = arr.data.results.slice(0, 2).map(({id}) => id);
//   console.log(recipeArray); })();

// let recipeIdArray;
// (async()=> {
//   const arr = await recipeByPreferenceResults;
//   return recipeIdArray = arr.data.results.slice(0, 2).map(({id}) => id);
//   })();
// console.log(recipeIdArray);




import cuisineChecklist from "./javascript/browseLists/cuisineChecklist";
import intoleranceChecklist from "./javascript/browseLists/intoleranceChecklist";
import inclusiveChecklist from "./javascript/browseLists/inclusiveChecklist";
// import maxReadyTimeChecklist from "./javascript/browseLists/maxReadyTimeChecklist;
import createCuisineChecklist from "./javascript/browseLists/cuisineChecklist";
// import insertFirstImageRow from "./javascript/insertEmojiImages/insertImagesQuestions";


// IMPORTEER FUNCTIES EMOJI SELECTIE

// import getHappyAndNeutralEndpoint from ".javascript/emojiSelection/functionHappyAndNeutralEmotion";


// IMPORTEER fetchApiData

import getRecipeByCard from "./javascript/fetchApiData/getRecipeByCard";
import getRecipeByPreference from "./javascript/fetchApiData/getRecipeByPreference";
import recipeArray from "./javascript/fetchApiData/getRecipeByPreference";
// import createCuisineChecklist from "./javascript/browseLists/cuisineChecklist";


// INJECTEREN CHECKLISTEN BROWSE.HTML

// cuisineChecklist;
// intoleranceChecklist;
// inclusiveChecklist;
// maxReadyTimeChecklist;


// FUNCTIES CHECKLIJSTEN BROWSE.HTML CREËREN

// createCuisineChecklist();


// FUNCTIES AANROEPEN


// getRecipeByCard();
// createRecipeArray();

// console.log(arrayForRecipeCard);

// createCuisineChecklist();

// TIJDELIJKE CODE TRY-OUT


const jesus = document.getElementById('jesus')
jesus.addEventListener('click', function(){
  console.log('test')
})

const hitler = document.getElementById('hitler')
hitler.addEventListener('click', function(){
  console.log('test1')
})

const robot = document.getElementById('robot')
robot.addEventListener('click', function(){
  console.log('test3')
})

const gypsyKid = document.getElementById('gypsyKid')
gypsyKid.addEventListener('click', function(){
  console.log('test4')
})

const manic = document.getElementById('manic')
manic.addEventListener('click', function(){
  console.log('test5')
})

const chillDude = document.getElementById('chillDude')
chillDude.addEventListener('click',function (){
  console.log('test6')
})

const wekker = document.getElementById('wekker')
wekker.addEventListener('click',function (){
  console.log('test7')
})

const timebomb = document.getElementById('timebomb')
timebomb.addEventListener('click',function (){
  console.log('test8')
})


// const button = document.getElementById('button')
// button.addEventListener('click', function(){})

  // const image = document.createElement('p')
//         const title = document.createElement('h3')
//
//         title.innerHTML =  `<h3>${recipe[0].title}</h3>`
//         image.innerHTML = `<img src="${recipe[0].image}"/>`
//
//          container.appendChild(title)
//         container.appendChild(image)

//   <div className="container">
//     <img src="img_snow.jpg" alt="Snow">
//       <button className="btn">Button</button>
//   </div>

const button = document.getElementById('button')
button.addEventListener('click', function(){
  if(jesus.checked === true && chillDude.checked === true){

    async function getRecipeByPreference(){
      try {
        const result = await axios.get(`https://api.spoonacular.com/recipes/716426/card?apiKey=b4408aa9ab144e47ae2bf8eff93e72f5`, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        const recipe = result.data;

        const image = document.createElement('p')
        // const title = document.createElement('h3')

        //title.innerHTML =  `<h3>${recipe.results[5].title}</h3>`
        image.innerHTML = `
        
    <img src="${recipe.url}"/>
    `
        // // container.appendChild(title)
        container.appendChild(image)

      } catch (e) {
        console.error(e);
      }
    }


    getRecipeByPreference();


  } else{
    console.log('niet gelukt')
  }
})
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_popup
// <div class="popup" onclick="myFunction()">Click me!
// <span class="popuptext" id="myPopup">Popup text...</span>
// </div>
//
//     Example
//         /* Popup container */
//         .popup {
//   position: relative;
//   display: inline-block;
//   cursor: pointer;
// }
//
// /* The actual popup (appears on top) */
// .popup .popuptext {
//   visibility: hidden;
//   width: 160px;
//   background-color: #555;
//   color: #fff;
//   text-align: center;
//   border-radius: 6px;
//   padding: 8px 0;
//   position: absolute;
//   z-index: 1;
//   bottom: 125%;
//   left: 50%;
//   margin-left: -80px;
// }






