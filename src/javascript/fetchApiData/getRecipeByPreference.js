import axios from 'axios';
// voorbeeld url: https://api.spoonacular.com/recipes/complexSearch?number=5&apiKey=c8b8bc2e8c04457083d6d5ed821d386e
// const angryEmojiSeach = https://api.spoonacular.com/recipes/findByNutrients?minCarbs=50&minCalories=50&minMagnesium=50&minSaturatedFat=50
// const neutralEmojiSearch = https://api.spoonacular.com/recipes/findByNutrients?
// const sadEmojiSearch = https://api.spoonacular.com/recipes/findByNutrients?minCarbs=50&minCalories=50&minSugar=50&minSaturatedFat=55
// const manicEmojiSearch = https://api.spoonacular.com/recipes/findByNutrients?maxCarbs=50&maxSugar=40&minMagnesium=30



export const getRecipeByPreferenceAPI = async () => {
    const res = await axios.get('https://api.spoonacular.com/recipes/complexSearch?number=2&apiKey=b4408aa9ab144e47ae2bf8eff93e72f5', {
        headers: {
            "Content-Type": "application/json"
        }});
        const ids = res.data.results.map(({id}) => id);
        return ids;
    // return axios.get('https://api.spoonacular.com/recipes/complexSearch?number=2&apiKey=b4408aa9ab144e47ae2bf8eff93e72f5', {
    //     headers: {
    //         "Content-Type": "application/json"

    //     }})
        // return results.data.results.slice(0, 2).map(({id}) => id);

}

// export const recipeByPreferenceResults = getRecipeByPreference();

// API PROBEERSEL RUSSIN
// fetch("https://api.spoonacular.com/recipes/complexSearch?number=2&apiKey=b4408aa9ab144e47ae2bf8eff93e72f5")
//     .then((response) => response.json())
//     .then((recipeArray) => {
//         console.log(recipeArray)
//     });

// const array = () => {
//     user.then((a) => {
//         console.log(a);
//     });
// };
// console.log(array());




// WERKENDE TEST API-FETCH
// let recipeArray = async function getRecipeByPreference(){
//     try { const results = await axios.get ('https://api.spoonacular.com/recipes/complexSearch?number=2&apiKey=b4408aa9ab144e47ae2bf8eff93e72f5',{
//         headers:{
//             "Content-Type": "application/json"
//         }
//     })
//         // const resultsSelection = results.data.results.slice(0,5);
//
//
//         return recipeArray = results.data.results.slice(0, 2).map(({id}) => id);
//
//     } catch (e) {
//         console.error(e);
//     }
// }
// console.log(recipeArray());



