// Exercise 2

let myScores = [97, 97, 98, 92, 100, 99, 96];
let yourScores = [81, 82, 82, 84, 85, 72, 71];

function getAverage(scores){
    let sum = 0;
    
 for (let i = 0; i < scores.length; i++){
    sum += scores[i];
 
}
    let avg = sum / scores.length;
    console.log(avg.toFixed(2));
}

getAverage(myScores);
getAverage(yourScores);
