import axios from "axios";
// string literals voor emoji selectie
const contentEmojiSearch = 'maxCarbs=70';
const timeSearch = '&maxReadyTime=60';
const angryEmojiSearch = 'minCarbs=50&minCalories=50&minMagnesium=50&minSaturatedFat=50';
const neutralEmojiSearch = '';
const sadEmojiSearch = 'minCarbs=50&minCalories=50&minSugar=50&minSaturatedFat=55';
const manicEmojiSearch = 'maxCarbs=50&maxSugar=40&minMagnesium=30';

//string literal voor tijd selectie
const noHurrySearch = 'maxReadyTime=120';
const averageTimeSearch = 'maxReadyTime=30';
const hasteSearch = 'maxReadyTime=15';


//
// contentEmojiChecked.addEventListener('mouseover', test);
// function test (e){
//     e.preventDefault();
//     console.log ('test');
// }
//
// neutralEmojiChecked.addEventListener('mouseover',test);
// function getContentAndNeutralEndpoint(){
//     if (contentEmojiChecked && noHurrySearch) {
//         getRecipeByPreference()
//     }
// }