// VANAF HIER API FETCH PER EMOJI COMBINATIE
// haal resultaten op voor contentEmoji en noHurryEmoji selectie
// async function getRecipesForContentEmojiAndNoHurry(){
//     try { const results = await axios.get (`https://api.spoonacular.com/recipes/complexSearch?${contentEmojiSearch,noHurrySearch}number=5&apiKey=c8b8bc2e8c04457083d6d5ed821d386e`,{
//         headers:{
//             "Content-Type": "application/json"
//         }
//     })
//         return results.data.results.slice(0, 5).map(({id}) => id);
//
//     } catch (e) {
//         console.error(e);
//     }
// }
//
// async function getRecipesForContentEmojiAndAverageTime(){
//     try { const results = await axios.get (`https://api.spoonacular.com/recipes/complexSearch?${contentEmojiSeach,averageTimeSearch}number=5&apiKey=c8b8bc2e8c04457083d6d5ed821d386e`,{
//         headers:{
//             "Content-Type": "application/json"
//         }
//     })
//         return results.data.results.slice(0, 5).map(({id}) => id);
//
//     } catch (e) {
//         console.error(e);
//     }
// }
//
// async function getRecipesForContentEmojiAndHaste(){
//     try { const results = await axios.get (`https://api.spoonacular.com/recipes/complexSearch?${contentEmojiSeach,hasteSearch}number=5&apiKey=c8b8bc2e8c04457083d6d5ed821d386e`,{
//         headers:{
//             "Content-Type": "application/json"
//         }
//     })
//         return results.data.results.slice(0, 5).map(({id}) => id);
//
//     } catch (e) {
//         console.error(e);
//     }
// }
//
// async function getRecipesForAngryEmojiAndNoHurry(){
//     try { const results = await axios.get (`https://api.spoonacular.com/recipes/complexSearch?${angryEmojiSeach,noHurrySearch}number=5&apiKey=c8b8bc2e8c04457083d6d5ed821d386e`,{
//         headers:{
//             "Content-Type": "application/json"
//         }
//     })
//         return results.data.results.slice(0, 5).map(({id}) => id);
//
//     } catch (e) {
//         console.error(e);
//     }
// }
// async function getRecipesForAngryEmojiAndAverageTime(){
//     try { const results = await axios.get (`https://api.spoonacular.com/recipes/complexSearch?${angryEmojiSeach,averageTimeSearch}number=5&apiKey=c8b8bc2e8c04457083d6d5ed821d386e`,{
//         headers:{
//             "Content-Type": "application/json"
//         }
//     })
//         return results.data.results.slice(0, 5).map(({id}) => id);
//
//     } catch (e) {
//         console.error(e);
//     }
// }
//
// async function getRecipesForAngryEmojiAndHaste(){
//     try { const results = await axios.get (`https://api.spoonacular.com/recipes/complexSearch?${angryEmojiSeach,hasteSearch}number=5&apiKey=c8b8bc2e8c04457083d6d5ed821d386e`,{
//         headers:{
//             "Content-Type": "application/json"
//         }
//     })
//         return results.data.results.slice(0, 5).map(({id}) => id);
//
//     } catch (e) {
//         console.error(e);
//     }
// }
// async function getRecipesForNeutralEmojiAndNoHurry(){
//     try { const results = await axios.get (`https://api.spoonacular.com/recipes/complexSearch?${neutralEmojiSeach,noHurrySearch}number=5&apiKey=c8b8bc2e8c04457083d6d5ed821d386e`,{
//         headers:{
//             "Content-Type": "application/json"
//         }
//     })
//         return results.data.results.slice(0, 5).map(({id}) => id);
//
//     } catch (e) {
//         console.error(e);
//     }
// }
// async function getRecipesForNeutralEmojiAndAverageTime(){
//     try { const results = await axios.get (`https://api.spoonacular.com/recipes/complexSearch?${neutralEmojiSeach,averageTimeSearch}number=5&apiKey=c8b8bc2e8c04457083d6d5ed821d386e`,{
//         headers:{
//             "Content-Type": "application/json"
//         }
//     })
//         return results.data.results.slice(0, 5).map(({id}) => id);
//
//     } catch (e) {
//         console.error(e);
//     }
// }
//
// async function getRecipesForNeutralEmojiAndHaste(){
//     try { const results = await axios.get (`https://api.spoonacular.com/recipes/complexSearch?${neutralEmojiSeach,hasteSearch}number=5&apiKey=c8b8bc2e8c04457083d6d5ed821d386e`,{
//         headers:{
//             "Content-Type": "application/json"
//         }
//     })
//         return results.data.results.slice(0, 5).map(({id}) => id);
//
//     } catch (e) {
//         console.error(e);
//     }
// }
// async function getRecipesForSadEmojiAndNoHurry(){
//     try { const results = await axios.get (`https://api.spoonacular.com/recipes/complexSearch?${sadEmojiSeach,noHurrySearch}number=5&apiKey=c8b8bc2e8c04457083d6d5ed821d386e`,{
//         headers:{
//             "Content-Type": "application/json"
//         }
//     })
//         return results.data.results.slice(0, 5).map(({id}) => id);
//
//     } catch (e) {
//         console.error(e);
//     }
// }
// async function getRecipesForSadEmojiAndAverageTime(){
//     try { const results = await axios.get (`https://api.spoonacular.com/recipes/complexSearch?${sadEmojiSeach,averageTimeSearch}number=5&apiKey=c8b8bc2e8c04457083d6d5ed821d386e`,{
//         headers:{
//             "Content-Type": "application/json"
//         }
//     })
//         return results.data.results.slice(0, 5).map(({id}) => id);
//
//     } catch (e) {
//         console.error(e);
//     }
// }
//
// async function getRecipesForSadEmojiAndHaste(){
//     try { const results = await axios.get (`https://api.spoonacular.com/recipes/complexSearch?${SadEmojiSeach,hasteSearch}number=5&apiKey=c8b8bc2e8c04457083d6d5ed821d386e`,{
//         headers:{
//             "Content-Type": "application/json"
//         }
//     })
//         return results.data.results.slice(0, 5).map(({id}) => id);
//
//     } catch (e) {
//         console.error(e);
//     }
// }
//
// async function getRecipesForManicEmojiAndNoHurry(){
//     try { const results = await axios.get (`https://api.spoonacular.com/recipes/complexSearch?${manicEmojiSeach,noHurrySearch}number=5&apiKey=c8b8bc2e8c04457083d6d5ed821d386e`,{
//         headers:{
//             "Content-Type": "application/json"
//         }
//     })
//         return results.data.results.slice(0, 5).map(({id}) => id);
//
//     } catch (e) {
//         console.error(e);
//     }
// }
// async function getRecipesForManicEmojiAndAverageTime(){
//     try { const results = await axios.get (`https://api.spoonacular.com/recipes/complexSearch?${manicEmojiSeach,averageTimeSearch}number=5&apiKey=c8b8bc2e8c04457083d6d5ed821d386e`,{
//         headers:{
//             "Content-Type": "application/json"
//         }
//     })
//         return results.data.results.slice(0, 5).map(({id}) => id);
//
//     } catch (e) {
//         console.error(e);
//     }
// }
//
// async function getRecipesForManicEmojiAndHaste(){
//     try { const results = await axios.get (`https://api.spoonacular.com/recipes/complexSearch?${manicEmojiSeach,hasteSearch}number=5&apiKey=c8b8bc2e8c04457083d6d5ed821d386e`,{
//         headers:{
//             "Content-Type": "application/json"
//         }
//     })
//         return results.data.results.slice(0, 5).map(({id}) => id);
//
//     } catch (e) {
//         console.error(e);
//     }
// }
// export default {getRecipesForContentEmojiAndNoHurry,getRecipesForContentEmojiAndAverageTime,getRecipesForContentEmojiAndHaste,getRecipesForAngryEmojiAndNoHurry,getRecipesForAngryEmojiAndAverageTime,getRecipesForAngryEmojiAndHaste,getRecipesForNeutralEmojiAndNoHurry,getRecipesForNeutralEmojiAndAverageTime,getRecipesForNeutralEmojiAndHaste,getRecipesForSadEmojiAndNoHurry,getRecipesForSadEmojiAndAverageTime,getRecipesForSadEmojiAndHaste,getRecipesForManicEmojiAndNoHurry,getRecipesForManicEmojiAndAverageTime,getRecipesForManicEmojiAndHaste}