function randomGenerator(tipArray) {
    let tipNum = tipArray.length - 1;
    let num = Math.round(Math.random() * tipNum);
    return tipArray[num];
}
  
let tips = [

]