//https://www.codewars.com/kata/557b5e0bddf29d861400005d/train/javascript

    //code to convert miles per imperial gallon to kilometers per liter

    function converter (mpg) {

      let kilometersPerLiter = mpg * (1.609344) * (1 / 4.54609188);

      return Number(kilometersPerLiter.toFixed(2));

    }

    // (miles / gallon) * (kilometer / miles) * (1 gallon / 1 liter)


/////////////////////////////////////////////////////////////////////////////////////


// Counting Sheep Practice Kata

// https://www.codewars.com/kata/54edbc7200b811e956000556/solutions

let arrayOfSheep = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  false ,
    false, false, true,  true];



function countSheeps (arrayOfSheep){
    let numOfSheep = 0;
    for(let i = 0; i < arrayOfSheep.length; i++){
        if (arrayOfSheep[i] === true){
            numOfSheep++;
            console.log(`There's a sheep in the ${i+1}th position`);
        }
    }  
    return `In total there are ${numOfSheep} sheep`;
}

// Made mistake in for loop initially 

// for(let i = 0; i < arrayOfSheep.length; i++){
//     if (arrayOfSheep[i] === "true"){
//         numOfSheep++;
//     }
// }                    // Values in array are Booleans not strings; therefore, no quotes are necessary


/////////////////////////////////////////////////////////////////////////////////////


// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

const humanYearsCatYearsDogYears = function(humanYears){
    if (humanYears == 1) return [1, 15, 15]
    if (humanYears == 2) return [2, 24, 24]
    return [humanYears, ((humanYears - 2) * 4) + 24, ((humanYears - 2) * 5) + 24]
}
