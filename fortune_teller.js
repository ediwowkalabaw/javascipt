// initialize the five variables 
const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It would be wise to avoid the color red today.";

//select a random number between 1 and 5
const randomNumber = Math.floor(Math.random() * 5) + 1;

let selectedFortune; 
//use a if statement to assign the fortune based on the random number
if (randomNumber === 1){
    selectedFortune = fortune1;
}
if (randomNumber === 2){
    selectedFortune = fortune2;
}   
if (randomNumber === 3){       
    selectedFortune = fortune3;
}
if (randomNumber === 4){
    selectedFortune = fortune4;
}
if (randomNumber === 5){
    selectedFortune = fortune5;
}

//log the selectedFortune to the console
console.log(selectedFortune);