const lunches = [];

//add to the end
function addLunchToEnd(arr, str){
    arr.push(str);
    console.log(`${str} added to the end of the lunch menu.`);
    return arr;
}

//add to the start
function addLunchToStart(arr1, str1){
    arr1.unshift(str1);
    console.log(`${str1} added to the start of the lunch menu.`);
    return arr1;
}

//remove from the end
function removeLastLunch(arr2){
    if (arr2.length === 0) {
        console.log("No lunches to remove.");
    }else{
        console.log(`${arr2.pop()} removed from the end of the lunch menu.`);
    }
    return arr2;
}

//remove from the start
function removeFirstLunch(arr3){
    if (arr3.length === 0) {
        console.log("No lunches to remove.");
    }else{
        console.log(`${arr3.shift()} removed from the start of the lunch menu.`);
    }
    return arr3;
}

//random lunch picker
function getRandomLunch(arr4){
    if (arr4.length === 0) {
        console.log("No lunches available.");
    }else{
        console.log(`Randomly selected lunch: ${arr4 [Math.floor(Math.random() *arr4.length)]}`);
    }
}

//show menu
function showLunchMenu(arr5){
    if (arr5.length === 0) {
        console.log("The menu is empty.");
    }else{
        console.log(`Menu items: ${arr5.join(", ")}`);    
    }
}