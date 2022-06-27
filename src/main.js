// IMPORTEER VARIABELEN
import axios from 'axios';
const container = document.getElementById('result');


// IMPORTEER FUNCTIES EMOJI SELECTIE

// import getHappyAndNeutralEndpoint from ".javascript/emojiSelection/functionHappyAndNeutralEmotion";


// IMPORTEER fetchApiData

// import getRecipeByCard from "./javascript/fetchApiData/getRecipeByCard";



// INJECTEREN CHECKLISTEN BROWSE.HTML

// cuisineChecklist;



// FUNCTIES CHECKLIJSTEN BROWSE.HTML CREËREN

// createCuisineChecklist();


// FUNCTIES AANROEPEN


// Image/checkboxes van click functie voorzien
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

// If statement op de resultaatbutton plaatsen en voor elke combinatie een recipeCard aanroepen en in beeld brengen
const button = document.getElementById('button')
button.addEventListener('click', function(){
  if(jesus.checked === true && chillDude.checked === true){

    async function getRecipeByCard(){
      try {
        const result = await axios.get(`https://api.spoonacular.com/recipes/716426/card?apiKey=d45e55edd78244c0913a0316171a6f71`, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        const recipe = result.data;

        const image = document.createElement('p')

        image.innerHTML = `
        
    <img src="${recipe.url}" class="recipeCard"/>
    
    `

        container.appendChild(image)

      } catch (e) {
        console.error(e);
      }
    }
    getRecipeByCard();

  }
  if(jesus.checked === true && wekker.checked === true){

    async function getRecipeByCard(){
      try {
        const result = await axios.get(`https://api.spoonacular.com/recipes/716408/card?apiKey=b4408aa9ab144e47ae2bf8eff93e72f5`, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        const recipe = result.data;

        const image = document.createElement('p')
        // const title = document.createElement('h3')

        //title.innerHTML =  `<h3>${recipe.results[5].title}</h3>`
        image.innerHTML = `
        
    <img src="${recipe.url}" class="recipeCard"/>
    `
        // // container.appendChild(title)
        container.appendChild(image)

      } catch (e) {
        console.error(e);
      }
    }
    getRecipeByCard();

  }if(jesus.checked === true && timebomb.checked === true){

    async function getRecipeByCard(){
      try {
        const result = await axios.get(`https://api.spoonacular.com/recipes/715495/card?apiKey=b4408aa9ab144e47ae2bf8eff93e72f5`, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        const recipe = result.data;

        const image = document.createElement('p')
        // const title = document.createElement('h3')

        //title.innerHTML =  `<h3>${recipe.results[5].title}</h3>`
        image.innerHTML = `
        
    <img src="${recipe.url}" class="recipeCard"/>
    `
        // // container.appendChild(title)
        container.appendChild(image)

      } catch (e) {
        console.error(e);
      }
    }
    getRecipeByCard();

  }if(hitler.checked === true && chillDude.checked === true){

    async function getRecipeByCard(){
      try {
        const result = await axios.get(`https://api.spoonacular.com/recipes/640601/card?apiKey=b4408aa9ab144e47ae2bf8eff93e72f5`, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        const recipe = result.data;

        const image = document.createElement('p')
        // const title = document.createElement('h3')

        //title.innerHTML =  `<h3>${recipe.results[5].title}</h3>`
        image.innerHTML = `
        
    <img src="${recipe.url}" class="recipeCard"/>
    `
        // // container.appendChild(title)
        container.appendChild(image)

      } catch (e) {
        console.error(e);
      }
    }
    getRecipeByCard();

  }if(hitler.checked === true && wekker.checked === true){

    async function getRecipeByCard(){
      try {
        const result = await axios.get(`https://api.spoonacular.com/recipes/656819/card?apiKey=b4408aa9ab144e47ae2bf8eff93e72f5`, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        const recipe = result.data;

        const image = document.createElement('p')
        // const title = document.createElement('h3')

        //title.innerHTML =  `<h3>${recipe.results[5].title}</h3>`
        image.innerHTML = `
        
    <img src="${recipe.url}" class="recipeCard"/>
    `
        // // container.appendChild(title)
        container.appendChild(image)

      } catch (e) {
        console.error(e);
      }
    }
    getRecipeByCard();

  }if(hitler.checked === true && timebomb.checked === true){

    async function getRecipeByCard(){
      try {
        const result = await axios.get(`https://api.spoonacular.com/recipes/636326/card?apiKey=b4408aa9ab144e47ae2bf8eff93e72f5`, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        const recipe = result.data;

        const image = document.createElement('p')
        // const title = document.createElement('h3')

        //title.innerHTML =  `<h3>${recipe.results[5].title}</h3>`
        image.innerHTML = `
        
   <img src="${recipe.url}" class="recipeCard"/>
    `
        // // container.appendChild(title)
        container.appendChild(image)

      } catch (e) {
        console.error(e);
      }
    }
    getRecipeByCard();

  }if(robot.checked === true && chillDude.checked === true){

    async function getRecipeByCard(){
      try {
        const result = await axios.get(`https://api.spoonacular.com/recipes/632426/card?apiKey=b4408aa9ab144e47ae2bf8eff93e72f5`, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        const recipe = result.data;

        const image = document.createElement('p')
        // const title = document.createElement('h3')

        //title.innerHTML =  `<h3>${recipe.results[5].title}</h3>`
        image.innerHTML = `
        
    <img src="${recipe.url}" class="recipeCard"/>
    `
        // // container.appendChild(title)
        container.appendChild(image)

      } catch (e) {
        console.error(e);
      }
    }
    getRecipeByCard();

  }if(robot.checked === true && wekker.checked === true){

    async function getRecipeByCard(){
      try {
        const result = await axios.get(`https://api.spoonacular.com/recipes/1697683/card?apiKey=b4408aa9ab144e47ae2bf8eff93e72f5`, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        const recipe = result.data;

        const image = document.createElement('p')
        // const title = document.createElement('h3')

        //title.innerHTML =  `<h3>${recipe.results[5].title}</h3>`
        image.innerHTML = `
        
    <img src="${recipe.url}" class="recipeCard"/>
    `
        // // container.appendChild(title)
        container.appendChild(image)

      } catch (e) {
        console.error(e);
      }
    }
    getRecipeByCard();

  }if(robot.checked === true && timebomb.checked === true){

    async function getRecipeByCard(){
      try {
        const result = await axios.get(`https://api.spoonacular.com/recipes/660525/card?apiKey=b4408aa9ab144e47ae2bf8eff93e72f5`, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        const recipe = result.data;

        const image = document.createElement('p')
        // const title = document.createElement('h3')

        //title.innerHTML =  `<h3>${recipe.results[5].title}</h3>`
        image.innerHTML = `
        
    <img src="${recipe.url}" class="recipeCard"/>
    `
        // // container.appendChild(title)
        container.appendChild(image)

      } catch (e) {
        console.error(e);
      }
    }
    getRecipeByCard();

  }if(gypsyKid.checked === true && chillDude.checked === true){

    async function getRecipeByCard(){
      try {
        const result = await axios.get(`https://api.spoonacular.com/recipes/639203/card?apiKey=b4408aa9ab144e47ae2bf8eff93e72f5`, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        const recipe = result.data;

        const image = document.createElement('p')
        // const title = document.createElement('h3')

        //title.innerHTML =  `<h3>${recipe.results[5].title}</h3>`
        image.innerHTML = `
        
   <img src="${recipe.url}" class="recipeCard"/>
    `
        // // container.appendChild(title)
        container.appendChild(image)

      } catch (e) {
        console.error(e);
      }
    }
    getRecipeByCard();

  }if(gypsyKid.checked === true && wekker.checked === true){

    async function getRecipeByCard(){
      try {
        const result = await axios.get(`https://api.spoonacular.com/recipes/655491/card?apiKey=b4408aa9ab144e47ae2bf8eff93e72f5`, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        const recipe = result.data;

        const image = document.createElement('p')
        // const title = document.createElement('h3')

        //title.innerHTML =  `<h3>${recipe.results[5].title}</h3>`
        image.innerHTML = `
        
    <img src="${recipe.url}" class="recipeCard"/>
    `
        // // container.appendChild(title)
        container.appendChild(image)

      } catch (e) {
        console.error(e);
      }
    }
    getRecipeByCard();

  }if(gypsyKid.checked === true && timebomb.checked === true){

    async function getRecipeByCard(){
      try {
        const result = await axios.get(`https://api.spoonacular.com/recipes/649596/card?apiKey=b4408aa9ab144e47ae2bf8eff93e72f5`, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        const recipe = result.data;

        const image = document.createElement('p')
        // const title = document.createElement('h3')

        //title.innerHTML =  `<h3>${recipe.results[5].title}</h3>`
        image.innerHTML = `
        
   <img src="${recipe.url}" class="recipeCard"/>
    `
        // // container.appendChild(title)
        container.appendChild(image)

      } catch (e) {
        console.error(e);
      }
    }
    getRecipeByCard();

  }if(manic.checked === true && chillDude.checked === true){

    async function getRecipeByCard(){
      try {
        const result = await axios.get(`https://api.spoonacular.com/recipes/644167/card?apiKey=b4408aa9ab144e47ae2bf8eff93e72f5`, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        const recipe = result.data;

        const image = document.createElement('p')
        // const title = document.createElement('h3')

        //title.innerHTML =  `<h3>${recipe.results[5].title}</h3>`
        image.innerHTML = `
        
    <img src="${recipe.url}" class="recipeCard"/>
    `
        // // container.appendChild(title)
        container.appendChild(image)

      } catch (e) {
        console.error(e);
      }
    }
    getRecipeByCard();

  }if(manic.checked === true && wekker.checked === true){

    async function getRecipeByCard(){
      try {
        const result = await axios.get(`https://api.spoonacular.com/recipes/716195/card?apiKey=b4408aa9ab144e47ae2bf8eff93e72f5`, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        const recipe = result.data;

        const image = document.createElement('p')
        // const title = document.createElement('h3')

        //title.innerHTML =  `<h3>${recipe.results[5].title}</h3>`
        image.innerHTML = `
        
    <img src="${recipe.url}" class="recipeCard"/>
    `
        // // container.appendChild(title)
        container.appendChild(image)

      } catch (e) {
        console.error(e);
      }
    }
    getRecipeByCard();

  }if(manic.checked === true && timebomb.checked === true){

    async function getRecipeByCard(){
      try {
        const result = await axios.get(`https://api.spoonacular.com/recipes/644826/card?apiKey=b4408aa9ab144e47ae2bf8eff93e72f5`, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        const recipe = result.data;

        const image = document.createElement('p')
        // const title = document.createElement('h3')

        //title.innerHTML =  `<h3>${recipe.results[5].title}</h3>`
        image.innerHTML = `
        
    <img src="${recipe.url}" class="recipeCard"/>
    `
        // // container.appendChild(title)
        container.appendChild(image)

      } catch (e) {
        console.error(e);
      }
    }
    getRecipeByCard();

  }
  else{
    console.log('niet gelukt')
  }
})
