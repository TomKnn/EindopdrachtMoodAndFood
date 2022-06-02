import axios from 'axios';
import recipeArray from "./getRecipeByPreference";




// async function getRecipeByCard() {
//     try {
//         const result = await axios.get(`https://api.spoonacular.com/recipes/716426/card?apiKey=c8b8bc2e8c04457083d6d5ed821d386e`, {
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//         const recipe = result.data;
//
//         const image = document.createElement('p')
//         // const title = document.createElement('h3')
//
//         //title.innerHTML =  `<h3>${recipe.results[5].title}</h3>`
//         image.innerHTML = `
//     <img class="test" src="${recipe.url}"/>
//     `
//         // // container.appendChild(title)
//         container.appendChild(image)
//
//     } catch (e) {
//         console.error(e);
//     }
// }
// export default getRecipeByCard;

