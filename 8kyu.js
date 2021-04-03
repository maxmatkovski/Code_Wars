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

/////////////////////////////////////////////////////////////////////////////////////

// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

function reverseSeq (n) {

    let array = [];

    for (n; n >= 1; n--){
      array.push(n)
    }
    return array;

  };

/////////////////////////////////////////////////////////////////////////////////////


//https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
// Solution works but doesn't pass all the tests. There's a better way to do it, but still good job
function descendingOrder(num){

    let nums = [];
    while(num){
        const last = num % 10;
        nums.unshift(last);
        num = Math.floor(num / 10);
    }

    nums.sort().reverse();

    let number = "";
    for (let i = 0; i < nums.length; i++){
        number = `${number}${nums[i]}`;
    }
    return number;
};



function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''));
}
  /////////////////////////////////////////////////////////////////////////////////////

// https://www.codewars.com/kata/554b4ac871d6813a03000035/solutions/javascript

function highAndLow(numberList) {
  const arr = numberList.split(" ").sort(function (a, b) {
    return a - b;
  });
  return `${arr[arr.length - 1]} ${arr[0]}`;
}

/////////////////////////////////////////////////////////////////////////////////////

// codewars.com/kata/572059afc2f4612825000d8a/solutions/javascript

function howManydays(month){
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        days = 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        days = 30;
        break;
      case 2:
        days = 28;
        break;
    }
    return days;
  }

/////////////////////////////////////////////////////////////////////////////////////


